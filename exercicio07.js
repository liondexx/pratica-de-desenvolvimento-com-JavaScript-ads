// Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
// Disciplina: Programação Front-End
// Professor: José Carlos Flores
// Turma: ADS3B
// Componentes:
// 25362525-2 - Lucas kauê Oliveira da costa,
// 25355772-2 - Anthony Luiz da Silva,
// 25363474-2 - Beatriz Feldmman Souza Pires,
// 25291240-2 - Lion Patrocinio Cunha Costa,
// 26008618-2 - Erick Lass da Cruz,
// Data: 09 de Abril de 2026
// Descritivo: Calcule o IMC (Peso / Altura²) e classifique (Abaixo do peso, Normal, Sobrepeso, Obesidade).

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu peso (kg): ", (peso) => {
  rl.question("Digite sua altura (m): ", (altura) => {
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = "Normal";
    } else if (imc >= 25 && imc < 30) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
    rl.close();
  });
});
