<?php
include_once 'database.php';
include_once 'db_operations.php';
$obj = new DbOperations();

if (isset($_POST['form_action']) && $_POST['form_action'] == 'create_msa') {
    $name = htmlspecialchars($_POST['name']);
    $branch = htmlspecialchars($_POST['branch']);
    $year = htmlspecialchars($_POST['year']);
    $admissionId = htmlspecialchars($_POST['admissionId']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $events = isset($_POST['technicalEvents']) ? implode(",", $_POST['technicalEvents']) : ''; // Handle array

    try {
        $query = "INSERT INTO technical_data (name, branch, year, admissionId, phone, email, events) VALUES (:name, :branch, :year, :admissionId, :phone, :email, :events)";
        $params = ['name' => $name, 'branch' => $branch, 'year' => $year, 'admissionId' => $admissionId, 'phone' => $phone, 'email' => $email, 'events' => $events];

        $lastInsertId = $obj->insert($query, $params);

        if ($lastInsertId) {
            echo "success"; // Simple success message
        } else {
            echo "error: Database insertion failed."; // Simple error message
        }
    } catch (Exception $e) {
        error_log("Database Error: " . $e->getMessage());
        echo "error: An internal server error occurred."; // Generic error message
    }
} else {
    echo "error: Invalid request.";
}