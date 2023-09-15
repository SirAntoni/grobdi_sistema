<?php
require "../config/conexion.php";
require "../model/doctores.php";

$doctores = new Doctores();

$pagina = 1;
$option = '';
$codigo_doctor = '';

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
        echo json_encode($doctores->get_doctores_paginacion($pagina));
        break;
}



?>