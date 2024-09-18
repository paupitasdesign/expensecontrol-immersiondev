let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;


    console.log(nombreGasto);
    console.log(valorGasto);

    if (valorGasto > 150) {
        alert('¡Alerta! Estás registrando un gasto mayor a $150.');
    }

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionesGastos.push(descripcionGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionesGastos [posicion];

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${descripcionGasto}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        <button onclick="modificarGasto(${posicion});">Modificar</button>
        </li>`;

        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = Number(document.getElementById('valorGasto').value);

    if (valorGasto > 150) {
        alert('¡Alerta! Estás registrando un gasto mayor a $150.');
    }

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    actualizarListaGastos();
}

function modificarGasto(posicion) {
    let nuevoNombre = prompt("Nuevo nombre del gasto:", listaNombresGastos[posicion]);
    let nuevoValor = prompt("Nuevo valor del gasto:", listaValoresGastos[posicion]);
    let nuevaDescripcion = prompt("Nueva descripción del gasto:", listaDescripcionesGastos[posicion]);

    if (nuevoNombre !== null && nuevoValor !== null && nuevaDescripcion !== null) {
        listaNombresGastos[posicion] = nuevoNombre;
        listaValoresGastos[posicion] = Number(nuevoValor);
        listaDescripcionesGastos[posicion] = nuevaDescripcion;
        actualizarListaGastos();
    }
}
