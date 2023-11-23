 const minhapiada = [
    "Hoje, perguntei ao meu telefone: “Siri, por que é que ainda estou solteiro?” e ele ativou a câmara frontal",
    "O que faz as pessoas tristes saltarem? Pontes.",
    "Quando eu morrer, eu quero morrer como o meu avô, que morreu pacificamente durante o sono. Não gritar como todos os passageiros do onibos que ele dirigia.",
    "Comprei um ralador de queijo para o aniversário do meu amigo cego. Mais tarde, ele disse-me que era o livro mais violento que ele já tinha lido.",
    "O que o teu pai tem em comum com Nemo? Os dois não podem ser encontrados.",
    "O que é pior do que morder uma maçã e encontrar um verme? Morder uma maçã e encontrar metade de um verme.",
    "Dá um fósforo a um homem e ele ficará aquecido por algumas horas. Coloca fogo nele e ele ficará aquecido para o resto da vida."
    
]
let but = document.getElementById("but")
let piu = document.getElementById("piu")

but.addEventListener('click', function(){
    const piadaaleatoria = minhapiada[Math.floor(Math.random() *minhapiada.length)]
    piu.textContent = piadaaleatoria;
 })