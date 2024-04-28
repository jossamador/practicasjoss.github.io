let a = 10;
let b = 20;
let sumar = a + b;
console.log(sumar);

let restar = a - b;
console.log
let multiplicar = a * b;
console.log(multiplicar);
let dividir = a / b;
console.log(dividir);
let modulo = a % b;
console.log("El residuo de a%b es:", modulo);

let mayor = a > b;
console.log("a es mayor que b:", mayor);

let menor = a < b;
console.log("a es menor que b:", menor);

let mayorIgual = a >= b;   
console.log("a es mayor o igual que b:", mayorIgual);

let menorIgual = a <= b;
console.log("a es menor o igual que b:", menorIgual);

let igual = a == b;
console.log("a es igual que b:", igual);

a = -50; // Tipo Number - Entero
b = 10*(-1); // Tipo Number - Entero

if( a != b){
console.log("a es diferente de b:", a != b); 
} else {
console.log("a es igual a b:", a == b);
}

let comparacion = a > b ? "a es mayor que b" : "a es menor que b";
console.log(comparacion);

let x = 100;
let y = 200;

function multiplicarNumeros(x, y){
    return x * y;
}

let resultado = multiplicarNumeros(x, y);
console.log("El resultado de la multiplicaciòn es:", resultado);

function calcularAreaCirculo(radio){
   const PI = 3.1416;
   let area = PI * (radio **2);
   return area;

}

console.log("Area del circulo", calcularAreaCirculo(10));

function toCelcius(fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}

let temp = toCelcius(100);
console.log("Temperatura en Celcius:", + temp);

function edadx2 (edad) {
    return edad * 2;
}

console.log("La edad multiplicada por 2 es:", edadx2(20));

let hello = function(){
    return "Hola Mundo";
}

console.log(hello);