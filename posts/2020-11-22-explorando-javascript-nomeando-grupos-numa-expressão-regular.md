---
title: "Explorando Javascript: Nomeando grupos numa expressão regular"
description: Separando uma expressão regular em grupos nomeados
date: 2020-11-22T19:50:45.000Z
image: /assets/img/screen-shot-2020-11-22-at-19.56.46.png
category: dev
background: "#008BF8"
---
![Imagem de uma pessoa de cabelo curto segurando alguns papéis, no fundo 3 retagulos com algum conteúdo dentro representado por texto não legível. Os triangulos estão conectados com varios quadrados que estão abaixo deles.](assets/img/screen-shot-2020-11-22-at-19.56.46.png "Imagem de uma pessoa de cabelo curto segurando alguns papéis, no fundo 3 retagulos com algum conteúdo dentro representado por texto não legível. Os triangulos estão conectados com varios quadrados que estão abaixo deles.")

Vamos supor que você tenha uma string que vai ser recebida na sua aplicação. Essa string tem um padrão, possui várias informações contidas nela e você precisa salvar essas informações separadamente.

Encontre o padrão que a string está e aplique uma expressão regular. Geralmente quando preciso criar uma expressão regular eu uso esse site aqui: <a href="https://regexr.com/" target="_blank">https://regexr.com/</a> (não sei criar de cabeça e sempre preciso entender como vou fazer na aba de **Cheatsheet**).

Para este caso vamos ter por exemplo uma string que contém as seguintes informações:

* Número de CPF
* Data de nascimento
* Nome

Essas informações vão estar contidas numa string e separadas por traço `-` e vão vir dessa forma:

"**001.002.003-99**-**10-08-1997**-**Fulano Pessoa**"

Nesse exemplo as informações separadas estariam assim:

* Número de CPF: **001.002.003-99**
* Data de nascimento: **10-08-1997**
* Nome: **Fulano Pessoa**

Criei esse regex básico pra poder pegar as informações:

```jsx
/([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})-([0-9]{2}-[0-9]{2}-[0-9]{4})-(.*)/
```

Cada grupo está indicado por parênteses `(` `)`.

* Número de CPF: **(\[0-9]{3}.\[0-9]{3}.\[0-9]{3}-\[0-9]{2})**
* Data de nascimento: **(\[0-9]{2}-\[0-9]{2}-\[0-9]{4})**
* Nome: **(.*)**

Obs: Não estou fazendo um regex totalmente correto de data, estou só contando a quantidade de números da data mesmo.

Para aplicamos o regex no javascript seria dessa forma:

```jsx
const infoCompleta = "001.002.003-99-10-08-1997-Fulano Pessoa"

const expressao = /([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})-([0-9]{2}-[0-9]{2}-[0-9]{4})-(.*)/;

const dados = expressao.exec(infoCompleta)

console.log(dados)
/*
[
  '001.002.003-99-10-08-1997-Fulano Pessoa',
  '001.002.003-99',
  '10-08-1997',
  c
  index: 0,
  input: '001.002.003-99-10-08-1997-Fulano Pessoa',
  groups: undefined
]
*/
```

Após executar a expressão é retornado um array para a variável dados. E as informações separadas conseguimos pegar a partir da posição \[1].

Se fossemos pegar as informações dessa forma:

```jsx
const cpf = dados[1]
// '001.002.003-99'
const dataNascimento = dados[2]
// '10-08-1997'
const nomePessoa = dados [3]
// '10-08-1997'
```

Funciona? Funciona... Mas poderíamos fazer de uma forma melhor.

## Alternativa

Ao criar a expressão, podemos acrescentar o nome do grupo dentro do grupo que está nomeando e antes da expressão, dessa forma:

* Número de CPF: (**?<cpf>**\[0-9]{3}.\[0-9]{3}.\[0-9]{3}-\[0-9]{2})
* Data de nascimento: (**?<dataNascimento>**\[0-9]{2}-\[0-9]{2}-\[0-9]{4})
* Nome: (**?<nomePessoa>**.*)

com uma `?`, um `<`, o `nomeDoGrupo`, um `>` .

Colocando na nossa expressão, ela agora fica dessa forma:

```jsx
const expressao = /(?<cpf>[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})-(?<dataNascimento>[0-9]{2}-[0-9]{2}-[0-9]{4})-(?<nomePessoa>.*)/;
```

E executando o código usando essa expressão conseguimos isso:

```jsx
const infoCompleta = "001.002.003-99-10-08-1997-Fulano Pessoa"

const expressao = /(?<cpf>[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})-(?<dataNascimento>[0-9]{2}-[0-9]{2}-[0-9]{4})-(?<nomePessoa>.*)/;

const dados = expressao.exec(infoCompleta)

console.log(dados)

/*[
  '001.002.003-99-10-08-1997-Fulano Pessoa',
  '001.002.003-99',
  '10-08-1997',
  'Fulano Pessoa',
  index: 0,
  input: '001.002.003-99-10-08-1997-Fulano Pessoa',
  groups: {
    cpf: '001.002.003-99',
    dataNascimento: '10-08-1997',
    nomePessoa: 'Fulano Pessoa'
  }
]*/
```

Ainda retorna um array, porém uma das posições `group` dessa vez tem um objeto preenchido (antes ela estava vindo como `undefined`).

E nesse objeto vem com as propriedades nomeadas que definimos ao nomear os grupos na expressão.

Para pegar estes valores agora podemos simplesmente pegar dessa forma com Object Destructuring (já expliquei sobre Object Destructuring aqui: <a href="https://blog.talitaoliveira.com.br/explorando-javascript-object-destructuring/" target="_blank">Explorando Javascript: Object Destructuring</a>):

```jsx
const { cpf, dataNascimento, nomePessoa } = dados.groups
```

Referência:

<a href="https://github.com/tc39/proposal-regexp-named-groups" target="_blank">https://github.com/tc39/proposal-regexp-named-groups</a>

\~🌟\~

Bem.. é isso. 😉

Não é sempre que precisamos usar expressões regulares, mas um dia aparece. Essa semana foi preciso usar no projeto e lembrei que já tinha visto sobre "Regexp Named Groups", já tinha até apresentado numa palestra no JS Day falando das novidades do ecmascript em 2018, apresentei ela juntamente com Simone Amorim, foi bem massa.

Coloquei o exemplo no meu github: <a href="https://github.com/talitaoliveira/ecmascript-studies/blob/master/src/es9/regexp-named-group.js" target="_blank">https://github.com/talitaoliveira/ecmascript-studies/blob/master/src/es9/regexp-named-group.js</a>.

E comentei no medium sobre como foi a experiência de ter palestrado (foi a terceira palestra que fiz na vida e o nervosismo tomou conta do mesmo jeito): <a href="https://medium.com/@litaoliveira/pareando-palestra-no-jsday-2018-7e18a7426220" target="_blank">https://medium.com/@litaoliveira/pareando-palestra-no-jsday-2018-7e18a7426220</a>

Enfim... é algo simples que trago nesse post.

Nada de importante, nem reflexivo, ou algo do tipo, só explorando javascript e documentando aqui no blog :).

Até a próxima. 🤙🏽