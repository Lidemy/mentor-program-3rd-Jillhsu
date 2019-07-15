<?php
    require_once('./handle_conn.php');
    $username = $_GET['username'];
    $password = $_GET['password'];
    $table = 'jillhsu_users';
    $sql = "SELECT * FROM $table WHERE username = '$username' AND '$password'";
    
    $result = $conn->query($sql) or die("query failed: " . $sql);
    // echo $sql;
    // var_dump($result);
    $nums = mysqli_num_rows($result);
    // echo $nums;

    if (empty($username) || empty($password)) {
        die('請輸入內容再按送出');
    }
        
  
    if ($nums == 0) {
        die('登入資料錯誤，請檢查輸入帳密是否正確或是重新註冊。');
    } else {
        
        $row = $result->fetch_assoc();
        $id = $row['id'];
        $user = $row['username'];
        $ps = $row['password'];
        $nickname = $row['nickname'];
        setcookie("username", $user, time()+3600*24);
        setcookie("password", $ps, time()+3600*24);
        setcookie("nickname", $nickname, time()+3600*24);
        header("Location: ./comment.php");
    }
    
?>