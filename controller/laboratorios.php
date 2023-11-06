<?php
require "../config/conexion.php";
require "../model/laboratorios.php";

$laboratorios = new Laboratorios();

$codigo = '';
$opcion = '';
$nombre = '';
$ruc = '';
$contacto = '';

if(isset($_POST['opcion'])) $opcion = $_POST['opcion'];
if(isset($_POST['codigo'])) $codigo = $_POST['codigo'];
if(isset($_POST['nombre'])) $nombre = $_POST['nombre'];
if(isset($_POST['ruc'])) $ruc = $_POST['ruc'];
if(isset($_POST['contacto'])) $contacto = $_POST['contacto'];

switch ($opcion) {
    case 'agregar':
        echo json_encode($laboratorios->crear_laboratorio($ruc,$nombre,$contacto));
        break;
    case 'editar':
        echo json_encode($laboratorios->editar_laboratorio($codigo,$ruc,$nombre,$contacto));
        break;
    case 'eliminar':
        echo json_encode($laboratorios->eliminar_laboratorio($codigo));
        break;
    default:
        echo json_encode($laboratorios->cargar_laboratorios());
        break;
}

?>