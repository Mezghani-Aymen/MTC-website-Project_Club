<?php

require_once('connection.php');

$name = $_POST["name"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$tel = $_POST["tel"];
$class = $_POST["class"];

// $level = $Person["class"];

// || empty($level)
// Check if any of the values are empty
if (empty($name) || empty($lastname) || empty($email) || empty($tel)  || empty($class)) {
    die("One or more values are empty. Insertion failed.");
}


$rech="SELECT * FROM member where `name`='$name' and  `lastname`='$lastname' and  `email`='$email' ";

// Execute the SQL query
if ($conn->query($rech) === TRUE) {
    echo "Member exicte !";
} else {
    $req = "INSERT INTO member (`name`, `lastname`, `email`, `tel` ,`class`) VALUES ('$name', '$lastname', '$email', '$tel' ,'$class')";
    // Execute the SQL query
    if ($conn->query($req) === TRUE) {
        echo "Record inserted successfully!";
    } else {
        header("HTTP/1.1 500 Internal Server Error");
        echo "Error: " . $req . "<br>" . $conn->error;
    }
}



$conn->close();
?>
