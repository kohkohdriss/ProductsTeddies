//add to Cart
function addToCart() {
  const addToCartBtn = document.querySelector(".addToCartBtn");
  addToCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let item = {
      title: productTitle.textContent,
      price: parseFloat(productPrice.textContent),
      img: productImg.src,
      quantity: parseInt(document.getElementById("quantity").value),
      _id: id,
    }; 

    //vérifier si un produit existe déja dans le panier
    function isAlreadyPresent() {
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
    }

    isAlreadyPresent();
    alertCart.setAttribute("style", "visibility : visible");
    setInterval(function () {
      alertCart.setAttribute("style", "visibility : hidden");
    }, 2000);
  });
}
//Fonction to delete cart
function deleteItems() {
  emptyCart.addEventListener("click", function () {
    if (confirm("Vider le panier ? ")) {
      // Code à éxécuter si le l'utilisateur clique sur "OK"
      localStorage.clear();
      alert("le panier est vide");
      window.location.reload();
    } else {
      // Code à éxécuter si l'utilisateur clique sur "Annuler"
      alert("Encore des produits dans le panier");
    }
    alertCart.setAttribute("style", "visibility : hidden");
  });
}
