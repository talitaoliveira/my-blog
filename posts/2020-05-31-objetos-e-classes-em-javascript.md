---
title: Objetos e Classes em Javascript
description: Criando objetos com classes
date: '2020-05-31 07:01:38'
image: /assets/img/undraw_elements_cipa.png
category: dev
background: '#008BF8'
---
![](/assets/img/undraw_elements_cipa.png)

## Criando objetos sem o uso de classes

Da forma *Object Literal*, criamos:

* Uma **constante** que recebe um objeto
* Definimos as **propriedades** e valores do objeto
* Também podemos definir uma propriedade que é uma função

```jsx
const pessoa1 = {
  nome: "Ser Humano Fulano",
  saldoNoBanco: 500,
  valorBoleto: 200,
  getValorRestante: function () {
    return this.saldoNoBanco - this.valorBoleto;
  },
};
```

E podemos acessar as propriedades do objeto através de:

```jsx
**pessoa1.nome**

exemplo:

console.log(pessoa1.nome)
// "Ser Humano Fulano"

console.log(pessoa1.getValorRestante())
// 300
```

> *Massa até aí...*

Porém, para cada pessoa nova que eu precisar criar vou precisar repetir este código:

```jsx
const pessoa2 = {
  nome: "Ser Humano Beltrano",
  saldoNoBanco: 900,
  valorBoleto: 100,
  getValorRestante: function () {
    return this.saldoNoBanco - this.valorBoleto;
  },
};
```

> *Hum... beleza...*

*(obvio que tudo vai depender do que é a solução que você está desenvolvendo, se precisa mesmo ficar criando vários objetos, talvez não precise ficar criando assim na mão... esse é só um exemplo)*

## Criando objetos com o uso de classes

Em javascript é possível escrever classes assim como em Java, PHP e outras linguagens que seguem o paradigma de orientação a objetos. Isso é possível no javascript desde o ES6, mas é basicamente um "*syntax sugar - açúcar sintático*" *~~(uma forma bonita/simples de escrever)~~* pois por debaixo dos panos é usado a sintaxe de *prototypes*.

Com classes criamos objetos, que são instancias de classes, é "basicamente" um template.

### Criando a classe Pessoa:

* Primeiro criamos a **classe Pessoa** usando a palavra chave **`class`** , o **nome da classe** que queremos criar e chaves **`{` `}`**
* Dentro da classe vai haver:

  * O **construtor** que vai receber os parâmetros necessários para instanciar um objeto da classe. Na classe pode haver apenas um **construtor**. Ao inserir outro **construtor** teremos o erro: `SyntaxError: A class may only have one constructor` (~~eu já usei em Java classes que dava pra ter mais de um.. hmm...~~)
  * As **propriedades** daquela classe
  * Uma ou mais **funções**, no nosso caso uma para pegar o valor restante da pessoa

```jsx
class Pessoa {
  constructor(nome, saldoNoBanco, valorBoleto) {
    this.nome = nome;
    this.saldoNoBanco = saldoNoBanco;
    this.valorBoleto = valorBoleto;
  }

  getValorRestante() {
    return this.saldoNoBanco - this.valorBoleto;
  }
}
```

> Hm.. Interessante...

Dentro da função, se for necessário usar alguma propriedade pertencente a própria classe usamos a palavra chave `this` para referenciar a propriedade: `this.nome`

É como se fosse ler: "**desta classe** pega a propriedade **nome"** (*~~eu viajei aqui, mas pra mim faz sentido ler assim~~*)

### Criando um objeto instanciando a classe Pessoa:

* Criamos uma constante para guardar o objeto
* Instanciamos a classe Pessoa usando o a palavra chave **`new`** (estamos criando uma **nova instancia** de **Pessoa**)
* Passamos os valores que o construtor da classe "pede": `nome, saldoNoBanco, valorBoleto`

```jsx
const pessoa1 = new Pessoa('Ser Humano Fulano', 500, 200)
```

E com isso podemos criar várias pessoas de forma mais simples:

```jsx
const pessoa2 = new Pessoa('Ser Humano Beltrano', 1000, 300)
const pessoa3 = new Pessoa('Ser Humano Duodeno', 100, 700)
const pessoa4 = new Pessoa('Ser Humano Muito Louco', 10, 500)
```

> *uhuulll~, temos várias pessoas.. Pagando boletos.... ¯\(ツ)/¯*

***Obs pessoal**: no futuuuuuuro (realmente não sei quando) pretendo detalhar um pouco sobre objetos, classes.. No futuuuuuuro~.*

\~🌟\~

Bem.. é isso. 😉

Quis abordar esse assunto pois estou tentando criar um fluxo para um conteúdo que quero postar futuramente, creio que vai ser o proximo post.

Já tem bastante conteúdo por aí que já explica classes e objetos de forma mais detalhada. Mas esse foi especial~ pois foi do meu jeito. 🙃(risos)

Eu sou uma pessoa que aprendeu a programar com orientação a objetos e infelizmente ainda não sei explicar o por que usar orientação objetos, pq seria melhor ou algo do tipo (~~mesmo achando que talvez eu tenha passado da hora de saber explicar isso ou ter alguma noção~~). 🤔

ENFIM!! 😅

Espero que eu tenha ajudado alguém, se não.. paciência. 😅

Até a próxima. 🤙🏽
