// Catálogo de Bebidas Reales
const productos = [
  { id: 1, nombre: 'Espresso', precio: 35 },
  { id: 2, nombre: 'Americano', precio: 45 },
  { id: 3, nombre: 'Cappuccino', precio: 60 },
  { id: 4, nombre: 'Flat White', precio: 65 },
  { id: 5, nombre: 'Latte 12oz', precio: 65 },
  { id: 6, nombre: 'Mocha', precio: 75 },
  { id: 7, nombre: 'Cold Brew', precio: 55 },
  { id: 8, nombre: 'Espresso Tonic', precio: 70 }
];

let carrito = [];

// Cargar estado inicial
document.addEventListener('DOMContentLoaded', () => {
  renderizarProductos();
  renderizarCorteCaja();
});

// Control de Pestañas
function cambiarPestana(idPestana) {
  document.querySelectorAll('.seccion').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));

  document.getElementById(`tab-${idPestana}`).classList.add('active');
  event.target.classList.add('active');

  if (idPestana === 'corte') {
    renderizarCorteCaja();
  }
}

// Cargar menú
function renderizarProductos() {
  const grid = document.getElementById('gridProductos');
  if (!grid) return;
  grid.innerHTML = productos.map(p => `
    <div class="card-producto" onclick="agregarAlCarrito(${p.id})">
      <strong>${p.nombre}</strong>
      <span>$${p.precio}</span>
    </div>
  `).join('');
}

// Carrito
function agregarAlCarrito(id) {
  const prod = productos.find(p => p.id === id);
  const lecheSelect = document.getElementById('selectLeche');
  const tipoLeche = lecheSelect ? lecheSelect.value : 'Entera';
  
  let extraLeche = (tipoLeche === 'Avena' || tipoLeche === 'Almendra') ? 10 : 0;

  carrito.push({
    idUnico: Date.now(),
    nombre: prod.nombre,
    precio: prod.precio + extraLeche,
    leche: tipoLeche
  });

  actualizarCarritoUI();
}

function eliminarDelCarrito(idUnico) {
  carrito = carrito.filter(item => item.idUnico !== idUnico);
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const lista = document.getElementById('listaCarrito');
  const totalTxt = document.getElementById('montoTotal');
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  if (!lista || !totalTxt) return;

  if (carrito.length === 0) {
    lista.innerHTML = '<p style="color:#94a3b8; text-align:center; margin-top:20px;">No hay ítems en la orden</p>';
    totalTxt.innerText = '$0.00';
    return;
  }

  lista.innerHTML = carrito.map(item => `
    <div class="item-carrito">
      <div>
        <strong>${item.nombre}</strong>
        <small>Leche: ${item.leche}</small>
      </div>
      <div>
        <span>$${item.precio}</span>
        <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.idUnico})">✕</button>
      </div>
    </div>
  `).join('');

  totalTxt.innerText = `$${total.toFixed(2)}`;
}

// Guardar Venta y Procesar
function procesarVenta() {
  if (carrito.length === 0) {
    alert("Agrega al menos una bebida a la orden.");
    return;
  }

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  // Registrar venta en historial guardado
  const historialVentas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  const nuevaVenta = {
    hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    items: [...carrito],
    total: total
  };
  
  historialVentas.push(nuevaVenta);
  localStorage.setItem('ventasDiarias', JSON.stringify(historialVentas));

  imprimirTicket(carrito, total);
  
  carrito = [];
  actualizarCarritoUI();
  renderizarCorteCaja();
}

// Dibujar Corte de Caja
function renderizarCorteCaja() {
  const contenedorCorte = document.getElementById('tab-corte');
  if (!contenedorCorte) return;

  const ventas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  const totalAcumulado = ventas.reduce((sum, v) => sum + v.total, 0);

  contenedorCorte.innerHTML = `
    <h2>Corte de Caja Diario</h2>
    <div style="background:#fff; padding:20px; border-radius:8px; margin-top:15px; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      <h3 style="color:#16a34a; font-size:24px; margin-bottom:10px;">
        Ventas Totales: $${totalAcumulado.toFixed(2)}
      </h3>
      <p><strong>Total de Transacciones:</strong> ${ventas.length}</p>
      <button onclick="reiniciarCaja()" style="margin-top:15px; background:#ef4444; color:white; border:none; padding:10px 15px; border-radius:6px; cursor:pointer; font-weight:bold;">
        🗑️ Reiniciar Corte del Día
      </button>
    </div>

    <h3 style="margin-top:25px; margin-bottom:10px;">Historial de Órdenes</h3>
    <div style="background:#fff; border-radius:8px; padding:15px; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      ${ventas.length === 0 ? '<p style="color:#64748b;">No hay ventas registradas hoy.</p>' : ''}
      ${ventas.slice().reverse().map((v, i) => `
        <div style="border-bottom:1px solid #f1f5f9; padding:10px 0; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong>Venta #${ventas.length - i}</strong> <small style="color:#64748b;">(${v.hora})</small><br>
            <small style="color:#475569;">${v.items.map(it => it.nombre).join(', ')}</small>
          </div>
          <strong style="color:#16a34a; font-size:16px;">$${v.total.toFixed(2)}</strong>
        </div>
      `).join('')}
    </div>
  `;
}

function reiniciarCaja() {
  if (confirm("¿Estás seguro de que deseas reiniciar el corte del día a $0.00?")) {
    localStorage.removeItem('ventasDiarias');
    renderizarCorteCaja();
  }
}

// Impresión de Ticket
function imprimirTicket(items, total) {
  const ventana = window.open('', '', 'width=300,height=500');
  ventana.document.write(`
    <html>
      <head>
        <style>
          body { font-family: monospace; width: 58mm; padding: 5px; margin: 0; }
          .centro { text-align: center; }
          .linea { border-bottom: 1px dashed #000; margin: 5px 0; }
          .flex { display: flex; justify-content: space-between; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="centro">
          <strong>CAFETERÍA DE ESPECIALIDAD</strong><br>
          Ticket de Venta
        </div>
        <div class="linea"></div>
        ${items.map(i => `
          <div class="flex"><span>${i.nombre}</span><span>$${i.precio}</span></div>
          <small>• Leche: ${i.leche}</small><br>
        `).join('')}
        <div class="linea"></div>
        <div class="flex">
          <span>TOTAL:</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <div class="linea"></div>
        <div class="centro"><br>¡Gracias por tu compra!</div>
        <script>
          window.onload = function() { window.print(); window.close(); }
        </script>
      </body>
    </html>
  `);
  ventana.document.close();
}
