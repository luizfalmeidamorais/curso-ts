"use strict";
/* ---------- TIPOS BÁSICOS, SIMPLES, PRIMITIVOS DE DADOS ---------- */
// String - Valores de Texto
let nome = "Luiz Fernando";
// Number - Valores Numéricos
let idade = 17;
// Boolean - Valores Lógicos ou Booleanos (true/false)
let ativo = true;
// Undefined - Valores não definidos
let bizarro = undefined;
// Null - Valores nulos
let nada = null;
/* Há também 2 tipos primitivos menos comuns, encontrados em versões mais recentes do JS e TS - bigint e symbol */
/* Ao criar uma variável, há duas maneiras principais de o TS atribuir um tipo:
    - Explícita: Atribuir o tipo manualmente
    - Implícita: Atribuir o tipo automaticamente
*/
// TIPO EXPLÍCITO - Quando você atribui o tipo de dado na declaração
let sobrenome = "Almeida Morais";
// TIPO IMPLÍCITO - Quando o TS irá "adivinhar" (inferir) o tipo com base no valor atribuído
let profissao = "Estudante";
/* ---------- TIPOS AVANÇADOS E/OU ESPECIAIS ---------- */
// Union Type - Quando um valor pode ser mais do que um único tipo
let minhaVariavel;
minhaVariavel = 10;
minhaVariavel = "Olá, mundo!";
// Any - Um tipo que desabilita a verificação de tipos e permite que todos os tipos sejam usados
let teste = 100;
teste = "Olá, mundo!";
/* ALERTA: Any pode ser uma maneira útil de evitar erros, uma vez que desabilita a verificação de tipos, mas o TS não será capaz de fornecer segurança
de tipo e ferramenta que dependem em dados de tipo, como preenchimento automático, não funcionarão. */
// Unknown - Um tipo que é semelhante ao any, mas mais seguro, pois não permite que você faça nada com ele até que você o converta para outro tipo
let valor = 100;
valor = "Teste";
let converte = valor;
console.log(converte.length);
// Never - Um tipo que representa um valor que nunca ocorrerá
function erro(mensagem) {
    throw new Error(mensagem);
}
// Array - TS tem uma sintaxe específica para matrizes
const names = [];
names.push("Luiz Fernando de Almeida Morais");
/* A palavra chave 'readonly' impede que matrizes sejam alteradas */
const nomes = ["Luiz Fernando de Almeida Morais"];
/* Inferência de Tipo - TS pode inferir o tipo de uma matriz se ela tiver valores */
const numbers = [1, 2, 3];
numbers.push(4);
let y = numbers[0];
// Tuple - Um tipo de matriz que permite que você especifique o tipo e o número de itens
let pessoa;
pessoa = ["Luiz Fernando", 17];
/* Uma boa prática é fazer sua tupla sempre readonly. Porque as tuplas só tem tipos fortemente definidos para os valores iniciais. */
const tuplaReadonly = [5, true, "Teste"];
// Object - Objetos são variáveis com muitos valores dentro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2006,
};
/* O TS pode inferir os tipos de propriedades com base em seus valores */
const car = {
    marca: "Toyota",
};
car.marca = "Fiat";
/* No TS um objeto pode ter propriedades opcionais. São propriedades que não precisam ser definidas na definição do objeto. Podem ser usadas depois ou não, são opcionais. */
const carro2 = {
    modelo: "Uno",
};
carro2.motor = 1.0;
// Assinatura de Índice - As assinaturas de índice podem ser usadas para objetos sem uma lista definida de propriedades
const nomeIdade = {};
nomeIdade["Luiz Fernando"] = 17;
const uno = 2006;
const gol = "Volkswagen";
const TSI = "Up";
const laFerrari = {
    ano: 2015,
    modelo: "LaFerrari",
    marca: "Ferrari",
};
const novoItem = {
    altura: 10,
    largura: 20,
};
const outroItem = {
    altura: 10,
    largura: 20,
    cor: "Azul",
};
/* ---------- FUNÇÕES ---------- */
// Tipos de Função - TS pode inferir o tipo de retorno de uma função
function getTime() {
    return new Date().getTime();
}
// Void - Quando uma função não retorna nada
function printHello() {
    console.log("Olá, mundo!");
}
// Tipos em Parâmetros - TS pode inferir o tipo de parâmetros de função
function multiplicacao(a, b) {
    return a * b;
}
multiplicacao(2, 3);
// Parâmetros Opcionais - Parâmetros que podem ser passados ou não
function soma(a, b, c) {
    return a + b + (c || 0);
}
// Parâmetros Padrão - Parâmetros que podem ser passados ou não, mas que tem um valor padrão caso não sejam passados
function saudacao(name = "Luiz Fernando") {
    console.log(`Olá, ${name}!`);
}
// Parâmetros Nomeados - Parâmetros que podem ser passados ou não, mas que tem um nome
function hello({ nome, idade }) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}
/* ---------- GENÉRICOS ---------- */
// Genéricos - São usados para criar componentes reutilizáveis
function imprimirValor(valor) {
    console.log(`Valor: ${valor}`);
}
imprimirValor(10);
imprimirValor("Olá, mundo!");
