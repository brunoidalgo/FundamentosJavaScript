// (==) (comparacao implícita)

// == só compara o valor
// === compara valor e tipo de dado

const numero = 5 ;
const texto = "5" ;

console.log(numero == texto);
console.log(numero === texto);
console.log(0 == false) // Falsy
console.log(1 == true) // Truthy
console.log(0 === false)

// typeof

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof(true))



// Conversão explícita 

Number()
String()