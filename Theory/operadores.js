//Los tipos de operadores en el lenguaje son: aritméticos, asignación y comparación.

// Suma
2 + 3 // 5
// Resta
5 - 3 // 2
// Multiplicación
4 * 2 // 8
// División
6 / 2 // 3
//Residuo
21 % 5 // 1
//Concatenacion
"Hola" + "Platzi" // "Hola Platzi"
/////////////////////////////////////////////////////////////////////////
//Incremento y decremento
// Si esta despues el valor aumenta pero devuelve el anterior y luego guarda el nuevo.
variable++
variable--
//Si esta antes el valor aumenta y devuelve el valor actual
++variable
--variable
//
var a = 3
var b = 3

console.log(a++) //3
console.log(++b) //4
console.log(a) //4
console.log(b) //4

//El operador de asignación (=) consiste en asignar un valor a una variable.

var saludo = "Hola Mundo"

//Asignacion combinada
var contador = 1
contador = contador + 1
contador = contador + 1
console.log(contador) // 3

// Asignación de suma	a += b	a = a + b
// Asignación de resta	a -= b	a = a - b
// Asignación de multiplicación	a *= b	a = a * b
// Asignación de multiplicación	a /= b	a = a / b

/////////////////////////////////////////////////////////////////////////
//operadores de comparación

// Igualdad por valor (==): compara dos variables solamente por su valor. 
// Por ejemplo: "3" de tipo string y 3 de tipo número son iguales.

// Igualdad por valor y tipo de dato (===): compara dos variables por su valor y tipo de dato. 
// Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. 
// Solamente 3 y 3, ambos de tipo número son iguales.

//Igualdad
"3" == 3 // true
3 == 3 // true

// Igualdad estricta
"3" === 3 // false
3 === 3 // true

//////////////////////////////////////////////////////
//operadores de desigualdad

// Desigualdad por valor (!=)
// Desigualdad por valor y tipo de dato (!==)

//Desigualdad
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta
"3" !== 3 // true
3 !== 3 // false
////////////////////////////////////////////////////////
// mayor o menor

// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true

///////////////////////////////////////////////////////////

//operadores lógicos. comparan dos o más expresiones y devuelve un valor lógico (verdadero o falso)
// AND (&&) devuelve verdadero, si y solo si ambas expresiones son verdadero.

// Expresión 1	Expresión 2	1 && 2
// true	        true	    true
// true	        false	    false
// false	    true	    false
// false	    false	    false

var a = 15
var b = 5

    (a >= 10) && (a <= 20) // true
        (b >= 10) && (b <= 20) // false

////////////////////////////////////////////////////////////

//unión lógico .OR (||) devuelve verdadero, si y solo si, alguna expresión es verdadero.

// Expresión 1	Expresión 2	1 || 2
// true	        true	     true
// true	        false	     true
// false	    true	     true
// false	    false	     false

var a = 15
var b = 5

    (a <= 10) || (a >= 20) // false
        (b <= 10) || (b >= 20) // true

////////////////////////////////////////////////////////////

//negación lógico.NOT (!) devuelve el valor lógico contrario a la expresión.

// Expresión 1	! 1
// true	      false
// false	  true

var a = 5

!(a < 0) // true