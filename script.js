const nombres = [];

document.getElementById('btn-anadir').addEventListener('click', () => {
    const inputNombre = document.getElementById('nombre');
    const nombre = inputNombre.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    inputNombre.value = '';
    inputNombre.focus();
});

document.getElementById('btn-sortear').addEventListener('click', () => {
    if (nombres.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indiceAleatorio];

    document.getElementById('resultado').textContent = `El amigo sorteado es: ${nombreSorteado}`;
});

function actualizarLista() {
    const lista = document.getElementById('lista-nombres');
    lista.innerHTML = '';

    nombres.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}
