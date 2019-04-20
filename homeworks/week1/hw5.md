### 請解釋後端與前端的差異。

前端：你看得到的。

只要你在瀏覽器上面看到的東西，都可以是前端工程師的範疇，
例如說 Google 首頁

後端：你看不到的。

後端處理那些你看不見的商業邏輯，例如說 Google 怎麼執行搜尋
怎麼把搜尋結果從資料庫裡面撈回來，並且丟回前端

* 簡單來說：

  * 前端是視覺介面輸出

  * 後端是資訊整合，資料庫連結與儲存。

---
### 假設我今天去 Google 首頁搜尋框打上：JavaScrit 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

Client（客戶端）發搜尋 JavaScript 的請求（Request）給 Server（伺服器），

Server 收到後會去跟資料庫找到 JavaScript 相對應的 Data，*準備完後丟回 Client*（這個過程又稱 Response）。

---
### 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用。

在 Git 裡設定一些「縮寫」，就可以少打一些文字，只要在終端機下輸入以下指令：

```
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
```

設定之後，輸入 `git co` 指令就跟 `git checkout` 會有一樣的效果，`git st` 就有 `git status` 的效果，`git br` 就有 `git branch` 的效果。

另外，上面這些 Alias 的設定，可直接到 `~/.gitconfig` 裡修改。






