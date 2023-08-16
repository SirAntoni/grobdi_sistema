<!doctype html>
<html class="fixed js flexbox flexboxlegacy no-touch csstransforms csstransforms3d no-overflowscrolling webkit chrome mac js no-mobile-device custom-scroll sidebar-left-xs">

<head>

    <!-- Basic -->
    <meta charset="UTF-8">

    <title>HOME | SISTEMA DE GESTION GROBDI </title>

    <meta name="keywords" content="SISTEMA DE GESTION GROBDI" />
    <meta name="description" content="SISTEMA DE GESTION GROBDI">
    <meta name="author" content="Antony Culqui">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <!-- Web Fonts  -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css">

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="vendor/animate/animate.compat.css">
    <link rel="stylesheet" href="vendor/font-awesome/css/all.min.css" />
    <link rel="stylesheet" href="vendor/boxicons/css/boxicons.min.css" />
    <link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.css" />
    <link rel="stylesheet" href="vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css" />

    <!-- Theme CSS -->
    <link rel="stylesheet" href="css/theme.css" />

    <!-- Skin CSS -->
    <link rel="stylesheet" href="css/skins/default.css" />

    <!-- Theme Custom CSS -->
    <link rel="stylesheet" href="css/custom.css">

    <!-- Head Libs -->
    <script src="vendor/modernizr/modernizr.js"></script>

    <link href="img/favicon.png" rel="icon">

</head>

