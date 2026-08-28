// Arreglo/Objeto con la información de los productos por categoría
const menuData = {
    friasCafe: [
        { nombre: "Iced Americano", descripcion: "Espresso doble con agua y hielo", precio: 45 },
        { nombre: "Iced Latte", descripcion: "Espresso con leche fría y hielo", precio: 55 },
        { nombre: "Iced Mocha", descripcion: "Espresso, leche, salsa de chocolate y hielo", precio: 60 },
        { nombre: "Cold Brew Traditional", descripcion: "Café extraído en frío durante 12 horas", precio: 50 }
    ],
    friasSinCafe: [
        { nombre: "Té Helado (Black / Green)", descripcion: "Infanfusión fría natural con toque cítrico", precio: 40 },
        { nombre: "Matcha Latte Frío", descripcion: "Té matcha ceremonial con leche y hielo", precio: 65 },
        { nombre: "Chai Latte Frío", descripcion: "Concentrado de especias chai con leche fría", precio: 60 }
    ],
    // NUEVO ARREGLO DE PRODUCTOS DE AGUA MINERAL Y PREPARADAS
    friasMinerales: [
        { nombre: "Agua Mineral Natural", descripcion: "Agua embotellada con gas 355ml", precio: 30 },
        { nombre: "Agua Mineral Preparada", descripcion: "Con sal, limón y hielo", precio: 40 },
        { nombre: "Naranjada / Limonada", descripcion: "Mineral o natural recién hecha", precio: 45 },
        { nombre: "Rusa", descripcion: "Agua mineral con limón, sal y refresco de toronja", precio: 45 }
    ],
    calientesCafe: [
        { nombre: "Espresso", descripcion: "Extracción concentrada de café", precio: 35 },
        { nombre: "Americano", descripcion: "Espresso diluido en agua caliente", precio: 40 },
        { nombre: "Capuchino", descripcion: "Espresso con leche vaporizada y abundante espuma", precio: 50 }
    ]
};

// Función para renderizar los productos en sus respectivos contenedores HTML
function renderizarMenu() {
    // Renderizar Bebidas Frías con Café
    const gridFriasCafe = document.getElementById("grid-frias-cafe");
    if (gridFriasCafe) {
        gridFriasCafe.innerHTML = menuData.friasCafe.map(producto => `
            <div class="producto-card">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <span class="precio">$${producto.precio}</span>
            </div>
        `).join("");
    }

    // Renderizar Bebidas Frías Sin Café
    const gridFriasSinCafe = document.getElementById("grid-frias-sincafe");
    if (gridFriasSinCafe) {
        gridFriasSinCafe.innerHTML = menuData.friasSinCafe.map(producto => `
            <div class="producto-card">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <span class="precio">$${producto.precio}</span>
            </div>
        `).join("");
    }

    // NUEVO: Renderizar Agua Mineral / Preparadas
    const gridFriasMinerales = document.getElementById("grid-frias-minerales");
    if (gridFriasMinerales) {
        gridFriasMinerales.innerHTML = menuData.friasMinerales.map(producto => `
            <div class="producto-card">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <span class="precio">$${producto.precio}</span>
            </div>
        `).join("");
    }

    // Renderizar Bebidas Calientes
    const gridCalientesCafe = document.getElementById("grid-calientes-cafe");
    if (gridCalientesCafe) {
        gridCalientesCafe.innerHTML = menuData.calientesCafe.map(producto => `
            <div class="producto-card">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <span class="precio">$${producto.precio}</span>
            </div>
        `).join("");
    }
}

// Ejecutar la función una vez cargado el DOM
document.addEventListener("DOMContentLoaded", () => {
    renderizarMenu();
});
