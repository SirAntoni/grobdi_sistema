<?php
require "../config/conexion.php";
require "../model/recetas.php";

$recetas = new Recetas();

$pagina = 1;
$option = '';
$codigo_interno_principal = '';

if(isset($_GET["pagina"])){
    $pagina = $_GET["pagina"];
}

if(isset($_POST["codigo_receta"])){
    $codigo_interno_principal = $_POST["codigo_receta"];
}

if(isset($_POST["option"])){
    $option = $_POST["option"];
}


switch($option){
    case 'obtener_insumos_receta':
        echo json_encode($recetas->get_insumos_receta($codigo_interno_principal));
        break;
    default:
        echo json_encode($recetas->get_recetas_paginacion($pagina));
        break;
}



?>