/* =========================
   MENU MOBILE
========================= */

function abrirMenu() {

    const menu = document.querySelector(".menu");

    menu.classList.toggle("aberto");

}


/* =========================
   CURIOSIDADES
========================= */

const curiosidades = {

    mamute: {
        titulo: "Mamute-lanoso",
        icone: "🦣",
        texto:
            "O mamute-lanoso era muito parecido com os elefantes atuais, mas possuía uma grossa camada de pelos para suportar o frio. Alguns grupos sobreviveram muito tempo depois do fim da última Era do Gelo."
    },

    dodo: {
        titulo: "Dodô",
        icone: "🦤",
        texto:
            "O dodô vivia na ilha Maurício, no oceano Índico. Como evoluiu em um ambiente sem grandes predadores terrestres, perdeu a capacidade de voar. A chegada dos seres humanos e de animais introduzidos na ilha contribuiu para seu desaparecimento."
    },

    smilodon: {
        titulo: "Smilodon",
        icone: "🐯",
        texto:
            "Apesar do apelido 'tigre-dentes-de-sabre', o Smilodon não era um tigre. Ele fazia parte de um grupo diferente de felinos e possuía caninos muito grandes. Viveu principalmente nas Américas."
    },

    mosassauro: {
        titulo: "Mosassauro",
        icone: "🌊",
        texto:
            "Os mosassauros eram répteis marinhos gigantes que viveram durante o período Cretáceo. Alguns chegavam a vários metros de comprimento e eram predadores importantes dos antigos oceanos."
    }

};


function mostrarCuriosidade(animal) {

    const dados = curiosidades[animal];

    if (!dados) {
        return;
    }

    document.getElementById("modal-titulo").textContent =
        dados.titulo;

    document.getElementById("modal-icone").textContent =
        dados.icone;

    document.getElementById("modal-texto").textContent =
        dados.texto;

    document.getElementById("modal").classList.add("ativo");

}


function fecharModal() {

    document.getElementById("modal")
        .classList.remove("ativo");

}


/* =========================
   FECHAR CLICANDO FORA
========================= */

document.getElementById("modal").addEventListener("click", function(event) {

    if (event.target === this) {

        fecharModal();

    }

});


/* =========================
   ESC FECHA O MODAL
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fecharModal();

    }

});