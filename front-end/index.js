function getPosts() {
  fetch("http://localhost:3000/api/teddies")
    .then((res) => res.json())
    .catch((error) => {
      alert("Error of connection to the server");
    })
    .then((data) => {
      console.log('data', data);
      let output = "";
      data.forEach(function (item) {
        console.log('item', item)
        output += `
          <div class="card card-body mb-3  col-12 col-md-4   ">
            <img class="imgProduct" src="${
              item.imageUrl
            }" alt="" class="figure-img img-fluid rounded" > 
           <div>
                <h3 class="card-title" >${item.name}</h3>
                <p class="card-text" >${(item.price / 100).toFixed(2)} €</p>
            </div>
            
            <a href="produit.html?_id=${item._id}" class=" stretched-link"></a>
            <div  class="text-center">
              <button class="btnAcheter" >Acheter ce produit</button>
            </div>
          </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
};
getPosts();
