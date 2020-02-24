/**
 * Faça um programa que leia um número entre 0 e 10, 
 * e escreva este número por extenso. 
 * Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’ 
*/

const numero = (num) =>{
    switch (num) {
        case 1:
            return 'Um'
            break;
        case 2:
            return 'Dois'
            break;
        case 3:
            return 'Tres'
            break;
        case 4:
            return 'Quatro'
            break;
        case 5:
            return 'Cinco'
            break;
        case 6:
            return 'Seis'
            break;
        case 7:
            return 'Sete'
            break;
        case 8:
            return 'Oito'
            break;
        case 9:
            return 'Nove'
            break;
        case 10:
            return 'Dex'
            break;
        default:
            return 'Número fora do intervalo'
            break;
    }
}

console.log(numero(1))
console.log(numero(2))
console.log(numero(3))
console.log(numero(4))
console.log(numero(5))
console.log(numero(6))
console.log(numero(7))
console.log(numero(8))
console.log(numero(9))
console.log(numero(10))
console.log(numero(11))