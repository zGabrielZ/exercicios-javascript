/**
 *  ​Escrever um algoritmo que percorre um vetor de inteiros, 
 * conta quantos números negativos há nesse vetor e imprime a quantidade no console.  
 */

const numNegativo = function(){
    let vet = [1,2,3,-4,-5,6,7,-8,9,-10]
    let soma = 0
    vet.forEach(function(vet){
        if(vet<0){
            soma+=1
        }
    })
    console.log(soma)
}

numNegativo()