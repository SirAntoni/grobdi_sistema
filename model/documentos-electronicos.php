<?php

class Documentos extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function get_documentos_paginacion($pagina)
    {       
            $pagina = is_null($pagina) ? 1 : (int)$pagina;
            $regPagina = 15;
            $inicio = ($pagina > 1) ? (($pagina * $regPagina)) - $regPagina : 0;
            
            $registros = "SELECT SQL_CALC_FOUND_ROWS * FROM factura_cabecera AS fc LEFT JOIN clientes AS c ON fc.codigo_cliente = c.codigo_cliente ORDER BY fc.id DESC LIMIT :inicio,:total";
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

    public function get_doctor($codigo){
        $query = "SELECT * FROM doctores WHERE codigo_doctor = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$codigo);
        $query->execute();
        return $query->fetch(PDO::FETCH_ASSOC);
    }

}