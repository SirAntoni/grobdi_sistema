<?php
require "../config/conexion.php";
require "../model/visitadores.php";

$visitadores = new Visitadores();

$codigo = '';
$opcion = '';
$nombre = '';
$telefono = '';
$correo = '';
$cuota = '';
$observacion = '';

if(isset($_POST['opcion'])) $opcion = $_POST['opcion'];
if(isset($_POST['codigo'])) $codigo = $_POST['codigo'];
if(isset($_POST['nombre'])) $nombre = $_POST['nombre'];
if(isset($_POST['telefono'])) $telefono = $_POST['telefono'];
if(isset($_POST['correo'])) $correo = $_POST['correo'];
if(isset($_POST['cuota'])) $cuota = $_POST['cuota'];
if(isset($_POST['observacion'])) $observacion = $_POST['observacion'];

switch ($opcion) {
    case 'agregar':
        echo json_encode($visitadores->crear_visitador($nombre,$telefono,$correo,$cuota,$observacion));
        break;
    case 'editar':
        echo json_encode($visitadores->editar_visitador($codigo,$nombre,$telefono,$correo,$cuota,$observacion));
        break;
    case 'eliminar':
        echo json_encode($visitadores->eliminar_visitador($codigo));
        break;
    default:
        echo json_encode($visitadores->cargar_visitadores());
        break;
}

?>