// Base de datos del Menú Actualizada según las nuevas imágenes
const menuData = {
  calientesCafe: [
    { nombre: "Espresso Sencillo", precio: 35 },
    { nombre: "Doble", precio: 45 },
    { nombre: "Doble Cortado", precio: 50 },
    { nombre: "Flat White", precio: 55 },
    { nombre: "Americano", precio: 47 },
    { nombre: "Americano Frio", precio: 50 },
    { nombre: "Café de Olla", precio: 47 },
    { nombre: "Capuchino o Latte", precio: 65 },
    { nombre: "Capuchino o Latte Frio", precio: 70 },
    { nombre: "Capuchino o Latte Frappe", precio: 75 },
    { nombre: "Moka", precio: 80 },
    { nombre: "Moka Frio", precio: 82 },
    { nombre: "Moka Frappe", precio: 90 },
    { nombre: "Caramel Latte", precio: 80 },
    { nombre: "Caramel Latte Frio", precio: 82 },
    { nombre: "Caramel Latte Frappe", precio: 90 },
    { nombre: "Cajeta Latte Frio", precio: 82 },
    { nombre: "Cajeta Latte", precio: 80 },
    { nombre: "Cajeta Latte Frappe", precio: 90 }
  ],
  calientesSinCafe: [
    { nombre: "Chocolate", precio: 75 },
    { nombre: "Chocolate Frio", precio: 80 },
    { nombre: "Chocolate Frappe", precio: 85 },
    { nombre: "Chai", precio: 75 },
    { nombre: "Chai Frio", precio: 80 },
    { nombre: "Chai Frappe", precio: 85 },
    { nombre: "Matcha", precio: 75 },
    { nombre: "Matcha Frio", precio: 80 },
    { nombre: "Matcha Frappe", precio: 85 },
    { nombre: "Taro", precio: 75 },
    { nombre: "Taro Frio", precio: 80 },
    { nombre: "Taro Frappe", precio: 85 },
    { nombre: "Ferrero", precio: 90 },
    { nombre: "Ferrero Frappe", precio: 95 }
  ],
  calientesEspecialess: [],
  calientesInfusionables: [
    { nombre: "Té (Frambuesa, Menta, Hierbabuena, Negro, Manzanilla, Verde, Jengibre) - Caliente", precio: 45 }
  ],
  friasCafe: [
    { nombre: "Americano Frío", precio: 47 },
    { nombre: "Americano Frappé", precio: 50 },
    { nombre: "Capuchino o Latte Frío", precio: 65 },
    { nombre: "Capuchino o Latte Frappé", precio: 70 },
    { nombre: "Capuchino o Latte (Frappé Especial)", precio: 75 },
    { nombre: "Moka Frío", precio: 80 },
    { nombre: "Moka Frappé (Opción 1)", precio: 82 },
    { nombre: "Moka Frappé (Opción 2)", precio: 90 },
    { nombre: "Caramel Latte Frío", precio: 80 },
    { nombre: "Caramel Latte Frappé (Opción 1)", precio: 82 },
    { nombre: "Caramel Latte Frappé (Opción 2)", precio: 90 },
    { nombre: "Cajeta Latte Frío", precio: 80 },
    { nombre: "Cajeta Latte Frappé (Opción 1)", precio: 82 },
    { nombre: "Cajeta Latte Frappé (Opción 2)", precio: 90 }
  ],
  friasSinCafe: [
    { nombre: "Chocolate Frío", precio: 75 },
    { nombre: "Chocolate Frappé (Opción 1)", precio: 80 },
    { nombre: "Chocolate Frappé (Opción 2)", precio: 85 },
    { nombre: "Chai Frío", precio: 75 },
    { nombre: "Chai Frappé (Opción 1)", precio: 80 },
    { nombre: "Chai Frappé (Opción 2)", precio: 85 },
    { nombre: "Matcha Frío", precio: 75 },
    { nombre: "Matcha Frappé (Opción 1)", precio: 80 },
    { nombre: "Matcha Frappé (Opción 2)", precio: 85 },
    { nombre: "Taro Frío", precio: 75 },
    { nombre: "Taro Frappé (Opción 1)", precio: 80 },
    { nombre: "Taro Frappé (Opción 2)", precio: 85 },
    { nombre: "Ferrero Frío", precio: 90 },
    { nombre: "Ferrero Frappé", precio: 95 }
  ],
  friasRefrescables: [
    { nombre: "Mineral", precio: 40 },
    { nombre: "Mineral Preparada", precio: 60 },
    { nombre: "Limonada / Naranjada", precio: 60 },
    { nombre: "Shaken Tea", precio: 80 },
    { nombre: "Black Orange", precio: 80 },
    { nombre: "Chamoyada Mango", precio: 80 },
    { nombre: "Chamoyada Fresa", precio: 80 },
    { nombre: "Chamoyada Maracuya", precio: 80 },
    { nombre: "Chamoyada Frutos Rojos", precio: 80 },
    { nombre: "Mocktail Frutos Rojos", precio: 85 },
    { nombre: "Mocktail Cereza", precio: 85 },
    { nombre: "Mocktail Fresa", precio: 85 },
    { nombre: "Mocktail Frambuesa", precio: 85 },
    { nombre: "Mocktail Durazno", precio: 85 },
    { nombre: "Mocktail Kiwi", precio: 85 },
    { nombre: "Mocktail Lichi", precio: 85 },
    { nombre: "Malteada Vainilla", precio: 95 },
    { nombre: "Malteada Fresa", precio: 95 },
    { nombre: "Malteada Chocolate", precio: 95 },
    { nombre: "Malteada Oreo", precio: 95 }
  ],
  friasTizanasYTe: [
    { nombre: "Té", precio: 45 },
    { nombre: "Té Frío", precio: 60 },
    { nombre: "Tizana Fresa Kiwi", precio: 75 },
    { nombre: "Tizana Fresa Kiwi Frio", precio: 80 },
    { nombre: "Tizana Fresa Kiwi Frappe", precio: 85 },
    { nombre: "Tizana Maracuyá", precio: 75 },
    { nombre: "Tizana Maracuyá Frio", precio: 80 },
    { nombre: "Tizana Maracuyá Frappe", precio: 85 },
    { nombre: "Tizana Frutos Tropicales", precio: 75 },
    { nombre: "Tizana Frutos Tropicales Frio", precio: 80 },
    { nombre: "Tizana Frutos Tropicales Frappe", precio: 85 },
    { nombre: "Tizana Pasión Frutal", precio: 75 },
    { nombre: "Tizana Pasión Frutal Frio", precio: 80 },
    { nombre: "Tizana Pasión Frutal Frappe", precio: 85 },
    { nombre: "Tizana Dulce Amanecer", precio: 75 },
    { nombre: "Tizana Dulce Amanecer Frio", precio: 80 },
    { nombre: "Tizana Dulce Amanecer Frappe", precio: 85 },
    { nombre: "Tizana Frutos del Bosque", precio: 75 },
    { nombre: "Tizana Frutos del Bosque Frio", precio: 80 },
    { nombre: "Tizana Frutos del Bosque Frappe", precio: 85 }
  ],
  extrasBebidas: [
    { nombre: "Leche vegetal", precio: 12 },
    { nombre: "Carga de café", precio: 15 },
    { nombre: "Chispas", precio: 10 },
    { nombre: "Perlas explosivas", precio: 18 },
    { nombre: "ext. pollo", precio: 10 },
    { nombre: "ext. huevo", precio: 15 },
    { nombre: "ext. helado", precio: 15 }
  ],
  alimentosEnsaladas: [
    { nombre: "Ensalada Sweet", precio: 65 },
    { nombre: "Ensalada Parmesana", precio: 65 },
    { nombre: "Ensalada Chef", precio: 65 }
  ],
  alimentosWrapsYChapatas: [
    { nombre: "Wrap Clásico", precio: 75 },
    { nombre: "Wrap Pollo", precio: 85 },
    { nombre: "Chapata o Croissant Panela", precio: 90 },
    { nombre: "Chapata o Croissant Manchego", precio: 90 },
    { nombre: "Chapata o Croissant Pollo", precio: 90 }
  ],
  alimentosDesayunos: [
    { nombre: "Chilaquiles Sencillos", precio: 75 },
    { nombre: "Chilaquiles con Huevo", precio: 90 },
    { nombre: "Chilaquiles con Pollo", precio: 95 },
    { nombre: "Molletes Sencillos", precio: 80 },
    { nombre: "Molletes con Jamón", precio: 90 },
    { nombre: "Omelette", precio: 90 },
    { nombre: "Sincronizadas", precio: 90 },
    { nombre: "Mollaquiles", precio: 90 }
  ],
  alimentosCrepas: [
    { nombre: "Crepa Tradicional Dulce", precio: 95 },
    { nombre: "Crepa Frutal Dulce", precio: 99 },
    { nombre: "Crepa Celaya Frutal", precio: 120 },
    { nombre: "Crepa Dulce Deseo", precio: 130 },
    { nombre: "Crepa Philadelphia Tropical", precio: 130 },
    { nombre: "Crepizza Salada", precio: 130 },
    { nombre: "Crepa Salada Tradicional", precio: 99 }
  ],
  alimentosDulcesYPostres: [
    { nombre: "Hot Cakes", precio: 80 },
    { nombre: "Waffles o Croissant con helado", precio: 90 },
    { nombre: "Croissant con mermelada", precio: 60 },
    { nombre: "Pan de elote", precio: 39 },
    { nombre: "Rol de canela", precio: 49 },
    { nombre: "Muffin de sabores", precio: 40 },
    { nombre: "Pastel del día", precio: 70 },
    { nombre: "Postre del día", precio: 45 },
    { nombre: "Chapata pizza", precio: 99 }
  ]
};

