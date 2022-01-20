let productTitle = document.querySelector(".productTitle");
let productPrice = document.querySelector(".productPrice");
let productImg = document.querySelector(".productImg");
let productQuantity = document.querySelector(".productQuantity");
let productTotal = document.querySelector(".productTotal");
const emptyCart = document.querySelector(".emptyCart");
const order = document.getElementById("order");
const checkBox = document.getElementById("invalidCheck");
//recuperation des données des local storage
var lsProduct = localStorage.getItem("items");
let productObjet = JSON.parse(lsProduct);
console.log("productobjet");
console.log(productObjet);
//affichage des données dans le panier, calcaul le total et la création de total dans le local storage
let total = 0;
for (let i = 0; i < productObjet.length; i++) {
  console.log(productObjet[i]);
  productTitle.innerHTML += `<div class="productCart"> ${productObjet[i].title}</div>`;
  productImg.innerHTML += `<div class="productCart"> <a href="produit.html?_id=${productObjet[i]._id}"><img src="${productObjet[i].img}" alt="" width=50px></a></div> `;
  productPrice.innerHTML += `<div class="productCart"> ${productObjet[i].price} €</div>`;
  productQuantity.innerHTML += `<div class="productCart"> ${productObjet[i].quantity}</div>`;
  total += productObjet[i].quantity * productObjet[i].price;
}
productTotal.innerHTML = total + ` €`;
localStorage.setItem("total", total);
//validation du formulaire
const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAddress = /^[a-zA-Z0-9\s,'-]*$/;
//préparation du formulaire contact et savalidation plus les produits achetés et les envoyés vers le local storage
order.addEventListener("click", (event) => {
  // on prépare les infos pour l'envoie en POST
  let contact = {
    firstName: document.querySelector(".firstName").value,
    lastName: document.querySelector(".lastName").value,
    address: document.querySelector(".address").value,
    city: document.querySelector(".city").value,
    email: document.querySelector(".email").value,
  };
  // on valide que le formulaire soit correctement rempli
  if (
    (regexMail.test(contact.email) == true) &
    (regexName.test(contact.firstName) == true) &
    (regexName.test(contact.lastName) == true) &
    (regexCity.test(contact.city) == true) &
    (regexAddress.test(contact.address) == true) &
    (checkBox.checked == true)
  ) {
    event.preventDefault();
    let products = [];
    for (item of productObjet) {
      for (let j = 0; j < item.quantity; j++) {
        products.push(item._id);
      }
    }
    // on envoie en POST
    fetch("https://teddies-api.herokuapp.com/api/teddies/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contact, products }),
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("order", JSON.stringify(data));
        document.location.href = "confirmation.html";
      })
      .catch((erreur) => console.log("erreur : " + erreur));
  } else {
    alert("Un champ de contact n'est pas correct");
  }
});

deleteItems();
