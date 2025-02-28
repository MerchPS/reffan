<?php
include 'db_connect.php';

$nickname = $_POST['nickname'];
$description = $_POST['description'];
$proof = $_FILES['proof']['name'];
$proof_tmp = $_FILES['proof']['tmp_name'];

move_uploaded_file($proof_tmp, "assets/images/$proof");

$stmt = $conn->prepare("INSERT INTO refund_requests (nickname, description, proof) VALUES (?, ?, ?)");
$stmt->execute([$nickname, $description, $proof]);

echo "Refund request submitted successfully!";
?>
