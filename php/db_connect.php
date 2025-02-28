<?php
$host = 'db-mysql-sgp1-50316-do-user-19412427-0.m.db.ondigitalocean.com';
$port = '25060';
$dbname = 'defaultdb';
$username = 'doadmin';
$password = 'AVNS_tjB14QURgzgbETa7lO8';

try {
    $conn = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
