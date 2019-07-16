<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>會員系統</title>
    <link rel="stylesheet" href="style.css" >
</head>
<body>
    <div class="container">
        <h1>留言板 - 註冊</h1>
        <form method="POST" action="./handle_add_user.php">
        <div><input placeholder="用戶名稱" type="text" name="username" /></div>
        <div><input placeholder="密碼" type="password" name="password1" /></div>
        <div><input placeholder="再次輸入密碼" type="password" name="password2" /></div>
        <div><input type="text" placeholder="暱稱(可不填)" name="nickname" /></div>
        
        <div><input type="submit" name="submit" value="註冊"/></div>
        </form>
        <div class="go"><a href="./index.php">返回</a></div>
    
    </div>
    
</body>
    
</html>