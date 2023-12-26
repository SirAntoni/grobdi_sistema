<?php
require "../config/conexion.php";
require "../model/proveedores.php";

$proveedores = new Proveedores();

$pagina = 1;
$opcion = '';
$id = '';
$ruc = '';
$razon_social = '';
$direccion = '';
$correo = '';
$correo_cpe = '';
$telefono1 = '';
$telefono2 = '';
$persona_contacto = '';
$observacion = '';
$estado = 1;

if(isset($_GET["pagina"])) $pagina = $_GET["pagina"];
if(isset($_POST["opcion"])) $opcion = $_POST["opcion"];
if(isset($_POST["codigo"])) $id = $_POST["codigo"];
if(isset($_POST["ruc"])) $ruc = $_POST["ruc"];
if(isset($_POST["razon_social"])) $razon_social = $_POST["razon_social"];
if(isset($_POST["direccion"])) $direccion = $_POST["direccion"];
if(isset($_POST["correo"])) $correo = $_POST["correo"];
if(isset($_POST["correo_cpe"])) $correo_cpe = $_POST["correo_cpe"];
if(isset($_POST["telefono1"])) $telefono1 = $_POST["telefono1"];
if(isset($_POST["telefono2"])) $telefono2 = $_POST["telefono2"];
if(isset($_POST["persona_contacto"])) $persona_contacto = $_POST["persona_contacto"];
if(isset($_POST["observacion"])) $observacion = $_POST["observacion"];
if(isset($_POST["estado"])) $estado = $_POST["estado"];

switch($opcion){
    case 'agregar':
        echo json_encode($proveedores->crear_proveedor($ruc,$razon_social,$direccion,$correo,$correo_cpe,$telefono1,$telefono2,$persona_contacto,$observacion,$estado));
        break;
    case 'editar':
        echo json_encode($proveedores->editar_proveedor($id,$ruc,$razon_social,$direccion,$correo,$correo_cpe,$telefono1,$telefono2,$persona_contacto,$observacion,$estado));
        break;
    case 'eliminar':
        echo json_encode($proveedores->eliminar_proveedor($id));
        break;
    default:
        echo json_encode($proveedores->get_proveedores($pagina));
        break;
}



?>