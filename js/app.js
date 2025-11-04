
let restoPista = 0;
let restoSuperior = 0;
let restoInferior = 0;


let qtdPista    =  document.getElementById("qtd-pista").innerHTML.valueOf();
let qtdSuperior =  document.getElementById("qtd-superior").innerHTML.valueOf();
let qtdInferior =  document.getElementById("qtd-inferior").innerHTML.valueOf();


function comprar(){
    
    let tipoIngressos = document.getElementById('tipo-ingresso')
    let qtde = document.getElementById('qtd');
    
  
   if (qtde.value > 0){
    if (qtdPista > 0 && tipoIngressos.value == "pista"){
        restoPista = qtdPista - qtde.value;
        qtdPista = document.getElementById('qtd-pista').value = restoPista;
        document.getElementById('qtd-pista').innerHTML = `<span id="qtd-pista">${qtdPista}</span>`;
     } else if (qtdSuperior > 0 && tipoIngressos.value == "superior"){
        restoSuperior = qtdSuperior - qtde.value;
        qtdSuperior = document.getElementById('qtd-superior').value = restoSuperior;
        document.getElementById('qtd-superior').innerHTML = `<span id="qtd-superior">${qtdSuperior}</span>`;
     } else  if (qtdInferior > 0 && tipoIngressos.value == "inferior"){
        restoInferior = qtdInferior - qtde.value;
        qtdInferior = document.getElementById('qtd-inferior').value = restoInferior;
        document.getElementById('qtd-inferior').innerHTML = `<span id="qtd-inferior">${qtdInferior}</span>`;
     } else {
        alert(`Quantidade indisponível para ${tipoIngressos.value}`);
     }
   } else{
        alert('o número não pode ser negativo');
   } 

}

