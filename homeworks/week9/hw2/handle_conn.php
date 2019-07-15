<?php
    $servername = 'localhost';
    $username = 'group3';
    $password = 'dr3puorg30rtm';
    $dbname = 'mtr03group3';

    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->query('SET NAMES UTF8');
    
    if ($conn->connect_error) {
        die("connent failed: " . $conn->connect_error);
    }


?>