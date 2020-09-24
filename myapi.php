<?php
header('Content-Type: application/json');
/** objectif : lors d'une requete GET, on renvoie le tableau sous forme de JSON */
$file = 'sample-api.json'; 
$data= file_get_contents($file);

echo($data);
?>