<?php
require "../config/conexion.php";
require "../model/clientes.php";

$clientes = new Clientes();

echo json_encode($clientes->get_clientes());

?>