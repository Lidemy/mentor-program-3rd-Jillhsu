<?php
    require_once('./handle_conn.php');
    
    $username = $_POST['username'];
    $password1 = $_POST['password1'];
    $password2 = $_POST['password2'];
    $nickname = $_POST['nickname'];
    
    $table = 'jillhsu_users';

    if (empty($username)) {
        die('請輸入用戶名稱！');
    } else if (empty($password1)) {
        die('請輸入密碼！');
    } else if (empty($password2)) {
        die('請重複輸入密碼！');
        
    } else if (strlen($username) > 16 || strlen($password1) > 16) {
        die('請輸入範圍內的長度');
    } else if ($password1 != $password2) {
        die('請重複輸入相同密碼！');
    } else {
        if (empty($nickname)) {
            $nickname = null;
        }
        $sql = "INSERT INTO $table(username, password, nickname) VALUES('$username', '$password1', '$nickname')";

        $result = $conn->query($sql);
        if ($result) {
            header('Location: ./index.php');
        } else {
            echo "failed, " . $conn->error;
        }

    }

    
?>