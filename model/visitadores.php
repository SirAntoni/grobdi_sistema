<?php

class Visitadores extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function cargar_visitadores()
    {
            $query = "SELECT * FROM visitadores";
            $query = $this->db->prepare($query);
            $query->execute();
            return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function crear_visitador($nombre,$telefono,$correo,$cuota,$observacion){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($nombre) || empty($telefono) || empty($correo)) return $response;

        $query = "INSERT INTO visitadores(nombres,telefono,correo,cuota,observacion,estado,fecha_creacion) VALUES(?,?,?,?,?,1,now())";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$nombre);
        $query->bindValue(2,$telefono);
        $query->bindValue(3,$correo);
        $query->bindValue(4,$cuota);
        $query->bindValue(5,$observacion);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha registrado con exito."
        ];

        return $response;

    }

    public function editar_visitador($codigo,$nombre,$telefono,$correo,$cuota,$observacion){
        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($nombre)) return $response;

        $query = "UPDATE visitadores SET nombres = ?, telefono = ?, correo = ?, cuota = ?, observacion = ? WHERE codigo = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$nombre);
        $query->bindValue(2,$telefono);
        $query->bindValue(3,$correo);
        $query->bindValue(4,$cuota);
        $query->bindValue(5,$observacion);
        $query->bindValue(6,$codigo);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha actualizado con exito."
        ];

        return $response;

    }

    public function eliminar_visitador($codigo){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($codigo)) return $response;

        $query = "DELETE FROM visitadores WHERE codigo = ?";
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