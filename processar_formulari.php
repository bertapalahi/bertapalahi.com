<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $missatge = $_POST["missatge"];

    $destinatari = "palahi.berta@gmail.com";
    $assumpte = "Formulari de contacte";
    $cos_missatge = "Nom: $nom\nEmail: $email\nMissatge: $missatge";

    // Enviar correu electrònic
    mail($destinatari, $assumpte, $cos_missatge);

    // Pots redirigir a una altra pàgina després d'enviar el correu
    header("Location: gracies.html");
    exit();
}
?>