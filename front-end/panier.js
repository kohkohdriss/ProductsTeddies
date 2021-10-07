let productTitle = document.querySelector(".productTitle");
let productPrice = document.querySelector(".productPrice");
let productImg = document.querySelector(".productImg");
let productQuantity = document.querySelector(".productQuantity");
let productTotal = document.querySelector(".productTotal");
const emptyCart = document.querySelector(".emptyCart");

var lsProduct = localStorage.getItem("items");
console.log(lsProduct);
console.log("avant");
let productObjet = JSON.parse(lsProduct);
console.log("productobjet");
console.log(productObjet);

let total = 0;
for (let i = 0; i < productObjet.length; i++) {
  console.log(productObjet[i]);
  productTitle.innerHTML += `<div class="productCart"> ${productObjet[i].title}</div>`;
  productImg.innerHTML += `<div class="productCart"><img src="${productObjet[i].img}" alt="" width=50px></div> `;
  productPrice.innerHTML += `<div class="productCart"> ${productObjet[i].price} €</div>`;
  productQuantity.innerHTML += `<div class="productCart"> ${productObjet[i].quantity}</div>`;
  total += productObjet[i].quantity * productObjet[i].price;
}
console.log("productImg");
console.log(productTitle.innerHTML);
productTotal.innerHTML = total + ` €`;

localStorage.setItem("total", total);

//validation du formulaire et envoie en POST

const order = document.getElementById("order");

//validation du formulaire et envoie en POST
const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
const regexCity =
  /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;
const checkBox = document.querySelector(".invalid-feedback");

order.addEventListener("click", (event) => {
  // on prépare les infos pour l'envoie en POST
  let contact = {
    firstName: document.querySelector(".firstName").value,
    lastName: document.querySelector(".lastName").value,
    address: document.querySelector(".address").value,
    city: document.querySelector(".city").value,
    email: document.querySelector(".email").value,
  };

  console.log(
    contact.firstName +
      contact.lastName +
      contact.address +
      contact.city +
      contact.email
  );

  // on valide que le formulaire soit correctement rempli
  if (
    (regexMail.test(contact.email) == true) &
    (regexName.test(contact.firstName) == true) &
    (regexName.test(contact.lastName) == true) &
    (regexCity.test(contact.city) == true) &
    (regexAddress.test(contact.address) == true)
  ) {
    event.preventDefault();
    console.log(lsProduct);
    console.log(productObjet);

    let products = [];
    for (item of productObjet) {
      console.log(item);
      products.push(item._id);
    }

    console.log(products);

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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

//function to be cart empty
function deleteItems() {
  emptyCart.addEventListener("click", function () {
    if (confirm("Vider le panier ? ")) {
      // Code à éxécuter si le l'utilisateur clique sur "OK"
      localStorage.clear();
    } else {
      // Code à éxécuter si l'utilisateur clique sur "Annuler"
      alert("Encore des produits dans le panier");
    }
  });
}

deleteItems();
