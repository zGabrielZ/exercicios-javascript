/**
 *  ​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
 *  Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. 
 * Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, 
 * de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 
 * Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, 
 * mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor,
 *  um string com a frase: “Delta é negativo”. 
*/


const bhaskara = (a,b,c)  =>{
    const formula = (b*b) - (4*a*c)
    if(formula<0){
        return 'nao da,pois o delta é negativo : '+formula
    }
    else{
        let x1 = ((-b+Math.sqrt(b))/2*a).toFixed(2)
        let x2 = ((-b-Math.sqrt(b))/2*a).toFixed(2)
        let array = [x1,x2]
        return array
    }
}

console.log(bhaskara(-2,5,12))