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
// Descritivo: Use .reduce() para transformar um array de objetos em um objeto somatório (ex: somar salários).

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite funcionários como nome:salário separados por vírgula: ', (entrada) => {
  const empregados = entrada.split(',').map((item) => {
    const [nome, salario] = item.split(':').map((parte) => parte.trim());
    return { nome, salario: parseFloat(salario) };
  });

  const totalSalarios = empregados.reduce((acumulador, atual) => acumulador + atual.salario, 0);
  const resultado = empregados.reduce((acc, emp) => {
    acc[emp.nome] = emp.salario;
    return acc;
  }, {});

  console.log('Objeto com salários por funcionário:');
  console.log(resultado);
  console.log(`Soma dos salários: R$ ${totalSalarios.toFixed(2)}`);
  rl.close();
});
