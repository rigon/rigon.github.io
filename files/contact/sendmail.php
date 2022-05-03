<?php
define("USER", "9e6e34c1aa0ebf490a9f1d1ba27c1a49");
define("PASS", "29c54254ba0aa5135bb94c437018ea35");

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$postdata = json_encode(array(
	"Messages" => array(
		array(
			"From" => array(
				"Email" => "ricar.goncalves@gmail.com",
				"Name" => $name),
			"To" => array(array(
				"Email" => "ricar.goncalves@gmail.com",
				"Name" => "RIGON Contact")),
			"Subject" => "[RIGON] $subject",
			"TextPart" => "$subject\n$message\n\n$name\n$email",
			"HTMLPart" => "<h1>$subject</h1><p>$message</p><p><b>From $name &lt;$email&gt;<br />rigon.tk Contact Form</b></p>",
			"CustomID" => "RigonContact"
		)
	)
));

$opts = array('http' =>
    array(
        'method' => 'POST',
        'header' => "Content-type: application/json\r\n".
					"Authorization: Basic ".base64_encode(USER.':'.PASS)."\r\n",
        'content' => $postdata
    )
);

$context = stream_context_create($opts);
$result = @file_get_contents('https://api.mailjet.com/v3.1/send', false, $context);
preg_match('/([0-9])\d+/',$http_response_header[0],$matches);
$responsecode = intval($matches[0]);

if($result === false or $responsecode !== 200) {
	http_response_code(400);
	die("An error occurred while sending your message. Sorry for the inconvenience, please send an email instead.");
}

echo "Your message has been sent. Thank you!";
?>
