// Espera que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const formCuenta = document.getElementById("form_datos_cuenta");
    const formPersonales = document.getElementById("form_datos_personales");

    const btnNext = document.getElementById("btn_next");
    const btnPrev = document.getElementById("btn_prev");

    // Avanzar al siguiente formulario
    btnNext.addEventListener("click", (e) => {
        e.preventDefault(); 
        formCuenta.style.display = "none";
        formPersonales.style.display = "block";
    });

    // Volver al formulario anterior
    btnPrev.addEventListener("click", (e) => {
        e.preventDefault();
        formPersonales.style.display = "none";
        formCuenta.style.display = "block";
    });
});
