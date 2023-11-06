<?php
require "../config/conexion.php";
require "../model/categorias.php";

$categorias = new Categorias();

$codigo = '';
$opcion = '';
$nombre = '';

if(isset($_POST['opcion'])) $opcion = $_POST['opcion'];
if(isset($_POST['codigo'])) $codigo = $_POST['codigo'];
if(isset($_POST['nombre'])) $nombre = $_POST['nombre'];

switch ($opcion) {
    case 'agregar':
        echo json_encode($categorias->crear_categoria($nombre));
        break;
    case 'editar':
        echo json_encode($categorias->editar_categoria($codigo,$nombre));
        break;
    case 'eliminar':
        echo json_encode($categorias->eliminar_categoria($codigo));
        break;
    default:
        echo json_encode($categorias->cargar_categorias());
        break;
}

?>