// Pregunta 1: Variables y tipos de datos

// 1a. Crea una variable llamada "nombre" y asígnale tu nombre.
// 1b. Crea una variable llamada "edad" y asígnale tu edad.
// 1c. Imprime en la consola un mensaje que diga "Hola, [nombre]! Tienes [edad] años."

let nombre = "alex";
let edad = 26;

console.log(`Hola ${nombre}! Tienes ${edad} años.`);


// Pregunta 2: Funciones

// 2a. Crea una función llamada "suma" que tome dos parámetros (num1 y num2) y devuelva la suma de ambos.
// 2b. Llama a la función "suma" con los números 5 y 8 e imprime el resultado en la consola.

function suma(num1, num2){
    return num1 + num2;
};

console.log(suma(5,8));

// Pregunta 3: Bucles y arrays

// 3a. Crea un array llamado "numeros" que contenga los números del 1 al 5.
// 3b. Utiliza un bucle for para imprimir en la consola cada elemento del array.

let numeros = [1, 2, 3, 4, 5];

for (i = 0; i < numeros.length; i++){
    console.log(i);
};


// Pregunta 4: Objetos

// 4a. Crea un objeto llamado "persona" con las propiedades "nombre" y "edad".
// 4b. Asigna valores a las propiedades del objeto.
// 4c. Imprime en la consola un mensaje que diga "Hola, me llamo [nombre] y tengo [edad] años."

const persona = {
    nombre : "tipi", 
    edad : 10
};

console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad} años.`);


// Pregunta 5: Manipulación de cadenas de texto

// 5a. Crea una variable llamada "frase" y asígnale una frase cualquiera.
// 5b. Convierte la frase en minúsculas y guárdala en una nueva variable llamada "fraseMinusculas".
// 5c. Imprime en la consola la frase en minúsculas.

let frase = "SOY LA FRASE";
let fraseMinusculas = frase.toLowerCase();
console.log(fraseMinusculas);


/*Desafío de funciones:

Escribe una función llamada esPalindromo que tome una cadena de texto como parámetro y devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha y de derecha a izquierda), o false en caso contrario.*/

function esPalindromo (palabra) {
    
};

/*Desafío de objetos:

Crea un objeto llamado alumno con las propiedades nombre, edad y notas (un array de números).
Agrega un método al objeto llamado calcularPromedio que calcule el promedio de las notas y lo devuelva.
Llama al método calcularPromedio e imprime el resultado en la consola.*/

const alumno = {
    nombre : "bart",
    edad: 10,
    notas : [6,7,9],
    calcularPromedio () {(alumno.notas[0] + alumno.notas[1] + alumno.notas[2]) / alumno.notas.length}
};

console.log(alumno.calcularPromedio);

/*Desafío de arrays:

Crea una función llamada eliminarDuplicados que tome un array como parámetro y devuelva un nuevo array sin elementos duplicados.
Prueba la función con un array de números y muestra el resultado en la consola.*/


/*Desafío de bucles:

Escribe un bucle for que itere del 1 al 100.
En cada iteración, verifica si el número actual es divisible por 3, 5 o ambos.
Imprime "Fizz" si es divisible por 3, "Buzz" si es divisible por 5, o "FizzBuzz" si es divisible por ambos. Si no es divisible por ninguno, imprime el número.*/


/*Desafío de manipulación de cadenas de texto:

Crea una función llamada capitalizarPalabras que tome una cadena de texto como parámetro y devuelva la misma cadena con la primera letra de cada palabra en mayúscula.
Prueba la función con una frase y muestra el resultado en la consola.*/

