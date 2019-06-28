const request = new XMLHttpRequest();
const element = element => document.querySelector(element);

element('.button').addEventListener('click', sendRequest);

function init() {
    element('.info').innerText = "會中什麼獎呢?";
    element('body').style.backgroundColor = "beige";
    element('.pic').style.backgroundImage = "url(box.png)";
    element('.info').style.backgroundColor = "beige";
    element('.info').style.color = "black";
    element('.button').innerHTML = "抽獎";
}


function sendRequest() {
    if (this.innerHTML === "再抽一次") {
        init();
    } else {
        request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery');
        request.send();
    }
}
// 
request.addEventListener('load', function() {
    if (request.status >= 200 && request.status < 400) {
        console.log(request.responseText);
        const response = JSON.parse(request.responseText);
        switchPrize(response.prize);
        element('.button').innerHTML = "再抽一次";
        
    } else {
        console.log('err');
        alert("系統不穩定，請再試一次");
    }
})

/*
request.onerror = function() {
    console.log('error');
}
*/
const prizeObj = {
    FIRST: ['恭喜你中頭獎了！日本東京來回雙人遊！', 'travel.png', '#63cefd'],
    SECOND: ['二獎！90 吋電視一台！', 'tv.png', 'beige'],
    THIRD: ['恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！', 'youtube.png', 'beige'],
    NONE: ['銘謝惠顧', '', '#191818'],
}


function switchPrize(type) {
    element('.info').innerText = prizeObj[type][0];
    element('body').style.backgroundColor = prizeObj[type][2];
    element('.pic').style.backgroundImage = `url(${prizeObj[type][1]})`;
    if (type === 'NONE') {
        element('.info').style.backgroundColor = prizeObj[type][2];
        element('.info').style.color = "#ffffff";  
    } else {
        element('.info').style.backgroundColor = "beige";
        element('.info').style.color = "black";
    }
}


