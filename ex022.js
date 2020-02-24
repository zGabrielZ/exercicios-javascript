/**
 * Criar uma função para calcular o valor a ser pago de
 *  anuidade de uma associação.
 *  A função recebe como parâmetro um inteiro que representa 
 * o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade.
 *  A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de
 *  juros (sob o regime de juros compostos).
 *  O retorno deve ser o valor a ser pago para o respectivo mês escolhido. 
*/

const associação = function(mes,valorAnuidade){
    switch (mes) {
        case 1:
            return `Janeiro : ${valorAnuidade+=valorAnuidade*0.05} reais`
            break;
        case 2:
            return  `Fevereiro : ${valorAnuidade+=valorAnuidade*0.10} reais`
            break;
        case 3:
            return `Março : ${valorAnuidade+=valorAnuidade*0.15} reais`
            break;
        case 4:
            return `Abril : ${valorAnuidade+=valorAnuidade*0.20} reais`
            break;
        case 5:
            return `Maio : ${valorAnuidade+=valorAnuidade*0.25} reais`
            break;
        case 6:
            return `Junho : ${valorAnuidade+=valorAnuidade*0.30} reais`
            break;
        case 7:
            return `Julho : ${valorAnuidade+=valorAnuidade*0.35} reais`
            break;
        case 8:
            return `Agosto : ${valorAnuidade+=valorAnuidade*0.40} reais`
            break;
        case 9:
            return `Setembro : ${valorAnuidade+=valorAnuidade*0.45} reais`
            break;
        case 10:
            return `Outubro : ${valorAnuidade+=valorAnuidade*0.50} reais`
            break;
        case 11:
            return `Novembro : ${valorAnuidade+=valorAnuidade*0.55} reais`
            break;
        case 12:
            return `Dezembro : ${valorAnuidade+=valorAnuidade*0.65} reais`
            break;
        default:
            return 'Erro'
            break;
    }
}

console.log(associação(1,2))
console.log(associação(2,2))
console.log(associação(3,2))
console.log(associação(4,2))
console.log(associação(5,2))
console.log(associação(6,2))
console.log(associação(7,2))
console.log(associação(8,2))
console.log(associação(9,2))
console.log(associação(10,2))
console.log(associação(11,2))
console.log(associação(12,2))
console.log(associação(13,2))