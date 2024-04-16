let numero = 100;
console.log(numero);
let decimal = 100.5;
console.log(decimal);

let texto = "Hola mundo";
let texto2 = 'Hola mundo';

let booleano = true;
let arreglo = [1,2,3,4,5];
let arreglo2 = ["a","b","c","d","e"];
console.log(arreglo2);
console.log(arreglo2[3]);
console.log(arreglo2[-2]);
console.log(arreglo2[30]);

let arregloMixto = [1,2,3,4,5,"a","b","c","d","e",true,false];
console.log(arregloMixto);

arregloMixto[0] = "Hola";
console.log(arregloMixto);

let objeto = {
    nombre : "Juan",
    edad : 30,
    telefono : "1234567890"
}
console.log(objeto);
console.log(objeto.telefono);
console.log(objeto["edad"]);
console.log("Nombre: " + objeto.nombre);

let estudiante = {
    nombre : "Luis Felipe",
    matricula : "202424",
    carrera : "Ing. de Software y Sistemas",
    materias : ["Matematicas", "Programacion", "Base de datos"],
    amigos : [
        { 
            nombre : "Pedro",
            telefono : "1234567890"
        },
        {
            nombre : "Maria",
            telefono : "0987654321"
        }
    ] 
}

console.log(estudiante.materias[1]);
console.log(estudiante.amigos[1].telefono);

let variable = 10;
console.log(typeof variable);
let variable2 = 10.5;
console.log(typeof variable2);
let variable3 = "10.5";
console.log(typeof variable3);
let variable4 = true;
console.log(typeof variable4);

let variable5 = {
    nombre : "Juan",
    edad : 30,
    telefono : "1234567890"
}
console.log(typeof variable5.telefono);

let saludo, nombre = "Juan";
nombre = "Luis Felipe";
console.log(nombre);