/**
 * 
 *  Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
 * Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais.
 *  Escaleno: Todos os lados são diferentes.  
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo 
 * e retorne sua classificação quanto ao tamanho de seus lados. 
 * 
*/

const triangulo = function(ladoA,ladoB,ladoC){
    if(ladoA == ladoB && ladoA == ladoC && ladoB == ladoC){
        return 'Igual,porém é Equilatero'
    }
    else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return 'Nenhum Igual,porem é Escaleno'
    }
    else{
        return 'Dois lado igual,porem é Isosceles'
    }
}


console.log(triangulo(4,5,3))