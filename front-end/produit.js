// let params = new URL(document.location).searchParams;
// let id = params.get("_id");
let id = new URL(document.location).search.split("=")[1];
//Variables Globales
const arrayCart = JSON.parse(localStorage.getItem("items")) || [];
const productImg = document.querySelector(".img");
const productTitle = document.querySelector(".title");
const productPrice = document.querySelector(".price");
const productColor = document.querySelector("#selectColor");
const productDescription = document.querySelector(".description");
const alertCart = document.querySelector(".alertCart");
const emptyCart = document.querySelector(".emptyCart");
//fonction récuperer le produit avec son id depuis le serveur
function getProduct() {
  // On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
  fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(function (response) {
      return response.json();
    })
    .catch((error) => {
      alert("Error of connection to the server");
    })
    .then(function (product) {
      // On place les données reçues via l'API aux bons endroits sur la page
      productImg.src = product.imageUrl;
      productTitle.textContent = product.name;
      productPrice.textContent = (product.price / 100).toFixed(2) + " €";
      productDescription.textContent = product.description;
      let options = product.colors;
      let select = document.getElementById("selectColor");
      for (let i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    });
}

getProduct();
addToCart();
deleteItems();
