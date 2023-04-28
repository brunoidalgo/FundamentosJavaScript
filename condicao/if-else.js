// if e else

const idadeMinima = 18

idadeCliente = 19

if (idadeCliente >= idadeMinima) {
    console.log('Pode entrar !')
   } else {
    console.log("Infelizmente não tem a idade permitida para entrar")
   }


// É possível usar os operadores AND (&&) ou OR (||) 
// para executar o código no if caso uma das condições for verdadeira, ou as duas:


const num = 10;

if (num > 10 || !num) {
    console.log('Número não valido');
} else {
    console.log("Número válido")
}

if (num > 10 && num < 20){
    console.log("Número válido");
} 

idade = 41;

if (idade >= 0 && idade <= 20) {
    console.log(`Sua idade é ${idade}`);
} else if (idade >= 21 && idade <= 30) {
    console.log(`Você é muito novo`);
} else if (idade >= 31 && idade <= 40){
    console.log(`Você tem uma ótima idade`) ;
} else {
    console.log(`Passou dos 40 !!`)
}
