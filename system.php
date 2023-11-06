<?php
session_start();

if(!isset($_SESSION['usuario'])){
    header('Location:./');
}

$view = $_GET['view'];
                
if($_GET['view'] == '') {
    $view = 'dashboard';
}


?>
<!doctype html>
<html
    class="fixed js flexbox flexboxlegacy no-touch csstransforms csstransforms3d no-overflowscrolling webkit chrome mac js no-mobile-device custom-scroll sidebar-left-xs">

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
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800|Shadows+Into+Light"
        rel="stylesheet" type="text/css">

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

                <div class="d-md-none toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html"
                    data-fire-event="sidebar-left-opened">
                    <i class="fas fa-bars" aria-label="Toggle sidebar"></i>
                </div>

            </div>

            <!-- start: search & user box -->
            <div class="header-right">



                <span class="separator"></span>

                <div id="userbox" class="userbox">
                    <a href="#" data-bs-toggle="dropdown">
                        <figure class="profile-picture">
                            <img src="img/user.svg" alt="Joseph Doe" class="rounded-circle"
                                data-lock-picture="img/!logged-user.jpg" />
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
                                <a role="menuitem" tabindex="-1" href="pages-user-profile.html"><i
                                        class="bx bx-user-circle"></i> Cambiar contraseña</a>
                            </li>
                            <li>
                                <a role="menuitem" tabindex="-1" href="logout.php"><i class="bx bx-power-off"></i>
                                    Salir</a>
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
            <?php require('include/sidebar-left.php') ?>
            <!-- end: sidebar -->

            <section role="main" class="content-body">
                <header class="page-header">
                    <?php  
                            
                            switch($view){

                                case 'unidad-medida':
                                    echo '<h2>Unidad de medida</h2>';
                                    break;
                                case 'presentacion':
                                    echo '<h2>Presentación</h2>';
                                    break;
                                case 'laboratorios':
                                    echo '<h2>Laboratorios</h2>';
                                    break;
                                case 'proveedores':
                                    echo '<h2>Proveedores</h2>';
                                    break;
                                case 'categorias':
                                    echo '<h2>Categorias</h2>';
                                    break;
                                case 'clientes':
                                    echo '<h2>Clientes</h2>';
                                    break;
                                case 'proveedores':
                                    echo '<h2>Proveedores</h2>';
                                    break;
                                case 'registro-pedido':
                                    echo '<h2>Registro de pedidos</h2>';
                                    break;
                                case 'zonas':
                                    echo '<h2>Zonas</h2>';
                                    break;
                                case 'distritos':
                                    echo '<h2>Distritos</h2>';
                                    break;
                                case 'visitadores':
                                    echo '<h2>Visitadores</h2>';
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
                                case 'presentacion':
                                    echo '<li><span>Presentación</span></li>';
                                    break;
                                case 'laboratorios':
                                    echo '<li><span>Laboratorios</span></li>';
                                    break;
                                case 'presentacion':
                                    echo '<li><span>Presentación</span></li>';
                                    break;
                                case 'categorias':
                                    echo '<li><span>Categorias</span></li>';
                                    break;
                                case 'clientes':
                                    echo '<li><span>Clientes</span></li>';
                                    break;
                                case 'proveedores':
                                    echo '<li><span>Proveedores</span></li>';
                                    break;
                                case 'registro-pedido':
                                    echo '<li><span>Registro de pedidos</span></li>';
                                    break;
                                case 'distritos':
                                    echo '<li><span>Visitas</span></li><li><span>Distritos</span></li>';
                                    break;
                                case 'zonas':
                                    echo '<li><span>Visitas</span></li><li><span>Zonas</span></li>';
                                    break;
                                case 'visitadores':
                                    echo '<li><span>Visitas</span></li><li><span>Visitadores</span></li>';
                                    break;
                                default:
                                    echo '';
                                    break;
                            }

                            
                            
                            ?>




                            <!--li><span>Blank Page</span></li-->

                        </ol>

                        <a class="sidebar-right-toggle" data-open="sidebar-right"><i
                                class="fas fa-chevron-left"></i></a>
                    </div>
                </header>

                <!-- start: page -->


                <?php

                switch($view) {
                    case 'unidad-medida':
                        require 'view/unidad-medida.php';
                        break;
                    case 'presentacion':
                        require 'view/presentacion.php';
                        break;
                    case 'laboratorios':
                        require 'view/laboratorios.php';
                        break;
                    case 'categorias':
                        require 'view/categorias.php';
                        break;
                    case 'clientes':
                        require 'view/clientes.php';
                        break;
                    case 'detalle-cliente':
                        require 'view/detalle-cliente.php';
                        break;
                    case 'proveedores':
                        require 'view/proveedores.php';
                        break;
                    case 'doctores':
                        require 'view/doctores.php';
                            break;
                    case 'detalle-doctor':
                        require 'view/detalle-doctor.php';
                            break;
                    case 'documentos-electronicos':
                        require 'view/documentos-electronicos.php';
                            break;
                    case 'insumos':
                        require 'view/insumos.php';
                            break;
                    case 'envases':
                        require 'view/envases.php';
                            break;
                    case 'bases':
                        require 'view/bases.php';
                            break;
                    case 'etiquetas':
                        require 'view/etiquetas.php';
                            break;
                    case 'recetas':
                        require 'view/recetas.php';
                            break;
                    case 'detalle-receta':
                        require 'view/detalle-receta.php';
                            break;
                    case 'registro-pedido':
                        require 'view/registro-pedido.php';
                            break;
                    case 'zonas':
                        require 'view/zonas.php';
                            break;
                    case 'distritos':
                        require 'view/distritos.php';
                            break;
                    case 'visitadores':
                        require 'view/visitadores.php';
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
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- Specific Page Vendor -->

    <!-- Theme Base, Components and Settings -->
    <script src="js/theme.js"></script>

    <!-- Theme Custom -->
    <script src="js/custom.js"></script>

    <!-- APP JS -->
    <script src="js/app.js"></script>

    <!-- Theme Initialization Files -->
    <script src="js/theme.init.js"></script>
    <script src="js/modals.js"></script>


</body>

</html>