<?php
require "../config/conexion.php";
require "../model/clientes.php";

$clientes = new Clientes();

$pagina = 1;
$option = '';
$codigo_cliente = '';

if(isset($_GET["pagina"])){
    $pagina = $_GET["pagina"];
}

if(isset($_POST["codigo_cliente"])){
    $codigo_cliente = $_POST["codigo_cliente"];
}

if(isset($_POST["option"])){
    $option = $_POST["option"];
}


switch($option){
    case 'obtener_cliente':
        echo json_encode($clientes->get_cliente($codigo_cliente));
        break;
    default:
        echo json_encode($clientes->get_clientes_paginacion($pagina));
        break;
}



?>