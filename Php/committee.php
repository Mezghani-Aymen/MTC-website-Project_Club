<?php

require_once('connection.php');


// SQL query to select all data from the "committee" table
$req = "SELECT c.name , r.role_name , i.img_data FROM committee as c , images as i , roles as r where c.role=r.id and c.img=i.id";

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