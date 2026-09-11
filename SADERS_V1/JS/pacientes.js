const buscar = document.getElementById("buscarPaciente");
const filas = document.querySelectorAll("#tablaPacientes tbody tr");
const sinResultados = document.getElementById("sinResultados");
const filtros = document.querySelectorAll(".filtro");

let filtroActual = "todos";

function actualizarTabla() {
    const texto = buscar.value.toLowerCase().trim();
    let visibles = 0;

    filas.forEach(fila => {
        const paciente = fila.cells[0].textContent.toLowerCase();
        const riesgo = fila.dataset.riesgo;

        const coincideTexto = paciente.includes(texto);
        const coincideFiltro = filtroActual === "todos" || riesgo === filtroActual;

        if (coincideTexto && coincideFiltro) {
            fila.style.display = "";
            visibles++;
        } else {
            fila.style.display = "none";
        }
    });

    sinResultados.style.display = visibles === 0 ? "block" : "none";
}

buscar.addEventListener("input", actualizarTabla);

filtros.forEach(filtro => {
    filtro.addEventListener("click", () => {
        filtros.forEach(btn => btn.classList.remove("activo"));
        filtro.classList.add("activo");
        filtroActual = filtro.dataset.filter;
        actualizarTabla();
    });
});

document.querySelectorAll(".btn-accion").forEach(boton => {
    boton.addEventListener("click", () => {
        const paciente = boton.closest("tr").cells[0].textContent.trim();
        alert("Aquí se abrirá el perfil del paciente " + paciente + ".");
    });
});

document.getElementById("btnNuevo").addEventListener("click", () => {
    alert("Aquí se abrirá el formulario para registrar un nuevo paciente.");
});

const notificaciones = document.querySelector(".notificaciones");
notificaciones.addEventListener("click", () => {
    alert("No tienes nuevas notificaciones.");
});
