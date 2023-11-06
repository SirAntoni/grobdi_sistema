<?php
require "../config/conexion.php";
require "../model/presentacion.php";

$presentacion = new Presentacion();

$codigo = '';
$opcion = '';
$nombre = '';

if(isset($_POST['opcion'])) $opcion = $_POST['opcion'];
if(isset($_POST['codigo'])) $codigo = $_POST['codigo'];
if(isset($_POST['nombre'])) $nombre = $_POST['nombre'];

switch ($opcion) {
    case 'agregar':
        echo json_encode($presentacion->crear_presentacion($nombre));
        break;
    case 'editar':
        echo json_encode($presentacion->editar_presentacion($codigo,$nombre));
        break;
    case 'eliminar':
        echo json_encode($presentacion->eliminar_presentacion($codigo));
        break;
    default:
        echo json_encode($presentacion->cargar_presentaciones());
        break;
}

?>