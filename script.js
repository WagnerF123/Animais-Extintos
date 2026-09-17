/* =====================================
   MENU MOBILE
===================================== */

function abrirMenu() {

    const menu = document.querySelector(".menu");

    menu.classList.toggle("aberto");

}


/* =====================================
   CURIOSIDADES
===================================== */

const curiosidades = {

    mamute: {

        titulo: "Mamute-lanoso",

        icone: "🐂",

        texto:
            "O mamute-lanoso era parente dos elefantes atuais. " +
            "Seu corpo era coberto por uma camada de pelos que ajudava " +
            "a enfrentar o frio. Ele viveu em regiões frias do hemisfério " +
            "norte durante a Era do Gelo."
    },


    dodo: {

        titulo: "Dodô",

        icone: "🐔",

        texto:
            "O dodô vivia na ilha Maurício, no oceano Índico. " +
            "Como não enfrentava grandes predadores terrestres, " +
            "evoluiu sem a necessidade de voar. A presença humana " +
            "e de animais introduzidos na ilha contribuiu para seu desaparecimento."
    },


    smilodon: {

        titulo: "Smilodon",

        icone: "🐯",

        texto:
            "Apesar de ser conhecido como tigre-dentes-de-sabre, " +
            "o Smilodon não era um tigre. Era um felino de um grupo " +
            "diferente dos grandes felinos atuais. Seus enormes caninos " +
            "eram uma de suas características mais marcantes."
    },


    mosassauro: {

        titulo: "Mosassauro",

        icone: "🌊",

        texto:
            "Os mosassauros eram grandes répteis marinhos que viveram " +
            "durante o período Cretáceo. Alguns alcançavam vários metros " +
            "de comprimento e ocupavam uma posição importante entre os " +
            "predadores dos antigos oceanos."
    }

};


/* =====================================
   ABRIR CURIOSIDADE
===================================== */

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


/* =====================================
   FECHAR MODAL
===================================== */

function fecharModal() {

    document
        .getElementById("modal")
        .classList.remove("ativo");

}


/* =====================================
   FECHAR CLICANDO FORA
===================================== */

document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            fecharModal();

        }

    });


/* =====================================
   TECLA ESC
===================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fecharModal();

    }

});


/* =====================================
   FECHAR MENU AO CLICAR EM UM LINK
===================================== */

document.querySelectorAll(".menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".menu")
            .classList.remove("aberto");

    });

});