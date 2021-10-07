const order = JSON.parse(localStorage.getItem("order")) || [];
const totalLs = localStorage.getItem("total");
console.log("order");
console.log(order);

let name = document.querySelector(".name");
let total = document.querySelector(".total");
let orderId = document.querySelector(".orderId");
let email = document.querySelector(".email");
let address = document.querySelector(".address");

name.innerHTML = order.contact.firstName + ` ` + order.contact.lastName;

total.innerHTML = totalLs + " €";
orderId.innerHTML = order.orderId;
email.innerHTML = order.contact.email;
address.innerHTML = order.contact.address + " " + order.contact.city;
