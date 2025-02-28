<?php
include 'db_connect.php';

$stmt = $conn->query("SELECT * FROM refund_requests");
$requests = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($requests);
?>
