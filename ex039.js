/**
 *  ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de
 *  modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e 
 * vice versa e assim sucessivamente.
 */

const vet = function(){
    let vetA = [1,2,3,4,5]
    let vetB = [6,7,8,9,10]
    let vetC = vetA.shift()
    vetB.push(vetC)
    console.log(vetB)
}

vet()