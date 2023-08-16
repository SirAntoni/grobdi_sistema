<?php
session_start();

$usuario = '';
$password = '';

if($_POST['usuario']){
    $usuario = $_POST['usuario'];
}

if($_POST['password']){
    $password = $_POST['password'];
}

$_usuario = 'jose';
$_password = '123456';


if($usuario === $_usuario && $_password === $_password){
    $_SESSION['usuario'] = 'jose';
    $response = [
        "status" => "success",
        "url" => "system?view=proveedores",
    ];

    echo json_encode($response);

}else{
    
    $response = [
        "status" => "error",
        "message" => "Credenciales incorrectas",
    ];

    echo json_encode($response);
}



?>