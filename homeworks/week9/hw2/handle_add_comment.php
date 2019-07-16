<?php
    require_once('./handle_conn.php');

    $user_table = 'jillhsu_users';
    $comment_table = 'jillhsu_comments';
    $nickname = $_POST['nickname'];
    $content = $_POST['content'];
    
    if (empty($nickname) || empty($content)) {
        die('請檢查資料');
    }
    
    if ($_COOKIE['nickname'] != $nickname) {
        $username = $_COOKIE['username'];
        
        $sql = "UPDATE $user_table SET nickname = '$nickname' WHERE username = '$username'";
        setcookie("nickname", $nickname, time()+3600*24);
        $result = $conn->query($sql);
        if (!$result) {
            echo "failed, " . $conn->error;
        } 
    }

    $sql = "INSERT INTO $comment_table(name, content) VALUES('$nickname', '$content')";

    $result = $conn->query($sql);
    if ($result) {
        header('Location: ./comment.php');
    } else {
        echo "failed, " . $conn->error;
    }

?>