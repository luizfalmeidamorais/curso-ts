/* ---------- TIPOS BÁSICOS, SIMPLES, PRIMITIVOS DE DADOS ---------- */

// String - Valores de Texto
let nome: string = "Luiz Fernando";

// Number - Valores Numéricos
let idade: number = 17;

// Boolean - Valores Lógicos ou Booleanos (true/false)
let ativo: boolean = true;

// Undefined - Valores não definidos
let bizarro: undefined = undefined;

// Null - Valores nulos
let nada: null = null;

/* Há também 2 tipos primitivos menos comuns, encontrados em versões mais recentes do JS e TS - bigint e symbol */

/* Ao criar uma variável, há duas maneiras principais de o TS atribuir um tipo:
    - Explícita: Atribuir o tipo manualmente
    - Implícita: Atribuir o tipo automaticamente
*/

// TIPO EXPLÍCITO - Quando você atribui o tipo de dado na declaração
let sobrenome: string = "Almeida Morais";

// TIPO IMPLÍCITO - Quando o TS irá "adivinhar" (inferir) o tipo com base no valor atribuído
let profissao = "Estudante";

/* ---------- TIPOS AVANÇADOS E/OU ESPECIAIS ---------- */

// Union Type - Quando um valor pode ser mais do que um único tipo
let minhaVariavel: string | number;
minhaVariavel = 10;
minhaVariavel = "Olá, mundo!";

// Any - Um tipo que desabilita a verificação de tipos e permite que todos os tipos sejam usados
let teste: any = 100;
teste = "Olá, mundo!";

/* ALERTA: Any pode ser uma maneira útil de evitar erros, uma vez que desabilita a verificação de tipos, mas o TS não será capaz de fornecer segurança
de tipo e ferramenta que dependem em dados de tipo, como preenchimento automático, não funcionarão. */

// Unknown - Um tipo que é semelhante ao any, mas mais seguro, pois não permite que você faça nada com ele até que você o converta para outro tipo
let valor: unknown = 100;
valor = "Teste";

let converte = valor as string;
console.log(converte.length);

// Never - Um tipo que representa um valor que nunca ocorrerá
function erro(mensagem: string): never {
  throw new Error(mensagem);
}

// Array - TS tem uma sintaxe específica para matrizes
const names: string[] = [];
names.push("Luiz Fernando de Almeida Morais");

/* A palavra chave 'readonly' impede que matrizes sejam alteradas */
const nomes: readonly string[] = ["Luiz Fernando de Almeida Morais"];

/* Inferência de Tipo - TS pode inferir o tipo de uma matriz se ela tiver valores */
const numbers = [1, 2, 3];
numbers.push(4);
let y: number = numbers[0];

// Tuple - Um tipo de matriz que permite que você especifique o tipo e o número de itens
let pessoa: [string, number];
pessoa = ["Luiz Fernando", 17];

/* Uma boa prática é fazer sua tupla sempre readonly. Porque as tuplas só tem tipos fortemente definidos para os valores iniciais. */
const tuplaReadonly: readonly [number, boolean, string] = [5, true, "Teste"];

// Object - Objetos são variáveis com muitos valores dentro
const carro: { marca: string; modelo: string; ano: number } = {
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
const carro2: { modelo: string; motor?: number } = {
  modelo: "Uno",
};
carro2.motor = 1.0;

// Assinatura de Índice - As assinaturas de índice podem ser usadas para objetos sem uma lista definida de propriedades
const nomeIdade: { [index: string]: number } = {};
nomeIdade["Luiz Fernando"] = 17;

/* ---------- ALIASES E INTERFACES ----------- */
// Aliases - São usados para criar um novo nome para um tipo. São semelhantes a variáveis, mas para tipos.
type AnoVeiculo = number;
type ModeloVeiculo = string;
type MarcaVeiculo = string;
type Veiculo = {
  ano: AnoVeiculo;
  modelo: ModeloVeiculo;
  marca: MarcaVeiculo;
};

const uno: AnoVeiculo = 2006;
const gol: MarcaVeiculo = "Volkswagen";
const TSI: ModeloVeiculo = "Up";
const laFerrari: Veiculo = {
  ano: 2015,
  modelo: "LaFerrari",
  marca: "Ferrari",
};

// Interfaces - São usadas para descrever a forma de um objeto
interface Retangulo {
  altura: number;
  largura: number;
}

const novoItem: Retangulo = {
  altura: 10,
  largura: 20,
};

// Estendendo Interfaces - Interfaces podem estender outras interfaces
interface RetanguloColorido extends Retangulo {
  cor: string;
}

const outroItem: RetanguloColorido = {
  altura: 10,
  largura: 20,
  cor: "Azul",
};

/* ---------- FUNÇÕES ---------- */
// Tipos de Função - TS pode inferir o tipo de retorno de uma função
function getTime(): number {
  return new Date().getTime();
}

// Void - Quando uma função não retorna nada
function printHello(): void {
  console.log("Olá, mundo!");
}

// Tipos em Parâmetros - TS pode inferir o tipo de parâmetros de função
function multiplicacao(a: number, b: number): number {
  return a * b;
}
multiplicacao(2, 3);

// Parâmetros Opcionais - Parâmetros que podem ser passados ou não
function soma(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

// Parâmetros Padrão - Parâmetros que podem ser passados ou não, mas que tem um valor padrão caso não sejam passados
function saudacao(name: string = "Luiz Fernando"): void {
  console.log(`Olá, ${name}!`);
}

// Parâmetros Nomeados - Parâmetros que podem ser passados ou não, mas que tem um nome
function hello({nome, idade}: {nome: string, idade: number}): void {
  console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}


/* ---------- GENÉRICOS ---------- */
// Genéricos - São usados para criar componentes reutilizáveis
function imprimirValor<T>(valor: T): void {
  console.log(`Valor: ${valor}`);
}
imprimirValor<number>(10);
imprimirValor<string>("Olá, mundo!");

