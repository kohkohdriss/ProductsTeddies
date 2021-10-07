if(localStorage.getItem("items") !== null) {
    arrayCart = JSON.parse(localStorage.getItem("items"));
  
    for(let i=0; i<arrayCart.length;i++){
  
      if(arrayCart[i][_id] === item[_id]){
        arrayCart[i][quantity] +=item[quantity];
        let x = arrayCart[i][quantity];
        
      let   item = { 
          title : arrayCart[i][title],
          price : arrayCart[i][price],
          quantity: x,
          _id : id
        }
        arrayCart.push(item); 
        localStorage.setItem("items", JSON.stringify(arrayCart));  
  
      }
  
    }
  }



  let arrayCart = [];
  arrayCart = JSON.parse(localStorage.getItem("items"));
  for(let i=0;i<arrayCart.length-1;i++){
     for(let j=i+1;j<arrayCart.length; j++){
       if (arrayCart[i]._id===arrayCart[j]._id){
         arrayCart[i].quantity +=arrayCart[j].quantity;
           let item = {
             title : arrayCart[i].title,
             price : arrayCart[i].price,
             quantity: arrayCart[i].quantity,
             _id :arrayCart[i]._id
           };
       }
     }
     localStorage.clear();
     arrayCart.push(item);
     localStorage.setItem("items", JSON.stringify(arrayCart));   
  }


  if(localStorage.getItem("items") !== null){
    arrayCart = JSON.parse(localStorage.getItem("items"));
    arrayCart.forEach(oldItem => {
      if(oldItem._id===item._id){
        oldItem.quantity +=item.quantity;
       
        
      }else{
        arrayCart.push(item);
      }

      
    });
  }else{
    arrayCart.push(item);
  }
  localStorage.setItem("items", JSON.stringify(arrayCart)); 



  for(i=0;i<arrayCart.length;i++){
    if(arrayCart[i]._id === item._id){
      arrayCart[i].title = item.title;
      arrayCart[i].price = item.price;
      arrayCart[i].quantity += item.quantity;
    } 
   

         

        /*



        console.log('methode find');
                 itemFound = arrayCart.find(itemId);
                console.log(itemFound);
        
                console.log('fin de find');  

 for (var i = 0; i < arrayCart.length; i++) {
          if(arrayCart[i]._id === item._id){
            arrayCart[i].quantity += item.quantity;
            localStorage.setItem("items", JSON.stringify(arrayCart));
          }

        }


        for (var i = 0; i < arrayCart.length; i++) {
        const values = arrayCart.values(i) 
        console.log(values)
        }
/*
          for (var i = 0; i < arrayCart.length; i++) {
              if (arrayCart[i] === item) {
                console.log("item n'existe pas")
                arrayCart[i].quantity += item.quantity;
                localStorage.setItem("items", JSON.stringify(arrayCart)); 
              }
            
          } */ 


          if (localStorage.getItem("items") !== null) {
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
/////////////////////////////////////////////////////////////////////

          if (localStorage.getItem("items") !== null) {
            let isAlreadyPresent = false; 
            let indexModification;
            for (products of arrayCart) {
                switch (products._id) {
                    case item._id:
                        isAlreadyPresent = true;
                        indexModification = arrayCart.indexOf(products);
                }
            }

            // si déjaPresent incrémente seulement la quantité
            if (isAlreadyPresent) {
              arrayCart[indexModification].quantity =
                  +arrayCart[indexModification].quantity + +item.quantity;
                  localStorage.setItem("items", JSON.stringify(arrayCart));
              // si non, ajoute le produit au localStorage
    }} else {
      arrayCart.push(item);
      localStorage.setItem("items", JSON.stringify(arrayCart));
    }















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
        adress : street,
         city : city
     },
     Produscts : 
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
