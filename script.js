// Base de datos del Menú
const menuData = [
  // BEBIDAS CALIENTES - CAFÉ
  { id: "esp-1", name: "Espresso Sencillo (1oz)", price: 35, category: "calientes-cafe" },
  { id: "esp-2", name: "Espresso Doble (2oz)", price: 45, category: "calientes-cafe" },
  { id: "dob-cort", name: "Doble Cortado (2oz)", price: 50, category: "calientes-cafe" },
  { id: "panna", name: "Panna (2oz)", price: 50, category: "calientes-cafe" },
  { id: "flat-w", name: "Flat White (2oz)", price: 55, category: "calientes-cafe" },
  { id: "affogato", name: "Affogato", price: 65, category: "calientes-cafe" },
  { id: "affogato-nut", name: "Affogato Nut", price: 95, category: "calientes-cafe" },
  { id: "ame-m", name: "Americano (M)", price: 42, category: "calientes-cafe" },
  { id: "ame-g", name: "Americano (G)", price: 47, category: "calientes-cafe" },
  { id: "olla-m", name: "Café de Olla (M)", price: 47, category: "calientes-cafe" },
  { id: "olla-g", name: "Café de Olla (G)", price: 52, category: "calientes-cafe" },
  { id: "cap-m", name: "Capuccino (M)", price: 60, category: "calientes-cafe" },
  { id: "cap-g", name: "Capuccino (G)", price: 65, category: "calientes-cafe" },
  { id: "latte-m", name: "Latte (M)", price: 60, category: "calientes-cafe" },
  { id: "latte-g", name: "Latte (G)", price: 65, category: "calientes-cafe" },
  { id: "moka-obs-m", name: "Moka Obscuro (M)", price: 80, category: "calientes-cafe" },
  { id: "moka-obs-g", name: "Moka Obscuro (G)", price: 85, category: "calientes-cafe" },
  { id: "moka-bla-m", name: "Moka Blanco (M)", price: 80, category: "calientes-cafe" },
  { id: "moka-bla-g", name: "Moka Blanco (G)", price: 85, category: "calientes-cafe" },
  { id: "caramel-l-m", name: "Caramel Latte (M)", price: 80, category: "calientes-cafe" },
  { id: "caramel-l-g", name: "Caramel Latte (G)", price: 85, category: "calientes-cafe" },
  { id: "cajeta-l-m", name: "Cajeta Latte (M)", price: 80, category: "calientes-cafe" },
  { id: "cajeta-l-g", name: "Cajeta Latte (G)", price: 85, category: "calientes-cafe" },

  // BEBIDAS CALIENTES - SIN CAFÉ
  { id: "choc-obs-m", name: "Chocolate Obscuro (M)", price: 75, category: "calientes-sin-cafe" },
  { id: "choc-obs-g", name: "Chocolate Obscuro (G)", price: 80, category: "calientes-sin-cafe" },
  { id: "choc-bla-m", name: "Chocolate Blanco (M)", price: 75, category: "calientes-sin-cafe" },
  { id: "choc-bla-g", name: "Chocolate Blanco (G)", price: 80, category: "calientes-sin-cafe" },
  { id: "chai-m", name: "Chai (M)", price: 80, category: "calientes-sin-cafe" },
  { id: "chai-g", name: "Chai (G)", price: 85, category: "calientes-sin-cafe" },
  { id: "matcha-m", name: "Matcha (M)", price: 80, category: "calientes-sin-cafe" },
  { id: "matcha-g", name: "Matcha (G)", price: 85, category: "calientes-sin-cafe" },
  { id: "taro-m", name: "Taro (M)", price: 80, category: "calientes-sin-cafe" },
  { id: "taro-g", name: "Taro (G)", price: 85, category: "calientes-sin-cafe" },
  { id: "horchata-m", name: "Horchata (M)", price: 75, category: "calientes-sin-cafe" },
  { id: "horchata-g", name: "Horchata (G)", price: 80, category: "calientes-sin-cafe" },

  // ESPECIALES CALIENTES
  { id: "chai-manz-m", name: "Chai Manzana Verde (M)", price: 80, category: "especiales-calientes" },
  { id: "chai-manz-g", name: "Chai Manzana Verde (G)", price: 85, category: "especiales-calientes" },
  { id: "horchai-m", name: "Horchai (M)", price: 80, category: "especiales-calientes" },
  { id: "horchai-g", name: "Horchai (G)", price: 85, category: "especiales-calientes" },
  { id: "blessed-m", name: "Blessed (M)", price: 90, category: "especiales-calientes" },
  { id: "blessed-g", name: "Blessed (G)", price: 95, category: "especiales-calientes" },
  { id: "hope-m", name: "Hope Latte (M)", price: 90, category: "especiales-calientes" },
  { id: "hope-g", name: "Hope Latte (G)", price: 95, category: "especiales-calientes" },
  { id: "ferrero-s-m", name: "Ferrero Sin Café (M)", price: 80, category: "especiales-calientes" },
  { id: "ferrero-s-g", name: "Ferrero Sin Café (G)", price: 85, category: "especiales-calientes" },
  { id: "ferrero-c-m", name: "Ferrero Con Café (M)", price: 90, category: "especiales-calientes" },
  { id: "ferrero-c-g", name: "Ferrero Con Café (G)", price: 95, category: "especiales-calientes" },
  { id: "mazapan-m", name: "Mazapán (M)", price: 80, category: "especiales-calientes" },
  { id: "mazapan-g", name: "Mazapán (G)", price: 85, category: "especiales-calientes" },

  // INFUSIONABLES & TÉS
  { id: "tizana-fk-m", name: "Tizana Fresa Kiwi (M)", price: 75, category: "infusionables" },
  { id: "tizana-fk-g", name: "Tizana Fresa Kiwi (G)", price: 80, category: "infusionables" },
  { id: "tizana-mar-m", name: "Tizana Maracuyá (M)", price: 75, category: "infusionables" },
  { id: "tizana-mar-g", name: "Tizana Maracuyá (G)", price: 80, category: "infusionables" },
  { id: "tizana-trop-m", name: "Tizana Tropical (M)", price: 75, category: "infusionables" },
  { id: "tizana-trop-g", name: "Tizana Tropical (G)", price: 80, category: "infusionables" },
  { id: "te-herb-m", name: "Té Herbal (M)", price: 45, category: "infusionables" },
  { id: "te-herb-g", name: "Té Herbal (G)", price: 50, category: "infusionables" },

  // FRÍAS CON CAFÉ
  { id: "frio-ame", name: "Americano Frío", price: 55, category: "frias-cafe" },
  { id: "cold-brew", name: "Cold Brew", price: 70, category: "frias-cafe" },
  { id: "cap-frio", name: "Capuccino Frío", price: 70, category: "frias-cafe" },
  { id: "cap-frappe", name: "Capuccino Frappé", price: 75, category: "frias-cafe" },
  { id: "latte-frio", name: "Latte Frío", price: 70, category: "frias-cafe" },
  { id: "latte-frappe", name: "Latte Frappé", price: 75, category: "frias-cafe" },
  { id: "moka-frio", name: "Moka Frío", price: 80, category: "frias-cafe" },
  { id: "moka-frappe", name: "Moka Frappé", price: 85, category: "frias-cafe" },
  { id: "moka-b-frio", name: "Moka Blanco Frío", price: 80, category: "frias-cafe" },
  { id: "moka-b-frappe", name: "Moka Blanco Frappé", price: 85, category: "frias-cafe" },
  { id: "caramel-frio", name: "Caramel Latte Frío", price: 80, category: "frias-cafe" },
  { id: "caramel-frappe", name: "Caramel Latte Frappé", price: 85, category: "frias-cafe" },
  { id: "cajeta-frio", name: "Cajeta Latte Frío", price: 80, category: "frias-cafe" },
  { id: "cajeta-frappe", name: "Cajeta Latte Frappé", price: 85, category: "frias-cafe" },

  // FRÍAS SIN CAFÉ & ESPECIALES
  { id: "choc-obs-frio", name: "Chocolate Obscuro Frío", price: 80, category: "frias-sin-cafe" },
  { id: "choc-obs-frappe", name: "Chocolate Obscuro Frappé", price: 85, category: "frias-sin-cafe" },
  { id: "chai-frio", name: "Chai Frío", price: 85, category: "frias-sin-cafe" },
  { id: "chai-frappe", name: "Chai Frappé", price: 90, category: "frias-sin-cafe" },
  { id: "matcha-frio", name: "Matcha Frío", price: 85, category: "frias-sin-cafe" },
  { id: "matcha-frappe", name: "Matcha Frappé", price: 90, category: "frias-sin-cafe" },
  { id: "taro-frio", name: "Taro Frío", price: 85, category: "frias-sin-cafe" },
  { id: "taro-frappe", name: "Taro Frappé", price: 90, category: "frias-sin-cafe" },
  { id: "oreo-frio", name: "Oreo Frío", price: 85, category: "frias-sin-cafe" },
  { id: "oreo-frappe", name: "Oreo Frappé", price: 90, category: "frias-sin-cafe" },
  { id: "horchata-frio", name: "Horchata Fría", price: 85, category: "frias-sin-cafe" },
  { id: "horchata-frappe", name: "Horchata Frappé", price: 90, category: "frias-sin-cafe" },
  { id: "chai-mv-frio", name: "Chai Manzana Verde Frío", price: 85, category: "frias-sin-cafe" },
  { id: "chai-mv-frappe", name: "Chai Manzana Verde Frappé", price: 90, category: "frias-sin-cafe" },
  { id: "horchai-frio", name: "Horchai Frío", price: 90, category: "frias-sin-cafe" },
  { id: "horchai-frappe", name: "Horchai Frappé", price: 95, category: "frias-sin-cafe" },
  { id: "blessed-frio", name: "Blessed Frío", price: 90, category: "frias-sin-cafe" },
  { id: "blessed-frappe", name: "Blessed Frappé", price: 95, category: "frias-sin-cafe" },
  { id: "hope-frio", name: "Hope Latte Frío", price: 90, category: "frias-sin-cafe" },
  { id: "hope-frappe", name: "Hope Latte Frappé", price: 95, category: "frias-sin-cafe" },
  { id: "ferrero-sc-frio", name: "Ferrero Sin Café Frío", price: 80, category: "frias-sin-cafe" },
  { id: "ferrero-sc-frappe", name: "Ferrero Sin Café Frappé", price: 85, category: "frias-sin-cafe" },
  { id: "ferrero-cc-frio", name: "Ferrero Con Café Frío", price: 90, category: "frias-sin-cafe" },
  { id: "ferrero-cc-frappe", name: "Ferrero Con Café Frappé", price: 95, category: "frias-sin-cafe" },
  { id: "mazapan-frio", name: "Mazapán Frío", price: 90, category: "frias-sin-cafe" },
  { id: "mazapan-frappe", name: "Mazapán Frappé", price: 95, category: "frias-sin-cafe" },

  // COLD FOAM, MALTEADAS & BEBIDAS VARIAS
  { id: "cf-vainilla", name: "Cold Foam Vainilla", price: 95, category: "cold-foam-varios" },
  { id: "cf-caramelo", name: "Cold Foam Caramelo", price: 95, category: "cold-foam-varios" },
  { id: "cf-moka", name: "Cold Foam Moka", price: 95, category: "cold-foam-varios" },
  { id: "cf-taro", name: "Cold Foam Taro", price: 99, category: "cold-foam-varios" },
  { id: "cf-berry", name: "Cold Foam Berry", price: 99, category: "cold-foam-varios" },
  { id: "cf-banana", name: "Cold Foam Banana", price: 99, category: "cold-foam-varios" },
  { id: "cf-strawberry", name: "Cold Foam Strawberry", price: 99, category: "cold-foam-varios" },
  { id: "cf-matcha", name: "Cold Foam Matcha", price: 99, category: "cold-foam-varios" },
  { id: "malt-clasica", name: "Malteada Clásica", price: 90, category: "cold-foam-varios" },
  { id: "malt-especial", name: "Malteada Especial", price: 95, category: "cold-foam-varios" },
  { id: "shaken-tea", name: "Shaken Tea", price: 60, category: "cold-foam-varios" },
  { id: "naranjada", name: "Naranjada", price: 60, category: "cold-foam-varios" },
  { id: "limonada", name: "Limonada", price: 60, category: "cold-foam-varios" },
  { id: "black-orange", name: "Black Orange", price: 80, category: "cold-foam-varios" },
  { id: "lemon-coffee-tonic", name: "Lemon Coffee Tonic", price: 80, category: "cold-foam-varios" },
  { id: "chamoyadas", name: "Chamoyadas", price: 80, category: "cold-foam-varios" },
  { id: "smoothie-detox", name: "Smoothie Detox", price: 95, category: "cold-foam-varios" },
  { id: "smoothie-trop", name: "Smoothie Tropical", price: 95, category: "cold-foam-varios" },
  { id: "smoothie-ak", name: "Smoothie Apple Kiss", price: 95, category: "cold-foam-varios" },
  { id: "mocktails", name: "Mocktails", price: 90, category: "cold-foam-varios" },
  { id: "tizana-fria", name: "Tizana Fría", price: 80, category: "cold-foam-varios" },
  { id: "te-herbal-frio", name: "Té Herbal Frío", price: 65, category: "cold-foam-varios" },

  // AGUAS MINERALES
  { id: "agua-kirkland", name: "Agua Mineral Kirkland", price: 40, category: "cold-foam-varios" },
  { id: "agua-perrier", name: "Agua Mineral Perrier", price: 65, category: "cold-foam-varios" },

  // ALIMENTOS SALADOS
  { id: "mollete-senc", name: "Molletes Sencillos", price: 80, category: "salados" },
  { id: "mollete-jamon", name: "Molletes con Jamón", price: 95, category: "salados" },
  { id: "mollete-chorizo", name: "Molletes con Chorizo", price: 99, category: "salados" },
  { id: "chil-senc", name: "Chilaquiles Sencillos", price: 80, category: "salados" },
  { id: "chil-huevo", name: "Chilaquiles con Huevo", price: 100, category: "salados" },
  { id: "chil-pollo", name: "Chilaquiles con Pollo", price: 120, category: "salados" },
  { id: "chil-grat", name: "Chilaquiles Gratinados", price: 140, category: "salados" },
  { id: "sincronizada", name: "Sincronizada", price: 70, category: "salados" },
  { id: "chapata-pizza", name: "Chapata Pizza", price: 99, category: "salados" },
  { id: "chapata-pavo", name: "Chapata Pechuga de Pavo", price: 99, category: "salados" },
  { id: "wrap-clasico", name: "Wrap Clásico", price: 75, category: "salados" },
  { id: "wrap-pollo", name: "Wrap de Pollo", price: 85, category: "salados" },
  { id: "ensalada-bless", name: "Ensalada Bless", price: 65, category: "salados" },
  { id: "esp-sal-mex", name: "Especial Salada Mexicana", price: 120, category: "salados" },
  { id: "esp-sal-haw", name: "Especial Salada Hawaiana", price: 120, category: "salados" },
  { id: "esp-sal-veg", name: "Especial Salada Vegetariana", price: 120, category: "salados" },
  { id: "esp-sal-ita", name: "Especial Salada Italiana", price: 130, category: "salados" },
  { id: "esp-sal-bless", name: "Especial Salada Bless", price: 130, category: "salados" },

  // ALIMENTOS DULCES & REPOSTERÍA
  { id: "crepa-trad", name: "Crepa Tradicional", price: 95, category: "dulces" },
  { id: "crepa-frutal", name: "Crepa Frutal", price: 110, category: "dulces" },
  { id: "crepa-celaya", name: "Crepa Celaya", price: 115, category: "dulces" },
  { id: "crepa-esp", name: "Crepa Especial", price: 130, category: "dulces" },
  { id: "hc-clasicos", name: "Hot Cakes Clásicos", price: 80, category: "dulces" },
  { id: "hc-3leches", name: "Hot Cakes 3 Leches", price: 100, category: "dulces" },
  { id: "waffles-clasicos", name: "Waffles Clásicos", price: 85, category: "dulces" },
  { id: "pastel-dia", name: "Pastel del Día", price: 70, category: "dulces" },
  { id: "rol-canela", name: "Rol de Canela", price: 49, category: "dulces" },
  { id: "bisquet-merm", name: "Bisquet con Mermelada", price: 35, category: "dulces" },
  { id: "croissant-merm", name: "Croissant con Mermelada", price: 60, category: "dulces" },
  { id: "postre-esp-bisquet", name: "Bisquet Bless Especial", price: 90, category: "dulces" },
  { id: "postre-esp-croissant", name: "Croissant Bless Especial", price: 95, category: "dulces" },
  { id: "postre-esp-waffle", name: "Waffles Bless Especial", price: 99, category: "dulces" }
];

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

