//Dos tipos de coercion. implicita y explicita.
//Implicita nos ayuda el lenguaje a cambiar
//Explicita obligamos a que cambie.

var a = 20; // varible tipo numero
var b = a + ''; // variable tipo string por concatenacion
var c = String(a); // variable tipo string obligada de n a string
var d = Number(c) // variable tipo numero obligada de string a n

//Pasa para los inputs de HTML valor numero te lo pasa como string 
//Entonces hay que transformarlo con Number(); para poder hacer operaciones.
//Puede devolver errores tipo NaN si es un string.
