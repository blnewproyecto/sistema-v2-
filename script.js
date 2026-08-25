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

document.addEventListener('DOMContentLoaded', () => {
  renderizarProductos();
});

// Control de Pestañas
function cambiarPestana(idPestana) {
  document.querySelectorAll('.seccion').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));

  document.getElementById(`tab-${idPestana}`).classList.add('active');
  event.target.classList.add('active');
}

// Cargar menú
function renderizarProductos() {
  const grid = document.getElementById('gridProductos');
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
  const tipoLeche = lecheSelect.value;
  
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

// Cobro e Impresión de Ticket
function procesarVenta() {
  if (carrito.length === 0) {
    alert("Agrega al menos una bebida a la orden.");
    return;
  }

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  imprimirTicket(carrito, total);
  
  carrito = [];
  actualizarCarritoUI();
}

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
