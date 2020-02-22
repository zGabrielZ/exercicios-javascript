/** 
 *  Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma,
 * subtração, multiplicação e divisão desses valores. 
 * 
*/

const soma = function(a,b){
    return Number(a+b)
}

const subtração = function(a,b){
    return Number(a-b)
}

const multiplicação = (a,b) =>{
    return Number(a*b)
}

const divisão = (a,b)=>{
    return Number(a/b).toFixed(2)
}

console.log('soma')
console.log(soma(2,2))
console.log('subtracao')
console.log(subtração(2,2))
console.log('multiplicacao')
console.log(multiplicação(2,2))
console.log('divisao')
console.log(divisão(2,2))