<?php
header('Content-Type: application/json');/* permets au  client de gerer du code json*/
/** objectif : lors d'une requete GET, on renvoie le tableau sous forme de JSON */
$file = 'sample-api.json';  /*je recupere le fichier json*/
$data= file_get_contents($file); /*je lis le contenu du fichier*/

echo($data);/* j'affiche le contenu au format json*/
?>