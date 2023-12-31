<?php

class Laboratorios extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function cargar_laboratorios()
    {
            $query = "SELECT * FROM laboratorios";
            $query = $this->db->prepare($query);
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function crear_laboratorio($ruc,$nombre,$contacto){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($ruc) || empty($nombre) || empty($contacto)) return $response;

        $query = "INSERT INTO laboratorios(ruc,nombre,contacto,estado,fecha_creacion) VALUES(?,?,?,1,now())";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$ruc);
        $query->bindValue(2,$nombre);
        $query->bindValue(3,$contacto);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha registrado con exito."
        ];

        return $response;

    }

    public function editar_laboratorio($codigo,$ruc,$nombre,$contacto){
        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($ruc) || empty($nombre) || empty($contacto)) return $response;

        $query = "UPDATE laboratorios SET ruc = ? , nombre = ?, contacto = ? WHERE codigo = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$ruc);
        $query->bindValue(2,$nombre);
        $query->bindValue(3,$contacto);
        $query->bindValue(4,$codigo);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha actualizado con exito."
        ];

        return $response;

    }

    public function eliminar_laboratorio($codigo){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($codigo)) return $response;

        $query = "DELETE FROM laboratorios WHERE codigo = ?";
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