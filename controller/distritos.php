<?php
require "../config/conexion.php";
require "../model/distritos.php";

$distritos = new Distritos();

$codigo = '';
$opcion = '';
$nombre = '';
$zona = '';
$ubigeo = '';

if(isset($_POST['opcion'])) $opcion = $_POST['opcion'];
if(isset($_POST['codigo'])) $codigo = $_POST['codigo'];
if(isset($_POST['nombre'])) $nombre = $_POST['nombre'];
if(isset($_POST['zona'])) $zona = $_POST['zona'];
if(isset($_POST['ubigeo'])) $ubigeo = $_POST['ubigeo'];

switch ($opcion) {
    case 'agregar':
        echo json_encode($distritos->crear_distrito($nombre,$zona,$ubigeo));
        break;
    case 'editar':
        echo json_encode($distritos->editar_distrito($codigo,$nombre,$zona,$ubigeo));
        break;
    case 'eliminar':
        echo json_encode($distritos->eliminar_distrito($codigo));
        break;
    default:
        echo json_encode($distritos->cargar_distritos());
        break;
}

?>