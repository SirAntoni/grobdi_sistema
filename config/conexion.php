<?php
class Conectar
{
    protected $dbh;
    public function conexion()
    {
       
        try {

            if($_SERVER['SERVER_NAME'] == "grobdi.com.pe"){
                $conectar = $this->dbh = new PDO("mysql:local=localhost;dbname=t6j7r6k9_stock","t6j7r6k9_stock","He82ijyYw^YZ");
            }else{
                $conectar = $this->dbh = new PDO("mysql:local=localhost;dbname=grobdi_sistema","root","root");
            }
           
             $conectar->query("SET NAMES 'utf8'");
           
            return $conectar;
            
        } catch (Exception $e) {

            print "¡Error!: " . $e->getMessage() . "<br/>";
           die();  
            
        }
    }
}