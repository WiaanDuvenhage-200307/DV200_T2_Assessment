<?php

    include 'db_connection.php';

    header("Access-Control-Allow-Origin: * ");
    header("Access-Control-Allow-Headers: * ");

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $petName = $data->petName;
    $petSpecies = $data->petSpecies;
    $petGender = $data->petGender;
    $petAge = $data->petAge;
    $petId = $data->petId;
    $ownerName = $data->ownerName;
    $ownerId = $data->ownerId;
    $exportOrigin = $data->exportOrigin;
    $exportDestination = $data->exportDestination;

    $sql = "INSERT INTO pets(petName, petSpecies, petGender, petAge, petId, ownerName, ownerId, exportOrigin, exportDestination) VALUES ('$petName','$petSpecies','$petGender','$petAge','$petId','$ownerName','$ownerId','$exportOrigin','$exportDestination');";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo ("Error Description: " .mysqli_error($conn));
    } else {
        echo ("Yay! Pet is exported!");
    }


?>
