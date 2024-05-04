let lista = document.getElementById('lista');
let texto = "Hola, mi nombre es Josue, y tengo 21 años";
console.log(texto);

lista.innerHTML = texto;

texto = "Esta es otra cadena";
lista.innerHTML = texto;

texto = `string text`;

let text = `Cadena multilinea
    La Salle
    Alumnos 301
    Esta semana comienzan los examenes del segundo parcial
    suerte!
`;

console.log(text);

let a = 5;  
let b = 10; 

let resultado = `El resultado de la suma es ${a + b}`;  
console.log(resultado);
lista.innerHTML = resultado;

let persona = "pablo";
let edad = 16;

function miFuncion(cadena, personaX, edadX){   
    let resultado = ``;

    //resultado += cadena + personaX + ` tiene ` + edadX + ` años`;

    resultado = ` ${cadena} ${personaX} tiene ${edadX} años`;   

    console.log(resultado);
    return resultado; 
}

miFuncion("Nombre", "Saul", 27);

//let resultado2 = miFuncion `hello ${persona} your age is ${edad} years`;
//console.log(resultado2);

function mostrarNombre(name){
    console.log(name);
    return name;
}

let resultado2 = mostrarNombre`Josue`;

let titulo = "Ganadores Premios Oscar 2024";
let actores = ["Cillian Murphy", "Emma Stone", "Robert Downey JR.", "Da’Vine Joy Randolph"];
let cadenaHTML = `<h1>${titulo}</h1>`;

cadenaHTML += `<ul>`;

for(let actor of actores){
    cadenaHTML += `<li style=>${actor}</li>`;
}

cadenaHTML += `</ul>`;

lista.innerHTML = cadenaHTML;

x = 3.14;
otraFuncion();

function otraFuncion(){
    "use strict"
    y = 3.14; // this will cause an error
    
}