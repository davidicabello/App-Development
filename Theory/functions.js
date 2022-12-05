//Dos tipos de funciones

//Declarativas y Expresion

//Declarativas: se crea con la palabra reservada function 

function miFuncion() {
    return 3 + 2;
};

miFuncion();

//Expresion: se genera una variable que guarda una funcion
//Tambien conocidas como funciones anonimas por que no tienen nombre.
//Ya que es guardado en una variable.

var miFuncion = function () {
    return a + b;
};

//Una funcion necesita parametros que son pasados dentro del parentesis
//Cuando mande a llamar la funcion , hay que pasarle los parametros
//Para que pueda hacer algo.

var miFuncion = function (a, b) {
    return a + b;
};

miFuncion();

//Ejemplos de funciones.
//Funcion Declarativa.
function saludarEstudiantes(estudiante) {
    console.log('Hola! ', estudiante)
};

saludarEstudiantes('David');

//Se le puede pasar un objeto para saludar a todos los estudiantes.
//Y asi se linkea a la base de datos por ejemplo que llama a la funcion y la conecta a la base de datos.

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
};

//Sin console.log se usa return 
//Se crea una funcion que va a recibir dos parametros y generamos una var
//De nombre resultado que crea la operacion

function sumar(a, b) {
    var resultado = a + b;
    return resultado
    // return a+b; es valido tambien.Solo que no lo guarda en una var
    //Y tengo que mandar a llamar la funcion completa.
};

//Diferencias:
//A las funciones declarativas se les aplica hoisting, y a la expresión de función, no.
//Ya que el hoisting solo se aplica en las palabras reservadas var y function.
//Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no,
//tendríamos que declararla primero, y después mandarla llamar.


