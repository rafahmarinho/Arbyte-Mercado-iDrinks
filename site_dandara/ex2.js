// 2. Quando não passar todos os produtos, aviso quais produtos ficariam de fora (nome e valor do produto)
// const rs = require('readline-sync')
// class Usuario {
//   constructor(nome, saldoNoCartao) {
//     this.nome = nome
//     this.saldoNoCartao = saldoNoCartao
//     this.carrinho = []
//   }
// }

// let usuario = new Usuario('Dandara', 50)

// class Produto {
//   constructor(id, nome, valor) {
//     this.id = id
//     this.nome = nome
//     this.valor = valor
//   }
// }
// class Mercado {
//   constructor(nome, dono) {
//     this.nome = nome
//     this.dono = dono

//     let morango = new Produto(
//       1,'Morango', 4.00)

//     let kiwi = new Produto(2, 'Kiwi', 6)

//     let lichia = new Produto(3, 'Lichia', 10)
//     this.produtos = [morango, kiwi, lichia]
//   }
//   listarProdutos() {

//     for (let i = 0; i < this.produtos.length; i++) {

//       let produtoAtual = this.produtos[i]

//       console.log("[" + produtoAtual.id + "] - " +
//         produtoAtual.nome + " custa R$ " + produtoAtual.valor)
//     }
//   }
// }
// let thereza = new Usuario('Dona Thereza', 1000000)
// let mercado = new Mercado('Mercado Arbyte', thereza)

// function comprar() {
//   mercado.listarProdutos()
//   let produtoEscolhido = rs.question("Escolha seu produto: ")
//   let limiteListaProdutos = mercado.produtos.length

//   while (produtoEscolhido > 0 && produtoEscolhido <= limiteListaProdutos) {

//     let produto = mercado.produtos[produtoEscolhido - 1]
//     console.log("Produto que o usuário escolheu é: " + produto.nome)

//     usuario.carrinho.push(produto)


//     let continuar = rs.questionInt("\nMais alguma coisa?\n[1] - Sim\n[2] - Não\n")

//     if (continuar === 1) {
//       mercado.listarProdutos()
//       produtoEscolhido = rs.question("Escolha seu produto: ")
//     }
//     else {
//       break
//     }
//   }
//   console.log("Carrinho: ")
//   console.log(usuario.carrinho)
//   console.log("Processando pagamentos...")

//   for (let i = 0; i < usuario.carrinho.length; i++) {
//     pagarProduto(usuario.carrinho[i].valor)
//       .then(respostaQuandoDeuCerto => {
//         console.log(respostaQuandoDeuCerto)
//       })
//       .catch(respostaQuandoDeuErrado => {
//         console.log(respostaQuandoDeuErrado)
//       })
//   }
// }

// comprar()

// function pagarProduto(valorProduto) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (valorProduto <= usuario.saldoNoCartao) {
//         usuario.saldoNoCartao -= valorProduto
//         resolve("TRANSAÇÃO ACEITA")
//       } else {
//         reject("SALDO INSUFICIENTE")
//       }
//     }, 5000);
//   })
// }
