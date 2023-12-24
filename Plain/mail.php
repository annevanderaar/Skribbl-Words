<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $content = $data['content'];

    $content = implode(",", $content);

    $to = "annevanderaar@hotmail.com";
    $subject = "New words for Skribbl";

    mail($to, $subject, $content);

    echo 'Mailed';
}
