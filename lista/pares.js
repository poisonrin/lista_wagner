//Imprimir os números pares menores que 100 e exibir na janela do navegador, linha a linha com o título "Número 2", "Número 4", ...
for (var i = 0; i < 100; i++) { //cria um contador de 0 a 100
        if ((i % 2) == 0) { //testa pra ver se o número é divisível por dois
            document.write('Número ' + i + '<br>'); //exibe o número que for divisível por dois
        }
    }