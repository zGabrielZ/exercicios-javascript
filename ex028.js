/**
 *  ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. 
 */


const vetorInteiro = function(){
    let vet = [1,2,3,4,5,6,7,8,9,10]
    let vetPar =[]
    let vetImpar = []
    vet.forEach(function(vet){
        if(vet%2===0){
            vetPar.push(vet)
        }
        else{
            vetImpar.push(vet)
        }
    })

    console.log(`Numeros pares : ${vetPar} `)
    console.log(`Numeros impares : ${vetImpar} `)
}

vetorInteiro()