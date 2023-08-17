<?php

class Subir extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function insert($id,$documento,$nombre,$doctor,$estado)
    {
            $query = "INSERT INTO clientes(id,documento,nombre,doctor,estado,fecha_creacion) VALUES(?,?,?,?,?,now())";
            $query = $this->db->prepare($query);

            $query->bindValue(1, $id);
            $query->bindValue(2, $documento);
            $query->bindValue(3, $nombre);
            $query->bindValue(4, $doctor);
            $query->bindValue(5, $estado);
            $query->execute();
    }

}