<?php
require_once 'config/database.php';
require_once 'config/db_operations.php';

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    $db = new DbOperations();

    $user = $db->fetchOne("SELECT * FROM users WHERE email = ?", [$email]);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['isAuthenticated'] = true;
        $_SESSION['user_name'] = $user['name'];
        $_SESSION['user_role'] = $user['role'];
        $_SESSION['user_email'] = $user['email'];

        echo "<script>alert('Login successful! Welcome, {$user['name']}'); window.location.href='index.php';</script>";
    } else {
        echo "<script>alert('Invalid email or password!'); window.history.back();</script>";
    }
}
?>
