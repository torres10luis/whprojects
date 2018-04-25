var clientId = 'NQKFEUKzeQwWFQ4Ll-sFNYth5GLKSmg-';

var str = '';
var searchBox = document.querySelector('header input');
searchBox.addEventListener('keyup', userStr);

function githubUsers(data){
    console.log(data);
}

function userStr(evt){
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=${clientId}`, githubUsers);
    
    // if(
    //     evt.key !== 'undefined' &&
    //     evt.key !== 'backspace' &&
    //     evt.key !== 'Tab'
    // )
    // str += evt.key;
    // console.log(str, searchBox.value);
}

function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }
        else{
            console.log('error', req.statusText)
        }
    }

    req.send(null);
}