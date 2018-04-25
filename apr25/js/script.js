var searchBox = document.querySelector('header input');
searchBox.addEventListener('keypress', getUserSearch);

var userSearch = '';
function getUserSearch(evt){
    if(
        evt.key !== 'undefined' &&
        evt.key !== 'backspace' &&
        evt.key !== 'Tab'
    )
    userSearch += evt.key;
    getCharacter(userSearch);
}
// function that is infinite loop for future projects
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
var cardList = document.querySelector('main ul');

function cardListData(cards){
    console.log(cards)
;    for(var i=0; i<cards.results.length; i++){
        var card = `
            <li>
                <img src="${cards.results[i].image}" alt"${cards.results[i].name}">
                <h3>${cards.results[i].name}</h3>
            </li>
        `
        cardList.innerHTML += card;
    }
}

getReq('https://rickandmortyapi.com/api/character', cardListData);

function getCharacter(searchStr){
   var characterArr = [];
    // console.log(searchStr);

   var req = new XMLHttpRequest();
   req.open('GET', 'https://rickandmortyapi.com/api/character');
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            var obj =JSON.parse(req.responseText).results;
            for( var i=0; i<obj.length; i++){
                // console.log(obj[i].name);
                // if(searchStr ==obj[i].name)
                // console.log(obj[i].name.includes(searchStr),obj[i].name);
                if(obj[i].name.includes(searchStr)){
                    cardList.innerHTML = '';
                    var card = `
                    <li>
                        <img src="${cards.results[i].image}" alt"${cards.results[i].name}">
                        <h3>${cards.results[i].name}</h3>
                    </li>
                `
                    cardList.innerHTML += card;
                }
            }


            // for(var i=0; i<JSON.parse(req.responseText).results.length; i++){
            //     characterArr.push(JSON.parse(req.responseText).results[i]);
            // }
            
        // }
    }
//     req.send(null);
//     console.log(characterArr);
//     for(var i=0; i<characterArr.length; i++){
//         if(searchStr === characterArr[i].name){
//             console.log(
//                 searchStr,
//                 characterArr[i].name,
//                 "success"
//             )
//         }
// }
}
}
