 

 var items = document.querySelector('#items');
 var photos = document.querySelectorAll('li');
//  var item = `
//  li data-sku="001">
//     <input type="checkbox">
//     <img src="http://unsplash.it/256/256" alt="unsplash">
//     <h3>unsplash photo</h3>
//     <p>$100</p>
//     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus?</p>
// </li>`;
var selectedArray = [];
var itemArray = [
    {
        img:"http://unsplash.it/250/250?image=100",
        alt: "is it working?",
        title:"unsplash photo",
        cost: 100,
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus?"

    },
    {
        img:"http://unsplash.it/256/256?image=206",
        alt: "is it?",
        title:" another unsplash photo",
        cost: 75,
        desc:"another image i am selling using other hard peoples work"

    },
    {
        img:"http://unsplash.it/256/256?image=203",
        alt: "another one?",
        title:" a walk in the lake",
        cost: 2000,
        desc:"a peaceful place"

    },
    {
        img:"http://unsplash.it/256/256?image=201",
        alt: "techy?",
        title:" work tools",
        cost: 750,
        desc:"the only tools you'll need for life"

    }
];

function displayItems(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i].alt);
        var item = `
        <li data-sku="00${i}">
            <input type="checkbox">
            <img src="${arr[i].img}" alt="${arr[i].alt}">
            <h3${arr[i].title}</h3>
            <p>$${arr[i].cost}</p>
            <p>${arr[i].desc}</p>
        </li>`;
        items.innerHTML += item;
    }
    
}

displayItems(itemArray);

function addListener(arr, objArr){
 for(var i =0; i < arr.length; i++){
     arr[i].addEventListener('click', function(evt, arr){
         this.classList.toggle('selected');
        // ternarry operator // aka if statement faster and shorter
         (this.firstElementChild.checked) ? 
         this.firstElementChild.checked = false:
         this.firstElementChild.checked = true;
      
        selectedArray.push(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku)+1)[0]);
        console.log(selectedArray);
          
        updateCart(selectedArray);
     });
 }
}

addListener(items.children, itemArray);

function updateCart(num){
    console.log(num);
}