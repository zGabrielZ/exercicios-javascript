/**
 * Construir um algoritmo que calcule a média aritmética 
 * dos valores de um vetor de inteiros. 
 */

const mediaVet = () =>{
    let vet = [1,2,3,5,5,6,7,8,9,10]
    let soma = 0
    let media = 0
    for(let i in vet){
        media = (soma+=vet[i])/vet.length
    }
    console.log(media)
}

mediaVet()