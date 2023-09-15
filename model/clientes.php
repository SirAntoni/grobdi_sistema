<?php

class Clientes extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function get_clientes_paginacion($pagina)
    {       
            $pagina = is_null($pagina) ? 1 : (int)$pagina;
            $regPagina = 20;
            $inicio = ($pagina > 1) ? (($pagina * $regPagina)) - $regPagina : 0;
            
            $registros = "SELECT SQL_CALC_FOUND_ROWS * FROM clientes ORDER BY id LIMIT :inicio,:total";
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

    public function get_cliente($codigoCliente){
        $query = "SELECT * FROM clientes WHERE codigo_cliente = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$codigoCliente);
        $query->execute();
        return $query->fetch(PDO::FETCH_ASSOC);
    }

}