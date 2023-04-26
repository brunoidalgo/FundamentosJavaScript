// Exercício envolvendo template string e ternário

const idadeMinima = 18;
const idade = 18;
const nome = "Leo";
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const resultado = `${nome} diz: "por favor, quero beber ${idade >= idadeMinima ? bebidaMaior : bebidaMenor}`;
console.log(resultado);