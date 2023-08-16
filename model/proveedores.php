<?php

class Proveedores extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function get_proveedores()
    {
            $query = "SELECT * FROM proveedores";
            $query = $this->db->prepare($query);
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);
    }

}