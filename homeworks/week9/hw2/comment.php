<?php 
    require_once('./handle_conn.php');
    if (isset($_COOKIE["username"]) && isset($_COOKIE["password"])) {
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>留言版</title>
    <link rel="stylesheet" href="style_comment.css" >
</head>
<body>
    <div class="container">
        <h1>「本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼」</h1>
        <h1>留言版</h1>
        
        <div class="comment__input">
        <h2>我要留言</h2>
        <form method="POST" action="./handle_add_comment.php">
            <div>留言使用暱稱：<input name="nickname" value="<?php echo $_COOKIE["nickname"] ?>"/></div>
            <div><textarea name="content" rows="10" placeholder="留言"></textarea></div>
            <input type="submit" value="送出" />
            </form>
        </div>
        
        <div class="comments">
        <?php
            $table = 'jillhsu_comments';
            $sql = 'SELECT * FROM jillhsu_comments ORDER BY created_at DESC LIMIT 50';
            $result = $conn->query($sql) or die("query failed: ". $sql);
            
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<div class='comment'>";
                    echo "<h2 class='comment__name'>" . $row['name'] . "</h2>";
                    echo "<div class='comment__content arrow_box'>" . $row['content'] . "</div>";
                    echo "<div class='comment__time'>" . $row['created_at'] . "</div>";
                    echo "</div>";
                }
            }
            
        ?>
          <div class="go" ><a href="./handle_sign_out.php">登出</a></div>  
        </div>
        
    
    </div>
    
</body>
    
</html>


<?php
    } else {
        echo "請先登入！";
        header("Location: ./require_sign_in.php");
    }
    // $nickname = $_GET['nickname'];
    
?>