function renderizarCorteCaja() {
  const contenedorCorte = document.getElementById('tab-corte');
  if (!contenedorCorte) return;

  const ventas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  let totalEfectivo = 0;
  let totalTarjeta = 0;

  ventas.forEach(v => {
    if (v.metodo === 'Tarjeta') totalTarjeta += v.total;
    else totalEfectivo += v.total;
  });

  const totalGeneral = totalEfectivo + totalTarjeta;

  contenedorCorte.innerHTML = `
    <h2>Corte de Caja Diario</h2>
    <div style="display:flex; gap:15px; margin-top:15px;">
      <div style="background:#fff; padding:15px; border-radius:8px; flex:1; border-left:5px solid #16a34a;">
        <span>Efectivo</span>
        <h3>$${totalEfectivo.toFixed(2)}</h3>
      </div>
      <div style="background:#fff; padding:15px; border-radius:8px; flex:1; border-left:5px solid #2563eb;">
        <span>Tarjeta</span>
        <h3>$${totalTarjeta.toFixed(2)}</h3>
      </div>
      <div style="background:#fff; padding:15px; border-radius:8px; flex:1; border-left:5px solid #0284c7;">
        <span>Total Acumulado</span>
        <h3>$${totalGeneral.toFixed(2)}</h3>
      </div>
    </div>
    <br>
    <button class="btn-accion btn-cancelar" style="width: auto; padding: 12px 20px;" onclick="cerrarCajaTurno()">🔒 Cerrar Caja y Reiniciar Día</button>
  `;
}

function cerrarCajaTurno() {
  const comandasPendientes = JSON.parse(localStorage.getItem('comandasPendientes')) || [];

  if (carrito.length > 0) {
    alert("⛔ BLOQUEADO: Hay ítems cargados en el carrito actual. Cóbralos o vacía el carrito.");
    return;
  }

  if (comandasPendientes.length > 0) {
    alert(`⛔ BLOQUEADO: Tienes ${comandasPendientes.length} comanda(s) pendiente(s) por cobrar.`);
    return;
  }

  const ventas = JSON.parse(localStorage.getItem('ventasDiarias')) || [];
  if (ventas.length === 0) {
    alert("No hay ventas registradas para realizar el cierre.");
    return;
  }

  if (confirm("¿Confirmas cerrar la caja y reiniciar las ventas del día?")) {
    localStorage.removeItem('ventasDiarias');
    alert("✅ Caja cerrada con éxito.");
    renderizarCorteCaja();
  }
}

// Inicialización al cargar la página
window.onload = function() {
  renderizarMenu();
  actualizarCarritoUI();
  actualizarUIComandasPendientes();
};
