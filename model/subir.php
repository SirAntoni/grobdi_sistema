<?php

class Subir extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function insert($id,$nombre,$telefono,$documento,$contacto)
    {
            $query = "INSERT INTO proveedores(id,nombre,telefono,documento,observacion,fecha_creacion) VALUES(?,?,?,?,?,now())";
            $query = $this->db->prepare($query);

            $query->bindValue(1, $id);
            $query->bindValue(2, $nombre);
            $query->bindValue(3, $telefono);
            $query->bindValue(4, $documento);
            $query->bindValue(5, $contacto);
            $query->execute();
    }

}