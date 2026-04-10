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
// Descritivo:
// Descritivo: Crie um sistema simples de login: se o usuário for "admin" e a senha "1234", mostre "Acesso Permitido",caso contrário, "Acesso Negado".
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o nome de usuario: ", (usuario) => {
  rl.question("Digite a senha: ", (senha) => {
    if (usuario === "admin" && senha === "1234") {
      console.log("Acesso Permitido");
    } else {
      console.log("Acesso Negado");
    }
    rl.close();
  });
});
