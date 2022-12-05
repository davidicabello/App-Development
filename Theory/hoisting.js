//Cuando las variables y funciones se ejecutan antes de declarar las var
//Medio que ya fue desde ES6 por let y const

console.log(miNombre); //undefined por ser llamada antes de su inicializacion
var miNombre;
miNombre = 'David';

//Js define var miNombre = undefined; por encontrar dentro del console.log
//una variable sin ser inicializada.

//Tambien hay hoisting con funciones.
//En este caso sucede lo mismo por que la variable toma el valor de undefined.
//Pero las funciones se declaran antes de las variables. Por eso la lleva arriba de todo.

hey();

function hey() {
    console.log('Hola ', miNombre)
};

var miNombre = 'David';