<?php
require "../config/conexion.php";
require "../model/presentacion.php";

$presentacion = new presentacion();

echo json_encode($presentacion->get_presentacion());

?>