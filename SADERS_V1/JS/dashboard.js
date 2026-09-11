const botonesAbrir = document.querySelectorAll(".btn-abrir");


botonesAbrir.forEach(function (boton) {

    boton.addEventListener("click", function () {

        alert("Aquí se abrirá la información del paciente.");

    });

});


const notificaciones = document.querySelector(".notificaciones");


notificaciones.addEventListener("click", function () {

    alert("No tienes nuevas notificaciones.");

});