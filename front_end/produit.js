

let params = (new URL(document.location)).searchParams;
let id = params.get("_id");


const productImg = document.querySelector(".img");
const productTitle = document.querySelector(".title")
const productPrice = document.querySelector(".price")
const productColor = document.querySelector("#selectColor")
const productDescription = document.querySelector('.description');




function getProducts() {
  // On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
  fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(function (response) {
      return response.json();
    })
    .catch((error) => {
        alert("Error of connection to the server")
      })
    .then(function (objetProduct) {
      // On place les données reçues via l'API aux bons endroits sur la page
      
      productImg.src = objetProduct.imageUrl;
      productTitle.innerHTML = objetProduct.name;
      productPrice.innerHTML = (objetProduct.price/100).toFixed(2) +' €';
      productDescription.innerHTML = objetProduct.description;    
      let options = objetProduct.colors;
    let select = document.getElementById("selectColor"); 
    for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
    });
}

function addToCart() {
    const addToCartBtn = document.querySelector(".addToCartBtn"); 
    addToCartBtn.addEventListener("click", () => {
        let item = {
            title : productTitle.innerHTML,
            price : parseFloat(productPrice.innerHTML),
            quantity: parseInt(document.getElementById("quantity").value),
            _id : id
        };
console.log(item);
let x = item.title;

   

let arrayCart = [];

console.log(arrayCart);


if(localStorage.getItem("items") !== null) {
  arrayCart = JSON.parse(localStorage.getItem("items"));
}




arrayCart.push(item);
localStorage.setItem("items", JSON.stringify(arrayCart)); 
   
  
    });
}

function deleteItems() {
  localStorage.clear();
}


getProducts();
addToCart();

