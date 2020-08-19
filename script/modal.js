// modal

function abrirCarrinho(){
  //objeto da classe carrinho
  const carro = new Carrinho();
  // Get the modal
  var modal = document.getElementById('myModal');
  //modal footer
  var modalFooter = document.querySelector(".modal-footer");
  //span total dos valores
  var subTotal = document.querySelector("#total");

  // Get the button that opens the modal
  var btn = document.getElementById("meu-carrinho");

  //botão comprar 
  var botao = document.querySelector("#comprar-bt");
  
  //frase carrinho vazio <p>
  var fraseVazio = document.querySelector(".modal-body").getElementsByTagName('p')[0];
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  //frase carrinho vazio
  if(fraseVazio.style.display != "none"){
    fraseVazio.style.display = "block";
  }
  
  //modal footer hide
  modalFooter.style.display = "none";

// adicionar ao carrinho

 botao.onclick = function(){
    modal.style.display = "block";
    
  
    fraseVazio.style.display = "none";
    modalFooter.style.display = "block";
      
   
   
    const id = document.querySelector(".ID").textContent;
    const nome = document.querySelector(".nome").textContent;
    const preco = document.querySelector(".preco").textContent;
    const qtd = document.querySelector("#qtdID").value;
   

    carro.adicionar(id, nome, preco, qtd);
    
    // carro.armazenaSession();
    // console.log(carro.getID()+" \n"+carro.getnome()+" \n"+ carro.getpreco());

  // console.log(carro.getArray());
   
   //mostra valor total do obj carrinho
   subTotal.innerHTML = "R$ "+carro.calculaTotal() +",00";
  
  }
 

} //fecha função abrir carrinho


class Carrinho{
	constructor(){
		this.item = {
      id: 1,
      nome: "UAUI",
      preco:99,
      qtd: 1
    };
		
		this.ITENS;
    		
		this.carrinho =[];
    
		this.total = this.carrinho.reduce(function(total, item){ return total+item.preco},0);
		
	}
	adicionar(id, nome, preco, qtd){
    this.itens = {
			id : parseInt(id),
			nome: nome,
			preco: parseInt(preco),
			qtd: qtd
			
     
		};
    if(this.itens.qtd<1){this.itens.qtd=1;}    
		this.carrinho.push(this.itens);	
	} 
	
	visualizar(){
		for(var i=0; i<this.carrinho.length; i++){
			console.log(this.carrinho[i]);	
		}
		return console.log(this.carrinho);
	}
	
	remover(){
		this.carrinho.pop();
	}
  
  getID(){
    let IDsCarrinho = [];
    for(let i=0;i<this.carrinho.length;i++){
      IDsCarrinho[0] = this.carrinho[i].id;
    }
    return IDsCarrinho[0];
  }
  
  getnome(){
    let IDsCarrinho = [];
    for(let i=0;i<this.carrinho.length;i++){
      IDsCarrinho[0] = this.carrinho[i].nome;
    }
    return IDsCarrinho[0];
  }
  
  getpreco(){
    let IDsCarrinho = [];
    for(let i=0;i<this.carrinho.length;i++){
      IDsCarrinho[0] = this.carrinho[i].preco;
    }
    return IDsCarrinho[0];
  }
  
  getArray(){
    return this.carrinho;
  }
  
  calculaTotal(){
    let total = 0;
    let qtd = 1;
    for(let i=0;i<this.carrinho.length;i++){
      total = this.carrinho[i].preco + total;
      qtd = this.carrinho[i].qtd;
    }
    return total*qtd;
  }
  
  armazenaSession(){
    if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("ID", this.itens.id);
      localStorage.setItem("nome", this.itens.nome);
      localStorage.setItem("preco", this.itens.preco);
      // Retrieve
      document.querySelector("#total").innerHTML = this.total;
      var divCriado = document.createElement("DIV"); 
      divCriado.style.backgroundColor = "#f01";
      var texto1 = document.createTextNode(localStorage.getItem("nome"));
      divCriado.appendChild(texto1);
      var texto2 = document.createTextNode(localStorage.getItem("preco"));
      divCriado.appendChild(texto2);
      
      var modalBody = document.querySelector(".modal-body");
      modalBody.appendChild(divCriado);                   
      
    } else {
        document.getElementById("result").innerHTML = "Desculpe, seu navegador não suporta armazenamento web...";
     }
  }
}