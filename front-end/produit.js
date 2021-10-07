let params = new URL(document.location).searchParams;
let id = params.get("_id");

//Variables Globales
const arrayCart = JSON.parse(localStorage.getItem("items")) || [];

const productImg = document.querySelector(".img");
const productTitle = document.querySelector(".title");
const productPrice = document.querySelector(".price");
const productColor = document.querySelector("#selectColor");
const productDescription = document.querySelector(".description");
const alertCart = document.querySelector(".alertCart");
const emptyCart = document.querySelector(".emptyCart");

function getProducts() {
  // On récupère uniquement le produit dont on a besoin via le paramètre dans la requête
  fetch(`http://localhost:3000/api/teddies/${id}`)
    .then(function (response) {
      return response.json();
    })
    .catch((error) => {
      alert("Error of connection to the server");
    })
    .then(function (objetProduct) {
      // On place les données reçues via l'API aux bons endroits sur la page

      productImg.src = objetProduct.imageUrl;
      productTitle.innerHTML = objetProduct.name;
      productPrice.innerHTML = (objetProduct.price / 100).toFixed(2) + " €";
      productDescription.innerHTML = objetProduct.description;
      let options = objetProduct.colors;
      let select = document.getElementById("selectColor");
      for (var i = 0; i < options.length; i++) {
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
  addToCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let item = {
      title: productTitle.innerHTML,
      price: parseFloat(productPrice.innerHTML),
      img: productImg.src,
      quantity: parseInt(document.getElementById("quantity").value),
      _id: id,
    }; //console.log("item" );
    //console.log( item);
    isAlreadyPresent = false;
    let indexModification;

    for (products of arrayCart) {
      switch (products._id) {
        case item._id:
          isAlreadyPresent = true;
          indexModification = arrayCart.indexOf(products);
      }
    }

    if (isAlreadyPresent) {
      for (var i = 0; i < arrayCart.length; i++) {
        if (arrayCart[i]._id === item._id) {
          arrayCart[i].quantity += item.quantity;
          localStorage.setItem("items", JSON.stringify(arrayCart));
        }
      }
    } else {
      arrayCart.push(item);
      localStorage.setItem("items", JSON.stringify(arrayCart));
    }
    alertCart.setAttribute("style", "visibility : visible");
  });
}

function deleteItems() {
  emptyCart.addEventListener("click", function () {
    if (confirm("Vider le panier ? ")) {
      // Code à éxécuter si le l'utilisateur clique sur "OK"
      localStorage.clear();
      alert("le panier est vide");
    } else {
      // Code à éxécuter si l'utilisateur clique sur "Annuler"
      alert("Encore des produits dans le panier");
    }
    alertCart.setAttribute("style", "visibility : hidden");
  });
}

getProducts();
addToCart();
deleteItems();
