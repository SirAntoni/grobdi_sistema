<?php
require "../config/conexion.php";
require "../model/documentos-electronicos.php";

$documentos = new Documentos();

$pagina = 1;
$option = '';
$codigo_doctor = '';

if(isset($_GET["pagina"])){
    $pagina = $_GET["pagina"];
}

switch($option){
    case 'obtener_doctor':
        // echo json_encode($doctores->get_doctor($codigo_doctor));
        // break;
    default:
        echo json_encode($documentos->get_documentos_paginacion($pagina));
        break;
}



?>