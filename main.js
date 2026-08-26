// =========================================================
// ELEMENTOS
// =========================================================

const intro = document.getElementById("intro");

const videoIntro =
    document.getElementById("videoIntro");

const introVideo =
    document.getElementById("intro-video");

const introPuertas =
    document.getElementById("intro-puertas");

const botonEntrar =
    document.getElementById("entrar");

const botonSaltar =
    document.getElementById("saltarIntro");

const arFrame =
    document.getElementById("arFrame");

const botonReiniciar =
    document.getElementById("reiniciarAR");

    const botonVolverComenzar =
    document.getElementById("volverComenzar");


// =========================================================
// FUNCIÓN PARA MOSTRAR LAS PUERTAS
// =========================================================



function mostrarPuertas() {

    // Ocultar inmediatamente el botón "Omitir intro"
    botonSaltar.classList.add("oculto");

    // Ocultar video
    introVideo.classList.add("ocultar");

    // Mostrar puertas
    setTimeout(() => {

        introPuertas.classList.add("mostrar");

    }, 800);

}

// =========================================================
// CUANDO TERMINA EL VIDEO
// =========================================================

if (videoIntro) {

    videoIntro.addEventListener("ended", () => {

        mostrarPuertas();

    });

}


// =========================================================
// OMITIR INTRO
// =========================================================

botonSaltar.addEventListener("click", () => {

    // Detener el video
    videoIntro.pause();

    // Ocultar botón inmediatamente
    botonSaltar.classList.add("oculto");

    // Ocultar video
    introVideo.classList.add("ocultar");

    // Mostrar puertas rápidamente
    setTimeout(() => {

        introPuertas.classList.add("mostrar");

    }, 500);

});


// =========================================================
// ENTRAR AL AR
// =========================================================

if (botonEntrar) {

    botonEntrar.addEventListener("click", () => {

        // Abrir puertas
        intro.classList.add("abrir");


        // Esperar a que termine la animación
        setTimeout(() => {

            intro.style.display = "none";

        }, 1200);

    });

}


// =========================================================
// REINICIAR SOLAMENTE EL AR
// =========================================================

if (botonReiniciar) {

    botonReiniciar.addEventListener("click", () => {

        arFrame.src = arFrame.src;

    });

}


// =========================================================
// VOLVER A COMENZAR TODA LA EXPERIENCIA
// =========================================================

if (botonVolverComenzar) {

    botonVolverComenzar.addEventListener("click", () => {

        // Recargar toda la página
        window.location.reload();

    });

}