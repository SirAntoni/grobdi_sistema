<?php
require "../config/conexion.php";
require "../model/centros-salud.php";

$centrosSalud = new CentrosSalud();

$pagina = 1;
$opcion = '';
$codigo = '';
$distrito = '';
$observacion = '';
$nombre = '';

if(isset($_GET["pagina"])) $pagina = $_GET["pagina"];

if(isset($_POST["codigo"])) $codigo = $_POST["codigo"];

if(isset($_POST["opcion"])) $opcion = $_POST["opcion"];

if(isset($_POST["observacion"])) $observacion = $_POST["observacion"];

if(isset($_POST["distrito"])) $distrito = $_POST["distrito"];

if(isset($_POST["nombre"])) $nombre = $_POST["nombre"];

switch($opcion){
    case 'agregar':
        echo json_encode($centrosSalud->crear_centro_salud($nombre,$distrito,$observacion));
        break;
    case 'editar':
        echo json_encode($centrosSalud->editar_centro_salud($codigo,$nombre,$distrito,$observacion));
        break;
    case 'eliminar':
        echo json_encode($centrosSalud->eliminar_centro_salud($codigo));
        break;
    default:
        echo json_encode($centrosSalud->get_centros_salud($pagina));
        break;
}



?>