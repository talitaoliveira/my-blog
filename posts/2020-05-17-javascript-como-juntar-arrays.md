---
title: 'Explorando Javascript: Como juntar arrays?'
description: Duas opções para se combinar arrays.
date: '2020-05-17 05:15:12'
image: /assets/img/abundance-agriculture-bananas-batch-264537.jpg
category: dev
background: '#008BF8'
---
![Imagem com filas de legumes na vertical: berinjelas, cenouras, cerejas, bananas, pessegos, pepinos, tomates..](/assets/img/abundance-agriculture-bananas-batch-264537.jpg "Imagem: https://www.pexels.com/")

*Imagem:* [](https://www.pexels.com/)*<https://www.pexels.com/>*

**Simulação**:

> *"Tenho aqui algumas listas separadas de coisas que preciso comprar"*

```jsx
const limpeza = ['sabonete', 'detergente', 'água sanitária']
const frutas = ['banana', 'maçã', 'abacaxi', 'mamão', 'abacate']
const legumes = ['batata', 'cenoura', 'abobrinha']
const lanche = ['salgadinho', 'biscoito', 'refrigerante']
```

> "Só que agora preciso juntar tudo pra poder comprar.... *~Google pesquisar: juntar arrays javascript."*

Opções encontradas ~~(não é exatamente assim que vem no google)~~:

* Uso do **concat** *(parece bem "autoexplicativo" né, vai ~concatenar dois arrays.. show..)*
* Uso do **spread syntax** *(tá... que que isso?...)*
* *Modo hard*

## Opção 1: Uso do *.concat*

A palavra `concat` parece bem autoexplicativa, "*concatenar*" talvez nos lembre de juntar duas coisas.

A função `concat` retorna um novo array.

Para usar a função precisamos de pelo menos dois arrays:

* Primeiro array: para aplicar a função `concat`
* Segundo array: vai ser passado como parâmetro na função `concat`

```jsx
const listaDeCompras = frutas.concat(legumes)

/* A variável listaDeCompras agora tem o valor de:

[ 'banana',
  'maçã',
  'abacaxi',
  'mamão',
  'abacate',
  'batata',
  'cenoura',
  'abobrinha' ]
*/
```

> *Massa! Mas... e o restante?*

Para que se possa usar o `concat` para concatenar mais de dois arrays, basta incluir mais um (ou vários) array nos parâmetros do `concat`.

```jsx
const listaDeCompras = frutas.concat(legumes, limpeza, lanche)

/* A variável listaDeCompras agora tem o valor de:

[ 'banana',
  'maçã',
  'abacaxi',
  'mamão',
  'abacate',
  'batata',
  'cenoura',
  'abobrinha',
  'sabonete',
  'detergente',
  'água sanitária',
  'salgadinho',
  'biscoito',
  'refrigerante' ]
*/
```

> *Muito top! do jeito que eu queria.*

## Opção 2: Uso do *spread syntax*

O spread syntax veio como novidade no **ES6** (uma das versões do Javascript ).

Usando a sintaxe de **"..."** (três pontinhos) os valores contidos na lista de `frutas` vão ser "espalhados" na constante `listaDeCompras`, assim como a lista de `legumes`.

```jsx
const listaDeCompras = [...frutas, ...legumes]

/* A variável listaDeCompras agora tem o valor de:

[ 'banana',
  'maçã',
  'abacaxi',
  'mamão',
  'abacate',
  'batata',
  'cenoura',
  'abobrinha' ]
*/
```

> *Show! fez a mesma coisa da primeira opção - o concat. E pra juntar todas as listas?*

*Oxe, bronca pequena. Vê como é Simplão!* Basta só adicionar as outras listas do mesmo jeito que foi pra fazer desse jeito de cima:

* virgula, três pontinhos e o nome da lista .... e assim vai.

```jsx
const listaDeCompras = [...frutas, ...legumes, ...limpeza, ...lanche ]

/*
A variável listaDeCompras agora tem o valor de:

[ 'banana',
  'maçã',
  'abacaxi',
  'mamão',
  'abacate',
  'batata',
  'cenoura',
  'abobrinha',
  'sabonete',
  'detergente',
  'água sanitária',
  'salgadinho',
  'biscoito',
  'refrigerante' ]
*/
```

> *Maravilha!!*

Esse operador "**...**" é chamado de **spread operator**. Ele é usado para "espalhar" o que tem dentro do array (**frutas** ou **legumes**) nesse novo array chamado **listaDeCompras.**

*Obs.: Se houver valores iguais num array e no outro, eles aparecerão repetidos no novo.*

E também pode ser feito isso caso seja preciso:

```jsx
const frutas = ['banana', 'abacate', 'mamão']
const feira = ['batata', ...frutas, 'cenoura', 'abobora']
```

## Opção 3: Modo Hard

O modo hard é tentar "*reinventar a roda*" e criar uma função que junte todos os itens de todos os arrays para um único array.

Pode ser uma boa para quem tá querendo saber como fazer, pra ~~brincar~~ praticar um pouco, pra ficar mais acostumado com funções da linguagem ou outra coisa. Mas, tá aí duas opções simples de juntar listas. :)

## Pessoalmente...

o uso do spread operator é a forma que pra mim fica mais legível.

Comparando leitura:

```jsx
/* concat  */
const listaDeCompras = frutas.concat(legumes, limpeza, lanche)
/* uma constante chamada lista de compras recebe um array de frutas 
e concatena vários arrays, só que basicamente tendo frutas como principal (???) 

"pq o array de frutas é tão especial assim??" */

------

/* spread  */
const listaDeCompras = [...frutas, ...legumes, ...limpeza, ...lanche ]
/* uma constante chamada lista de compras recebe um array que tem como valores
os valores de cada um desses arrays ....... 
é ... pra mim faz mais sentido.. apesar da explicação esquisita */
```

## Informação Extra

Rodei um teste de performance dos dois casos:

O spread se mostrou mais rápido comparado ao concat:

![Imagem com uma tabela de 2 linhas e 3 colunas, realizando comparacao de performance entre: concat (primeira linha) com resultado de ser 66% mais devagar comparado ao uso do spread (segunda linha)](/assets/img/jsperf1.png)

pode conferir aqui: [](https://jsperf.com/concat-vs-spread-small/1)<https://jsperf.com/concat-vs-spread-small/1>

**PORÉM!!** porém.... Quando fiz o teste juntando uma quantidade ~absurda(?) de `arrays`, o jogo virou.

![Imagem com uma tabela de 2 linhas e 3 colunas, realizando comparacao de performance entre: spread (segunda linha) com resultado de ser 97% mais devagar comparado ao uso do concat (primeira linha). Com diversos arrays para serem concatenados em ambos os casos.](/assets/img/jsperf2.png)

pode conferir aqui: [](https://jsperf.com/concat-vs-spread-big/1)<https://jsperf.com/concat-vs-spread-big/1>

\~🌟\~

Bem.. é isso. 😉

To tentando fazer um pouco de sentido nos posts que estou fazendo sobre arrays em javascript (no caso pra um post no futuro).

Espero que eu tenha ajudado alguém, se não.. paciência. 😅

Até a próxima. 🤙🏽

Referências

* [](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat>
* [](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax>
