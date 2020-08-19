// espero a página carregar
        // window é o BOM
        // onload é o evento onde a página
        window.onload = function () {
            // document.getElementById recupera um elemento que tem o nome "botao"
            document.getElementById("comprarMaca").addEventListener("click", () => {
                // nesse primeiro let, estamos pegando o campo todo, o INPUT todo
                let inputQueTemOPrecoDaMaca = document.getElementById("precoMaca")
                // nesse segundo let, estamos pegando apenas o valor que está dentro do input
                let valorDoPrecoDaMaca = inputQueTemOPrecoDaMaca.value
                // a linha 29 e 30 poderia ser feita assim:
                // let valorDoPrecoDaMaca = document.getElementById("precoMaca").value
                // é a mesma coisa, mas em uma linha só
                // alert("O preço da maçã é " + valorDoPrecoDaMaca)

                let quantidadeQueOUsuarioQuerDeMaca = document.getElementById("quantidadeMaca").value

                if (quantidadeQueOUsuarioQuerDeMaca !== "") {
                    // alert("O preço da maçã é " + valorDoPrecoDaMaca + " e o usuário quer " + quantidadeQueOUsuarioQuerDeMaca + " maçãs")
                    let valorTotalDasMacas = valorDoPrecoDaMaca * quantidadeQueOUsuarioQuerDeMaca

                    alert("Colocamos maçãs no seu carrinho e agora sua compra está em R$ " + valorTotalDasMacas)
                } else {
                    alert("Mas não queria maçã?")
                }
            })

            document.getElementById("comprarUva").addEventListener("click", () => {
                // nesse primeiro let, estamos pegando o campo todo, o INPUT todo
                let inputQueTemOPrecoDaUva = document.getElementById("precoUva")
                // nesse segundo let, estamos pegando apenas o valor que está dentro do input
                let valorDoPrecoDaUva = inputQueTemOPrecoDaUva.value
                // a linha 29 e 30 poderia ser feita assim:
                // let valorDoPrecoDaUva = document.getElementById("precoUva").value
                // é a mesma coisa, mas em uma linha só
                alert("O preço da uva é " + valorDoPrecoDaUva)
            })

            document.getElementById("comprarUvaSemCaroco").addEventListener("click", () => {
                // nesse primeiro let, estamos pegando o campo todo, o INPUT todo
                let inputQueTemOPrecoDaUvaSemCaroco = document.getElementById("precoUvaSemCaroco")
                // nesse segundo let, estamos pegando apenas o valor que está dentro do input
                let valorDoPrecoDaUvaSemCaroco = inputQueTemOPrecoDaUvaSemCaroco.value
                // a linha 29 e 30 poderia ser feita assim:
                // let valorDoPrecoDaUvaSemCaroco = document.getElementById("precoUvaSemCaroco").value
                // é a mesma coisa, mas em uma linha só
                alert("O preço da uva sem caroço é " + valorDoPrecoDaUvaSemCaroco)
            })
        }