<aside id="sidebar-left" class="sidebar-left">

    <div class="sidebar-header">
        <div class="sidebar-title">
            Navegación
        </div>
        <div class="sidebar-toggle d-none d-md-block" data-toggle-class="sidebar-left-collapsed" data-target="html"
            data-fire-event="sidebar-left-toggle">
            <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
        </div>
    </div>

    <div class="nano">
        <div class="nano-content">
            <nav id="menu" class="nav-main" role="navigation">

                <ul class="nav nav-main">
                    <li <?php echo ($view === 'dashboard') ? 'class="nav-active nav-expanded"':''; ?>>
                        <a class="nav-link" href="system?view=dashboard">
                            <i class="bx bx-home-alt" aria-hidden="true"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-parent <?php echo ($view === 'unidad-medida' || $view === 'presentacion' || $view === 'laboratorios' || $view === 'categorias' || $view === 'clientes' || $view === 'proveedores' || $view === 'tipo-cambio' || $view === 'detalle-cliente' ) ? 'nav-active nav-expanded':'' ?>">
                        <a class="nav-link" href="#">
                            <i class="bx bx-server" aria-hidden="true"></i>
                            <span>Mantenimiento</span>
                        </a>
                        <ul class="nav nav-children">
                            <li <?php echo ($view === 'unidad-medida') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link active" href="system?view=unidad-medida">
                                    Unidad de medida
                                </a>
                            </li>
                            <li <?php echo ($view === 'presentacion') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=presentacion">
                                    Presentación
                                </a>
                            </li>
                            <li <?php echo ($view === 'laboratorios') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=laboratorios">
                                    Laboratorios
                                </a>
                            </li>
                            <li <?php echo ($view === 'categorias') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=categorias">
                                    Categorias
                                </a>
                            </li>
                            <li <?php echo ($view === 'clientes' || $view === 'detalle-cliente') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=clientes">
                                    Clientes
                                </a>
                            </li>
                            <li <?php echo ($view === 'proveedores') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=proveedores">
                                    Proveedores
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-parent <?php echo ($view === 'insumos' || $view === 'envases' || $view === 'bases' || $view === 'etiquetas' || $view === 'recetas' || $view === 'detalle-receta') ? 'nav-active nav-expanded':'' ?>">
                        <a class="nav-link" href="#">
                            <i class="bx bxl-product-hunt" aria-hidden="true"></i>
                            <span>Productos</span>
                        </a>
                        <ul class="nav nav-children">
                            <li>
                                <a class="nav-link" href="ecommerce-dashboard.html">
                                    Tabla Maestra
                                </a>
                            </li>
                            <li <?php echo ($view === 'etiquetas') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=etiquetas">
                                    Etiquetas
                                </a>
                            </li>
                            <li <?php echo ($view === 'recetas' || $view === 'detalle-receta') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=recetas">
                                    Recetas
                                </a>
                            </li>
                            <li <?php echo ($view === 'insumos') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=insumos">
                                    Insumo
                                </a>
                            </li>
                            <li <?php echo ($view === 'envases') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=envases">
                                    Envase
                                </a>
                            </li>
                            <li <?php echo ($view === 'bases') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=bases">
                                    Bases
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-coupons-form.html">
                                    Delivery
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-coupons-form.html">
                                    Codigos
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-parent <?php echo ($view === 'ventas' || $view === 'registrar-venta') ? 'nav-active nav-expanded':'' ?>">
                        <a class="nav-link" href="#">
                            <i class="bx bx-menu" aria-hidden="true"></i>
                            <span>Movimientos</span>
                        </a>
                        <ul class="nav nav-children">
                            <li <?php echo ($view === 'ventas' || $view === 'registrar-venta') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link"  href="system?view=ventas">
                                    Ventas
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Orden de producción
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-form.html">
                                    Guîa de ingreso
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-category-list.html">
                                    Guía de salida
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-category-form.html">
                                    Compras
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-coupons-list.html">
                                    Transferencias y salidas
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-coupons-form.html">
                                    Inventario ciclico
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-parent">
                        <a class="nav-link" href="#">
                            <i class="bx bx-plus-medical" aria-hidden="true"></i>
                            <span>Consultorio</span>
                        </a>
                        <ul class="nav nav-children">
                            <li>
                                <a class="nav-link" href="ecommerce-dashboard.html">
                                    Pacientes
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Consultas v2
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-form.html">
                                    Recetas
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-parent <?php echo ($view === 'pedidos' || $view === 'registrar-pedido') ? 'nav-active nav-expanded':'' ?>">
                        <a class="nav-link" href="#">
                            <i class="bx bx-server" aria-hidden="true"></i>
                            <span>Pedidos</span>
                        </a>
                        <ul class="nav nav-children">
                            <li <?php echo ($view === 'pedidos' || $view === 'registrar-pedido') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=pedidos">
                                    Registro
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Consultas
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-parent <?php echo ($view === 'doctores' || $view === 'detalle_doctor' || $view === 'zonas' || $view === 'distritos' || $view === 'visitadores' || $view === 'centros-salud' ) ? 'nav-active nav-expanded':'' ?>">
                        <a class="nav-link" href="#">
                            <i class="bx bx-server" aria-hidden="true"></i>
                            <span>Visitas</span>
                        </a>
                        <ul class="nav nav-children">
                            <li <?php echo ($view === 'doctores' || $view === 'detalle_doctor') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=doctores">
                                    Doctores
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Onomasticos
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Doctores anulados
                                </a>
                            </li>
                            <li <?php echo ($view === 'centros-salud') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=centros-salud">
                                    Centros salud
                                </a>
                            </li>
                            <li <?php echo ($view === 'distritos') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link"  href="system?view=distritos">
                                    Distritos
                                </a>
                            </li>
                            <li <?php echo ($view === 'zonas') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=zonas">
                                    Zonas
                                </a>
                            </li>
                            <li  <?php echo ($view === 'visitadores') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=visitadores">
                                    Visitador
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Rutas
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-parent <?php echo ($view === 'documentos-electronicos') ? 'nav-active nav-expanded':'' ?>">
                        <a class="nav-link" href="#">
                            <i class="bx bxs-dollar-circle" aria-hidden="true"></i>
                            <span>Facturación</span>
                        </a>
                        <ul class="nav nav-children">
                            <li <?php echo ($view === 'documentos-electronicos') ? 'class="nav-active"' : ''; ?>>
                                <a class="nav-link" href="system?view=documentos-electronicos">
                                    Doc. Electronicos
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Nota de crédito
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Comunicaciones de baja
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Resumen y bajas
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    XML Masivo
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li class="nav-parent">
                        <a class="nav-link" href="#">
                            <i class="bx bxs-report" aria-hidden="true"></i>
                            <span>Reportes</span>
                        </a>
                        <ul class="nav nav-children">
                            <li>
                                <a class="nav-link" href="ecommerce-dashboard.html">
                                    Resumen
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Resumen v2
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Venta vs Cuota
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Comparativo ventas
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Comparativos
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Evolutivo
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Mas vendidos
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Ventas consultas
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Ventas visitador
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Varios
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Abonos
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Deuda por cobrar
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Articulos x doctores
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="ecommerce-products-list.html">
                                    Saldos
                                </a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a class="nav-link" href="layouts-default.html">
                            <i class="bx bxs-user-circle" aria-hidden="true"></i>
                            <span>Usuarios</span>
                        </a>
                    </li>
                    <li>
                        <a class="nav-link" href="layouts-default.html">
                            <i class="bx bx-log-out" aria-hidden="true"></i>
                            <span>Salir</span>
                        </a>
                    </li>
                </ul>
            </nav>




        </div>

        <script>
        // Maintain Scroll Position
        if (typeof localStorage !== 'undefined') {
            if (localStorage.getItem('sidebar-left-position') !== null) {
                var initialPosition = localStorage.getItem('sidebar-left-position'),
                    sidebarLeft = document.querySelector('#sidebar-left .nano-content');

                sidebarLeft.scrollTop = initialPosition;
            }
        }
        </script>

    </div>

</aside>