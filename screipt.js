// Botão
document.addEventListener("DOMContentLoaded", function () {
    
    const botao = document.querySelector(".botao-curtir");
    let curtiu = false;
    botao.addEventListener("click", function () {
        const contador = botao.querySelector("span");

        if (curtiu === false) {

            contador.textContent = 1;
            curtiu = true;

        } else {

            contador.textContent = 0;
            curtiu = false;
        }
    });
});