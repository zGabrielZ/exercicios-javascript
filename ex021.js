/**
 * Criar um programa para identificar o valor a ser pago por um plano de saúde dada a 
 * idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a
 *  seguinte tabela: 1) crianças com menos de 10 anos pagam R$80; 2) 
 * conveniados com idade entre 10 e 30 anos pagam R$50; 3) 
 * conveniados com idade acima de  30 e até 60 anos pagam R$ 95; e 4)
 *  conveniados acima de 60 anos pagam R$130 
 */


 const conveniados = function(idade){
     if(idade<10){
         return `${100+80} reais`
     }
     else if(idade >=10 && idade<30){
        return `${100+50} reais`
     }
     else if(idade >=30 && idade<=60){
        return `${100+95} reais`
     }
     else{
        return `${100+130} reais`
     }
 }

 console.log(conveniados(5))
 console.log(conveniados(10))
 console.log(conveniados(30))
 console.log(conveniados(60))
 console.log(conveniados(80))