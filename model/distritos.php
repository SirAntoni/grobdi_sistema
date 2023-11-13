<?php

class Distritos extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function cargar_distritos()
    {
            $query = "SELECT * FROM distritos";
            $query = $this->db->prepare($query);
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function crear_distrito($nombre,$zona,$ubigeo){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($nombre) || empty($zona) || empty($ubigeo)) return $response;

        $query = "INSERT INTO distritos(nombre,zona,ubigeo,estado,fecha_creacion) VALUES(?,?,?,1,now())";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$nombre);
        $query->bindValue(2,$zona);
        $query->bindValue(3,$ubigeo);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha registrado con exito."
        ];

        return $response;

    }

    public function editar_distrito($codigo,$nombre,$zona,$ubigeo){
        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($nombre) || empty($zona) || empty($ubigeo)) return $response;

        $query = "UPDATE distritos SET nombre = ?, zona = ?, ubigeo = ? WHERE codigo = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$nombre);
        $query->bindValue(2,$zona);
        $query->bindValue(3,$ubigeo);
        $query->bindValue(4,$codigo);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha actualizado con exito."
        ];

        return $response;

    }

    public function eliminar_distrito($codigo){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($codigo)) return $response;

        $query = "DELETE FROM distritos WHERE codigo = ?";
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