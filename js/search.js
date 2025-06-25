const selector = document.getElementById('fila3');
const toggle = document.getElementById('toggle_clase_pasajeros');

toggle.addEventListener('click', () => {
    selector.classList.toggle('abierto');
});

window.addEventListener('click', (e) => {
    if (!selector.contains(e.target)) {
        selector.classList.remove('abierto');
    }
});

function cambiar(id, delta) {
    const input = document.getElementById(id);
    let valor = parseInt(input.value) + delta;
    valor = Math.max(0, Math.min(10, valor));
    input.value = valor;
}

