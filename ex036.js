/**
 * Crie duas funções que recebem dois parâmetros,
 *  um vetor com apenas valores numéricos e um número inteiro.
 *  Faça com que a primeira função retorne outro vetor que será 
 * resultado da multiplicação de cada elemento pelo número passado como parâmetro.
 *  A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.  
 
*/

const multiplicaçãoVet = function(vet = [],num){
    for(let i in vet){
        console.log(vet[i]*num)
    }
}


const multiplicaçãoVet5 = function(vet = [],num){
    for(let i in vet){
        if(vet[i]>5){
            console.log(vet[i]*num)
        }
    }
}


multiplicaçãoVet([1,2,3],2)
multiplicaçãoVet5([1,2,6],2)