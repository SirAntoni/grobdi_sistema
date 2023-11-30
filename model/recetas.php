<?php

class Recetas extends Conectar
{

    private $db;

    public function __construct()
    {
        $this->db = Conectar::conexion();
    }

    public function get_recetas_paginacion($pagina,$cantPaginas = '', $term = '')
    {       
            $pagina = is_null($pagina) ? 1 : (int)$pagina;
            $regPagina = ($cantPaginas === '') ? 15:$cantPaginas;
            $inicio = ($pagina > 1) ? (($pagina * $regPagina)) - $regPagina : 0;
            
            if($term == ''){
                $registros = "SELECT SQL_CALC_FOUND_ROWS * FROM insumos i INNER JOIN articulos a ON i.codigo_sku_principal = a.codigo_sku  WHERE i.codigo_interno_principal LIKE '%RE%' GROUP BY i.codigo_interno_principal ORDER BY i.codigo_interno_principal DESC LIMIT :inicio,:total";
                $registros = $this->db->prepare($registros);
                $registros->bindParam(':inicio',$inicio,PDO::PARAM_INT);
                $registros->bindParam(':total',$regPagina,PDO::PARAM_INT);
            }else{
                $registros = "SELECT SQL_CALC_FOUND_ROWS * FROM insumos i INNER JOIN articulos a ON i.codigo_sku_principal = a.codigo_sku  WHERE i.codigo_interno_principal LIKE '%RE%' AND a.articulo LIKE '%".$term."%'  GROUP BY i.codigo_interno_principal ORDER BY i.codigo_interno_principal DESC LIMIT :inicio,:total";
                $registros = $this->db->prepare($registros);
                $registros->bindParam(':inicio',$inicio,PDO::PARAM_INT);
                $registros->bindParam(':total',$regPagina,PDO::PARAM_INT);
            }

           
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

    public function get_insumos_receta($codigo){
        
        $query = "SELECT * FROM insumos i INNER JOIN articulos a ON i.codigo_sku_insumo = a.codigo_sku WHERE i.codigo_interno_principal = ?";
        $query = $this->db->prepare($query);
        $query->bindValue(1,$codigo);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

}