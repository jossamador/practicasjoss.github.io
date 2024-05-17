let resultado = document.getElementById('resultado');

// Definir valores iniciales para las variables
let x = 0, y = 0, z = 0;

function asignar(valor) {
    console.log("Valor recibido:", valor); // Muestra el valor recibido en la consola
    const funcionesConParentesis = ['Math.sin(', 'Math.cos(', 'Math.tan(', 'Math.log(', 'Math.sqrt('];

    if (funcionesConParentesis.includes(valor)) {
        resultado.value += valor + ')'; // Agrega la función y cierra paréntesis automáticamente
        moverCursor(-1); // Mueve el cursor un espacio atrás para permitir al usuario ingresar el valor dentro de los paréntesis
    } else if (valor === 'Math.pow(') {
        resultado.value += valor + ',)'; // Agrega la función pow con coma y paréntesis
        moverCursor(-2); // Mueve el cursor dos espacios atrás para permitir al usuario ingresar el primer argumento
    } else {
        resultado.value += valor; // Añade el valor al campo de entrada
    }
}

function calcular() {
    try {
        let expresion = resultado.value;
        // Reemplazar variables con sus valores
        expresion = expresion.replace(/x/g, x).replace(/y/g, y).replace(/z/g, z);

        if (expresion !== '') {
            resultado.value = eval(expresion);
        } else {
            alert('Ingrese un valor');
        }
    } catch (error) {
        alert('Expresión matemática inválida.');
        console.error("Error en la expresión: ", error);
    }
}

function limpiar() {
    resultado.value = ''; // Limpia el campo de entrada
}

function moverCursor(pos) {
    const input = document.getElementById('resultado');
    setTimeout(() => {
        input.focus();
        const newPos = input.value.length + pos;
        input.setSelectionRange(newPos, newPos);
    }, 10);
}
