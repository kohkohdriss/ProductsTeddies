window.onload = function getPosts() {
  fetch("http://localhost:3000/api/teddies")
    .then((res) => res.json())
    .catch((error) => {
      alert("Error of connection to the server");
    })
    .then((data) => {
      let output = "";
      data.forEach(function (post) {
        output += `
          <div class="card card-body mb-3  col-12 col-md-4   ">
            <img class="imgProduct" src="${
              post.imageUrl
            }" alt="" class="figure-img img-fluid rounded" > 
           <div>
                <h3 class="card-title" >${post.name}</h3>
                <p class="card-text" >${(post.price / 100).toFixed(2)} €</p>
            </div>
            
            <a href="produit.html?_id=${post._id}" class=" stretched-link"></a>
            <div  class="text-center">
              <button class="btnAcheter" >Acheter ce produit</button>
            </div>
          </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
};
