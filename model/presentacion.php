<?php

class Presentacion extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function cargar_presentaciones()
    {
            $query = "SELECT * FROM presentacion";
            $query = $this->db->prepare($query);
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function crear_presentacion($nombre){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($nombre)) return $response;

        $query = "INSERT INTO presentacion(nombre,estado,fecha_creacion) VALUES(?,1,now())";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$nombre);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha registrado con exito."
        ];

        return $response;

    }

    public function editar_presentacion($codigo,$nombre){
        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($nombre)) return $response;

        $query = "UPDATE presentacion SET nombre = ? WHERE codigo = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$nombre);
        $query->bindValue(2,$codigo);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha actualizado con exito."
        ];

        return $response;

    }

    public function eliminar_presentacion($codigo){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($codigo)) return $response;

        $query = "DELETE FROM presentacion WHERE codigo = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$codigo);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha eliminado con exito."
        ];

        return $response;
        
    }

}