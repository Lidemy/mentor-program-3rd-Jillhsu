const request = new XMLHttpRequest();
const qs = element => document.querySelector(element);

const header = 'application/vnd.twitchtv.v5+json';
const url = 'https://api.twitch.tv/kraken'
const clientId = 'rhx4fgizy536ukxsg7r7eldfdsj5tk';

request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20');
request.setRequestHeader('Accept', header);
request.setRequestHeader('Client-ID', clientId);
request.send();

function displayStream(info) {
    for (let i = 0; i < 20 ; i++) {
        let parent = qs('.container');
        let a = document.createElement("a");
        a.target = '_blank';
        a.href = `${info["streams"][i]["channel"]["url"]}`;
        a.innerHTML = `<img class="preview" src="${info["streams"][i]["preview"]["medium"]}" />
            <div class="stream__profile">
                <img class="logo" src="${info["streams"][i]["channel"]["logo"]}">
                <div class="status">${info["streams"][i]["channel"]["status"]}</div>
                <div class="display__name">${info["streams"][i]["channel"]["display_name"]}</div>
            </div>`;
        parent.appendChild(a); 
    }
}

request.addEventListener('load', function() {
    if (request.status >= 200 && request.status < 400) {
        response = JSON.parse(request.responseText);
        console.log(response);
        displayStream(response);
        
    } else {
        console.log('err');
        alert("系統不穩定，請再試一次");
    }
})
/*
<a herf="" target="_blank">
    <img class="preview" src="" />
    <div class="stream__profile">
        <img class="logo" src="">
        <div class="status"></div>
        <div class="display__name"></div>
    </div>
</a>
*/