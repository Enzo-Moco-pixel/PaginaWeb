// Botão
document.addEventListener("DOMContentLoaded", function () {

    const botao = document.querySelector(".botao-curtir");
    const contador = botao.querySelector("span");

    let numero = 0;

    botao.addEventListener("click", function () {

        numero++;
        contador.textContent = numero;

    });

    
});