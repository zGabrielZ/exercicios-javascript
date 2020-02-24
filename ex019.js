/**
 * Implemente uma  função que receba como parâmetros o código do item pedido,
 *  a quantidade e calcule o valor a ser pago por aquele lanche. 
 * Considere que a cada execução somente será calculado um item. 
 * Use o comando switch. Crie um caso default para produto não existente. 
*/

const lanche = (codigo,quantidade) =>{
    switch (codigo) {
        case 100:
            let preco = 3.00
            return `Cachorro Quente,Preco : ${preco},Qtd: ${(quantidade*preco).toFixed(2)}`
            break;
        case 200:
            let preco2 = 4.00
            return `Hambúrguer Simples,Preco  ${preco2},Qtd: ${(quantidade*preco2).toFixed(2)}`
            break;
        case 300:
            let preco3 = 5.50
            return `Cheeseburguer,Preco  ${preco3},Qtd: ${(quantidade*preco3).toFixed(2)}`
            break;
        case 400:
            let preco4 = 7.50
            return `Bauru,Preco:   ${preco4},Qtd: ${(quantidade*preco4).toFixed(2)}`
            break;
        case 500:
            let preco5 = 3.50
            return `Refrigerante,Preco:   ${preco5},Qtd: ${(quantidade*preco5).toFixed(2)}`
            break;
        case 600:
            let preco6 = 2.80
            return `Suco,Preco:    ${preco6},Qtd: ${(quantidade*preco6).toFixed(2)}`
            break;
        default:
            return 'Produto nao existe'
            break;
    }
}

console.log(lanche(100,2))
console.log(lanche(200,4))
console.log(lanche(300,3))
console.log(lanche(400,6))
console.log(lanche(500,2))
console.log(lanche(600,6))
console.log(lanche(700,9))