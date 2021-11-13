<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>An application is being sent...</title>
    <style>
        body{
            text-align: center;
            font-family: "Arial", sans-serif;
        }
    </style>
</head>
<body>

<?php
    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $status = $_POST['status'];
    $message = $_POST['message'];
    $statusResult = "";


    if(!isset($status))
    {
        $statusResult = "You didn't select any Marital status";
    }
    else
    {
        $countStatus = count($status);
        for($i=0; $i < $countStatus; $i++)
        {
            $statusResult = $status[$i];
        }
    }

    //$mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'premiumfurs@mail.ru';              // Ваш логин от почты с которой будут отправляться письма
    $mail->Password = 'furs2021';                     // Ваш пароль от почты с которой будут отправляться письма
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to / этот порт может отличаться у других провайдеров

    $mail->setFrom('premiumfurs@mail.ru', 'Give Me Life');      // от кого будет уходить письмо?
    //$mail->addAddress('uryslygi.com.ua@gmail.com');        // Кому будет уходить письмо
    $mail->addAddress('mr.sylaev@mail.ru');        // Кому будет уходить письмо
    //$mail->addAddress('вторая почта на которую будет приходить письма');    // Name is optional
    //$mail->addReplyTo('info@mail.ru', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');
    //$mail->addAttachment('/var/tmp/file.tar.gz');    // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    $mail->isHTML(true);                            // Set email format to HTML

    $mail->Subject = 'New application';
    if ($_POST['formID'] == "form1") {
        $mail->Body = 'No name left a request.<br>' . '<b>Email:</b> <a href="mailto:' . $email . '">' . $email . '</a><br>' . '<b>Phone:</b> <a href="tel:' . $phone . '">' . $phone . '</a><br>' . '<b>Marital status: </b>' . $statusResult ;
    } else {
        $mail->Body = '<b>' . $name . '</b> left a request.<br>' . '<b>Email:</b> <a href="mailto:' . $email . '">' . $email . '</a>' . '<br><b>Message:</b> ' . $message;
    }
    $mail->AltBody = '';


    if(!$mail->send()) {
        echo "<h1 style='color: #F11616;'>Error! Your application has not been sent!</h1>";
    }
    else {
        echo "<h1 style='color: #37B800;'>Your application has been sent</h1>
          <h3>Wait for an answer...</h3>";
    }
?>

<script>
    setTimeout(function() {
        location.replace("/");
    }, 8000);
</script>
</body>
</html>