let carrito = [];
let comandaActualId = Date.now();

function cambiarPestana(idPestana) {
  document.querySelectorAll('.seccion').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));

  document.getElementById(`tab-${idPestana}`).classList.add('active');
  if (event && event.target) event.target.classList.add('active');

  if (idPestana === 'corte') {
    renderizarCorteCaja();
  }
}

function agregarAlCarrito(nombre, precioBase) {
  const lecheSelect = document.getElementById('selectLeche');
  const tipoLeche = lecheSelect ? lecheSelect.value : 'Entera';
  let extraLeche = (tipoLeche === 'Avena' || tipoLeche === 'Almendra') ? 10 : 0;

  carrito.push({
    idUnico: Date.now() + Math.random(),
    nombre: nombre,
    precio: precioBase + extraLeche,
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
        <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.idUnico})">✕</button>
      </div>
    </div>
  `).join('');

  totalTxt.innerText = `$${total.toFixed(2)}`;
}

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
        <button class="btn-cargar-comanda" onclick="cargarComanda(${c.id})">Cobrar / Editar</button>
      </div>
    `).join('');
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

function finalizarCobro(metodoPago) {
  if (carrito.length === 0) {
    alert("Agrega productos a la comanda para poder cobrar.");
    return;
  }

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  const historialVentas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  historialVentas.push({
    id: Date.now(),
    hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    items: [...carrito],
    total: total,
    metodo: metodoPago
  });
  localStorage.setItem('ventasDiarias', JSON.stringify(historialVentas));

  let comandas = JSON.parse(localStorage.getItem('comandasPendientes')) || [];
  comandas = comandas.filter(c => c.id !== comandaActualId);
  localStorage.setItem('comandasPendientes', JSON.stringify(comandas));

  const deseaImprimir = confirm("¿Deseas imprimir el ticket de venta?");
  if (deseaImprimir) {
    imprimirTicket(carrito, total, metodoPago);
  }

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
  const fechaActual = new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  contenedorCorte.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <h2>Corte de Caja Diario</h2>
      <span style="color:#64748b; font-weight:bold;">${fechaActual} - ${horaActual}</span>
    </div>
    
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin-top:15px;">
      <div style="background:#fff; padding:15px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.1); border-left:5px solid #16a34a;">
        <span style="color:#64748b; font-size:14px;">Total en Efectivo</span>
        <h3 style="color:#16a34a; font-size:24px;">$${totalEfectivo.toFixed(2)}</h3>
      </div>
      
      <div style="background:#fff; padding:15px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.1); border-left:5px solid #2563eb;">
        <span style="color:#64748b; font-size:14px;">Total en Tarjeta</span>
        <h3 style="color:#2563eb; font-size:24px;">$${totalTarjeta.toFixed(2)}</h3>
      </div>

      <div style="background:#fff; padding:15px; border-radius:8px; box-shadow:0 1px 3px rgba(0,0,0,0.1); border-left:5px solid #0284c7;">
        <span style="color:#64748b; font-size:14px;">Total Acumulado</span>
        <h3 style="color:#0284c7; font-size:24px;">$${totalGeneral.toFixed(2)}</h3>
      </div>
    </div>

    <button class="btn-cerrar-caja" onclick="cerrarCajaTurno(${totalEfectivo}, ${totalTarjeta}, ${totalGeneral})">🔒 Cerrar Caja y Reiniciar Día</button>

    <h3 style="margin-top:25px; margin-bottom:10px;">Historial de Órdenes del Turno</h3>
    <div style="background:#fff; border-radius:8px; padding:15px; box-shadow:0 1px 3px rgba(0,0,0,0.1);">
      ${ventas.length === 0 ? '<p style="color:#64748b;">No hay ventas registradas en el turno actual.</p>' : ''}
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

function cerrarCajaTurno(efectivo, tarjeta, total) {
  if (total === 0) {
    alert("No hay ventas registradas para realizar el cierre.");
    return;
  }

  const confirmar = confirm(`¿Estás seguro de cerrar la caja?\n\n- Efectivo: $${efectivo.toFixed(2)}\n- Tarjeta: $${tarjeta.toFixed(2)}\n- Total: $${total.toFixed(2)}\n\nEsta acción reiniciará las ventas del día para el siguiente turno.`);
  
  if (confirmar) {
    const historialCortes = JSON.parse(localStorage.getItem('historialCortes')) || [];
    historialCortes.push({
      id: Date.now(),
      fecha: new Date().toLocaleDateString('es-MX'),
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      efectivo: efectivo,
      tarjeta: tarjeta,
      total: total
    });
    
    localStorage.setItem('historialCortes', JSON.stringify(historialCortes));
    localStorage.removeItem('ventasDiarias');

    alert("✅ Caja cerrada con éxito. El sistema ha sido reiniciado para el nuevo turno.");
    renderizarCorteCaja();
  }
}

function imprimirTicket(items, total, metodo) {
  const ventana = window.open('', '', 'width=400,height=600');
  if (!ventana) return;
  
  ventana.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @page { margin: 0; }
          body { 
            font-family: Arial, sans-serif; 
            width: 58mm; 
            padding: 8px 4px; 
            margin: 0 auto; 
            font-size: 14px; 
            color: #000;
            line-height: 1.2;
          }
          .centro { text-align: center; }
          .linea { border-bottom: 1px dashed #000; margin: 6px 0; }
          .flex { display: flex; justify-content: space-between; font-weight: bold; font-size: 14px; }
          .total-box { font-size: 18px; font-weight: bold; margin-top: 4px; }
          .item-leche { font-size: 12px; margin-left: 6px; color: #333; }
          .titulo { font-size: 16px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="centro">
          <div class="titulo">CAFETERÍA ESPECIALIDAD</div>
          <small>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</small>
        </div>
        <div class="linea"></div>
        ${items.map(i => `
          <div class="flex">
            <span>${i.nombre}</span>
            <span>$${i.precio.toFixed(2)}</span>
          </div>
          <div class="item-leche">• Leche: ${i.leche}</div>
        `).join('')}
        <div class="linea"></div>
        <div class="flex total-box">
          <span>TOTAL:</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <div class="linea"></div>
        <div class="centro">
          Método de Pago: <strong>${metodo}</strong><br><br>
          ¡Gracias por tu compra!
        </div>
        <script>
          window.onload = function() { 
            window.print(); 
            window.close(); 
          }
        </script>
      </body>
    </html>
  `);
  ventana.document.close();
}

actualizarCarritoUI();
actualizarUIComandasPendientes();
