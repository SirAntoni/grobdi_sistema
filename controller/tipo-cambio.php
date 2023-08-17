<?php
require "../config/conexion.php";
require "../model/tipo-cambio.php";

$tipo_cambio = new TipoCambio();

echo json_encode($tipo_cambio->get_tipo_cambio());

?>