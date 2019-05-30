## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

<hr /> 分隔線
ex. ```<hr size="5" width="100" />```

<bgsound /> src：音樂檔路徑
ex. ```<bgsound src="img/music.mp3" loop="5" />```

文字格式
```<b>文字</b>```<b>文字</b> 粗體

```<i>文字</i>```<i>文字</i> 斜線

```<u>文字</u>```<u>文字</u> 底線

```<sup>文字</sup>```<sup>文字</sup> 上標字

```<sub>文字</sub>```<sub>文字</sub> 下標字


## 請問什麼是盒模型（box modal）

在 HTML 裡的元素都可以看作是盒子，可用 css 調整這些盒子的屬性，像是 margin、border、padding、content
可用 ```box-sizing: border-box; ``` 設定讓元素的寬高可以被固定，讓他不會受 padding 或 border 影響總大小。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

display: block;
一次佔滿一整行，for div

display: inline;
邊框隨內容大小顯示，無法調整上下距離for span & a，padding 只會造成背景上下調整

display: inline-block;
可並排又可像block調整

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

position: static;
使用瀏覽器預設的配置自動排版在頁面上，沒特別寫 position 的話也是 static

position: relative
相對定位點開始計算

position: absolute;
需要參考點，往上找非 static 的元素，最上就是body，脫離正常排版流程，後面東西會遞補

position: fixed;
固定畫面整個位置