let carrito = [];
let comandaActualId = Date.now();

// Renderizar Menú Actualizado
function renderizarMenu() {
  const mapeo = {
    'grid-calientes-cafe': menuData.calientesCafe,
    'grid-calientes-sincafe': menuData.calientesSinCafe,
    'grid-calientes-especialess': menuData.calientesEspecialess,
    'grid-calientes-infusionables': menuData.calientesInfusionables,
    'grid-frias-cafe': menuData.friasCafe,
    'grid-frias-sincafe': menuData.friasSinCafe,
    'grid-frias-especialess': menuData.friasRefrescables,
    'grid-frias-foam-malteadas': menuData.friasTizanasYTe,
    'grid-frias-varios': menuData.extrasBebidas,
    'grid-alimentos-salados': [...menuData.alimentosEnsaladas, ...menuData.alimentosWrapsYChapatas, ...menuData.alimentosDesayunos],
    'grid-alimentos-dulces': [...menuData.alimentosCrepas, ...menuData.alimentosDulcesYPostres]
  };

  for (let idContainer in mapeo) {
    const container = document.getElementById(idContainer);
    if (!container) continue;

    container.innerHTML = mapeo[idContainer].map(prod => `
      <div class="card-producto" onclick="agregarAlCarrito('${prod.nombre}', ${prod.precio})">
        <h4>${prod.nombre}</h4>
        <div class="precio">$${prod.precio.toFixed(2)}</div>
      </div>
    `).join('');
  }
}

