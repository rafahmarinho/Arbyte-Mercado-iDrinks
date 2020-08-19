const url = axios.get(`http://localhost:3000/carrinho`, config)
const urlProduct = axios.get(`http://localhost:3000/categorias`, config)
    url.then(res => {
        const products = res.products
    } )

function clicouEmCompra (){
    for (let i = 0; i <= 50; i++ ){
        document.getElementById(`clienteComprou${i}`).addEventListener("click")
            Carrinho.push('NaqueleProduto das 5 linhas anterios')
            axios.post(`/carrinho`, {
                    name: "Cabaré",
                    description: "CACHAÇA CABARÉ OURO - 700ml",
                    price: 26.99,
                    photo: "./img/produtos/cachaca/cachaca_cabare.webp",
                    category: 1
            },
            config
            )}
}