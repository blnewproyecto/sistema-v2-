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
let comandaActualId = Date.now();

document.addEventListener('DOMContentLoaded', () => {
  renderizarProductos();
  actualizarCarritoUI();
  actualizarUIComandasPendientes();
  renderizarCorteCaja();

  // Asignar Eventos a Botones Principales
  document.getElementById('tabBtnPos').addEventListener('click', (e) => cambiarPestana('pos', e.target));
  document.getElementById('tabBtnInv').addEventListener('click', (e) => cambiarPestana('inventario', e.target));
  document.getElementById('tabBtnCorte').addEventListener('click', (e) => cambiarPestana('corte', e.target));

  document.getElementById('btnGuardarComanda').addEventListener('click', guardarComandaPendiente);
  document.getElementById('btnPagoEfectivo').addEventListener('click', () => finalizarCobro('Efectivo'));
  document.getElementById('btnPagoTarjeta').addEventListener('click', () => finalizarCobro('Tarjeta'));

  document.getElementById('btnVerComandas').addEventListener('click', abrirModalComandas);
  document.getElementById('btnCerrarModalComandas').addEventListener('click', cerrarModalComandas);
});

function cambiarPestana(idPestana, elementoBtn) {
  document.querySelectorAll('.seccion').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));

  document.getElementById(`tab-${idPestana}`).classList.add('active');
  if (elementoBtn) elementoBtn.classList.add('active');

  if (idPestana === 'corte') {
    renderizarCorteCaja();
  }
}

function renderizarProductos() {
  const grid = document.getElementById('gridProductos');
  if (!grid) return;

  grid.innerHTML = productos.map(p => `
    <div class="card-producto" data-id="${p.id}">
      <strong>${p.nombre}</strong>
      <span>$${p.precio}</span>
    </div>
  `).join('');

  grid.querySelectorAll('.card-producto').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      agregarAlCarrito(id);
    });
  });
}

