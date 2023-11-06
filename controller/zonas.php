<?php
require "../config/conexion.php";
require "../model/zonas.php";

$zonas = new Zonas();

$codigo = '';
$opcion = '';
$nombre = '';
$visitador = '';
$observacion = '';

if(isset($_POST['opcion'])) $opcion = $_POST['opcion'];
if(isset($_POST['codigo'])) $codigo = $_POST['codigo'];
if(isset($_POST['nombre'])) $nombre = $_POST['nombre'];
if(isset($_POST['visitador'])) $visitador = $_POST['visitador'];
if(isset($_POST['observacion'])) $observacion = $_POST['observacion'];

switch ($opcion) {
    case 'agregar':
        echo json_encode($zonas->crear_zona($nombre,$visitador,$observacion));
        break;
    case 'editar':
        echo json_encode($zonas->editar_zona($codigo,$nombre,$visitador,$observacion));
        break;
    case 'eliminar':
        echo json_encode($zonas->eliminar_zona($codigo));
        break;
    default:
        echo json_encode($zonas->cargar_zonas());
        break;
}

?>