---
title: "Javascript: Array FlatMap"
description: Nivelando arrays no javascript usando flat() e flatMap()
date: 2020-09-20 07:28:39
image: /assets/img/screen-shot-2020-09-20-at-19.38.46.png
category: dev
background: "#008BF8"
---

![Desenho de uma mulher usando o computador e um quadro atras com os nomes dos métodos "array.flat()", "array.flatMap()"](assets/img/screen-shot-2020-09-20-at-19.38.46.png 'Desenho de uma mulher usando o computador e um quadro atras com os nomes dos métodos "array.flat()", "array.flatMap()"')

- [Cenário simples](#cenario-simples)
- [Método flat()](#metodo-flat)
- [Método map()](#metodo-map)
- [Método flatMap()](#metodo-flatmap)

<h2 id="cenario-simples">Cenário simples</h2>

Em alguns momentos na vida de pessoa desenvolvedora, nos deparamos com casos em quem temos um array de coisas (objetos, strings, números), e as vezes temos **arrays** dentro de **arrays**.

Exemplo com números:

```jsx
const array = [1, 2, 3, [4, 5, 6]]

// array[0] = 1
// array[1] = 2
// array[2] = 3
// array[3][1] = 4
// array[3][2] = 5
// array[3][3] = 6
```

E por alguma razão específica queremos nivelar todos esses valores, deixando os números num mesmo nível.

<h2 id="metodo-flat">Método flat()</h2>

Com o método `flat()` conseguimos nivelar esse **array**, e todos eles ficam no mesmo nível.

```jsx
const array = [1, 2, 3, [4, 5, 6]]

const arrayFlatten = array.flat()

// valor de arrayFlatten:
// [ 1, 2, 3, 4, 5, 6 ]
```

O método `flat()` sem parâmetros por padrão só nivela um nível (valor padrão = 1). Ou seja, se tivermos **arrays**, dentro de **arrays**, dentro de **arrays**.... pode se especificar o nível de profundidade que quer nivelar, ou apenas colocar o parâmetro `Infinity`, com isso independente do nível de "profundidade", os valores dos **arrays** vão estar no mesmo nível.

```jsx
const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11]]]]

const arrayFlatten = array.flat(Infinity)

// valor de arrayFlatten:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
```

<h2 id="metodo-map">Método map()</h2>

O método `map()`, não tem nada a ver com nivelar arrays.

Usamos o `map()` para percorrer **arrays**, aplicar alguma função em cada item do **array** e retornar um **array** de mesmo tamanho.

> 💡 Já mostrei como usar o map nesse outro post que eu fiz: [Usando foreach(), map(), filter(), reduce()](https://blog.talitaoliveira.com.br/http://localhost:8000/como-e-quando-usar-foreach-map-filter-reduce/)

Mas recapitulando aqui:

- O `map()` retorna um novo **array** com o mesmo tamanho do array que foi percorrido
- Pra isso criamos uma constante para receber esse novo **array**
- Recebe uma função que vai ser executada para cada item do **array**

```jsx
const frutas = ["banana", "maçã", "abacaxi", "mamão", "abacate"]
const lembretes = frutas.map(fruta => `Eu preciso comer mais ${fruta}`)

console.log(lembretes)

/*
Após executar, temos um array de ~frases com valores vindos do array de frutas:

['Eu preciso comer mais banana',
'Eu preciso comer mais maçã',
'Eu preciso comer mais abacaxi',
'Eu preciso comer mais mamão',
'Eu preciso comer mais abacate']
*/
```

<h2 id="metodo-flatmap">Método flatMap()</h2>

E o método `flatMap()` é basicamente a junção dos dois.

Mas vamos a outro cenário, um **array** de objetos que será uma lista de pessoas e cada pessoa tem no mínimo 2 telefones cadastrados para ela. **E queremos uma lista dos telefones de todas as pessoas.**

Ao meu ver esse cenário tá um pouco mais próximo da realidade de como usar do que um simples array de números.

```jsx
const pessoas = [
  {
    idade: 20,
    nome: "Fulano 1",
    telefones: [
      { tipo: "celular", numero: "(81)9.9999-9999" },
      { tipo: "casa", numero: "(81)3444-4444" },
    ],
  },
  {
    idade: 27,
    nome: "Fulano 2",
    telefones: [
      { tipo: "celular", numero: "(84)9.8888-888" },
      { tipo: "casa", numero: "(84)3455-5555" },
    ],
  },
  {
    idade: 32,
    nome: "Fulano 3",
    telefones: [
      { tipo: "celular", numero: "(83)9.7777-7777" },
      { tipo: "celular", numero: "(83)9.6666-6666" },
      { tipo: "casa", numero: "(83)3466-6666" },
    ],
  },
]
```

Para esse caso usamos o `flatMap()` no array de pessoas e a função que passamos para ele retorna os telefones.

```jsx
const telefones = pessoas.flatMap(pessoa => pessoa.telefones)
```

E o retorno de **telefones** fica assim:

```jsx
;[
  { tipo: "celular", numero: "(81)9.9999-9999" },
  { tipo: "casa", numero: "(81)3444-4444" },
  { tipo: "celular", numero: "(84)9.8888-888" },
  { tipo: "casa", numero: "(84)3455-5555" },
  { tipo: "celular", numero: "(83)9.7777-7777" },
  { tipo: "celular", numero: "(83)9.6666-6666" },
  { tipo: "casa", numero: "(83)3466-6666" },
]
```

## Referência:

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap>

\~🌟\~

Bem.. é isso. 😉

Precisei usar `flatMap()` semana passada e nunca tinha usado antes e daí quis postar sobre.

Minha frequência de posts diminuiu um pouco nessas ultimas semanas basicamente por motivos de saúde mental, nada grave só organizando e analisando alguns pensamentos e atitudes, e pensando bastante sobre focos e objetivos da minha vida profissional e pessoal. Mas to suave. 🙃

Espero que este post possa ser útil para alguém 😊.

Até a próxima. 🤙🏽
