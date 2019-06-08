## 什麼是 DOM？

DOM 全名為 Document Object Model 中文翻譯為文件物件模型，其實就是把一份 HTML 文件內的各個標籤，包括文字、圖片等等都定義成物件，最終這些物件會形成一個樹狀結構。

查了各個資料後發現這篇介紹的最淺白又詳細
> [Day03-深入理解網頁架構：DOM](https://ithelp.ithome.com.tw/articles/10202689)

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

先捕獲，再冒泡

節錄好文[DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)裡的一段話來回答: 

> DOM 的事件在傳播時，會先從根節點開始往下傳遞到target，這邊你如果加上事件的話，就會處於CAPTURING_PHASE，捕獲階段。
> target就是你所點擊的那個目標，這時候在target身上所加的eventListenr會是AT_TARGET這一個 Phase。
> 最後，事件再往上從子節點一路逆向傳回去根節點，這時候就叫做BUBBLING_PHASE，也是大家比較熟知的冒泡階段。

## 什麼是 event delegation，為什麼我們需要它？

事件代理，在處理多個事件時，把觸發的事件改由外層的標籤來監聽，利用事件傳遞的原理，判斷 e.target 是我們要的目標節點時，才去執行後續的動作。

這樣的好處是事件管理會非常輕鬆，而且後續加上的新元素只要在標籤內也會有一樣的觸發效果，無需另外再去綁定事件，或是之後忘了移除監聽因此造成 memory leak 的嚴重問題。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

event.preventDefault() 只是取消預設行為，跟事件傳遞沒有任何關係；event.stopPropagation() 則是讓事件不再往下傳遞。

event.preventDefault() 可以取消瀏覽器的預設行為，像是超連結，加上 e.preventDefault() 後即使點擊超連結也會失效。
