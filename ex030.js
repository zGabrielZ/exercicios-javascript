/**
 * Escreva um algoritmo que percorre um vetor de inteiros e defina 
 * o maior e menor valor dentro do vetor. 
 */

const maiorOuMenor = function(){
    let vet = [50,10,40,3,6,8,9,11,23]
    let maior =0
    let menor = vet[0]
    vet.forEach(function(vet){
        if(vet>maior){
            maior = vet
        }
        if(menor>vet){
            menor = vet
        }
    })

    console.log(`Maior numero do vetor : ${maior}`)
    console.log(`Menor numero do vetor : ${menor}`)
}

maiorOuMenor()