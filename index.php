<?php
header('Content-Type: application/json');

/** objectif : lors d'une requete GET, on renvoie le tableau sous forme de JSON , si le pays et le code postale sont donnés en paramétres on renvoie la temperature correspondante**/
$books = sample-api.json; 

$allowedMethods = array('GET');
    
    // ON récupère la méthode de la requête HTTP : 
    $requestMethod = strtoupper($_SERVER['REQUEST_METHOD']);

    if(!in_array($requestMethod, $allowedMethods)){     
        //Send a 405 Method Not Allowed header.     
        header($_SERVER["SERVER_PROTOCOL"]." 405 Method Not Allowed", true, 405);     //Halt the script's execution.     
        exit; 
    }


    // Ici je récupère les paramètres de la requête s'il y en a
    $recherche = $_GET["recherche"]; 
    echo json_encode($recherche);
?>
<?php 