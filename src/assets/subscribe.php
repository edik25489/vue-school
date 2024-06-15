<?php
try {
    $conn = new PDO("mysql:host=localhost;dbname=main_experiment_h1n_ru_1733", "main_experiment_h1n_ru_1733", "Yandex");

    // SQL-выражение для добавления данных
    $mail = htmlentities($_POST["mail"]);
    $sql = "INSERT INTO subscribes (mail) VALUES (".$mail.")";

    $conn->exec($sql);

}
catch (PDOException $e) {
    echo "Database error: " . $e->getMessage();
}
?>