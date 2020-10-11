---
title: "Explorando Javascript: Object Destructuring"
description: Extraindo dados de um objeto usando Object Destructuring
date: 2020-10-11 05:33:36
image: assets/img/screen-shot-2020-10-11-at-17.32.32.png
category: dev
background: "#008BF8"
---
O **Object Destructuring** vai servir para quando precisamos extrair dados de um objeto.

Aqui temos um objeto simples chamado **pessoa** e as propriedades desse objeto:

```jsx
const pessoa = { 
    nome: 'Fulano Pessoa',
    email: 'emaildefulano@email.com',
    telefone: '81999999999',
}
```

## Sem usar o **Object Destructuring**

se por algum motivo fosse necessário pegar os dados da pessoa separadamente faríamos:

```jsx
const nome = pessoa.nome
const telefone = pessoa.telefone

console.log(telefone) // '81999999999'
console.log(nome)     // 'Fulano Pessoa'
```

Com isso conseguiria usar as constantes `nome` e `telefone` no código.

## Usando o **Object Destructuring**

podemos fazer isso de outra forma:

* declarando uma constante com o uso de chaves { }
* dentro das chaves especificamos as propriedades que queremos extrair
* esses valores viram do objeto que se deseja extrair essas propriedades

```jsx
const {nome, telefone} = pessoa

console.log(telefone) // '81999999999'
console.log(nome)     // 'Fulano Pessoa'
```

E as constantes **nome** e **telefone** estariam disponíveis da mesma forma

Podemos pegar de **uma** a **infinitas** propriedades do objeto usando dessa forma.

### Valores "default"

Pode se usar um valor padrão caso por algum motivo a propriedade não exista no objeto.

```jsx
const {nome, telefone, pais = 'Brasil'} = pessoa

console.log(telefone) // '81999999999'
console.log(nome)     // 'Fulano Pessoa'
console.log(pais)     // 'Brasil'
```

### Novos nomes para a constante

Pode também dar um nome novo para a constante que vai referenciar a propriedade.

```jsx
const {nome: nomeCompleto, telefone} = pessoa

console.log(telefone) // '81999999999'
console.log(nomeCompleto)     // 'Fulano Pessoa'
```

A exemplo da propriedade nome do objeto pessoa, na linha que declaramos a const colocamos dessa forma:

[`nome da propriedade`] : [`o nome da nova variável`]

`nome`: `nomeCompleto`

E passamos a user `nomeCompleto` como uma constante que vai conter o valor que tem na propriedade `nome`.

### Propriedades mais internas

Com o **Object Destructuring** também podemos pegar valores que estão em um objeto dentro do objeto.

Trazendo o exemplo de lá de cima pra cá, vamos adicionar um objeto `endereco` a ele.

```jsx
const pessoa = { 
    nome: 'Fulano Pessoa',
    email: 'emaildefulano@email.com',
    telefone: '81999999999',
    endereco: {
        rua: 'rua de fulano pessoa',
        bairro: 'fulaneira',
        complemento: {
            apt: 200,
            pontoReferencia: 'proximo a praça dos fulanos'
        }
    }
}
```

E se quisermos pegar a propriedade `pontoReferencia` que está lá dentro de `complemento` no **destructuring** vamos "**navegar**" até aquela propriedade:

* primeiro pela propriedade `endereço`
* depois pegando a propriedade `complemento`
* e por ultimo especificando a propriedade final que se deseja, `pontoReferencia`

```jsx
const {nome, telefone, endereco: {complemento: { pontoReferencia } }} = pessoa
const {nome, telefone, endereco: {complemento: pontoReferencia}} = pessoa

console.log(telefone)            // '81999999999'
console.log(nome)                // 'Fulano Pessoa'
console.log(pontoReferencia)     // 'proximo a praça dos fulanos'
```

> ⚠️ Obs: lembrar de colocar as chaves quando se trata da propriedade do objeto. No momento que tava fazendo o exemplo esqueci das chaves para `pontoReferencia` e quando dava o `console.log` me trazia o **objeto todo** de `complemento`, ou seja, tava caindo no caso de definir um novo nome para a propriedade `complemento`

⚠️ Exemplo da OBS:

```jsx
// Esse:
const { endereco: { complemento: { pontoReferencia } } } = pessoa
console.log(pontoReferencia)
// 'proximo a praça dos fulanos'

// É diferente desse - aqui tá definino um novo nome pra complemento:
const { endereco: { complemento: pontoReferencia } } = pessoa
console.log(pontoReferencia)
// { apt: 200, pontoReferencia: 'proximo a praça dos fulanos' }
```

\~🌟\~

Bem.. é isso. 😉

Tava pensando aqui nas coisas que posto sobre javascript. Existe muito material na internet, esse meu é só mais um na fila do pão. Mas eu gosto de passar por eles, alguns eu já usei fortemente e outros só ouvi falar ou usei uma vez que não entendi muito bem quando usei, com isso postando aqui me ajuda a entender melhor.

Decidi chamar esses posts de "**Explorando Javascript**". risos. 😅

Até a próxima. 🤙🏽