const url = axios.get(`http://localhost:3000/carrinho`)

function addProductToCart (url){
        url.then(res => {
            const products = res.data

                let insertProduct = document.createElement('div');
                    insertProduct.innerHTML = `
                    <img class="card-img-top" src="${products[i].photo}" alt= "${products[i].name}" >
                     <div class="card-body">
                    <h5 class="card-title">${products[i].name}</h5>
                    <p class="card-text">Preço R$ ${products[i].price}</p>
                    <input type="number" id="quantity" class="input-text qty text col-xs-12 col-sm-6 col-md-6 col-lg-6" step="1" min="1" max=""
                    name="quantity" value="1" title="Qtd" size="4" placeholder="" inputmode="numeric">
                    <a id="clienteComprou${i}" class="btn btn-light">Comprar</a>`   
                    document.getElementById("insertProduct").appendChild(insertProduct)
        )}
}  

 window.onload = function () {
     addProductToCart(url)
 }