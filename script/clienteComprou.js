const url = axios.get(`http://localhost:3000/carrinho`, config)
const urlProduct = axios.get(`http://localhost:3000/categorias`, config)
    url.then(res => {
        const products = res.products
    } )

function clicouEmCompra (){
    for (let i = 0; i <= 50; i++ ){
