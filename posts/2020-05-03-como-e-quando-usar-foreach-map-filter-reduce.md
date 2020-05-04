---
title: 'Usando foreach(), map(), filter(), reduce()'
description: Iterando arrays em javascript
date: '2020-05-03 07:44:15'
image: /assets/img/screen-shot-2020-05-03-at-20.11.20.png
category: dev
background: '#008BF8'
---
![Desenho de uma mulher usando o computador e um quadro atras com os nomes das fun* çoes "foreach", "map", "filter", "reduce"](/assets/img/screen-shot-2020-05-03-at-20.11.20.png)

## foreach()

Usamos `foreach` quando precisamos percorrer um array em Javascript.

* Não há alterações no array
* O `foreach` por si só não retorna nada.
* Recebe uma função que vai ser executada para cada item do array

Exemplo:

```jsx
const frutas = ['banana', 'maçã', 'abacaxi', 'mamão']
frutas.forEach(fruta => console.log(`Eu preciso comer mais ${fruta}`));

/*
Após executar:

Eu preciso comer mais banana
Eu preciso comer mais maçã
Eu preciso comer mais abacaxi
Eu preciso comer mais mamão
Eu preciso comer mais abacate
*/
```

> *Show de bola, preciso comer mais frutas!*\
> *Mas essas ~fraseszinhas só aparecem no console, queria guarda-las pra lembrar depois...*

## map()

Usamos o `map` quando precisamos tanto percorrer um array quanto fazer algum tipo de alteração.

* O `map` retorna um novo array com o mesmo tamanho do array que foi percorrido
* Pra isso criamos uma constante para receber esse novo array
* Recebe uma função que vai ser executada para cada item do array

```jsx
const frutas = ['banana', 'maçã', 'abacaxi', 'mamão', 'abacate']
const lembretes = frutas.map(fruta => `Eu preciso comer mais ${fruta}` );

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

> *Massa!!! Tenho meus lembretes de comer mais fruta. Mas pera aí.. Mas eu não gosto muito de banana... ☹️ \~\~(só com muito leite condensado)*\~\~

## filter()

* O `filter` recebe uma função que deve retornar um booleano (`true` ou `false`), caso o retorno da função seja `true` o item **entra no novo array**, caso seja `false` o item **não entra no novo array**
* Retorna um novo array, não necessariamente do mesmo tamanho do que foi utilizado

```jsx
const frutas = ['banana', 'maçã', 'abacaxi', 'mamão', 'abacate']
const frutasQueGosto = frutas.filter(fruta => fruta != 'banana')

console.log(frutas)
console.log(frutasQueGosto)
/*
Após executar, temos um array com as frutas que gosto com valores 
vindos do array de frutas:
		
['maçã', 'abacaxi', 'mamão', 'abacate']

array de frutas tem **5** itens 
array de frutas que gosto tem **4**
*/
```

> *Show de bola, já tenho uma lista de frutas que gosto!!! E agora pra iniciar minha jornada de comer mais frutas, eu preciso compra-las né? Quanto será que vai dar tudo??*

## reduce()

* O `reduce` é usado quando precisamos pegar os valores de um array e coloca-los num único valor... Vamos ~reduzir o array
* É retornado um **único valor**

```jsx
// ✨ faz de conta ✨ que esses são os preços das frutas que eu gosto 
// e quero saber quanto vou desembolsar~ pra compra-las
const precos = [3, 9, 4, 3, 4]
const total = precos.reduce((acumulador, preco) => {
    return acumulador + preco
}, 0)

console.log(total)
/* 
23
*/
```

> *23 conto de fruta... É a vida né..*

O `reduce` tem uma sintaxe mais diferenciada dos anteriores, a função que ele recebe tem alguns parâmetros:

* **Acumulador** (que vai acumulando os valores)
* **Valor atual** (o valor do item na iteração)
* O zero no final é o **valor inicial do acumulador**, *ele é opcional*

O retorno de cada iteração é armazenado no acumulador e no final esse acumulador é retornado.

\~🌟\~

Bem.. é isso. 😉

Pra muita gente esse assunto já deve tá passado, não é mais novidade. \
Mas pra outros pode ser que seja a primeira vez que esteja vendo isso, ou pra outros que já viram mas não entendeu direito (também não sei se a explicação foi muito boa.. mas ok).

Tem muito conteúdo por aí que já explica essas três funções de diversas formas, essa vai ser mais uma pra pilha. Mas... foi do meu jeito. 🙃

Espero que eu tenha ajudado alguém, se não.. paciência. 😅

Até a próxima. 🤙🏽

**Saiba mais do foreach:** [](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>

**Saiba mais do map:** [](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map>

**Saiba mais do reduce:** [](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)<https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce>
