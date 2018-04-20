var characterUl = document.querySelector('ul');
var homeUrl = 'https://rickandmortyapi.com/api/character/';

function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            console.log('Success!', req.statusText);
            func(JSON.parse(req.responseText));
        }
        else{
            console.log('error.', req.statusText);
        }
    }
    req.send(null);
}

// $.ajax({
//     url: 'https://rickandmortyapi.com/api/character/',
// }).done(getCharacters)

getReq(homeUrl, getCharacters);
console.log(characterUl);

var characterUrl;

$('body > ul').on('click','li', function(evt){
   if(this.dataset.url){
       characterUrl = this.dataset.url;
       characterUl.innerHTML = "";
       getReq(characterUrl, getCharacter);
    // console.log(this);
   }
});

function getCharacter(character){
    console.log(character);
    var character = `
        <li data-url="${character.url}">
                    
        <img src="${character.image}" alt="${character.name}">
        <div>
        <h3>${character.name}</h3> 
        <ul>
        <li><b>gender:</b>${character.gender}</li>
        <li><b>species:</b>${character.species}</li>`;    
            if( !character.type == " "){
            character += `<li><b>type:</b>${character.type}</li>`
            }
                character +=` 
                    <li><b>status:</b>${character.status}</li>
                            
        </ul>
        </div>
        </li>
            `;
            characterUl.innerHTML = character;
    }

function getCharacters(characters){
    var characterLinks= document.querySelectorAll('a');
    console.log(characterLinks);
    var characterArr = characters;
    for(var i = 0; i< characterArr.results.length; i++){
        console.log(characterArr.results[i]);
    var character = `
        <li data-url="${characterArr.results[i].url}">
                    
        <img src="${characterArr.results[i].image}" alt="${characterArr.results[i].name}">
        <div>
        <h3>${characterArr.results[i].name}</h3> 
        <ul>
        <li><b>gender:</b>${characterArr.results[i].gender}</li>
        <li><b>species:</b>${characterArr.results[i].species}</li>`;    
            if( !characterArr.results[i].type == " "){
            character += `<li><b>type:</b>${characterArr.results[i].type}</li>`
            }
            character +=` 
                        
            <li><b>status:</b>${characterArr.results[i].status}</li>
                            
        </ul>
        </div>
                    
        </li>
            `;
            characterUl.innerHTML += character;
        }
    }

