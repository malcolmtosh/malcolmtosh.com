<?php
    $firstname = $_POST['firstName'];
    $lastname = $_POST['lastName'];
    $visitor_email = $_POST['email'];
    $message = $_POST['howFindUs'];

    $email_from = 'malcolmtosh@gmail.com';

    $email_subject = "Website Inquiry";

    $email_body = "First Name: $firstname.\n".
                    "Last Name: $lastname.\n".
                        "Email: $visitor_email.\n".
                            "Message: $message.\n";

    $to = "malcolmdjohnson@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");

?>