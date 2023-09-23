<?php
require "../config/conexion.php";
require "../model/insumos.php";

$insumos = new Insumos();

$pagina = 1;
$option = '';
$codigo_interno_insumo = '';

if(isset($_GET["pagina"])){
    $pagina = $_GET["pagina"];
}

if(isset($_POST["codigo_doctor"])){
    $codigo_doctor = $_POST["codigo_doctor"];
}

if(isset($_POST["option"])){
    $option = $_POST["option"];
}


switch($option){
    case 'obtener_doctor':
        echo json_encode($doctores->get_doctor($codigo_doctor));
        break;
    default:
        echo json_encode($insumos->get_insumos_paginacion($pagina));
        break;
}



?>