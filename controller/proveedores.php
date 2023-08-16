<?php
require "../config/conexion.php";
require "../model/proveedores.php";

$proveedores = new Proveedores();

echo json_encode($proveedores->get_proveedores());

?>