<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = $_POST['data'];
    $filename = $_POST['filename'];
    $file = 'data/' . $filename;

    // Debugging: Log the file path and data
    error_log("Attempting to write to file: $file");
    error_log("Data: $data");

    // Write data to the file
    $result = file_put_contents($file, $data, LOCK_EX);

    if ($result === false) {
        echo "Failed to write to file: $filename";
    } else {
        echo "Dane zapisane pomyślnie do pliku: $filename";
    }
} else {
    echo "Niepoprawne żądanie.";
}
?>