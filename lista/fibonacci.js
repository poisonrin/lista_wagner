//Exibir em uma página html os 15 primeiros números da sequência de Fibonacci, apresentando uma imagem sobre a série.
let n1 = 0;
let n2 = 1;
let fibonacci = [n1, n2];

for(i = 2; i <= 15; i++){
    let n3 = n1+n2;
    fibonacci.push(n3);
    n1 = n2;
    n2 = n3;
}
document.write(fibonacci);
document.write("<br>" + "<img src='images/rato.jpg' alt= 'sumiu?'>");