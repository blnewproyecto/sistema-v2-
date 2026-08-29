// Base de datos del Menú
const menuData = {
  calientesCafe: [
    { nombre: "Espresso Sencillo (1oz)", precio: 35 },
    { nombre: "Espresso Doble (2oz)", precio: 45 },
    { nombre: "Doble Cortado (2oz)", precio: 50 },
    { nombre: "Panna (2oz)", precio: 50 },
    { nombre: "Flat White (2oz)", precio: 55 },
    { nombre: "Affogato", precio: 65 },
    { nombre: "Affogato Nut", precio: 95 },
    { nombre: "Americano M", precio: 42 },
    { nombre: "Americano G", precio: 47 },
    { nombre: "Café de Olla M", precio: 47 },
    { nombre: "Café de Olla G", precio: 52 },
    { nombre: "Capuccino / Latte M", precio: 60 },
    { nombre: "Capuccino / Latte G", precio: 65 },
    { nombre: "Moka Obscuro M", precio: 80 },
    { nombre: "Moka Obscuro G", precio: 85 },
    { nombre: "Moka Blanco M", precio: 80 },
    { nombre: "Moka Blanco G", precio: 85 },
    { nombre: "Caramel Latte M", precio: 80 },
    { nombre: "Caramel Latte G", precio: 85 },
    { nombre: "Cajeta Latte M", precio: 80 },
    { nombre: "Cajeta Latte G", precio: 85 }
  ],
  calientesSinCafe: [
    { nombre: "Chocolate Obscuro M", precio: 75 },
    { nombre: "Chocolate Obscuro G", precio: 80 },
    { nombre: "Chocolate Blanco M", precio: 75 },
    { nombre: "Chocolate Blanco G", precio: 80 },
    { nombre: "Chai M", precio: 80 },
    { nombre: "Chai G", precio: 85 },
    { nombre: "Matcha M", precio: 80 },
    { nombre: "Matcha G", precio: 85 },
    { nombre: "Taro M", precio: 80 },
    { nombre: "Taro G", precio: 85 },
    { nombre: "Horchata M", precio: 75 },
    { nombre: "Horchata G", precio: 80 }
  ],
  calientesEspecialess: [
    { nombre: "Chai Manzana Verde M", precio: 80 },
    { nombre: "Chai Manzana Verde G", precio: 85 },
    { nombre: "Horchai M", precio: 80 },
    { nombre: "Horchai G", precio: 85 },
    { nombre: "Blessed M", precio: 90 },
    { nombre: "Blessed G", precio: 95 },
    { nombre: "Hope Latte M", precio: 90 },
    { nombre: "Hope Latte G", precio: 95 },
    { nombre: "Ferrero Sin Café M", precio: 80 },
    { nombre: "Ferrero Sin Café G", precio: 85 },
    { nombre: "Ferrero Con Café M", precio: 90 },
    { nombre: "Ferrero Con Café G", precio: 95 },
    { nombre: "Mazapán M", precio: 80 },
    { nombre: "Mazapán G", precio: 85 }
  ],
  calientesInfusionables: [
    { nombre: "Tizana Fresa Kiwi M", precio: 75 },
    { nombre: "Tizana Fresa Kiwi G", precio: 80 },
    { nombre: "Tizana Maracuyá M", precio: 75 },
    { nombre: "Tizana Maracuyá G", precio: 80 },
    { nombre: "Tizana Frutos Tropicales M", precio: 75 },
    { nombre: "Tizana Frutos Tropicales G", precio: 80 },
    { nombre: "Té Herbal (Frambuesa/Menta/Negro/Verde) M", precio: 45 },
    { nombre: "Té Herbal (Frambuesa/Menta/Negro/Verde) G", precio: 50 }
  ],
  friasCafe: [
    { nombre: "Americano Frío", precio: 55 },
    { nombre: "Capuccino/Latte Frío", precio: 70 },
    { nombre: "Capuccino/Latte Frappé", precio: 75 },
    { nombre: "Cold Brew", precio: 70 },
    { nombre: "Moka Frío", precio: 80 },
    { nombre: "Moka Frappé", precio: 85 },
    { nombre: "Moka Blanco Frío", precio: 80 },
    { nombre: "Moka Blanco Frappé", precio: 85 },
    { nombre: "Caramel Latte Frío", precio: 80 },
    { nombre: "Caramel Latte Frappé", precio: 85 },
    { nombre: "Cajeta Latte Frío", precio: 80 },
    { nombre: "Cajeta Latte Frappé", precio: 85 }
  ],
  friasSinCafe: [
    { nombre: "Chocolate Obscuro Frío", precio: 80 },
    { nombre: "Chocolate Obscuro Frappé", precio: 85 },
    { nombre: "Chai Frío", precio: 85 },
    { nombre: "Chai Frappé", precio: 90 },
    { nombre: "Matcha Frío", precio: 85 },
    { nombre: "Matcha Frappé", precio: 90 },
    { nombre: "Taro Frío", precio: 85 },
    { nombre: "Taro Frappé", precio: 90 },
    { nombre: "Cookies (Oreo) Frío", precio: 85 },
    { nombre: "Cookies (Oreo) Frappé", precio: 90 },
    { nombre: "Horchata Fría", precio: 85 },
    { nombre: "Horchata Frappé", precio: 90 }
  ],
  friasEspecialess: [
    { nombre: "Chai Manzana Verde Frío", precio: 85 },
    { nombre: "Chai Manzana Verde Frappé", precio: 90 },
    { nombre: "Horchai Frío", precio: 90 },
    { nombre: "Horchai Frappé", precio: 95 },
    { nombre: "Blessed Frío", precio: 90 },
    { nombre: "Blessed Frappé", precio: 95 },
    { nombre: "Hope Latte Frío", precio: 90 },
    { nombre: "Hope Latte Frappé", precio: 95 },
    { nombre: "Ferrero Sin Café Frío", precio: 80 },
    { nombre: "Ferrero Sin Café Frappé", precio: 85 },
    { nombre: "Ferrero Con Café Frío", precio: 90 },
    { nombre: "Ferrero Con Café Frappé", precio: 95 },
    { nombre: "Mazapán Frío", precio: 90 },
    { nombre: "Mazapán Frappé", precio: 95 }
  ],
  friasFoamMalteadas: [
    { nombre: "Cold Foam Vainilla/Caramelo/Moka", precio: 95 },
    { nombre: "Cold Foam Taro Coconut", precio: 99 },
    { nombre: "Cold Foam Berry Matcha", precio: 99 },
    { nombre: "Cold Foam Banana Peanut Coffee", precio: 99 },
    { nombre: "Cold Foam Strawberry Coconut", precio: 99 },
    { nombre: "Cold Foam Matcha Coconut", precio: 99 },
    { nombre: "Malteada Vainilla/Fresa/Chocolate", precio: 90 },
    { nombre: "Malteada Caramelo/Oreo/Ferrero", precio: 95 }
  ],
  friasVarios: [
    { nombre: "Shaken Tea", precio: 80 },
    { nombre: "Yogurt Mango", precio: 85 },
    { nombre: "Yogurt Fresa", precio: 85 },
    { nombre: "Yogurt Blueberry", precio: 85 },
    { nombre: "Naranjada / Limonada", precio: 60 },
    { nombre: "Black Orange Tonic", precio: 80 },
    { nombre: "Lemon Coffee Tonic", precio: 80 },
    { nombre: "Chamoyada Mango/Fresa/Maracuyá", precio: 80 },
    { nombre: "Smoothie Detox", precio: 95 },
    { nombre: "Smoothie Tropical / Banana Berry", precio: 95 },
    { nombre: "Smoothie Apple Kiss / Exótico", precio: 95 }
  ],
  friasMinerales: [
    { nombre: "Agua Mineral Kirkland", precio: 40 },
    { nombre: "Agua Mineral Perrier", precio: 50 },
    { nombre: "Mineral Kirkland Preparada", precio: 65 },
    { nombre: "Agua Mineral Perrier Preparada", precio: 65 }
  ],
  friasMocktails: [
    { nombre: "Mocktail Frutos Rojos", precio: 85 },
    { nombre: "Mocktail Lichi", precio: 85 },
    { nombre: "Mocktail Cereza", precio: 85 },
    { nombre: "Mocktail Frambuesa", precio: 85 },
    { nombre: "Mocktail Kiwi", precio: 85 },
    { nombre: "Mocktail Fresa", precio: 85 },
    { nombre: "Mocktail Durazno", precio: 85 },
    { nombre: "Tizana Fría", precio: 85 },
    { nombre: "Tizana Frappé", precio: 90 },
    { nombre: "Té Herbal Frío", precio: 65 }
  ],
  alimentosSalados: [
    { nombre: "Molletes Sencillos", precio: 80 },
    { nombre: "Molletes con Jamón", precio: 90 },
    { nombre: "Molletes con Chorizo", precio: 99 },
    { nombre: "Chilaquiles Sencillos", precio: 80 },
    { nombre: "Chilaquiles c/ Huevo", precio: 95 },
    { nombre: "Chilaquiles c/ Pollo", precio: 110 },
    { nombre: "Chilaquiles Gratinedos", precio: 140 },
    { nombre: "Sincronizada", precio: 70 },
    { nombre: "Chapata Pizza", precio: 99 },
    { nombre: "Baguette / Chapata Pechuga Pavo", precio: 90 },
    { nombre: "Wrap Clásico", precio: 75 },
    { nombre: "Wrap Pollo", precio: 85 },
    { nombre: "Ensalada Bless", precio: 65 },
    { nombre: "Especialess Salada Mexicana", precio: 120 },
    { nombre: "Especialess Salada Hawaiiana", precio: 120 },
    { nombre: "Especialess Salada Vegetariana", precio: 120 },
    { nombre: "Especialess Salada Italiana", precio: 130 },
    { nombre: "Especialess Salada Bless", precio: 130 }
  ],
  alimentosDulces: [
    { nombre: "Crepa Tradicional", precio: 95 },
    { nombre: "Crepa Frutal", precio: 99 },
    { nombre: "Crepa Celaya", precio: 115 },
    { nombre: "Crepa Celaya Frutal", precio: 120 },
    { nombre: "Crepa Banana Bless", precio: 120 },
    { nombre: "Crepa Arroz con Leche", precio: 120 },
    { nombre: "Crepa Rompope Bless", precio: 130 },
    { nombre: "Crepa Dulce Deseo", precio: 130 },
    { nombre: "Hot Cakes", precio: 80 },
    { nombre: "Hot Cakes 3 Leches", precio: 100 },
    { nombre: "Waffles", precio: 80 },
    { nombre: "Pastel del Día", precio: 70 },
    { nombre: "Rol de Canela", precio: 49 },
    { nombre: "Panque de Elote", precio: 39 },
    { nombre: "Bisquet c/ Mermelada", precio: 35 },
    { nombre: "Croissant c/ Mermelada",precio: 60 },
    { nombre: "Postre Especialess Bisquet/Croissant", precio: 90 },
    { nombre: "Postre Especialess Waffles Bless", precio: 99 }
  ]
};

