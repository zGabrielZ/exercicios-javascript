/**
 *  Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a 
 * segunda retornará o valor da aplicação sob o regime de juros compostos. 
 */


const aplicação = function(capitalInicial,taxaJuro,tempoAplicacao){
    const taxa = taxaJuro / 100 
    return (taxa*capitalInicial)+capitalInicial
}

console.log(aplicação(2,2))

const aplicação2 = function(capitalInicial,taxaJuro,tempoAplicacao){
    const taxa = taxaJuro / 100 
    return (taxa*capitalInicial)+(capitalInicial)*tempoAplicacao
}


console.log(aplicação2(2,2,2))
