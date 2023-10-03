import input from 'readline-sync';

let taxa;

console.log('Aplicação de Juros: ');

let valor=input.question('\nInforme o valor devido: R$ ');

if (valor>0){
    let dias=input.question('Informe quantos dias se passaram desde o vencimento do boleto: ')
    if (dias>0){
        if(dias>15){
        taxa=10;
        }
        else{
        taxa=5;
        }
        let juros=(valor/100)*taxa;
        let total=Number(valor)+juros
        console.log('\nValor original da dívida: R$ '+valor);
        console.log('Dias atrasados: '+dias);
        console.log('Taxa de juros: '+taxa+'%');
        console.log('Valor total com juros: R$ '+total);
    }
    else{
        console.log('Você está em dia!');
    }
}
else{
    console.log('O valor da dívida deve ser maior que zero!');
}
