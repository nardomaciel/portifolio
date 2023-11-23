let num_secreto = Math.floor(Math.random() * 100) + 1
let qtdtentativas = 0
let verificarResposta = document.getElementById("verificaResposta")
let tentativa_entrada = document.getElementById("tentativa")
let dica = document.getElementById("dica")

verificarResposta.addEventListener("click", function(){

    const tentativa = parseInt(tentativa_entrada.value);

    if (tentativa === num_secreto) {
        dica.textContent = 'a miseravi cagao, vai jogar na cena leke. so levou ${qtdtentativas} tentativas' ;
      
        verificarResposta.disabled = true;
    }else if(tentativa < num_secreto){
        dica.textContent = 'passou perto em mas o numero secreto é maior que esse. ${qtdtentativas}'
        qtdtentativas++;
    }else{
        dica.textContent = 'passou perto em mas o numero secreto é menor que esse. ${qtdtentativas}'
        qtdtentativas++;
    }
})