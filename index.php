<?php
header('Content-Type: /json');

/** objectif : lors d'une requete GET, on renvoie le tableau sous forme de JSON , si le pays et le code postale sont donnés en paramétres on renvoie la temperature correspondante**/
$books = array("fr" => 
    array("13000" => ['humidity' => 98, 'temperature' => 20, 'pression'=> 1],
        "13001" => ['humidity' => 95, 'temperature' => 21, 'pression'=> 1,014],
        "13002" => ['humidity' => 97, 'temperature' => 23, 'pression'=> 1.022],
        "13013" => ['humidity' => 94, 'temperature' => 22, 'pression'=> 1.034],)
);

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

?>
<?php 