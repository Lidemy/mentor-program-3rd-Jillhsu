<?php
    require_once('./handle_conn.php');
    
    $user_table = 'jillhsu_users';
    $nickname = $_GET['nickname'];
    if ($_COOKIE['nickname'] != $nickname) {
        $sql = "UPDATE $user_table SET nickname='$nickname' where username = '$_COOKIE['username']'";
        $result = $conn->query($sql);
        if (!$result) {
            echo "failed, " $conn->error;
        } 
    }



?>