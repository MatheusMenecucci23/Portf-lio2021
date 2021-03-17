var menuHamburguer = document.querySelector(".menu-hamburguer");/*selecionando o elemento*/

menuHamburguer.addEventListener("click",function(){/*add um evento e criando a funcionalidade*/ 
    document.querySelector(".container").classList.toggle("show-menu")/*.toggle remover ou adicionar uma classe*/
    /*pegando todos os elementos com container*/  
});
document.querySelector("#qtde").addEventListener("change",atualizarPreco);
document.querySelector("#js").addEventListener("change",atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change",atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change",atualizarPreco);
document.querySelector("#prazo").addEventListener("change",function(){
    const prazo = document.querySelector("#prazo").value;
    document.querySelector("label[for=prazo]").innerHTML = "Prazo: " + prazo+ " semanas";
    atualizarPreco()

});



function atualizarPreco(){
    const qtde = document.querySelector("#qtde").value/*value para pegar o valor*/ ;
    let preco = qtde * 100;
    const temJS = document.querySelector("#js").checked;
    const incluilayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    if (temJS){
        preco = preco+(preco*0.1);
    }
    if (incluilayout){
        preco = preco + 500;
    }
    let taxaUrgencia = 1 - prazo * 0.1;
    preco = preco + preco*taxaUrgencia;
    document.querySelector("#preco").innerHTML = "R$"+ preco.toFixed(2).replace(".", ",");/*toFixed para colocar as casa decimais e replace para trocar o ponto por virgula*/
}