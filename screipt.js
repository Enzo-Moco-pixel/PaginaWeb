// Botão
const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {

    let curtiu = false;

// Botão é clicado
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {

        console.log("Fui clicado!");

        let texto = botao.querySelector("span");

        if (curtiu === false) {

            texto.textContent++;
            curtiu = true;

        } else {

            texto.textContent--;
            curtiu = false;
        }
    }
});