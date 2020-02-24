/**
 *  ​Faça uma função que receba como parâmetro um vetor de 
 * notas e mostre os conceitos de cada uma de modo que de 
 * 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja 
 * atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0
 *  a 10,0 o conceito A. 
 */

const notas = function(vet = []){
    for(let i in vet){
        if(vet[i]>=0.0 && vet[i]<=4.9){
            console.log('Conceito D')
        }
        else if(vet[i]>=5.0 && vet[i]<=6.9){
            console.log('Conceito C')
        }
        else if(vet[i]>=7.0 && vet[i]<=8.9){
            console.log('Conceito B')
        }
        else if(vet[i]>=9.0 && vet[i]<=10.9){
            console.log('Conceito A')
        }
        else{
            console.log('Erro ')
        }
    }
}

notas([10.0,9.7,5.8])