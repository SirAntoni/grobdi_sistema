<?php
require "../config/conexion.php";
require "../model/etiquetas.php";

$etiquetas = new Etiquetas();

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
        echo json_encode($etiquetas->get_etiquetas_paginacion($pagina));
        break;
}



?>