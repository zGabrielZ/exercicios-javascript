/**
 * Faça um algoritmo que calcule o fatorial de um número. 
 */

const fatorial = function(numero){
    let r =1
    for(let i=1;i<=numero;i++){
       r = r*i
    }
    
    return r
}

console.log(fatorial(6))