// Filtro de Buscador
function filtrarProductos() {
  const texto = document.getElementById('inputBuscador').value.toLowerCase();
  const tarjetas = document.querySelectorAll('.card-producto');

  tarjetas.forEach(card => {
    const nombre = card.querySelector('h4').innerText.toLowerCase();
    card.style.display = nombre.includes(texto) ? 'block' : 'none';
  });
}

// GESTIÓN DE PESTAÑAS (PIDE CONTRASEÑA 0705 SOLO AL ENTRAR A INVENTARIO)
function cambiarPestana(idPestana) {
  if (idPestana === 'inventario') {
    const clave = prompt("Ingrese la contraseña de autorización (0705) para acceder al Inventario:");
    if (clave === null) return;
    
    if (clave.trim() !== "0705") {
      alert("⛔ Contraseña incorrecta. Acceso al inventario denegado.");
      return;
    }
  }

  document.querySelectorAll('.seccion').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));

  const tabContent = document.getElementById(`tab-${idPestana}`);
  if (tabContent) tabContent.classList.add('active');

  if (event && event.target) event.target.classList.add('active');

  if (idPestana === 'corte') renderizarCorteCaja();
  if (idPestana === 'inventario') renderizarInventario();
}

function agregarAlCarrito(nombre, precioBase) {
  const lecheSelect = document.getElementById('selectLeche');
  const tipoLeche = lecheSelect ? lecheSelect.value : 'Sin leche';
  
  let extraLeche = (tipoLeche === 'Deslactosada' || tipoLeche === 'Vegetal') ? 12 : 0;

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
        ${item.leche !== 'Sin leche' ? `<small>Leche: ${item.leche}</small>` : ''}
      </div>
      <div>
        <span>$${item.precio.toFixed(2)}</span>
        <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.idUnico})">✕</button>
      </div>
    </div>
  `).join('');

  totalTxt.innerText = `$${total.toFixed(2)}`;
}

// APLICAR 50% DE DESCUENTO CON CONTRASEÑA 0705
function aplicarDescuento50() {
  if (carrito.length === 0) {
    alert("No hay productos en la orden actual para aplicar descuento.");
    return;
  }

  const clave = prompt("Ingrese la contraseña de autorización (0705):");
  if (clave === null) return;

  if (clave.trim() === "0705") {
    carrito.forEach(item => {
      if (!item.nombre.includes("(50% Desc.)")) {
        item.precio = item.precio * 0.5;
        item.nombre = item.nombre + " (50% Desc.)";
      }
    });
    actualizarCarritoUI();
    alert("¡Descuento del 50% aplicado correctamente!");
  } else {
    alert("⛔ Contraseña incorrecta. No se pudo aplicar el descuento.");
  }
}

// CANCELAR CUENTA Y ELIMINARLA DE LA NUBE/LOCALSTORAGE
function cancelarCuentaActual() {
  if (carrito.length === 0) {
    alert("No hay productos en la cuenta actual para cancelar.");
    return;
  }

  const clave = prompt("Ingrese la contraseña de autorización para cancelar la cuenta:");
  if (clave === null) return;

  if (clave.trim() === "0705") {
    if (confirm("¿Estás seguro de que deseas cancelar la cuenta actual? Se borrará de la lista de pendientes y de la nube.")) {
      let comandas = JSON.parse(localStorage.getItem('comandasPendientes')) || [];
      comandas = comandas.filter(c => c.id !== comandaActualId);
      localStorage.setItem('comandasPendientes', JSON.stringify(comandas));

      carrito = [];
      comandaActualId = Date.now();
      actualizarCarritoUI();
      actualizarUIComandasPendientes();

      alert("🚫 Cuenta cancelada y eliminada con éxito.");
    }
  } else {
    alert("⛔ Contraseña incorrecta. No se puede cancelar la cuenta.");
  }
}

// Imprimir Comanda (Cocina / Barra)
function imprimirComanda() {
  if (carrito.length === 0) {
    alert("No hay productos en el carrito para enviar a cocina/barra.");
    return;
  }

  const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  guardarComandaSilencioso();

  const ventana = window.open('', '', 'width=400,height=600');
  if (!ventana) return;

  ventana.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @page { margin: 0; }
          body { font-family: Arial, sans-serif; width: 58mm; padding: 8px 4px; margin: 0 auto; font-size: 14px; }
          .centro { text-align: center; }
          .linea { border-bottom: 2px solid #000; margin: 6px 0; }
          .item { font-weight: bold; font-size: 15px; margin-top: 4px; }
          .subitem { font-size: 13px; margin-left: 8px; }
        </style>
      </head>
      <body>
        <div class="centro">
          <h2>*** COMANDA ***</h2>
          <strong>ORDEN #${comandaActualId.toString().slice(-4)}</strong><br>
          <small>Hora: ${hora}</small>
        </div>
        <div class="linea"></div>
        ${carrito.map(i => `
          <div class="item">• 1x ${i.nombre}</div>${i.leche !== 'Sin leche' ? `<div class="subitem">Leche: ${i.leche}</div>` : ''}
        `).join('')}
        <div class="linea"></div>
        <script>
          window.onload = function() { window.print(); window.close(); }
        </script>
      </body>
    </html>
  `);
  ventana.document.close();
}

