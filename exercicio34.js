/******************************************************************************
Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
Disciplina: Programação Front-End
Professor: José Carlos Flores
Turma: ADS3B
Componentes:
 26008618-2 - Erick Lass da Cruz
 25362525-2 - Lucas kauê Oliveira da Costa
 25355772-2 - Anthony Luiz da Silva
 25363474-2 - Beatriz Feldmman Souza Pires 
 25291240-2 - Lion Patrocinio Cunha Costa
Data: 05 de Março de 2026
Descritivo: 34. Use `.filter()` para criar um novo array apenas com números pares
****************************************************************************/

const valores = [10, 15, 20, 25, 30];
const pares = valores.filter(num => num % 2 === 0);

console.log(pares); 
// Resultado: [10, 20, 30]