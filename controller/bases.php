<?php
require "../config/conexion.php";
require "../model/bases.php";

$bases = new Bases();

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
        echo json_encode($bases->get_bases_paginacion($pagina));
        break;
}



?>