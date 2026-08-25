<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>POS Cafetería de Especialidad</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Navegación Principal -->
  <nav class="navbar">
    <div class="nav-left">
      <button class="btn-tab active" onclick="cambiarPestana('pos', event)">☕ Punto de Venta</button>
      <button class="btn-tab" onclick="cambiarPestana('inventario', event)">📦 Inventario</button>
      <button class="btn-tab" onclick="cambiarPestana('corte', event)">📊 Corte de Caja</button>
    </div>
    <div class="nav-right">
      <!-- Botón para ver Comandas Pendientes en lugar de tenerlas expuestas -->
      <button class="btn-comandas-pendientes" onclick="abrirModalComandas()">
        ☁️ Comandas Pendientes <span id="badgeComandasCount" class="badge">0</span>
      </button>
    </div>
  </nav>

  <!-- PESTAÑA 1: PUNTO DE VENTA -->
  <main id="tab-pos" class="seccion active">
    <div class="pos-grid">
      
      <!-- Catálogo de Bebidas -->
      <section class="panel-catalogo">
        <h2>Bebidas Reales</h2>
        
        <!-- Opciones de leche -->
        <div class="modificadores">
          <label for="selectLeche"><strong>Tipo de Leche:</strong></label>
          <select id="selectLeche">
            <option value="Entera">Entera ($0)</option>
            <option value="Deslactosada">Deslactosada ($0)</option>
            <option value="Avena">Avena (+$10)</option>
            <option value="Almendra">Almendra (+$10)</option>
          </select>
        </div>

        <div id="gridProductos" class="grid-productos">
          <!-- Se cargan dinámicamente desde JS -->
        </div>
      </section>

      <!-- Panel de Orden / Comanda Actual -->
      <section class="panel-orden">
        <h2>Comanda Actual <span id="numComandaTxt" style="font-size:14px; color:#0284c7;"></span></h2>
        <div id="listaCarrito" class="lista-carrito"></div>

        <div class="footer-orden">
          <div class="monto-total">
            <span>TOTAL:</span>
            <strong id="montoTotal">$0.00</strong>
          </div>

          <button class="btn-guardar-comanda" onclick="guardarComandaPendiente()">☁️ Guardar / Nueva Comanda</button>
          <button class="btn-cobrar" onclick="abrirModalPago()">💳 Cobrar Orden</button>
        </div>
      </section>

    </div>
  </main>

  <!-- PESTAÑA 2: INVENTARIO -->
  <main id="tab-inventario" class="seccion">
    <h2>Control de Inventario</h2>
    <p style="margin-top:10px; color:#64748b;">Próximamente: Consulta y actualización de insumos en tiempo real.</p>
  </main>

  <!-- PESTAÑA 3: CORTE DE CAJA -->
  <main id="tab-corte" class="seccion">
    <!-- Generado desde JS -->
  </main>

  <!-- MODAL 1: Comandas Pendientes -->
  <div id="modalComandas" class="modal-overlay">
    <div class="modal-content modal-ancho">
      <h3>☁️ Comandas Pendientes por Cobrar</h3>
      <div id="listaComandasModal" class="lista-comandas-modal">
        <!-- Se renderizan dinámicamente -->
      </div>
      <button class="btn-cancelar" style="margin-top:15px;" onclick="cerrarModalComandas()">Cerrar</button>
    </div>
  </div>

  <!-- MODAL 2: Método de Pago -->
  <div id="modalPago" class="modal-overlay">
    <div class="modal-content">
      <h3>Selecciona Método de Pago</h3>
      <p id="modalMontoTxt" class="modal-monto">$0.00</p>
      
      <div class="metodos-pago">
        <button class="btn-pago efectivo" onclick="finalizarCobro('Efectivo')">💵 Efectivo</button>
        <button class="btn-pago tarjeta" onclick="finalizarCobro('Tarjeta')">💳 Tarjeta</button>
      </div>
      
      <button class="btn-cancelar" onclick="cerrarModalPago()">Cancelar</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
