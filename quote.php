
<?php
    $name = $_POST["quote-name"];
    $email = $_POST["quote-email"];
    $series = $_POST["selectOption"];
    $model = $_POST["selectOption2"];
    $message = $_POST["quote-message"];
    $mobile = $_POST["quote-number"];
    $location = $_POST["quote-location"];

    $email_subject = "$name wants to get quotation of $series: $model details \n Mobile: $mobile \n Location: $location";
    $headers = "From: $email";

    mail("cowintechnologies@gmail.com", $headers,  $message, $email_subject);
    header("Location: thankyou.html");
?>

