/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores. 
*/

const divisao = function(a,b){
    return Number(a/b).toFixed(2)
}

const resto = function(a,b){
    return Number(a%b).toFixed(2)
}

const result = function(a,b){
    return `Divisao : ${divisao(a,b)}, Resto : ${resto(a,b)} `
}

console.log(result(5,5))