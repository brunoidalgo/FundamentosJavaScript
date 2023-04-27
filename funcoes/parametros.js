// Parâmetros

function soma(num1, num2){
    return num1 + num2;
}

// function multiplicacao (num1, num2){
//     return num1 * num2;
// }

console.log(multiplicacao(soma(10,10), soma(20,20)));


function multiplicacao (num1 = 1, num2 = 1){
    return num1 * num2;
}




function cumprimentar(){
    return 'Olá Mundo!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`) // Template String
   }
   
   cumprimentaPessoa('Bruno') // “Olá Mundo! Meu nome é Bruno”




   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
   }
   
   console.log(operacaoMatematica(15, 30, 45)); // 90

   function comParametro(param) {
    console.log(param)
}
comParametro(6);