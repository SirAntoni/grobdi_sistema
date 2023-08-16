<?php
require "../config/conexion.php";
require "../model/unidad-medida.php";

$unidades = new Unidades();

echo json_encode($unidades->get_unidades());

?>