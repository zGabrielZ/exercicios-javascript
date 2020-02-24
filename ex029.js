/**
 *  ​Utilizando a estrutura de repetição for, 
 * faça uma função que percorra um vetor e 
 * conte quantos números deste vetor estão no intervalo [10,20] 
 * (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) 
 * e quantos deles estão fora do intervalo, escrevendo estas informações. 
 */

const intervalo = function(){
    let vet = [5,10,20,30,25,15,50,60,8,7]
    let vetIntervalo = []
    let vetFora = []
    vet.forEach(function(vet){
        if(vet>=10 && vet<=20){
            vetIntervalo.push(vet)
        }
        else{
            vetFora.push(vet)
        }
    })

    console.log(`Dentro do intervalo de [10,20] : ${vetIntervalo}`)
    console.log(`Fora do intervalo de [10,20] : ${vetFora}`)
}

intervalo()