<?php
    $name = $_POST["customer-name"];
    $email = $_POST["customer-email"];
    $subject = $_POST["customer-subject"]; 
    $series = $_POST["selectOption"];
    $model = $_POST["selectOption2"];
    $message = $_POST["customer-message"];
    $mobile = $_POST["customer-number"];
    $location = $_POST["customer-location"];

    $email_subject = "Message from $name: $subject \n Mobile: $mobile \n Location: $location \n Wants $series: $model details";
    $headers = "From: $email";

    mail("cowintechnologies@gmail.com", $headers,  $message, $email_subject);
    header("Location: thankyou.html");
    ?>

