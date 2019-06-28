const request = new XMLHttpRequest();
const qs = element => document.querySelector(element);

let input = document.querySelector('input[value=text]');
let temp ='';

request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_sort=id&_order=desc');
request.send();

const end = 20;
let begin = 1;
let response;

function newDiv() {
    return document.createElement("div");
}

function keyEnter() {
    if (event.keyCode === 13) {
        qs('input[type=submit]').click();
    } else {
        return;
    }
}


function addComment(content) {
    let parent = qs('.comment__get');
    
    let div = newDiv();
    div.classList.add("comment__each");

    let commentNum = newDiv();
    commentNum.innerHTML = begin;
    commentNum.classList.add("comment__number");
    div.appendChild(commentNum);

    let commentContent = newDiv();
    commentContent.innerHTML = content;
    commentContent.classList.add("comment__content");
    div.appendChild(commentContent);
    parent.appendChild(div);
    begin++;
}


function commentDisplay(response, num) {
    if (num > 20) return;
    for (; num <= end; num++) {
        // let number = response[begin - 1]["id"];
        let content = response[num - 1]["content"];
        addComment(content);
    }
}

function warning() {
    alert("作者不給力，功能尚未開啟。");
}


request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
        console.log(request.responseText);
        response = JSON.parse(request.responseText);
        
        console.log(response);
        console.log(response.length);
        // console.log(temp);
        
        commentDisplay(response, begin);
        qs('#total__pages').setAttribute('data-value', begin);
        qs('#total__pages').setAttribute('data-page', (begin > 20)? end : begin);
        
        
    } else {
        console.log('err');
        alert("系統不穩定，請再試一次");
    }
})

function post(comment) {
    request.open('POST', 'https://lidemy-book-store.herokuapp.com/posts');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(`id&content=${encodeURIComponent(comment)}`);

}



function rePage(input) {
    /// console.log(copy);
    /// qs('.comment__get').childNodes[2].childNodes[1].innerHTML = qs('.comment__get').childNodes[1].childNodes[1].innerHTML;
    let copy1 = qs('.comment__get').childNodes[1].childNodes[1].innerHTML;
    console.log(copy1);
    let copy2 = qs('.comment__get').childNodes[2].childNodes[1].innerHTML;
    qs('.comment__get').childNodes[1].childNodes[1].innerHTML = input;
    console.log();
    if (begin <= end) {
            addComment(qs('.comment__get').childNodes[begin-1].childNodes[1].innerHTML);
    }
    for (let i = 1; i <= begin; i++) {
        
        qs('.comment__get').childNodes[i + 1].childNodes[1].innerHTML = copy1;
        copy1 = copy2;
        
        
        copy2 = qs('.comment__get').childNodes[i + 2].childNodes[1].innerHTML;
        
    }
    
}


qs('input[type=submit]').addEventListener('click', function() {
    let input = qs('input[type=text]').value;
    console.log(input);
    if (input) {
        post(input);
        rePage(input);
    } else {
        alert("請輸入留言再送出!");
        
    }
})




