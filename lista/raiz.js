//Solicitar ao usuário um número inteiro qualquer e, apresentar em um alert a raiz quadrada, raiz cúbica e a potência do valor.
let numero = parseInt(prompt("Digite um número inteiro."))

let raizQ = Math.sqrt(numero); //transforma o número na raiz quadrada dele
let raizC = Math.cbrt(numero); //transforma o número na raiz cúbica dele
let potencia = numero ** 2; //multiplica o número por ele mesmo

alert("Raiz quadrada de " + numero + " é " + raizQ + "\nRaiz cúbica é " + raizC + "\nElevado ao quadrado é " + potencia);
//nao sei se a proposta era fazer a raiz quadrada e cubica na mão, mas encontrei essa forma de fazer em um site que pesquisei.