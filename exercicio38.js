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
Descritivo: 38. Dada uma frase, conte quantas palavras ela possui (use `split`).
****************************************************************************/

const frase = "O desenvolvimento front-end é muito interessante";
const quantidadePalavras = frase.split(' ').length;

console.log(quantidadePalavras); 
// Resultado: 6