// Imprimir Pre-Cuenta Cliente
function imprimirPrecuenta() {
  if (carrito.length === 0) {
    alert("No hay productos en el carrito para generar la cuenta.");
    return;
  }

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  const ventana = window.open('', '', 'width=400,height=600');
  if (!ventana) return;

  ventana.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @page { margin: 0; }
          body { font-family: Arial, sans-serif; width: 58mm; padding: 8px 4px; margin: 0 auto; font-size: 14px; line-height: 1.2; }
          .centro { text-align: center; }
          .linea { border-bottom: 1px dashed #000; margin: 6px 0; }
          .flex { display: flex; justify-content: space-between; font-weight: bold; }
          .total-box { font-size: 18px; font-weight: bold; margin-top: 6px; }
        </style>
      </head>
      <body>
        <div class="centro">
          <strong>PRE-CUENTA</strong><br>
          <small>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</small>
        </div>
        <div class="linea"></div>
        ${carrito.map(i => `
          <div class="flex">
            <span>${i.nombre}</span><span>$${i.precio.toFixed(2)}</span>
          </div>
          ${i.leche !== 'Sin leche' ? `<small style="margin-left: 6px;">• Leche: ${i.leche}</small>` : ''}
        `).join('')}
        <div class="linea"></div>
        <div class="flex total-box">
          <span>TOTAL:</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <div class="linea"></div>
        <div class="centro">*** ESTE TICKET NO ES UN COMPROBANTE DE PAGO ***</div>
        <script>
          window.onload = function() { window.print(); window.close(); }
        </script>
      </body>
    </html>
  `);
  ventana.document.close();
}

// Finalizar Cobro
function finalizarCobro(metodoPago) {
  if (carrito.length === 0) {
    alert("Agrega productos a la comanda para poder cobrar.");
    return;
  }

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  const fechaHoy = new Date().toLocaleDateString();
  const mesAnioActual = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  const historialVentas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  const nuevaVenta = {
    id: Date.now(),
    fecha: fechaHoy,
    mesAnio: mesAnioActual,
    hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    items: [...carrito],
    total: total,
    metodo: metodoPago
  };
  historialVentas.push(nuevaVenta);
  localStorage.setItem('ventasDiarias', JSON.stringify(historialVentas));

  const historialMensual = JSON.parse(localStorage.getItem('ventasMensuales')) || [];
  historialMensual.push(nuevaVenta);
  localStorage.setItem('ventasMensuales', JSON.stringify(historialMensual));

  let comandas = JSON.parse(localStorage.getItem('comandasPendientes')) || [];
  comandas = comandas.filter(c => c.id !== comandaActualId);
  localStorage.setItem('comandasPendientes', JSON.stringify(comandas));

  imprimirTicketFinal(carrito, total, metodoPago);

  carrito = [];
  comandaActualId = Date.now();
  actualizarCarritoUI();
  actualizarUIComandasPendientes();
  renderizarCorteCaja();
}

function imprimirTicketFinal(items, total, metodo) {
  const ventana = window.open('', '', 'width=400,height=600');
  if (!ventana) return;
  
  ventana.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @page { margin: 0; }
          body { font-family: Arial, sans-serif; width: 58mm; padding: 8px 4px; margin: 0 auto; font-size: 14px; line-height: 1.2; }
          .centro { text-align: center; }
          .linea { border-bottom: 1px dashed #000; margin: 6px 0; }
          .flex { display: flex; justify-content: space-between; font-weight: bold; }
          .total-box { font-size: 18px; font-weight: bold; margin-top: 4px; }
        </style>
      </head>
      <body>
        <div class="centro">
          <h2>BLESS COFFEE</h2>
          <small>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</small>
        </div>
        <div class="linea"></div>
        ${items.map(i => `
          <div class="flex">
            <span>${i.nombre}</span><span>$${i.precio.toFixed(2)}</span>
          </div>
          ${i.leche !== 'Sin leche' ? `<div style="font-size:12px;">• Leche: ${i.leche}</div>` : ''}
        `).join('')}
        <div class="linea"></div>
        <div class="flex total-box">
          <span>PAGADO:</span>
          <span>$${total.toFixed(2)}</span>
        </div>
        <div class="linea"></div>
        <div class="centro">
          Forma de Pago: <strong>${metodo}</strong><br><br>
          ¡Gracias por tu visita!
        </div>
        <script>
          window.onload = function() { window.print(); window.close(); }
        </script>
      </body>
    </html>
  `);
  ventana.document.close();
}

