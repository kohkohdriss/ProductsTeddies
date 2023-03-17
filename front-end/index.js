let myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};
var myHeaders = new Headers();

function getTeddies() {
  fetch("http://localhost:3000/api/teddies", myInit)
    .then((res) => res.json())
    .catch((error) => {
      alert("Error of connection to the server");
    })
    .then((teddies) => {
      // console.log("data", teddies);
      let output = "";
      teddies.forEach(function (teddy) {
        //console.log("item", teddy);
        output += `
          <div class="card card-body mb-3  col-12 col-md-4   ">
            <img class="imgProduct" src="${teddy.imageUrl}" alt="${
          teddy.name
        }" class="figure-img img-fluid rounded" > 
           <div>
                <h3 class="card-title" >${teddy.name}</h3>
                <p class="card-text" >${(teddy.price / 100).toFixed(2)} €</p>
            </div>
            <a href="produit.html?_id=${teddy._id}" class=" stretched-link"></a>
            <div  class="text-center">
              <button class="btnAcheter" >Acheter ce produit</button>
            </div>
          </div>
        `;
      });
      document.getElementById("output").innerHTML = output;
    });
}
getTeddies();
