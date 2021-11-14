let name = document.querySelector(".name");
let total = document.querySelector(".total");
let orderId = document.querySelector(".orderId");
let email = document.querySelector(".email");
let address = document.querySelector(".address");
//recupération de l'order (contact et produits ) du local storage et les afficher sur la page confiramtion
function confiramtion() {
  const order = JSON.parse(localStorage.getItem("order")) || [];
  const totalLs = localStorage.getItem("total");
  name.innerHTML = order.contact.firstName + ` ` + order.contact.lastName;
  total.innerHTML = totalLs + " €";
  orderId.innerHTML = order.orderId;
  email.innerHTML = order.contact.email;
  address.innerHTML = order.contact.address + " " + order.contact.city;
}
confiramtion();
