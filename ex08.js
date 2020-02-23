/** 
 * Pedro joga N jogos de basquete por temporada. 
 * Para saber como está ele está progredindo,
 *  ele mantém registro de todos os as pontuações feitas por jogo. 
 * Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor
 *  e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, 
 * escreva uma função que ao recebê-la irá comparar os valores um a um e 
 * irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos 
 * e quando fez seu pior jogo. (Número do pior jogo). 
*/

const jogo = function(){
    let array = [10,20,20,8,25,3,0,30,1]
    array.shift()
    let soma =0
    let maior =0
    let menor = 0
    for(let i in array){
        if(array[i]>maior){
            maior = array[i]
            soma+=1
        }
        
        if(array[i]<maior){
            menor = array[i]
        }
    }
    return [soma,menor]
}

console.log(jogo())