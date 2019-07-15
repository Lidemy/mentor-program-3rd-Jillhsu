<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>會員系統</title>
    <link rel="stylesheet" href="style.css" >
</head>
<body>
    <div class="container">
        <h1>留言板 - 登入</h1>
        <form method="GET" action="./handle_sign_in.php">
        <div><input placeholder="用戶名稱" type="text" name="username" /></div>
        <div><input placeholder="密碼" type="password" name="password" /></div>
        
        <div><input type="submit" name="submit" value="送出"/></div>
        </form>
        
        <div class="go"><a href="./sign_up.php">註冊帳號</a></div>
    
    </div>
    
</body>
    
</html>