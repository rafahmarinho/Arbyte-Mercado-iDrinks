let carrinho = []

class ProdutoNoCarrinho {
  constructor(nome, preco, quantidade) {
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
  }
}

function colocarProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeDoProduto) {
  if (quantidadeDoProduto !== "") {
    let produtoNoCarrinho = new ProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeDoProduto)
    carrinho.push(produtoNoCarrinho)

    console.log("Coloquei " + produtoNoCarrinho.quantidade + " " + produtoNoCarrinho.nome + "(s) no carrinho!")

    calcularValorTotalDoCarrinho()
  } else {
    alert("Mas não queria o produto?")
  }
}

function calcularValorTotalDoCarrinho() {
  let soma = 0

  for (let i = 0; i < carrinho.length; i++) {
    let produtoNoEspacoAtualNoCarrinho = carrinho[i]

    let valorTotalDoProdutoAtual = produtoNoEspacoAtualNoCarrinho.preco * produtoNoEspacoAtualNoCarrinho.quantidade

    soma = soma + valorTotalDoProdutoAtual
  }
  document.getElementById("carrinho").value = soma
  console.log("O valor total do carrinho é de R$ " + soma)

  let h2Valor = document.getElementById("h2Valor")


  h2Valor.innerHTML = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto) {
  let inputComPreco = document.getElementById(idDoCampoPreco)
  let valorDoProduto = inputComPreco.value
  let quantidadeDoProduto = document.getElementById(idDoCampoQuantidade).value

  colocarProdutoNoCarrinho(nomeDoProduto, valorDoProduto, quantidadeDoProduto)
}


window.onload = function () {

  document.getElementById("comprarMorango").addEventListener("click", () => {
    let idDoCampoPreco = "precoMorango"
    let idDoCampoQuantidade = "quantidadeMorango"
    let nomeDoProduto = "Morango"
    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })

  document.getElementById("comprarKiwi").addEventListener("click", () => {
    let idDoCampoPreco = "precoKiwi"
    let idDoCampoQuantidade = "quantidadeKiwi"
    let nomeDoProduto = "Kiwi"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })

  document.getElementById("comprarLichia").addEventListener("click", () => {
    let idDoCampoPreco = "precoLichia"
    let idDoCampoQuantidade = "quantidadeLichia"
    let nomeDoProduto = "Lichia"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
}



// let carrinho = []

// class ProdutoNoCarrinho {
//   constructor(nome, preco, quantidade) {
//     this.nome = nome;
//     this.preco = preco;
//     this.quantidade = quantidade;
//   }
// }

// function colocarProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeProduto) {
//   if (quantidadeProduto !== "") {
//     let produtoNoCarrinho = new ProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeProduto)
//     carrinho.push(produtoNoCarrinho)
//     console.log("Coloquei " + produtoNoCarrinho.quantidade + " " + produtoNoCarrinho.nome + "(s) no carrinho!")
//     calcularValorTotalDoCarrinho()
//   } else {
//     alert("Mas você não queria o produto?")
//   }
// }

// function calcularValorTotalDoCarrinho() {
//   let soma = 0

//   for (let i = 0; i < carrinho.length; i++) {
//     let produtoNoEspacoAtualNoCarrinho = carrinho[i]
//     let valorTotaldoProdutoAtual = produtoNoEspacoAtualNoCarrinho.preco * produtoNoEspacoAtualNoCarrinho.quantidade
//     soma = soma + valorTotaldoProdutoAtual
//   }
// //inputOndeFicaValorTotalDoCarrinho = document.getElementById("valorTotalDoCarrinho")
// let h3Valor = document.getElementById("h3Valor")

// h3Valor.innerHTML = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'});
// }

// function clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto) {
//   let inputComPreco = document.getElementById(idDoCampoPreco)
//   let valorDoProduto = inputComPreco.value
//   let quantidadeProduto = document.getElementById(idDoCampoQuantidade).value

//   colocarProdutoNoCarrinho(nomeDoProduto, valorDoProduto, quantidadeProduto)
// }

// window.onload = function () {
//   document.getElementById("comprarMorango").addEventListener("click", () => {
//     let idDoCampoPreco = "precoMorango"
//     let idDoCampoQuantidade = "quantidadeMorango"
//     let nomeDoProduto = "Morango"
//     clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
//   })

//   document.getElementById("comprarKiwi").addEventListener("click", () => {
//     let idDoCampoPreco = "precoKiwi"
//     let idDoCampoQuantidade = "quantidadeKiwi"
//     let nomeDoProduto = "Kiwi"

//     clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
//   })
// }


//   document.getElementById("comprarLichia").addEventListener("click", () => {
//     let idDoCampoPreco = "precoLichia"
//     let idDoCampoQuantidade = "quantidadeLichia"
//     let nomeDoProduto = "Lichia"

//     clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
//   })

