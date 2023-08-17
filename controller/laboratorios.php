<?php
require "../config/conexion.php";
require "../model/laboratorios.php";

$laboratorios = new Laboratorios();

echo json_encode($laboratorios->get_laboratorios());

?>