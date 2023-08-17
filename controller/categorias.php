<?php
require "../config/conexion.php";
require "../model/categorias.php";

$categorias = new Categorias();

echo json_encode($categorias->get_categorias());

?>