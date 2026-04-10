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
Descritivo: 40. Remova os espaços em branco do início e fim de uma string (`trim`).
****************************************************************************/

const textoComEspacos = "     Olá, mundo!     ";
const textoLimpo = textoComEspacos.trim();

console.log(textoLimpo); 
// Resultado: "Olá, mundo!"