function guardarComandaSilencioso() {
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
  actualizarUIComandasPendientes();
}

function guardarComandaPendiente() {
  if (carrito.length === 0) {
    alert("Agrega productos a la comanda antes de guardarla.");
    return;
  }

  guardarComandaSilencioso();
  carrito = [];
  comandaActualId = Date.now();
  actualizarCarritoUI();
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
    contenedor.innerHTML = comandas.map(c => `
      <div class="card-comanda-item">
        <div>
          <strong>Orden #${c.id.toString().slice(-4)}</strong> <small>(${c.hora})</small><br>
          <small>${c.items.map(i => i.nombre).join(', ')}</small><br>
          <strong style="color:#16a34a;">Total: $${c.total.toFixed(2)}</strong>
        </div>
        <button class="btn-tab" onclick="cargarComanda(${c.id})">Cobrar / Editar</button>
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

// RENDERIZAR INVENTARIO
function renderizarInventario() {
  const contenedor = document.getElementById('tablaInventarioContainer');
  if (!contenedor) return;

  let inventario = JSON.parse(localStorage.getItem('inventarioBless')) || [
    { insumo: "Café en Grano (kg)", stock: 12, min: 3 },
    { insumo: "Leche Entera (L)", stock: 24, min: 6 },
    { insumo: "Leche Deslactosada (L)", stock: 18, min: 5 },
    { insumo: "Leche Vegetal/Almendra (L)", stock: 10, min: 3 },
    { insumo: "Chocolate Obscuro (kg)", stock: 5, min: 2 },
    { insumo: "Matcha (kg)", stock: 2, min: 1 },
    { insumo: "Chai (kg)", stock: 4, min: 1 },
    { insumo: "Pan para Chapata / Baguette (pz)", stock: 35, min: 10 }
  ];

  contenedor.innerHTML = `
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <thead>
        <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0; text-align: left;">
          <th style="padding: 10px;">Insumo / Producto</th>
          <th style="padding: 10px;">Stock Actual</th>
          <th style="padding: 10px;">Mínimo Requerido</th>
          <th style="padding: 10px;">Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${inventario.map((item, index) => `
          <tr style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 10px;">${item.insumo}</td>
            <td style="padding: 10px; font-weight: bold; color: ${item.stock <= item.min ? '#dc2626' : '#16a34a'};">${item.stock}</td>
            <td style="padding: 10px; color: #64748b;">${item.min}</td>
            <td style="padding: 10px;">
              <button onclick="modificarStockDirecto(${index}, 1)" style="background: #2563eb; color: white; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer; font-weight: bold;">＋ Agregar</button>
              <button onclick="modificarStockDirecto(${index}, -1)" style="background: #ef4444; color: white; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer; margin-left: 4px; font-weight: bold;">－ Quitar</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// MODIFICAR STOCK DIRECTAMENTE AL PRESIONAR LOS BOTONES (SIN CONTRASEÑA)
function modificarStockDirecto(index, cantidad) {
  let inventario = JSON.parse(localStorage.getItem('inventarioBless')) || [];
  if (inventario[index]) {
    inventario[index].stock += cantidad;
    if (inventario[index].stock < 0) inventario[index].stock = 0;
    
    localStorage.setItem('inventarioBless', JSON.stringify(inventario));
    renderizarInventario();
  }
}

// RENDERIZAR CORTE Y ACCESO PRIVADO AL MES (CONTRASEÑA 1984)
function renderizarCorteCaja() {
  const containerDia = document.getElementById('registroVentasDiaContainer');
  if (!containerDia) return;

  const ventasDia = JSON.parse(localStorage.getItem('ventasDiarias')) || [];

  if (ventasDia.length === 0) {
    containerDia.innerHTML = '<p style="color: #64748b; font-size: 14px;">No hay ventas registradas en el día actual.</p>';
  } else {
    containerDia.innerHTML = `
      <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="background: #f8fafc; border-bottom: 2px solid #e2e8f0; text-align: left;">
            <th style="padding: 8px;">Hora</th>
            <th style="padding: 8px;">Productos</th>
            <th style="padding: 8px;">Método</th>
            <th style="padding: 8px;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${ventasDia.map(v => `
            <tr style="border-bottom: 1px solid #f8fafc;">
              <td style="padding: 8px;">${v.hora}</td>
              <td style="padding: 8px;">${v.items.map(i => i.nombre).join(', ')}</td>
              <td style="padding: 8px;">${v.metodo}</td>               <td style="padding: 8px; font-weight: bold; color: #16a34a;">$${v.total.toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  let containerMes = document.getElementById('registroVentasMesContainer');
  if (containerMes) {
    containerMes.innerHTML = `
      <div style="background: #f8fafc; padding: 15px; border-radius: 6px; text-align: center;">
        <p style="font-size: 14px; color: #64748b; margin-bottom: 10px;">Información financiera mensual protegida.</p>
        <button onclick="verInformacionMensualPrivada()" style="background: #0f172a; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold;">🔑 Ver Calendario de Todos los Meses</button>
      </div>
    `;
  }
}

// SOLICITAR CONTRASEÑA 1984 PARA MOSTRAR CALENDARIO DE TODOS LOS MESES
function verInformacionMensualPrivada() {
  const clave = prompt("Ingrese la contraseña de seguridad para acceder al historial mensual:");
  if (clave === null) return;

  if (clave.trim() === "1984") {
    const containerMes = document.getElementById('registroVentasMesContainer');
    if (!containerMes) return;

    const ventasMes = JSON.parse(localStorage.getItem('ventasMensuales')) || [];
    if (ventasMes.length === 0) {
      containerMes.innerHTML = `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; text-align: center;">
          <p style="color: #64748b; font-size: 14px;">No hay registros de ventas mensuales aún.</p>
          <button onclick="renderizarCorteCaja()" style="margin-top: 10px; background: #64748b; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">🔒 Ocultar</button>
        </div>
      `;
      return;
    }

    let mesesAgrupados = {};
    ventasMes.forEach(v => {
      let mesKey = v.mesAnio || "Mes General";
      if (!mesesAgrupados[mesKey]) {
        mesesAgrupados[mesKey] = [];
      }
      mesesAgrupados[mesKey].push(v);
    });

    let htmlCalendariosMeses = '';

    for (let nombreMes in mesesAgrupados) {
      const ventasDelMes = mesesAgrupados[nombreMes];
      const totalMesGeneral = ventasDelMes.reduce((sum, v) => sum + v.total, 0);

      let ventasPorDia = {};
      ventasDelMes.forEach(v => {
        let fechaKey = v.fecha;
        if (!ventasPorDia[fechaKey]) ventasPorDia[fechaKey] = [];
        ventasPorDia[fechaKey].push(v);
      });

      let botonesDiasHtml = '';
      let fechasOrdenadas = Object.keys(ventasPorDia);
      fechasOrdenadas.sort();

      fechasOrdenadas.forEach(fecha => {
        let totalDia = ventasPorDia[fecha].reduce((sum, v) => sum + v.total, 0);
        botonesDiasHtml += `
          <div style="background: #dcfce7; border: 1px solid #86efac; border-radius: 6px; padding: 8px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 13px; font-weight: bold; color: #16a34a; cursor: pointer; flex: 1;" onclick='mostrarDetalleDiaEspecifico(${JSON.stringify(fecha)}, ${JSON.stringify(ventasPorDia[fecha])})'>
              📅 Día ${fecha} — Total: $${totalDia.toFixed(2)}
            </span>
            <button onclick='borrarDiaCompleto(${JSON.stringify(fecha)})' style="background: #dc2626; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: bold;">🗑️ Borrar Día</button>
          </div>
        `;
      });

      htmlCalendariosMeses += `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <h4 style="margin: 0; text-transform: capitalize; color: #0f172a; font-size: 16px;">🗓️ ${nombreMes}</h4>
            <span style="font-size: 14px; font-weight: bold; color: #16a34a;">Total Mes: $${totalMesGeneral.toFixed(2)}</span>
          </div>
          <p style="font-size: 12px; color: #64748b; margin-bottom: 10px;">Haz clic en un día para ver el desglose completo de alimentos y bebidas, o bórralo si es necesario.</p>
          <div style="max-height: 200px; overflow-y: auto;">
            ${botonesDiasHtml}
          </div>
        </div>
      `;
    }

    containerMes.innerHTML = `
      <div style="background: #f8fafc; padding: 15px; border-radius: 8px;">
        <h3 style="font-size: 15px; margin-bottom: 12px; color: #0f172a;">Calendario y Desglose de Todos los Meses</h3>
        ${htmlCalendariosMeses}
        <button onclick="renderizarCorteCaja()" style="margin-top: 5px; background: #64748b; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 12px;">🔒 Ocultar Información</button>
      </div>
    `;

  } else {
    alert("⛔ Contraseña incorrecta. Acceso denegado.");
  }
}

// MOSTRAR DETALLE DE UN DÍA ESPECÍFICO CON OPCIÓN DE ENVÍO POR CORREO
function mostrarDetalleDiaEspecifico(fecha, listaVentasDia) {
  let totalDia = listaVentasDia.reduce((sum, v) => sum + v.total, 0);
  
  let resumenTexto = `REPORTE DEL DÍA: ${fecha}\n`;
  resumenTexto += `Total Vendido: $${totalDia.toFixed(2)}\n`;
  resumenTexto += `Total de Tickets/Órdenes: ${listaVentasDia.length}\n\n`;
  resumenTexto += `--- DESGLOSE DE PRODUCTOS ---\n`;

  let htmlDetalleItems = '';
  listaVentasDia.forEach(v => {
    htmlDetalleItems += `<div style="margin-bottom: 8px; border-bottom: 1px dashed #cbd5e1; padding-bottom: 4px;">
      <small style="color: #64748b;">Hora: ${v.hora} | Pago: ${v.metodo}</small><br>`;
    v.items.forEach(i => {
      htmlDetalleItems += `• ${i.nombre} ${i.leche && i.leche !== 'Sin leche' ? `(Leche: ${i.leche})` : ''} - $${i.precio.toFixed(2)}<br>`;
      resumenTexto += `[${v.hora}] ${i.nombre} - $${i.precio.toFixed(2)}\n`;
    });
    htmlDetalleItems += `<strong>Subtotal Orden: $${v.total.toFixed(2)}</strong></div>`;
  });

  let modalAntiguo = document.getElementById('modalDetalleDia');
  if (modalAntiguo) modalAntiguo.remove();

  let modalDiv = document.createElement('div');
  modalDiv.id = 'modalDetalleDia';
  modalDiv.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; z-index:2000;";
  
  modalDiv.innerHTML = `
    <div style="background:white; padding:20px; border-radius:8px; width:450px; max-height:80vh; overflow-y:auto; box-shadow:0 10px 25px rgba(0,0,0,0.2);">
      <h3 style="margin-bottom: 10px; color: #0f172a;">📊 Desglose del Día ${fecha}</h3>
      <p style="font-size: 14px; font-weight: bold; color: #16a34a; margin-bottom: 12px;">Total: $${totalDia.toFixed(2)} (${listaVentasDia.length} órdenes)</p>
      <div style="max-height: 250px; overflow-y: auto; background: #f8fafc; padding: 10px; border-radius: 6px; font-size: 13px; margin-bottom: 15px;">
        ${htmlDetalleItems}
      </div>
      <div style="display: flex; gap: 10px;">
        <button onclick="enviarReporteDiaCorreo(${JSON.stringify(fecha)}, ${totalDia}, ${JSON.stringify(resumenTexto)})" style="flex:1; background:#16a34a; color:white; border:none; padding:10px; border-radius:6px; font-weight:bold; cursor:pointer;">📧 Enviar a mi Correo</button>
        <button onclick="document.getElementById('modalDetalleDia').remove()" style="background:#64748b; color:white; border:none; padding:10px 15px; border-radius:6px; font-weight:bold; cursor:pointer;">Cerrar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modalDiv);
}

// FUNCIÓN PARA BORRAR UN DÍA COMPLETO DEL HISTORIAL MENSUAL
function borrarDiaCompleto(fecha) {
  const clave = prompt("Ingrese la contraseña de seguridad para confirmar la eliminación de este día:");
  if (clave === null) return;

  if (clave.trim() === "7777") {
    if (confirm(`¿Estás completamente seguro de borrar todos los registros del día ${fecha}? Esta acción no se puede deshacer.`)) {
      let historialMensual = JSON.parse(localStorage.getItem('ventasMensuales')) || [];
      let historialFiltrado = historialMensual.filter(v => v.fecha !== fecha);
      localStorage.setItem('ventasMensuales', JSON.stringify(historialFiltrado));

      alert(`🗑️ Registros del día ${fecha} eliminados con éxito.`);
      let modalAntiguo = document.getElementById('modalDetalleDia');
      if (modalAntiguo) modalAntiguo.remove();
      verInformacionMensualPrivada();
    }
  } else {
    alert("⛔ Contraseña incorrecta. No se eliminó nada.");
  }
}

function enviarReporteDiaCorreo(fecha, totalDia, textoDetallado) {
  const asunto = encodeURIComponent(`Reporte de Ventas del Día - ${fecha} - BLESS COFFEE`);
  const cuerpo = encodeURIComponent(textoDetallado + `\n\nGenerado automáticamente desde el Sistema POS Bless Coffee.`);
  const correosDestino = "abelgonrive@gmail.com,tesoreria.riveraconstrucciones@gmail.com";
  
  window.location.href = `mailto:${correosDestino}?subject=${asunto}&body=${cuerpo}`;
}

// CIERRE DE CAJA, IMPRESIÓN DE TICKET Y ENVÍO A CORREOS
function realizarCierreYEnviarCorreo() {
  const ventas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  if (ventas.length === 0) {
    alert("No hay ventas registradas en el día para realizar el cierre.");
    return;
  }

  if (!confirm("¿Estás seguro de realizar el corte de caja? Se imprimirán los datos, se abrirá tu correo y se vaciará el registro diario.")) {
    return;
  }

  let totalEfectivo = 0;
  let totalTarjeta = 0;
  ventas.forEach(v => {
    if (v.metodo === 'Tarjeta') totalTarjeta += v.total;
    else totalEfectivo += v.total;
  });
  const totalGeneral = totalEfectivo + totalTarjeta;
  const fechaHora = new Date().toLocaleString();

  const ventanaImpresion = window.open('', '', 'width=400,height=600');
  if (ventanaImpresion) {
    ventanaImpresion.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            @page { margin: 0; }
            body { font-family: Arial, sans-serif; width: 58mm; padding: 8px 4px; margin: 0 auto; font-size: 13px; line-height: 1.2; }
            .centro { text-align: center; }
            .linea { border-bottom: 1px dashed #000; margin: 6px 0; }
            .flex { display: flex; justify-content: space-between; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="centro">
            <h2>BLESS COFFEE</h2>
            <strong>CORTE DE CAJA</strong><br>
            <small>${fechaHora}</small>
          </div>
          <div class="linea"></div>
          <div class="flex"><span>Efectivo:</span><span>$${totalEfectivo.toFixed(2)}</span></div>
          <div class="flex"><span>Tarjeta:</span><span>$${totalTarjeta.toFixed(2)}</span></div>
          <div class="linea"></div>
          <div class="flex" style="font-size: 16px;">
            <span>TOTAL:</span>
            <span>$${totalGeneral.toFixed(2)}</span>
          </div>
          <div class="linea"></div>
          <div class="centro">
            Tickets vendidos: ${ventas.length}<br>
            ¡Corte realizado con éxito!
          </div>
          <script>
            window.onload = function() { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `);
    ventanaImpresion.document.close();
  }

  localStorage.removeItem('ventasDiarias');
  renderizarCorteCaja();

  const asunto = encodeURIComponent(`Corte de Caja - BLESS COFFEE - ${fechaHora}`);
  const cuerpo = encodeURIComponent(
    `REPORTE DE CORTE DE CAJA - BLESS COFFEE\n` +
    `Fecha y Hora: ${fechaHora}\n\n` +
    `----------------------------------------\n` +
    `Total Efectivo: $${totalEfectivo.toFixed(2)}\n` +
    `Total Tarjeta: $${totalTarjeta.toFixed(2)}\n` +
    `TOTAL GENERAL: $${totalGeneral.toFixed(2)}\n` +
    `----------------------------------------\n` +
    `Número de Tickets Vendidos: ${ventas.length}\n\n` +
    `Generado desde el Sistema POS Bless Coffee.`
  );

  const correosDestino = "abelgonrive@gmail.com,tesoreria.riveraconstrucciones@gmail.com";
  
  setTimeout(() => {
    window.location.href = `mailto:${correosDestino}?subject=${asunto}&body=${cuerpo}`;
  }, 800);

  alert("✅ Caja cerrada, resguardo mensual actualizado y registro diario reiniciado con éxito.");
}

// INICIALIZACIÓN AL CARGAR LA PÁGINA
renderizarMenu();
actualizarUIComandasPendientes();