<body>
    <section class="body">

        <!-- start: header -->
        <header class="header">
            <div class="logo-container">
                <a href="../4.1.0" class="logo">
                    <img src="img/logo_grobdi.png" height="35" alt="Porto Admin" />
                </a>

                <div class="d-md-none toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
                    <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
                </div>

            </div>

            <!-- start: search & user box -->
            <div class="header-right">



                <span class="separator"></span>

                <div id="userbox" class="userbox">
                    <a href="#" data-bs-toggle="dropdown">
                        <figure class="profile-picture">
                            <img src="img/user.svg" alt="Joseph Doe" class="rounded-circle" data-lock-picture="img/!logged-user.jpg" />
                        </figure>
                        <div class="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
                            <span class="name">Jose</span>
                            <span class="role">Administrador</span>
                        </div>

                        <i class="fa custom-caret"></i>
                    </a>

                    <div class="dropdown-menu">
                        <ul class="list-unstyled mb-2">
                            <li class="divider"></li>
                            <li>
                                <a role="menuitem" tabindex="-1" href="pages-user-profile.html"><i class="bx bx-user-circle"></i> Cambiar contraseña</a>
                            </li>
                            <li>
                                <a role="menuitem" tabindex="-1" href="pages-signin.html"><i class="bx bx-power-off"></i> Salir</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- end: search & user box -->
        </header>
        <!-- end: header -->

        <div class="inner-wrapper">
            <!-- start: sidebar -->
            <aside id="sidebar-left" class="sidebar-left">

                <div class="sidebar-header">
                    <div class="sidebar-title">
                        Navegación
                    </div>
                    <div class="sidebar-toggle d-none d-md-block" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
                        <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
                    </div>
                </div>

                <div class="nano">
                    <div class="nano-content">
                        <nav id="menu" class="nav-main" role="navigation">

                            <ul class="nav nav-main">
                                <li>
                                    <a class="nav-link" href="layouts-default.html">
                                        <i class="bx bx-home-alt" aria-hidden="true"></i>
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li class="nav-parent">
                                    <a class="nav-link" href="#">
                                        <i class="bx bx-server" aria-hidden="true"></i>
                                        <span>Mantenimiento</span>
                                    </a>
                                    <ul class="nav nav-children">
                                        <li>
                                            <a class="nav-link" href="ecommerce-dashboard.html">
				                                   Unidad de medida
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-products-list.html">
				                                    Presentación
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-products-form.html">
				                                    Laboratorios
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-category-list.html">
				                                    Categorias
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-category-form.html">
				                                    Clientes
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-coupons-list.html">
				                                    Proveedores
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-coupons-form.html">
				                                    Tipo de cambio
				                                </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-parent">
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
                                        <li>
                                            <a class="nav-link" href="ecommerce-products-list.html">
				                                    Etiquetas
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-products-form.html">
				                                    Recetas
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-category-list.html">
				                                    Insumo
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-category-form.html">
				                                    Envase
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-coupons-list.html">
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
                                <li class="nav-parent">
                                    <a class="nav-link" href="#">
                                        <i class="bx bx-menu" aria-hidden="true"></i>
                                        <span>Movimientos</span>
                                    </a>
                                    <ul class="nav nav-children">
                                        <li>
                                            <a class="nav-link" href="ecommerce-dashboard.html">
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
                                <li class="nav-parent">
                                    <a class="nav-link" href="#">
                                        <i class="bx bx-server" aria-hidden="true"></i>
                                        <span>Pedidos</span>
                                    </a>
                                    <ul class="nav nav-children">
                                        <li>
                                            <a class="nav-link" href="ecommerce-dashboard.html">
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
                                <li class="nav-parent">
                                    <a class="nav-link" href="#">
                                        <i class="bx bx-server" aria-hidden="true"></i>
                                        <span>Visitas</span>
                                    </a>
                                    <ul class="nav nav-children">
                                        <li>
                                            <a class="nav-link" href="ecommerce-dashboard.html">
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
                                        <li>
                                            <a class="nav-link" href="ecommerce-products-list.html">
				                                    Centros salud
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-products-list.html">
				                                    Distritos
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-products-list.html">
				                                    Zonas
				                                </a>
                                        </li>
                                        <li>
                                            <a class="nav-link" href="ecommerce-products-list.html">
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
                                <li class="nav-parent">
                                    <a class="nav-link" href="#">
                                        <i class="bx bxs-dollar-circle" aria-hidden="true"></i>
                                        <span>Facturación</span>
                                    </a>
                                    <ul class="nav nav-children">
                                        <li>
                                            <a class="nav-link" href="ecommerce-dashboard.html">
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
            <!-- end: sidebar -->

            <section role="main" class="content-body">
                <header class="page-header">
                <?php  
                            
                            $view = $_GET['view'];
                
                            if($_GET['view'] == '') {
                                $view = 'dashboard';
                            }

                            switch($view){

                                case 'unidad-medida':
                                    echo '<h2>Unidad de medida</h2>';
                                    break;
                                case 'proveedores':
                                    echo '<h2>Proveedores</h2>';
                                    break;
                                default:
                                    echo '';
                                    break;
                            }

                            ?>
                    

                    <div class="right-wrapper text-end">
                        <ol class="breadcrumbs">
                            <li>
                                <a href="index.html">
                                    <i class="bx bx-home-alt"></i>
                                </a>
                            </li>

                            <?php  

                            switch($view){

                                case 'unidad-medida':
                                    echo '<li><span>Unidad de medida</span></li>';
                                    break;
                                case 'proveedores':
                                    echo '<li><span>Proveedores</span></li>';
                                    break;
                                default:
                                    echo '';
                                    break;
                            }

                            
                            
                            ?>
                    

                            

                            <!--li><span>Blank Page</span></li-->

                        </ol>

                        <a class="sidebar-right-toggle" data-open="sidebar-right"><i class="fas fa-chevron-left"></i></a>
                    </div>
                </header>

                <!-- start: page -->

                
                <?php

                $view = $_GET['view'];
                
                if($_GET['view'] == '') {
                    $view = 'dashboard';
                }

                switch($view) {
                    case 'unidad-medida':
                        require 'view/unidad-medida.php';
                        break;
                    case 'proveedores':
                        require 'view/proveedores.php';
                        break;
                    default:
                        require 'view/dashboard.php';
                        break;
                }
                
                ?>
                <!-- end: page -->
            </section>
        </div>

        <aside id="sidebar-right" class="sidebar-right">
            <div class="nano">
                <div class="nano-content">
                    <a href="#" class="mobile-close d-md-none">
							Collapse <i class="fas fa-chevron-right"></i>
						</a>

                    <div class="sidebar-right-wrapper">

                        <div class="sidebar-widget widget-calendar">
                            <h6>Upcoming Tasks</h6>
                            <div data-plugin-datepicker data-plugin-skin="dark"></div>

                            <ul>
                                <li>
                                    <time datetime="2021-04-19T00:00+00:00">04/19/2021</time>
                                    <span>Company Meeting</span>
                                </li>
                            </ul>
                        </div>

                        <div class="sidebar-widget widget-friends">
                            <h6>Friends</h6>
                            <ul>
                                <li class="status-online">
                                    <figure class="profile-picture">
                                        <img src="img/!sample-user.jpg" alt="Joseph Doe" class="rounded-circle">
                                    </figure>
                                    <div class="profile-info">
                                        <span class="name">Joseph Doe Junior</span>
                                        <span class="title">Hey, how are you?</span>
                                    </div>
                                </li>
                                <li class="status-online">
                                    <figure class="profile-picture">
                                        <img src="img/!sample-user.jpg" alt="Joseph Doe" class="rounded-circle">
                                    </figure>
                                    <div class="profile-info">
                                        <span class="name">Joseph Doe Junior</span>
                                        <span class="title">Hey, how are you?</span>
                                    </div>
                                </li>
                                <li class="status-offline">
                                    <figure class="profile-picture">
                                        <img src="img/!sample-user.jpg" alt="Joseph Doe" class="rounded-circle">
                                    </figure>
                                    <div class="profile-info">
                                        <span class="name">Joseph Doe Junior</span>
                                        <span class="title">Hey, how are you?</span>
                                    </div>
                                </li>
                                <li class="status-offline">
                                    <figure class="profile-picture">
                                        <img src="img/!sample-user.jpg" alt="Joseph Doe" class="rounded-circle">
                                    </figure>
                                    <div class="profile-info">
                                        <span class="name">Joseph Doe Junior</span>
                                        <span class="title">Hey, how are you?</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </aside>
    </section>

    <!-- Vendor -->
    <script src="vendor/jquery/jquery.js"></script>
    <script src="vendor/jquery-browser-mobile/jquery.browser.mobile.js"></script>
    <script src="vendor/popper/umd/popper.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
    <script src="vendor/common/common.js"></script>
    <script src="vendor/nanoscroller/nanoscroller.js"></script>
    <script src="vendor/magnific-popup/jquery.magnific-popup.js"></script>
    <script src="vendor/jquery-placeholder/jquery.placeholder.js"></script>

    <!-- Specific Page Vendor -->

    <!-- Theme Base, Components and Settings -->
    <script src="js/theme.js"></script>

    <!-- Theme Custom -->
    <script src="js/custom.js"></script>

    <!-- Theme Initialization Files -->
    <script src="js/theme.init.js"></script>

    <script>
        $(function(){
            listar_unidades();
            listar_proveedores();
        })


        let listar_unidades = function(){
            $.ajax({
                url:'controller/unidad-medida.php',
                method:'GET',
                success:function(response){
                    const data = JSON.parse(response);
                    let html = ``;
                    data.forEach( unidad =>{
                        html = html + `<tr> <td>${unidad['id']}</td><td>${unidad['nombre']}</td><td>${unidad['estado']}</td> <td>${unidad['fecha_creacion']}</td><td width='30px' class="actions-hover actions-fade">
                                <a href=""><i class="fas fa-pencil-alt"></i></a>
                                <a href="" class="delete-row"><i class="far fa-trash-alt"></i></a>
                            </td></tr>`;
                    })

                    $('#table-unidad-medida').html(html);
                }
            })
        }

        let listar_proveedores = function(){
            $.ajax({
                url:'controller/proveedores.php',
                method:'GET',
                success:function(response){
                    const data = JSON.parse(response);
                    let html = ``;
                    data.forEach( unidad =>{
                        html = html + `<tr> <td>${unidad['documento']}</td><td>${unidad['nombre']}</td><td>${unidad['telefono']}</td> <td>${unidad['observacion']}</td><td width='30px' class="actions-hover actions-fade">
                                <a href=""><i class="fas fa-pencil-alt"></i></a>
                                <a href="" class="delete-row"><i class="far fa-trash-alt"></i></a>
                            </td></tr>`;
                    })

                    $('#table-proveedores').html(html);
                }
            })
        }

    </script>

</body>

</html>