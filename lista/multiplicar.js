//Multiplicar os números de 1 a 500, exibindo o total em um alert. Exemplo: 1 * 2 * 3 * .... 500.
let total = 1;
for (i = 1; i <= 20; i++){
    total = total * i;
}
alert('O total é: ' + total);
//por ser um número muito grande, o navegador não exibe 500, então alterei para 20