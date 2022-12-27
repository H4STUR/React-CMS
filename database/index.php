<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");


include 'DbConnect.php';
$objDb = new DbCOnnect;
$connection = $objDb->connect();

#$user = print_r(file_get_contents('php://input'));
$method = $_SERVER['REQUEST_METHOD'];

switch($method)
{
    case "GET":
        $sql = "SELECT * FROM users";
        $stmt = $connection->prepare($sql);
        if($stmt->execute())
            $response = ['status' => 1, 'message' =>'Query executed successfully.'];
            else
                $response = ['status' => 0, 'message' =>'Failed to execute the query.'];
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        
    break;

    case "POST":
    
        $user = json_decode(file_get_contents('php://input') );
        $sql = "INSERT INTO users(id, name, password, email, created_at) 
                VALUES(null, :name, :password, :email, :created_at)";
        $stmt = $connection->prepare($sql);

        $stmt->bindParam(':name', $user->username);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':password', $user->password);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':created_at', $created_at);
        if($stmt->execute())
            $response = ['status' => 1, 'message' =>'Record created successfully.'];
            else
                $response = ['status' => 0, 'message' =>'Failed to create the record.'];

    break;
}