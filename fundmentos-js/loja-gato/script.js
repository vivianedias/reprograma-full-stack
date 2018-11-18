window.onload = function() {
  //alert("carregou");
  showProducts();
};

function getProducts(){
  return data["items"];
}

function showProducts(){
  let productDiv = document.getElementById("products");
  productDiv.innerHTML = `
    ${getProducts().map((produto) => `
      <div class="product">
        <img src="${produto["product"]["images"][0]}" class="product-img" />
        <div class="text-name">
          <h3 class="product-name">${produto["product"]["name"]}</h3>
        </div>
        <div class="text-price">
          <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      `).join("")}
  `
}
  
  const form = document.querySelector("#mainForm");
  form.addEventListener('submit', function(event){
    event.preventDefault();

    const produto = obtemForm();
    console.log(produto);

    getProducts().push(produto);
    showProducts();
})

function obtemForm(){
    let newProduct = {
        product: {
            name: document.querySelector("#nome").value,
            images: [document.querySelector("#imagem").value],
            price: {
              value: document.querySelector("#valor").value
            } 
        }
    }
    return newProduct;
}

//   for (produto of getProducts()){
//     let productDiv = document.getElementById("products");
//     productDiv.innerHTML += "<div class='product'>" 
//     + "<img src=" + produto["product"]["images"][0] + " class='product-img' />"
//     + "<div class='text-name'>" 
//     + "<h3 class='product-name'>$" + produto["product"]["name"] + "</h3>"
//     + "</div>" + "<div class='text-price'>"
//     + "<p class='product-price'>" 
//     + Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
//     + "</p>" + "</div>" + "</div>"
//   }
// }

