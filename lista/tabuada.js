//Solicitar ao usuário um número inteiro de 1 a 10 e calcular a tabuada deste número na janela do navegador, linha a linha.
let n = parseInt(prompt("Insira um número de 1 a 10: "))

if (n <= 10){//se o numero digitado for menor ou igual a 10 o codigo executa
    for (i = 0; i <= 10; i++){//cria um contador de 0 a 10
        document.write(n + 'x' + i + '=' + n*i + '<br>');// multiplica o numero digitado pelo usuario pelo contador e exibe
    }
}
else{
    document.write('Digite um número válido.');
}