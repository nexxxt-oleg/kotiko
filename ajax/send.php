<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


if (empty($_POST)) die();

require '../lib/PHPMailer-master/src/Exception.php';
require '../lib/PHPMailer-master/src/PHPMailer.php';
require '../lib/PHPMailer-master/src/SMTP.php';



$mail = new PHPMailer(true);

try {
    //Server settings
   //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
   //$mail->isSMTP();                                            // Send using SMTP
   //$mail->Host       = 'smtp.example.com';                    // Set the SMTP server to send through
   //$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
   //$mail->Username   = 'user@example.com';                     // SMTP username
   //$mail->Password   = 'secret';                               // SMTP password
   //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
   //$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('info@koti.co', 'Mailer');
    $mail->addAddress('sergey@koti.co', 'Kitty');     // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo('info@koti.co', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    // Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML


        $mail->Subject = 'Заявка с сайта';


        $message = '';
        if(!empty($_POST['name']))
            $message .= '<p>Имя - '. htmlspecialchars(stripslashes($_POST['name'])).'</p>';
        if(!empty($_POST['email']))
            $message .= '<p>Email - '. htmlspecialchars(stripslashes($_POST['email'])).'</p>';
        if(!empty($_POST['phone']))
            $message .= '<p>Телефон - '. htmlspecialchars(stripslashes($_POST['phone'])).'</p>';
        if(!empty($_POST['project']))
            $message .= '<p>Проект - '.htmlspecialchars(stripslashes($_POST['project'])).'</p>';

        $mail->Body = $message;

        /*if(isset($_FILES["file"])) {
            $filename = $_FILES["file"]["name"];
            // название файла

            $filename = $_FILES["file"]['tmp_name'] .'/'. $filename;
            // месторасположение файла

            $mail->addAttachment($filename);
        }*/

        $mail->send();
        echo '1';

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

