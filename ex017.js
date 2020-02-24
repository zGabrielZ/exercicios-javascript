/** 
 * Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, 
 * de acordo com a tabela abaixo: 
 *  Plano Aumento 
 * A 10% 
 * B 15% 
 * C 20% 
 * Faça uma função que leia o plano de trabalho e 
 * o salário atual de um funcionário e calcula e 
 * imprime o seu novo salário. 
 * Use a estrutura switch e faça um caso default que indique que o plano é inválido. 
*/

const funcionário = (plano,salarioAtual)=>{
    switch (plano) {
        case 'A':
            let r = salarioAtual*0.10
            return r+=salarioAtual
            break;
        case 'B':
            let r2 = salarioAtual*0.15
            return r2+=salarioAtual
            break;
        case 'C':
            let r3 = salarioAtual*0.20
            return r3+=salarioAtual
            break;
        default:
            return 'Invalido'
            break;
    }
}

console.log(funcionário('A',2000.00))
console.log(funcionário('B',2000.00))
console.log(funcionário('C',2000.00))
console.log(funcionário('D',2000.00))