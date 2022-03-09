# **ECMAScript 6+**

Recien terminé un curso de **ECMAScript** en la plataforma de [PLatzi](https://platzi.com/cursos/ecmascript-6/) &nbsp;fue un curso extenso y algo dificil por eso quiero compartir un resumen.  
La idea es que lo podamos revisar para repasar o recordar algo, tratare de agregar imagenes, links y el código para que sea sencillo de leer.

---

### Tabla de Contenido

- [**¿Qué es ECMAScript?**](#qué-es-ecmascript)
- [**ES6**](#es6-2015)
  - [Default Params](#es6-default-params)
  - [Template literal (Concatenación)](#es6-template-literal-concatenación)
  - [ES6 Multilinea](#es6-multilinea)
  - [Desestructuración de elementos](#es6-desestructuración-de-elementos)
  - [Spread Operator (Operador de propagación)](#es6-spread-operator-operador-de-propagación)
  - [Let](#es6-let)
  - [Const](#es6-const)
  - [Arrow Functions: =>](#es6-arrow-functions-)
  - [Promesas](#es6-promesas)
  - [Clases](#es6-clases)
  - [Módulos(import y export)](#es6-módulosimport-y-export)
  - [Generadores](#es6-generadores)
- [**ES7**](#es7-2016)
  - [Includes](#es7-includes)
  - [Exponencial](#es7-exponencial)
- [**ES8**](#es8-2017)
  - [Object.entries()](#es8-objectentries)
  - [Object.values(),Object.keys()](#es8-objectvaluesobjectkeys)
  - [Padding (padStart, padEnd)](#es8-padding-padstart-padend)
  - [Trailing Commas](#es8-trailing-commas)
  - [Async Await](#es8-async-await)
- [**ES9**](#es9-2018)
  - [Spread en objetos(rest)](#es9-spread-en-objetosrest)
  - [ReGex o Regular Expresion](#es9-regex-o-regular-expresion)
- [**ES10**](#es10-2019)
  - [Array.prototype.flat(nivel_de_profundidad)](#es10-arrayprototypeflatnivel_de_profundidad)
  - [Array.prototype.flatMap(nivel_de_profundidad)](#es10-arrayprototypeflatmapnivel_de_profundidad)
  - [String.prototype.trimStart() | String.prototype.trimEnd()](#es10-stringprototypetrimstart--stringprototypetrimend)
  - [Object.fromEntries()](#es10-objectfromentries)
- [**ES11**](#es11-2020)
  - [Dinamic Import](#es11-dinamic-import)
  - [Big Int](#es11-big-int)
  - [Promise.allSettled()](#es11-promiseallsettled)
  - [globalThis](#es11-globalthis)
  - [Nullish coalescing operator ??](#es11-nullish-coalescing-operator-)
  - [Bang bang operator !!](#es11-bang-bang-operator-)
  - [Optional chaining ?](#es11-optional-chaining-)
- [**ES12**](#es12-2021)
  - [replaceAll()](#es12-replaceall)
  - [Métodos privados](#es12-métodos-privados)
  - [Promise.any()](#es12-promiseany)
  - [WeakRef()](#es12-weakref)
  - [Logical AND assignment &&=](#es12-logical-and-assignment-)
  - [logical OR assignment ||=](#es12-logical-or-assignment-)
  - [logical nullish assignment ??=](#es12-logical-nullish-assignment-)
- [**TC39**](#tc39)

---

## ¿Qué es ECMAScript?

Especificación del lenguage propuesto por ECMA Internacional

- 1996 NetScape, propuesta de JS
- 2015 Julio, nuevas version de JS

##### Según [Wikipedia](https://es.wikipedia.org/wiki/ECMAScript):

> ECMAScript es una especificación de lenguaje de programación publicada por ECMA International. El desarrollo empezó en 1996 y estuvo basado en el popular lenguaje JavaScript propuesto como estándar por Netscape Communications Corporation. Actualmente está aceptado como el estándar ISO/IEC 22275:2018.

### **ES6 2015**

### ES6 Default Params

Ponemos parámetros por defecto en caso de que no reciba nada.

```js
function conDefaultParams(name = 'Antonio', age = '23', gender = 'M') {
  console.log(name, age, gender);
}
conDefaultParams();
// Output: Antonio 23 M //;
//Imprime los parametros por defecto que asignamos/;
```

### ES6 Template literal (Concatenación)

Nos permite hacer uniones más amigables; una forma más intuitiva de concatenar valores.

```js
let hello = 'Hello';
let world = 'World';
/Antes:/;
let epicPhrase = hello + ' ' + world;
/ES6:/;
let epicPhrase2 = `${hello}${world}`; //alt+96 para las comillas
// Comillas francesas ``
console.log(epicPhrase2);
//Output: Hello World
```

### ES6 Multilinea

Para crear saltos de línea en los strings.

```js
/Antes se usaba \n:/;
let lorem =
  'texto cualquiera \n' + 'el texto que quiero imprimir enla siguiente línea.';
/ES6:/;
let lorem = ` texto cualquiera 
el texto que quiero imprimir en la siguiente línea. `;
```

### ES6 Desestructuración de elementos

La desestructuración de objetos nos permite obtener los valores de los objetos de una forma más sencilla y sin utilizar la notación de punto.

```js
let person = {
  name: 'Antonio',
  age: 23,
  country: 'MX',
};
/Antes de EC6/;
console.log(person.name, person.age, person.country);
/ Después de EC6/;
let { name, age, country } = person;
```

### ES6 Spread Operator (Operador de propagación).

Nos permite expandir varios elementos.

```js
let hijos = ["Mauricio","Valeria","Camila","Gabriel","Joaquín"]
let padres = ["Jhon", "Katy"]
/ES6:/
let familiaCompleta = ["Negra", "Pitbull", "Manchas", ...hijos, ...padres]
 //se puede concatenar dentro del array, tambien aplica para objetos
console.log(familiaCompleta)
//output: ["Negra", "Pitbull", "Manchas","Mauricio","Valeria","Camila","Gabriel","Joaquín","Jhon", "Katy"]
```

### ES6 Let

Originalmente teníamos **var** que funcionaba de forma global.

`var` Declara una variable de scope global o local para la función, sin importar el ámbito de bloque.
Permite **Hoisting.**  
`let` Declara una variable de scope global, local para la función o de bloque. Es reasignable y no permite **Hoisting**. `let` Declara variables que sólo son accesibles desde el Scope de la función. A diferencia de `var` que es una variable global.

```js
function letTest() {
  let x = 31;
  if (true) {
    let x = 71; // variable diferente
    console.log(x); // 71
  }
  console.log(x); // 31
}
varTest();
```

### ES6 Const

tiene un scope local y de bloque además actua como constate a la que no se le puede reasignar un valor, pero es mutable. No permite hoisting.

```js
// definimos MY_FAV como constante y le damos un valor de 7
const MY_FAV = 7;

// lanzara un error: Unkeught TypeError: Asignación a variable constante.
MY_FAV = 20;
```

|                                      | var | let | const |
| ------------------------------------ | --- | --- | ----- |
| can be redeclared                    | yes | no  | no    |
| can be reassigned                    | yes | yes | no    |
| can be read outside of its own scope | yes | no  | no    |

### ES6 Arrow Functions: =>

Las arrows function son funciones anónimas.Se trata basicamente de acortar la sintaxis de las funciones anonimas trayendo en si un return implicito y un this no vinculable.

```js
const myFunction = (params) => { ... };
const square = num => num * num; // returns num * num

//-----------------------//
/Antes/
const NAMES = [
	{name: 'Alex', age: 26},
	{name: 'Matty', age: 24}
]
/ES6/
let listOfNames = NAMES.map(function(item) {
	console.log(item.name);
});

```

### ES6 Promesas

Una Promise, se trata de un objeto que representa la terminación o el fracaso de una operación asíncrona. Tambien como una solución al callback hell.

```js
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!');
    } else {
      reject('Woops!!');
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
```

### ES6 Clases

Las clases vinieron a mejorar la sintaxis de los prototipos y es una forma que implementó javascript para poder manejar la herencia y POO.

```js
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(2, 4));
```

### ES6 Módulos(import y export)

De esta forma podemos encapsular funciones o cierta lógica de nuestro programa para que pueda ser invocado donde se necesite.

```js
// module.js
export const welcome = () => console.log('Welcome to the jungle');
const hello = () => console.log('hello);

export default hello;

// index.js
import hello, { welcome } from './module.js';
hello(); // 'hello'
welcome(); // 'Welcome to the jungle'

```

### ES6 Generadores

Retorna una serie de valores según el algoritmo definido  
**yield**: La palabra clave yield detiene la ejecución de la función del generador y el valor de la expresión que sigue a la palabra clave yield se devuelve al llamador del generador. Se puede considerar como una versión basada en un generador de la palabra clave return.

```js
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// .
```

### **ES7 2016**

ES7 Nace en Junio de 2016.

### ES7 Includes

El método `includes()` determina si un array incluye un determinado elemento y devuelve `true` o `false` dependiendo si se encuentra o no. Antes se usaba `indexOf` y un código un poco más complejo para asignarlo.

```js
let numbers = [1, 2, 3, 5, 43, 7, 9];
console.log(numbers.includes(5)); // true
console.log(numbers.includes(15)); // false
if (numbers.includes(7)) {
  console.log('Si se encuentra');
} else {
  console.log('No se encuentra');
}
```

### ES7 Exponencial

Esta revisión de javascript incluyó un nuevo operador para realizar el cálulo de una potencia.

```js
const base = 2;
const exponent = 3;

console.log(base ** exponent); // 8
```

### **ES8 2017**

ES8 Nace en Julio de 2017.

### ES8 Object.entries()

Nos permitirá devolver la clave y los valores de una matriz.

```js
const data = {
  name: 'Antonio',
  age: 24,
  rocks: true,
};

const entries = Object.entries(data);
console.log(entries);

// [ [ 'name', 'Antonio' ], [ 'age', 24 ], [ 'rocks', true ] ]
```

### ES8 Object.values(),Object.keys()

Lo mismo que Object.entries pero aquí solo toma solo los keys (con `Object.keys`) o solo los values (con `Object.values`).

```js
let data = {
	name:"Antonio",
	lastname:"Ayola",
	age: 23,

let llaves = Object.keys(data)

console.log(llaves)
/* Output: ["name", "lastname", "age"] */

let valores = Object.values(data)

console.log(valores)
/* Output: ["Antonio", "Ayola", 23] */
```

### ES8 Padding (padStart, padEnd)

Nos permite añadir valores a una cadena de texto, ya sea al inicio al final de esta e indicar el tamaño maximo.

```js
const string = 'hello';
const hw = string.padStart(12, 'world ');
// specifies a string of 12 characters
console.log(hw); // 'worldwohello'

const hw = string.padStart(22, 'world ');
console.log(hw); // 'worldworldworldwohello'
//padEnd/;

const string = 'hello';
const hw = string.padEnd(13, 'world');

console.log(hw); // 'helloworldwor'
```

### ES8 Trailing Commas

También llamadas “final commas”. Es agregar una coma final al último elemento del objeto. Evita errores cuando añadimos contenido en un objeto.

##### [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas):

> Pueden ser útiles al agregar nuevos **elementos**, **parámetro**s o **propiedades** al código JavaScript. Si desea agregar una nueva propiedad, puede agregar una nueva línea sin modificar la última línea anterior si esa línea ya usa una coma al final.  
> Esto hace que las diferencias de control de versiones sean más limpias y la edición de código puede ser menos problemática.  
> **JavaScript** ha permitido comas finales en los literales de matriz desde el principio, y luego las agregó a objetos literales (ECMAScript 5) y más recientemente (ECMAScript 2017) a parámetros de función.

```js
const comma = {
  name: 'Antonio',
};
```

### ES8 Async Await

Una forma más amigable e intuitiva de entender el código asíncrono en Javascript.  
`Async` es una palabra reservada de JS. Con la preposición `async` convertimos una función en asíncrona que retorna una Promesa.
Construyendo una función que contiene una promesa con la cual vamos a trabajar nuestros **Async/Await**.

```js
/ función asyncrona/;
async function asyncCall() {
  console.log('calling');
  const response = await fetch('api...');
  console.log(response);
}

asyncCall();

let hello = async () => {
  return 'Hello';
};
// tambien en funciones flecha
```

### **ES9 2018**

ES9 Nace en Julio de 2018.

### ES9 Spread en objetos(rest)

Operador spread aplicado para extraer las propiedades restantes de un objeto (las que aún no se han declarado ) y los pone en un nuevo objeto

```js
const obj = {
  name: 'Antonio',
  age: 23,
  country: 'MX',
};

let { country, ...rest } = obj;
console.log(rest);

//{ name: 'Antonio',age:23,}

//Tambien conncatenar objetos
const obj2 = {
  name: 'Antonio',
  age: 78,
};

const obj3 = {
  ...obj2,
  country: 'mx',
};
console.log(obj3);
//{ name: 'Antonio',age:23,country: 'mx'}
```

### ES9 ReGex o Regular Expresion

Los regex nos permiten comprarar si una dato cumple con un patrón, en esta actualización del estándar se incluyó el método .match que nos permite obtener los valores de la cadena separando los elementos.

```js
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
}
```

### **ES10 2019**

ES10 Nace en Julio de 2019.

### ES10 Array.prototype.flat(nivel_de_profundidad)

Un nuevo método que nos permite aplanar arreglos.

```js
const messedArray = [1, 2, 3, [1, 2, 3, [1, 2, 3]], [4, 5, 6]];
const flatedArray = messedArray.flat();
const flatedArray2 = messedArray.flat(2);
console.log(flatedArray); // [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ], 4, 5, 6 ]
console.log(flatedArray2); // [ 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 5, 6 ]

let array = [[1], [0], [66], [0, [0, [2, [4]]]]];

console.log(array.flat(Infinity));
//Sirve para convertir múltiples arrays dentro de un array a un solo array.
```

### ES10 Array.prototype.flatMap(nivel_de_profundidad)

Lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.

```js
var arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]
```

### ES10 String.prototype.trimStart() | String.prototype.trimEnd()

Sirve para remover espacios en blanco al principio o al final del código.
`trim()`: Elimina los espacios en blanco del comienzo y del final.

`trimStart()`: Elimina los espacios en blanco del comienzo.

`trimEnd()`: Elimina los espacios en blanco del final.

```js
let hello = '            hello world     ';
console.log(hello.trimStart()); //'hello world     '
console.log(hello.trimEnd()); //'            hello world'
```

### ES10 Object.fromEntries()

Podemos convertir una matriz clave/valor a un objeto. Hace lo opuesto a Object.entries().

```js
let arreglo = [
  ['name', 'Antonio'],
  ['lastname', 'Ayola'],
];

let objeto = Object.fromEntries(arreglo);

console.log(objeto);
/* Output: { name: "Antonio", lastname: "Ayola" } */
```

### **ES11 2020**

### ES11 Dinamic Import

Esta nueva característica puede utilizarse para aumentar el rendimiento en tiempo de carga, en caso de que el módulo no sea necesario para iniciar nuestra página o proyecto.

```js
// Dinamic import
async function(){
	const module = await import("./archivo.js")
}
```

### ES11 Big Int

Permite trabajar con numeros mayores a 2^53

```js
// 1- Añadiendo una "n" al final activas el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- Con el metodo BigInt activas el valor
const anotherBigNumber = BigInt(9007199254740991);

//Numeric separators
const value = 100000000;
const value = 100_000_000;
```

### ES11 Promise.allSettled()

Regresa una promesa cuando todas las promesas son resueltas `resolve` o rechazadas `rejected`

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'foo'),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// expected output:
// "fulfilled"
// "rejected"
```

### ES11 globalThis

Hace referencia al objeto global, sin importar el contexto en el que se encuentre tu código. Esto cambia dependiendo el entorno en el que se esté ejecutando el código, pues en node.js , el objeto `global` es global, en web workers es `self` y en el navegador es `window`.

```js
console.log(window);
console.log(self);
console.log(frames);
console.log(this);

console.log(globalThis);
```

### ES11 Nullish coalescing operator ??

Nuevo operador lógico, null operator.

```js
const foo = null ?? 'default string';
console.log(fooo);
// 'default string'

const foo2 = 'not null' ?? 'default string';
console.log(fooo2);
// 'not null'

result = a !== null && a !== undefined ? a : b;
result = a ?? b; //es lo mismo que la linea de arriba

//otro uso
const defaultTime = 2;
const animationTime = settings.animationTime ?? defaultTime;
```

### ES11 Bang bang operator !!

En Javascript, cada valor tiene un valor booleano asociado, **verdadero** o **falso**. Por ejemplo, un valor `null` tiene un valor booleano asociado de `false`. Un valor de cadena, como `"abc"`, tiene un valor booleano asociado de `true`.

Aqui la lista completa:

- [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Trut)
- [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

`!!` determina si el valor asociado es **verdadero** o **falso** y retorna el opuesto

```js
const x = true; // Associated with true.
const a = !x; // The returns the opposite of 'x', false.
const b = !a; // The ! takes value 'a' of false and reverses it back to true.

!!true; // Evaluates to true.
!!false; // Evaluates to false.
```

### ES11 Optional chaining ?

Este operador permite leer el valor de una propiedad dentro de un objeto sin tener que verificar que cada que cada propiedad sea válida (Entonces ahora no nos arrojará un error).

```js
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

console.log(adventurer.someNonExistentMethod.());
/*Uncaught TypeError: Cannot read properties of undefined (reading 'name')
    at <anonymous>*/
```

### **ES12 2021**

### ES12 replaceAll()

Una manera más sencilla de remplazar varias palabras a la vez, antes necesitábamos expresiones regulares para esto.

```js
const string =
  'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.';
const replacedString = string.replace('JavaScript', 'Rust');
console.log(replacedString);
// Rust es maravilloso, con JavaScript puedo crear el futuro de la web.

const replacedString2 = string.replaceAll('JavaScript', 'Rust');
console.log(replacedString2);
// Rust es maravilloso, con Rust puedo crear el futuro de la web.
```

### ES12 Métodos privados

En la programación orientada objetos hay datos a los que no queremos que tengan acceso, la manera de privatizar métodos o propiedades es anteponiendo el símbolo **#**

```js
class Message {
  // Con el # convertimos al método en privado
  #show(val) {
    console.log(val);
  }
}

const message = new Message();
message.show('Hola!');
```

### ES12 Promise.any()

Toma un conjunto de promesas y regresa la que se resuelva como `fullfilled` primero (que no sea `rejected`) si todas las promesas son rechazadas, la promesa devuelta se rechaza con un ``ggregateError`, una nueva subclase de `Error` que agrupa los errores individuales.

```js
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// expected output: "quick"
```

### ES12 WeakRef()

Es una referencia débil que NO evita que el recolector de basura de JavaScript destruya el objeto, a diferencia de una normal o una fuerte que se mantienen en memoria.

```js
class AnyClass {
    constructor(element){
        this.ref = new WeakRef
    }
    {...}
}
```

### ES12 Logical AND assignment &&=

`&&=` Sólo se asigna si el primer valor es **truthy**.

```js
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// expected output: 2

b &&= 2;
console.log(b);
// expected output: 0

// x &&= y   es igual a
// x = x && y;
```

### ES12 logical OR assignment ||=

`||=` Sólo se asigna si el primer valor es **falsy**.

```js
const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"

// x ||= y  es igual a
// x || (x = y);
```

### ES12 logical nullish assignment ??=

`??=` Sólo se asigna si el primer valor es [nullish](https://developer.mozilla.org/en-US/docs/Glossary/nullish). (**null** o **undefined**)

```js
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// expected output: 50

a.speed ??= 25;
console.log(a.speed);
// expected output: 25
```

### **TC39**

Es un grupo de desarrolladores e implementadores que se encargan de revisar todas las propuestas. Este comité se encarga de evaluar para llevarlas a las siguientes versiones.
[TC39](https://tc39.es/)

---

#### Hasta aquí mi reporte, Joaquín

Algún día terminare la tabla de contenidos.gracias por leer.
