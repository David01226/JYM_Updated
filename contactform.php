<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $timeofday = $_POST['timeofday'];
    $service = $_POST['service'];
    $mailFrom = strval($_POST['email']);  // trying to print full email after the @ symbol ??
    $message = $_POST['message'];

    $mailTo = "davidjohngibson97@gmail.com";
    $subject = "Message from " . $name . " via JYM Website";
    $headers = "From: ".$mailFrom;
    $txt = 'Name:' . $name . '. Contact Number: ' . $number . '. Email' . $mailFrom . '. Best time to call: ' . $timeofday . '. Interested in: ' . $service . '. Message: ' . $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: submitted.html?mailsend");
}