function agregarAlCarrito(id) {
  const prod = productos.find(p => p.id === id);
  const lecheSelect = document.getElementById('selectLeche');
  const tipoLeche = lecheSelect ? lecheSelect.value : 'Entera';
  let extraLeche = (tipoLeche === 'Avena' || tipoLeche === 'Almendra') ? 10 : 0;

  carrito.push({
    idUnico: Date.now() + Math.random(),
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
    lista.innerHTML = '<p style="color:#94a3b8; text-align:center; margin-top:20px;">No hay ítems en la comanda</p>';
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
        <button class="btn-eliminar" data-id="${item.idUnico}">✕</button>
      </div>
    </div>
  `).join('');

  lista.querySelectorAll('.btn-eliminar').forEach(btn => {
    btn.addEventListener('click', () => {
      const idUnico = parseFloat(btn.getAttribute('data-id'));
      eliminarDelCarrito(idUnico);
    });
  });

  totalTxt.innerText = `$${total.toFixed(2)}`;
}

// GUARDAR COMANDA PENDIENTE
function guardarComandaPendiente() {
  if (carrito.length === 0) {
    alert("Agrega productos a la comanda antes de guardarla.");
    return;
  }

  let comandas = JSON.parse(localStorage.getItem('comandasPendientes')) || [];
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  const idx = comandas.findIndex(c => c.id === comandaActualId);

  const datosComanda = {
    id: comandaActualId,
    hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    items: [...carrito],
    total: total
  };

  if (idx >= 0) {
    comandas[idx] = datosComanda;
  } else {
    comandas.push(datosComanda);
  }

  localStorage.setItem('comandasPendientes', JSON.stringify(comandas));

  carrito = [];
  comandaActualId = Date.now();
  actualizarCarritoUI();
  actualizarUIComandasPendientes();
  alert("☁️ Comanda guardada en pendientes.");
}

function actualizarUIComandasPendientes() {
  let comandas = JSON.parse(localStorage.getItem('comandasPendientes')) || [];
  const badge = document.getElementById('badgeComandasCount');
  if (badge) badge.innerText = comandas.length;
}

function abrirModalComandas() {
  const modal = document.getElementById('modalComandas');
  const contenedor = document.getElementById('listaComandasModal');
  let comandas = JSON.parse(localStorage.getItem('comandasPendientes')) || [];

  if (comandas.length === 0) {
    contenedor.innerHTML = '<p style="color:#64748b; text-align:center;">No hay comandas pendientes.</p>';
  } else {
    contenedor.innerHTML = comandas.map((c, index) => `
      <div class="card-comanda-item">
        <div>
          <strong>Orden #${index + 1}</strong> <small>(${c.hora})</small><br>
          <small>${c.items.map(i => i.nombre).join(', ')}</small><br>
          <strong style="color:#16a34a;">Total: $${c.total.toFixed(2)}</strong>
        </div>
        <button class="btn-cargar-comanda" data-id="${c.id}">Cobrar / Editar</button>
      </div>
    `).join('');

    contenedor.querySelectorAll('.btn-cargar-comanda').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseFloat(btn.getAttribute('data-id'));
        cargarComanda(id);
      });
    });
  }

  modal.classList.add('active');
}

function cerrarModalComandas() {
  document.getElementById('modalComandas').classList.remove('active');
}

function cargarComanda(id) {
  let comandas = JSON.parse(localStorage.getItem('comandasPendientes')) || [];
  const comanda = comandas.find(c => c.id === id);

  if (comanda) {
    carrito = [...comanda.items];
    comandaActualId = comanda.id;
    actualizarCarritoUI();
    cerrarModalComandas();
  }
}

// PROCESO DE COBRO Y CORTE DE CAJA
function finalizarCobro(metodoPago) {
  if (carrito.length === 0) {
    alert("Agrega productos a la comanda para poder cobrar.");
    return;
  }

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  // 1. Guardar Venta en el Historial del Corte de Caja
  const historialVentas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  historialVentas.push({
    id: Date.now(),
    hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    items: [...carrito],
    total: total,
    metodo: metodoPago
  });
  localStorage.setItem('ventasDiarias', JSON.stringify(historialVentas));

  // 2. Si venía de las pendientes, borrarla de allí
  let comandas = JSON.parse(localStorage.getItem('comandasPendientes')) || [];
  comandas = comandas.filter(c => c.id !== comandaActualId);
  localStorage.setItem('comandasPendientes', JSON.stringify(comandas));

  // 3. Imprimir Ticket
  imprimirTicket(carrito, total, metodoPago);

  // 4. Limpiar pantalla para la siguiente orden
  carrito = [];
  comandaActualId = Date.now();
  actualizarCarritoUI();
  actualizarUIComandasPendientes();
  renderizarCorteCaja();
}

function renderizarCorteCaja() {
  const contenedorCorte = document.getElementById('tab-corte');
  if (!contenedorCorte) return;

  const ventas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  
  let totalEfectivo = 0;
  let totalTarjeta = 0;

  ventas.forEach(v => {
    if (v.metodo === 'Tarjeta') {
      totalTarjeta += v.total;
    } else {
      totalEfectivo += v.total;
    }
  });

  const totalGeneral = totalEfectivo + totalTarjeta;

  contenedorCorte.innerHTML = `
    <h2>Corte de Caja Diario</h2>
    
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:15px;">
      <div style="background:#fff; padding:15px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.1); border-left:5px solid #16a34a;">
        <span style="color:#64748b; font-size:14px;">Total en Efectivo</span>
        <h3 style="color:#16a34a; font-size:22px;">$${totalEfectivo.toFixed(2)}</h3>
      </div>
      
      <div style="background:#fff; padding:15px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.1); border-left:5px solid #2563eb;">
        <span style="color:#64748b; font-size:14px;">Total en Tarjeta</span>
        <h3 style="color:#2563eb; font-size:22px;">$${totalTarjeta.toFixed(2)}</h3>
      </div>

      <div style="background:#fff; padding:15px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.1); border-left:5px solid #0284c7;">
        <span style="color:#64748b; font-size:14px;">Total Acumulado</span>
        <h3 style="color:#0284c7; font-size:22px;">$${totalGeneral.toFixed(2)}</h3>
      </div>
    </div>

    <h3 style="margin-top:25px; margin-bottom:10px;">Historial de Órdenes Cobradas</h3>
    <div style="background:#fff; border-radius:8px; padding:15px; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      ${ventas.length === 0 ? '<p style="color:#64748b;">No hay ventas registradas hoy.</p>' : ''}
      ${ventas.slice().reverse().map((v, i) => `
        <div style="border-bottom:1px solid #f1f5f9; padding:10px 0; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong>Venta #${ventas.length - i}</strong> 
            <small style="color:#64748b;">(${v.hora}) - [${v.metodo}]</small><br>
            <small style="color:#475569;">${v.items.map(it => it.nombre).join(', ')}</small>
          </div>
          <strong style="color:#16a34a; font-size:16px;">$${v.total.toFixed(2)}</strong>
        </div>
      `).join('')}
    </div>
  `;
}

function imprimirTicket(items, total, metodo) {
  const ventana = window.open('', '', 'width=320,height=550');
  ventana.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: 'Courier New', Courier, monospace; width: 58mm; padding: 5px; margin: 0; font-size: 13px; color: #000; }
          .centro { text-align: center; }
          .linea { border-bottom: 1px dashed #000; margin: 8px 0; }
          .flex { display: flex; justify-content: space-between; font-weight: bold; }
          .total-box { font-size: 16px; font-weight: bold; margin-top: 5px; }
          .item-leche { font-size: 11px; margin-left: 8px; color: #333; }
        </style>
      </head>
      <body>
        <div class="centro">
          <strong style="font-size:15px;">CAFETERÍA DE ESPECIALIDAD</strong><br>
          Ticket de Venta<br>
          <small>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</small>
        </div>
        <div class="linea"></div>
        ${items.map(i => `
          <div class="flex"><span>${i.nombre}</span><span>$${i.precio.toFixed(2)}</span></div>
          <div class="item-leche">• Leche: ${i.leche}</div>
        `).join('')}
        <div class="linea"></div>
        <div class="flex total-box">
          <span>TOTAL:</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <div class="linea"></div>
        <div class="centro">
          Pago: <strong>${metodo}</strong><br><br>
          ¡Gracias por tu compra!
        </div>
        <script>
          window.onload = function() { window.print(); window.close(); }
        </script>
      </body>
    </html>
  `);
  ventana.document.close();
}
