// Como reverter strings usando JavaScript?

const frase = "Resolvendo problemas de JavaScript!";

function reverterString(string) {
  return string.split("").reverse().join("");
}

console.log(reverterString(frase));

////////////////////////////////////

// Demonstre como funcionam closures em JavaScript criando uma função que retorne os resultados abaixo:

// const somaCinco = criaOperacaoBase(5);
// somaCinco(10) //retorna 15
// somaCinco(7) //retorna 12

function criaOperacaoBase(numBase) {
  return function(num) {
    return numBase + num;
  }
}

const somaCinco = criaOperacaoBase(5);
console.log(somaCinco(10)); //retorna 15
console.log(somaCinco(7)); //retorna 12

////////////////////////////////////

// Explique qual é a saída da função abaixo e como funciona a atribuição de variáveis em JavaScript

(function() {
  var a = b = 5;
})();

console.log(b); //5

////////////////////////////////////

// Qual a saída esperada para a expressão abaixo? Explique.

[1, 2, 3] + [4, 5, 6]; // -> '1,2,34,5,6'
// resposta usando toString()
// reforçar questão da conversão implícita e explícita

////////////////////////////////////

// Explique a saída das chamadas abaixo e como funcionam as instâncias de classe em JavaScript

class Gato {
  static renomearGato(novoNome) {
    this.novoNome = novoNome;
    return this.novoNome;
  }

  constructor({ novoNome = 'Churumela' } = {}) {
    this.novoNome = novoNome;
  }
}

const churumela = new Gato({ novoNome: 'Churumela' });
console.log(churumela.renomearGato('churumela')); //type erros por causa da classe static (não passam para dentro de instâncias)

////////////////////////////////////

// O que acontece ao executarmos o código abaixo?

function cantar() {
  console.log('lalala!');
}

cantar()
cantar.pessoa = 'Juliana'; //funciona normalmente

////////////////////////////////////

// Considerando os códigos acima, qual o resultado do código abaixo?

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const pessoa = new Pessoa('Ju', 'Amoasei');
Pessoa.retornaNomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
};

console.log(pessoa.retornaNomeCompleto()); //type error pois a nova prop é adicionada ao construtor (de forma estática), não estando disponível para as instências

////////////////////////////////////

// Qual o resultado da comparação abaixo?

const a = [1, 2, 3];
const b = [1, 2, 3];

a === b; // false (as referências são diferentes então são arrays diferentes)
// dar exemplo sobre como comparar arrays (não funciona se elementos estiverem em ordens diferentes)

const arrayUm = [1, 2, 3];
const arrayDois = [1, 2, 3];

function compararArrays (arrayA, arrayB) {
  return arrayA.length === arrayB.length &&
    arrayA.every((elem, index) => elem === b[index])
}

console.log(compararArrays(arrayUm, arrayDois));

const string = 'teste';
const stringObj = new String('teste');

console.log(compararArrays([string], [stringObj]));

////////////////////////////////////

// Qual o resultado do código abaixo?

const a = [1, 2, 3];
const b = a;
a[3] = 4;
console.log(a);
console.log(b);

// b fica igual a por que os valores são passados por referência.
// dar exemplo sobre como fazer clonagem profunda (que inclui objetos aninhados) sem usar json.stringify

function clonar(obj) {
  if (obj === null) return null;

  let clone = Object.assign({}, obj); //copia todas as props enumeráveis próprias (target, source)
  Object.keys(clone).forEach(chave => {
    return (clone[chave] = typeof obj[chave] === 'object' ? clonar(obj[chave]) : obj[chave])
  })
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
}

const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = clonar(a); // a !== b, a.obj !== b.obj
console.log(b);
a.x = 5;
console.log(a);
console.log(b);
