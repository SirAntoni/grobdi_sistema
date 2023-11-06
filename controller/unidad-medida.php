<?php
require "../config/conexion.php";
require "../model/unidad-medida.php";

$unidades = new Unidades();

$codigo = '';
$opcion = '';
$nombre = '';

if(isset($_POST['opcion'])) $opcion = $_POST['opcion'];
if(isset($_POST['codigo'])) $codigo = $_POST['codigo'];
if(isset($_POST['nombre'])) $nombre = $_POST['nombre'];

switch ($opcion) {
    case 'agregar':
        echo json_encode($unidades->crear_unidad_medida($nombre));
        break;
    case 'editar':
        echo json_encode($unidades->editar_unidad_medida($codigo,$nombre));
        break;
    case 'eliminar':
        echo json_encode($unidades->eliminar_unidad_medida($codigo));
        break;
    default:
        echo json_encode($unidades->cargar_unidades());
        break;
}

?>