let carrito = [];
let comandaActualId = Date.now();

// Renderizar Menú
function renderizarMenu() {
  const mapeo = {
    'grid-calientes-cafe': menuData.calientesCafe,
    'grid-calientes-sincafe': menuData.calientesSinCafe,
    'grid-calientes-especialess': menuData.calientesEspecialess,
    'grid-calientes-infusionables': menuData.calientesInfusionables,
    'grid-frias-cafe': menuData.friasCafe,
    'grid-frias-sincafe': menuData.friasSinCafe,
    'grid-frias-especialess': menuData.friasEspecialess,
    'grid-frias-foam-malteadas': menuData.friasFoamMalteadas,
    'grid-frias-varios': menuData.friasVarios,
    'grid-frias-minerales': menuData.friasMinerales,
    'grid-frias-mocktails': menuData.friasMocktails,
    'grid-alimentos-salados': menuData.alimentosSalados,
    'grid-alimentos-dulces': menuData.alimentosDulces
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

function cambiarPestana(idPestana) {
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
      
      // ELIMINAR DE LA NUBE / ALMACENAMIENTO (comandasPendientes)
      let comandas = JSON.parse(localStorage.getItem('comandasPendientes')) || [];
      comandas = comandas.filter(c => c.id !== comandaActualId);
      localStorage.setItem('comandasPendientes', JSON.stringify(comandas));

      // LIMPIAR PANTALLA Y CONTADOR
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
          <div class="item">• 1x ${i.nombre}</div>
          ${i.leche !== 'Sin leche' ? `<div class="subitem">Leche: ${i.leche}</div>` : ''}
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
            <span>${i.nombre}</span>
            <span>$${i.precio.toFixed(2)}</span>
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

  // Guardar en ventas diarias (tiempo real)
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

  // Guardar también en el acumulado mensual histórico
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
            <span>${i.nombre}</span>
            <span>$${i.precio.toFixed(2)}</span>
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
              <button onclick="modificarStock(${index}, 1)" style="background: #2563eb; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">＋</button>
              <button onclick="modificarStock(${index}, -1)" style="background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; margin-left: 4px;">－</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function modificarStock(index, cantidad) {
  let inventario = JSON.parse(localStorage.getItem('inventarioBless'));
  inventario[index].stock += cantidad;
  if (inventario[index].stock < 0) inventario[index].stock = 0;
  localStorage.setItem('inventarioBless', JSON.stringify(inventario));
  renderizarInventario();
}

// RENDERIZAR CORTE Y VENTAS
function renderizarCorteCaja() {
  const containerDia = document.getElementById('registroVentasDiaContainer');
  const containerMes = document.getElementById('registroVentasMesContainer');
  
  if (!containerDia || !containerMes) return;

  const ventasDia = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  const ventasMes = JSON.parse(localStorage.getItem('ventasMensuales')) || [];

  // Renderizar Ventas del Día en Tiempo Real
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
              <td style="padding: 8px;">${v.metodo}</td>
              <td style="padding: 8px; font-weight: bold; color: #16a34a;">$${v.total.toFixed(2)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  // Calcular y Renderizar Acumulado Mensual
  const totalMesGeneral = ventasMes.reduce((sum, v) => sum + v.total, 0);
  containerMes.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; background: #f8fafc; padding: 15px; border-radius: 6px;">
      <div>
        <span style="font-size: 14px; color: #64748b;">Total Acumulado Registrado en el Mes:</span>
        <h3 style="font-size: 22px; color: #0f172a; margin-top: 2px;">$${totalMesGeneral.toFixed(2)}</h3>
      </div>
      <span style="font-size: 12px; background: #e2e8f0; padding: 6px 12px; border-radius: 20px; font-weight: bold;">${ventasMes.length} Transacciones totales</span>
    </div>
  `;
}

// CIERRE DE CAJA Y ENVÍO A CORREOS
function realizarCierreYEnviarCorreo() {
  const ventas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  if (ventas.length === 0) {
    alert("No hay ventas registradas en el día para realizar el cierre.");
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
  
  // Abrir cliente de correo configurado con ambos destinatarios
  window.location.href = `mailto:${correosDestino}?subject=${asunto}&body=${cuerpo}`;

  if (confirm("¿Deseas vaciar el registro diario actual para iniciar un nuevo día de ventas?")) {
    localStorage.removeItem('ventasDiarias');
    renderizarCorteCaja();
    alert("✅ Caja cerrada y reiniciada con éxito.");
  }
}

// Inicialización al cargar la página
window.onload = function() {
  renderizarMenu();
  actualizarCarritoUI();
  actualizarUIComandasPendientes();
};
