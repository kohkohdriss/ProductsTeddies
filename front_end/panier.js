

let productTitle = document.querySelector(".productTitle");
let productPrice = document.querySelector(".productPrice");
let productQuantity = document.querySelector(".productQuantity");
let productTotal = document.querySelector(".productTotal");


let lsProduct = localStorage.getItem('items');
let productObjet = JSON.parse(lsProduct);

console.log(lsProduct);
console.log("productObjet")
console.log(productObjet);
let total=0;
for (let i = 0; i < productObjet.length; i++) {
    productTitle.innerHTML += `<div> ${productObjet[i].title}</div>` ;
    productPrice.innerHTML += `<div> ${productObjet[i].price} €</div>` ;
    productQuantity.innerHTML += `<div> ${productObjet[i].quantity}</div>` ;
   
    total += productObjet[i].quantity* productObjet[i].price;
    
}
productTotal.innerHTML = total +`€`;

localStorage.setItem("total", total);


/*
let confirmProdusct = [];
 confirmProdusct.push(productObjet);

 let firstName = document.querySelector(".firstName").value;
let lastName = document.querySelector(".lastName").value;
 let email = document.querySelector(".email").value;
 let street = document.querySelector(".street").value;
let city = document.querySelector(".city").value;
let country = document.querySelector(".country").value;

let total = document.querySelector(".productTotal").textContent;


/*

 const order = {
     contact : {
         firstNmae : firstName,
         lastName : lastName,
         email : email,
         steet : street,
         city : city,
         country : country
     },
     confirmProdusct : confirmProdusct
 };

 //envoyer au back-end l'order et le total

/*
 function send(e) {
  e.preventDefault();
  fetch("https://mockbin.com/request", {
    method: "POST",
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({value: document.getElementById("value").value})
  })
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
      document
        .getElementById("result")
        .innerText = value.postData.text;
  });
}

document
  .getElementById("form")
  .addEventListener("submit", send);
}); */











