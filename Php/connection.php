<?php
//connection
$conn = new mysqli("localhost", "root", "", "mtc");

// Verif con
if ($conn->connect_error) {
    die("Connection echoué" . $conn->connect_error);
}

?>
