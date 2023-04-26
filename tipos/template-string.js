// Template String

const nome = "Bruno"
const idade = 2023 - 2002;
const cidade = "Ribeirão Preto"

const resultado = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidade;
// Mais usado para concatenar poucas strings, pois é muito passível de erros.

console.log(resultado);

const templateString = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidade}`;
// Mais utilizado para concatenar mais de duas ou três strings, pois é menos passível de erros.

console.log(templateString);