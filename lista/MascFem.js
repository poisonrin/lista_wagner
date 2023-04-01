let qHomens = 0;
let qMulheres = 0;

for (let i = 1; i <= 5; i++) {
  let altura = parseFloat(prompt("Digite a altura da pessoa " + i + " (em metros): "));
  let peso = parseFloat(prompt("Digite o peso da pessoa " + i + " (em quilos): "));
  let sexo = prompt("Digite o sexo da pessoa " + i + " (masculino ou feminino): ");

  let imc = peso / (altura ** 2);

  document.write("Pessoa " + i + ": IMC = " + imc);

  if (sexo == "masculino") {
    qHomens++; //adiciona 1 na qHomens
    document.write(" (sexo masculino)" + "<br>");
  } else if (sexo == "feminino") {
    qMulheres++; //adiciona 1 na qMulheres
    document.write(" (sexo feminino)" + "<br>");
  } else {
    document.write(" (sexo inválido)" + "<br>");
  }
}

document.write("Quantidade de homens: " + qHomens + "<br>");
document.write("Quantidade de mulheres: " + qMulheres + "<br>");