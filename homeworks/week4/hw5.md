## 請以自己的話解釋 API 是什麼

應用程式互動介面，英文 Application Programming Interface 的縮寫。
簡單來說就是應用程式會編寫特定的語法讓人能夠使用他的內部資料，這個過程就是 API。
一般來說開發端會有一些開放資料供其他人調度使用，在這個過程當中，開發者可以自由決定哪些資料是開放或隱私的，只要遵守應用程式端訂定的語法，就可以調度出他們開放的內部資料。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

205 Reset Content
伺服器成功處理了請求，但沒有返回任何內容。與204回應不同，此回應要求請求者重設文件視圖。

306 Switch Proxy
在最新版的規範中，306狀態碼已經不再被使用。最初是指「後續請求應使用指定的代理」。

418 I'm a teapot（RFC 2324）
本操作碼是在1998年作為IETF的傳統愚人節笑話, 在RFC 2324超文字咖啡壺控制協定'中定義的，並不需要在真實的HTTP伺服器中定義。當一個控制茶壺的HTCPCP收到BREW或POST指令要求其煮咖啡時應當回傳此錯誤。這個HTTP狀態碼在某些網站（包括Google.com）與項目（如Node.js、ASP.NET和Go語言）中用作彩蛋。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。


### myRestaurant API
myRestaurant API 服務，提供餐廳資料顯示、新增、修改、刪除餐廳資訊的功能。

Base URL： `https://myrestaurant.com/api/list`

| 說明     | Method | path       | 參數                   | Example             |
|--------|--------|------------|----------------------|----------------|
| 獲取餐廳列表 | GET    | /list     | _limit:限制回傳資料數量           | /list?_limit=10 |
| 獲取單一餐廳 | GET    | /list/:id | 無                    | /list/10      |
| 新增餐廳   | POST   | /list     | id:餐廳ID name: 餐廳名稱 | /list?name="good_to_eat"              |
| 刪除餐廳   | DELETE   | /list/:id     | 無 | /list/10               |
| 更改餐廳資訊   | PATCH   | /list/:id     | id:餐廳ID name: 餐廳名稱 | /list/10?name="good_to_eat"             |
