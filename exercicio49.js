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
// Descritivo: Crie uma função criarMultiplicador(multiplicador) que retorne uma função que multiplica qualquer número pelo multiplicador (Closure).

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function criarMultiplicador(multiplicador) {
  return (numero) => numero * multiplicador;
}

rl.question('Digite o multiplicador: ', (mul) => {
  rl.question('Digite o número a ser multiplicado: ', (num) => {
    const multiplicador = parseFloat(mul);
    const numero = parseFloat(num);
    const multiplicar = criarMultiplicador(multiplicador);
    console.log(`${numero} multiplicado por ${multiplicador} = ${multiplicar(numero)}`);
    rl.close();
  });
});
