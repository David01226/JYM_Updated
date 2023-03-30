<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $timeofday = $_POST['timeofday'];
    $service = $_POST['service'];
    $mailFrom = strval($_POST['email']);  // trying to print full email after the @ symbol ??
    $message = $_POST['message'];

    $mailTo = "david.gibson@jymroofing.net";
    $subject = "Message from " . $name . " via JYM Website";
    $headers = "From: david.gibson@jymroofing.net";
    $txt = 'Name: ' . $name . "\n" . 'Contact Number: ' . $number . "\n" . 'Email: ' . $mailFrom . "\n" . 'Best time to call: ' . $timeofday . "\n" . 'Interested in: ' . $service . "\n" .'Message: ' . $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: submitted.html?mailsend");
}