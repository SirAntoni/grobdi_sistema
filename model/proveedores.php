<?php

class Proveedores extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function get_proveedores($pagina)
    {       
            $pagina = is_null($pagina) ? 1 : (int)$pagina;
            $regPagina = 10;
            $inicio = ($pagina > 1) ? (($pagina * $regPagina)) - $regPagina : 0;
            
            $registros = "SELECT SQL_CALC_FOUND_ROWS * FROM proveedores ORDER BY id DESC LIMIT :inicio,:total";
            $registros = $this->db->prepare($registros);
            $registros->bindParam(':inicio',$inicio,PDO::PARAM_INT);
            $registros->bindParam(':total',$regPagina,PDO::PARAM_INT);
            $registros->execute();
            $registros = $registros->fetchAll(PDO::FETCH_ASSOC);

            $totalRegistros = "SELECT FOUND_ROWS() as total";
            $totalRegistros = $this->db->prepare($totalRegistros);
            $totalRegistros->execute();
            $totalRegistros = $totalRegistros->fetch()['total'];
            $numeroPaginas = ceil((int)$totalRegistros/(int)$regPagina);

            $data = [
                "numeroPaginas" => $numeroPaginas,
                "data" => $registros
            ];

            return $data;
    }

    public function crear_proveedor($ruc,$razon_social,$direccion,$correo,$correo_cpe,$telefono1,$telefono2,$persona_contacto,$observacion,$estado){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($ruc) || empty($razon_social) || empty($direccion) || empty($correo) || empty($correo_cpe) || empty($telefono1) || empty
        ($telefono2) || empty($persona_contacto) || empty($observacion) || empty($estado)) return $response;


        $query = "INSERT INTO proveedores(razon_social,ruc,direccion,correo,correo_cpe,telefono1,telefono2,persona_contacto,observacion,estado) VALUES(?,?,?,?,?,?,?,?,?,?)";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$razon_social);
        $query->bindValue(2,$ruc);
        $query->bindValue(3,$direccion);
        $query->bindValue(4,$correo);
        $query->bindValue(5,$correo_cpe);
        $query->bindValue(6,$telefono1);
        $query->bindValue(7,$telefono2);
        $query->bindValue(8,$persona_contacto);
        $query->bindValue(9,$observacion);
        $query->bindValue(10,$estado);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha registrado con exito."
        ];

        return $response;

    }

    public function editar_proveedor($id,$ruc,$razon_social,$direccion,$correo,$correo_cpe,$telefono1,$telefono2,$persona_contacto,$observacion,$estado){
        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($ruc) || empty($razon_social) || empty($direccion) || empty($correo) || empty($correo_cpe) || empty($telefono1) || empty
        ($telefono2) || empty($persona_contacto) || empty($observacion) || empty($estado)) return $response;

        $query = "UPDATE proveedores SET razon_social = ?, ruc = ?, direccion = ?, correo = ?, correo_cpe = ?, telefono1 = ?, telefono2 = ?, persona_contacto = ?, observacion = ?, estado = ? WHERE id = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$razon_social);
        $query->bindValue(2,$ruc);
        $query->bindValue(3,$direccion);
        $query->bindValue(4,$correo);
        $query->bindValue(5,$correo_cpe);
        $query->bindValue(6,$telefono1);
        $query->bindValue(7,$telefono2);
        $query->bindValue(8,$persona_contacto);
        $query->bindValue(9,$observacion);
        $query->bindValue(10,$estado);
        $query->bindValue(11,$id);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha actualizado con exito."
        ];

        return $response;

    }

    public function eliminar_proveedor($id){

        $response = [
            "status" => "error",
            "message" => "Campos vacios"
        ];

        if(empty($id)) return $response;

        $query = "DELETE FROM proveedores WHERE id = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$id);
        $query->execute();

        $response = [
            "status" => "success",
            "message" => "Se ha eliminado con exito."
        ];

        return $response;
        
    }
}