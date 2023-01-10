<?php
    //Destinatario
    $destino = "damianjacquet9@gmail.com";
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $contenido = "nombre: " . $nombre . "\nCorreo " . $correo . "\nMensaje: " . $mensaje;
    mail($destino,"contacto", $contenido);

    header("location: exito.html")

?>


