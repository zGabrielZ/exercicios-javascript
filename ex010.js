/**
 *  ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 
 * e retorne true ou false. 
*/

const verifica = function(a){
    if(a%3===0){
        return 'é divisivel e o valor é '+(a/3).toFixed(2)
    }
    else{
        return false
    }
}

console.log(verifica(5))