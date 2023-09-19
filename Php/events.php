<?php
// Establish a database connection
$conn = new mysqli("localhost", "root", "", "mtc");

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to select all data from the "events" table
$req = "SELECT * FROM events";

// Execute the query
$result = $conn->query($req);

// Check if the query was successful
if (!$result) {
    die("Query failed: " . $conn->error);
}

// Fetch all the rows from the result set and store them in an array
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}



// Set the response content type to JSON
header('Content-Type: application/json');

// Output the data as JSON
echo json_encode($data);

// Close the database connection
$conn->close();
?>