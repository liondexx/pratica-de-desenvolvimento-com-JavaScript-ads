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
// Descritivo: Crie uma função que retorne um objeto com `nome` e `idade` da pessoa.

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    apresentar: function () {
      return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    },
  };
}

rl.question("Digite o nome da pessoa: ", (nome) => {
  rl.question("Digite a idade da pessoa: ", (idade) => {
    const pessoa = criarPessoa(nome, parseInt(idade));
    console.log("\nPessoa criada:");
    console.log(pessoa);
    console.log("\nApresentação:");
    console.log(pessoa.apresentar());
    rl.close();
  });
});
