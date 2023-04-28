// function

function exibeNome(nome) {
    return `Meu nome é ${nome}`
}

console.log(exibeNome('Bruno'));

// Arrow function

const soma = (num1, num2) => {return num1 + num2};

console.log(soma(5,5));

// Arrowfunction com + de uma linha de código

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(5,9));



