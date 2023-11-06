<?php

class Zonas extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function cargar_zonas()
    {
            $query = "SELECT * FROM zonas";
            $query = $this->db->prepare($query);
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function crear_zona($nombre,$visitador,$observacion){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($nombre) || empty($visitador) || empty($observacion)) return $response;

        $query = "INSERT INTO zonas(nombre,visitador,observacion,estado,fecha_creacion) VALUES(?,?,?,1,now())";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$nombre);
        $query->bindValue(2,$visitador);
        $query->bindValue(3,$observacion);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha registrado con exito."
        ];

        return $response;

    }

    public function editar_zona($codigo,$nombre,$visitador,$observacion){
        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($nombre) || empty($visitador) || empty($observacion)) return $response;

        $query = "UPDATE zonas SET nombre= ?, visitador = ?, observacion = ? WHERE codigo = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$nombre);
        $query->bindValue(2,$visitador);
        $query->bindValue(3,$observacion);
        $query->bindValue(4,$codigo);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha actualizado con exito."
        ];

        return $response;

    }

    public function eliminar_zona($codigo){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($codigo)) return $response;

        $query = "DELETE FROM zonas WHERE codigo = ?";
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