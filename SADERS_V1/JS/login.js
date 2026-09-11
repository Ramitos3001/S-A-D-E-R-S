const formulario = document.getElementById("formLogin");

const password = document.getElementById("password");

const botonOjo = document.getElementById("mostrarPassword");

const pantallaCarga = document.getElementById("pantallaCarga");

const botonLogin = document.getElementById("btnLogin");

const contenedorParticulas = document.getElementById("particulas");



/* =====================================
   MOSTRAR / OCULTAR CONTRASEÑA
===================================== */

botonOjo.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        botonOjo.classList.remove("fa-eye");

        botonOjo.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        botonOjo.classList.remove("fa-eye-slash");

        botonOjo.classList.add("fa-eye");

    }

});



/* =====================================
   CREAR PARTÍCULAS
===================================== */

function crearParticulas() {

    contenedorParticulas.innerHTML = "";


    for (let i = 0; i < 70; i++) {

        const particula = document.createElement("span");

        particula.classList.add("particula");


        const posicionX =
            Math.random() * 100;


        const posicionY =
            45 + Math.random() * 45;


        const retraso =
            Math.random() * 1.5;


        const duracion =
            2 + Math.random() * 2;


        particula.style.left = posicionX + "%";

        particula.style.top = posicionY + "%";

        particula.style.animationDelay =
            retraso + "s";

        particula.style.animationDuration =
            duracion + "s";


        contenedorParticulas.appendChild(particula);

    }

}



/* =====================================
   LOGIN
===================================== */

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();


    const correo =
        document.getElementById("correo").value.trim();


    const contraseña =
        document.getElementById("password").value.trim();


    if (correo === "" || contraseña === "") {

        return;

    }


    /* BOTÓN */

    botonLogin.classList.add("cargando");

    botonLogin.querySelector("span").textContent =
        "Verificando...";


    /* CREAR PARTÍCULAS */

    crearParticulas();


    /* MOSTRAR PANTALLA */

    setTimeout(function () {

        pantallaCarga.classList.add("activa");

    }, 150);


    /* ENTRAR AL DASHBOARD */

    setTimeout(function () {

        window.location.href =
            "pages/dashboard.html";

    }, 2200);

});