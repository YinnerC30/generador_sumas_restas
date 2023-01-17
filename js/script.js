//Defino variables
let numeroUno, numeroDos, numeroTres, resultadoDigitado, respuestaCorrecta;
generarResta();
var puntaje = 1;
//Obtengo los elementos html
function obtenerCelda1() {
    return document.getElementById("celda1");
}

function obtenerCelda2() {
    return document.getElementById("celda2");
}

function obtenerCelda3() {
    return document.getElementById("celda3");
}

function obtenerCelda4() {
    return document.getElementById("celda4");
}

function obtenerCelda5() {
    return document.getElementById("celda5");
}

function obtenerCelda6() {
    return document.getElementById("celda6");
}

function obtenerCelda7() {
    return document.getElementById("celda7");
}

function obtenerCelda8() {
    return document.getElementById("celda8");
}

function obtenerCelda9() {
    return document.getElementById("celda9");
}

function obtenerCelda10() {
    return document.getElementById("celda10");
}

function obtenerCelda11() {
    return document.getElementById("celda11");
}

function obtenerCelda12() {
    return document.getElementById("celda12");
}


function obtenerMensaje() {
    return document.getElementById("mensajeRespuesta");
}

function obtenerContador() {
    return document.getElementById("contador");
}

//Logica del generador
function generarNumero() {
    return Math.round(Math.random() * 9);
}

function validarRespueta() {
    let celda1 = obtenerCelda1().value,
        celda2 = obtenerCelda2().value,
        celda3 = obtenerCelda3().value,
        celda4 = obtenerCelda4().value,
        celda5 = obtenerCelda5().value,
        celda6 = obtenerCelda6().value,
        celda7 = obtenerCelda7().value,
        celda8 = obtenerCelda8().value,
        celda9 = obtenerCelda9().value,
        celda10 = obtenerCelda10().value,
        celda11 = obtenerCelda11().value,
        celda12 = obtenerCelda12().value;

    numeroUno = celda1 + celda2 + celda3;
    numeroDos = celda4 + celda5 + celda6;
    numeroTres = celda7 + celda8 + celda9;

    respuestaCorrecta = +numeroUno + (+numeroDos) + (+numeroTres);
    console.log("Respuesta correcta")
    console.log(respuestaCorrecta)
    resultadoDigitado = celda10 + celda11 + celda12;
    resultadoDigitado = +resultadoDigitado;
    console.log("Respuesta digitada")
    console.log(resultadoDigitado);

    if (isNaN(resultadoDigitado)) {
        obtenerMensaje().innerHTML = "Respuesta incorrecta, escribe numeros!";
        obtenerMensaje().style = "color: yellow;"
        limpiarEntradas();
        obtenerCelda7().focus();
    } else if (respuestaCorrecta == resultadoDigitado) {
        obtenerMensaje().innerHTML = "Respuesta correcta!"
        obtenerContador().innerHTML = `Puntaje: ${puntaje++}`;
        generarResta();
        limpiarEntradas();
        obtenerMensaje().style = "color: green;"
        obtenerCelda12().focus();
    } else if (resultadoDigitado == "") {
        obtenerMensaje().innerHTML = "Introduce tu respuesta!"
        obtenerMensaje().style = "color: blue;"
        limpiarEntradas();
        obtenerCelda12().focus();
    } else {
        obtenerMensaje().innerHTML = "Respuesta incorrecta!"
        obtenerMensaje().style = "color: red;"
        obtenerContador().innerHTML = "Puntaje: 0";
        limpiarEntradas();
        obtenerCelda12().focus();
    }

}


function generarResta() {
    let estado = true;
    while (estado) {
        obtenerCelda1().value = generarNumero();
        obtenerCelda2().value = generarNumero();
        obtenerCelda3().value = generarNumero();
        obtenerCelda4().value = generarNumero();
        obtenerCelda5().value = generarNumero();
        obtenerCelda6().value = generarNumero();
        obtenerCelda7().value = generarNumero();
        obtenerCelda8().value = generarNumero();
        obtenerCelda9().value = generarNumero();

        let celda1 = obtenerCelda1().value,
            celda2 = obtenerCelda2().value,
            celda3 = obtenerCelda3().value,
            celda4 = obtenerCelda4().value,
            celda5 = obtenerCelda5().value,
            celda6 = obtenerCelda6().value,
            celda7 = obtenerCelda7().value,
            celda8 = obtenerCelda8().value,
            celda9 = obtenerCelda9().value;

        numeroUno = celda1 + celda2 + celda3;
        numeroDos = celda4 + celda5 + celda6;
        numeroTres = celda7 + celda8 + celda9;

        respuestaCorrecta = +numeroUno + (+numeroDos) + (+numeroTres);
        if (respuestaCorrecta < 1000) {
            estado = false;
            console.log(respuestaCorrecta);
        }
    }
    limpiarEntradas();

}

function limpiarEntradas() {
    obtenerCelda10().value = "";
    obtenerCelda11().value = "";
    obtenerCelda12().value = "";
    document.getElementById("celdaVacia1").value = "";
    document.getElementById("celdaVacia2").value = "";
    obtenerCelda12().focus();
}