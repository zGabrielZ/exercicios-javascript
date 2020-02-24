/**
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica 
 * O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e
 *  a realize com os valores numéricos na ordem que foram inseridos. 
 * Por exemplo: calculadora (2, ‘+’, 3). 
 * A função efetuará a soma de 2 e 3. 
 * Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 
 *  Crie um caso default para operações inválidas. 
 */

const calculadora = function(num1,num2,operação){
    switch (operação) {
        case '+':
            return Number(num1+num2)
            break;
        case '-':
            return Number(num1-num2)
            break;
        case '*':
            return Number(num1*num2)
            break;
        case '/':
            return Number(num1/num2).toFixed(2)
        default:
            return 'Invalido'
            break;
    }
}

console.log(calculadora(2,2,'+'))
console.log(calculadora(2,2,'-'))
console.log(calculadora(2,2,'*'))
console.log(calculadora(2,2,'/'))
console.log(calculadora(2,2,''))