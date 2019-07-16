## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

VARCHAR 要設定初始值，決定預設的資料型態容納大小，範圍為 1 ~ 65535 之間；TEXT則不用，他固定大小就是能容納 65535 字元，無法設定最大字數。
他們使用的磁碟空間 VARCHAR(x) 是 1 + x byte (當 x 介於 1 ~ 255) 或 2 + x byte (當 x 介於 256 ~ 65535)；TEXT 則為 2 + 儲存的字串長度 byte。

（根據[這篇回答](https://stackoverflow.com/questions/25300821/difference-between-varchar-and-text-in-mysql)另外一個不同是 VARCHAR 可以放在 INDEX 欄位但 TEXT 不行，還不是很理解他的意思，先放著等之後回來看再釐清XD，還有[這篇](http://wubx.net/varchar-vs-text/)也是。）


## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？

Cookie 是可以讓瀏覽器儲存資料的地方，Server 端可能給 Browser 端一個或多個 Set-Cookies 的 HTTP Header，Browser 收到後　Set-Cookie 指令時，會儲存在Browser 的 Cookie 存放區，並記錄該 Cookie 隸屬的網域、網址路徑、過期時間、是否為安全連線，當 Browser 再次發出 HTTP Request 指令到 Server 時，就會再比對目前在 Browser 內的 Cookie 存放區有沒有「該網域」、「該目錄」、「過期時間尚未過期」且「是否為安全連線」的 Cookie，如果有的話就會包含在 HTTP Request 指令的 "Cookie" Header 中。 


## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

1. 輸入帳密的大小與型態會影響資料庫儲存，因此要另外設定判斷資料的大小以及輸入的字元是否符合設定。至於具體怎麼做我還不是很清楚，有稍微爬過資料但還沒有實際做過。

2. 可能會受到 SQL Injection 攻擊，這篇網誌有寫道[三種較常見的 SQL injection 攻擊手法](https://ithelp.ithome.com.tw/articles/10189201)，至於怎麼做防止遭受這種攻擊，至於怎麼去預防或處理我也還不會 QQ （有上網查過一些方法，但語法有點複雜，看得霧煞煞）
