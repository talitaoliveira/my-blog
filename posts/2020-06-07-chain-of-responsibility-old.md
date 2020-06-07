---
title: Chain of Responsibility
description: Executando validações de forma encadeada
date: "2020-06-07 18:54:17"
image: /assets/img/chain-of-responsibility.png
category: dev
background: "#008BF8"
---

![Cadeia de Responsabilidade](/assets/img/chain-of-responsibility.png)

## Conteúdo

- [Motivação (pode pular se quiser)](#-motivação)
- [Notas (pode pular se quiser)](#-notas)
- [Cadeia de Responsabilidade](#-cadeia-de-responsabilidade)
- [O problema](#-o-problema)
- [A Solução](#-a-solução)
  - [1. Funções de verificações e ações](#-1-funções-de-verificações-e-ações)
  - [2. O objeto a ser verificado](#-2-o-objeto-a-ser-verificado)
  - [3. A estrutura das funções de validação](#-3-a-estrutura-das-funções-de-validação)
  - [4. O Processador de Validações](#-4-o-Processador-de-Validações)
    - [# Parte 1](#-parte-1)
    - [# Parte 2](#-parte-2)
    - [# Parte 3](#-parte-3)
    - [# Parte 4](#-parte-4)
    - [# Parte "caramba... to cansada já. Mas acho que vai valer a pena"]()
      - [Vou tentar desenhar aqui em 5 partes](#-vou-tentar-desenhar-aqui-em-5-partes)
  - [5. A execução](#-5-a-execução)

## Motivação

**Muito longo; Não Li.**

Estudei Padrão de Projetos algumas vezes na vida, nunca apliquei na real. No projeto que estou conseguimos aplicar e eu entendi e achei massa.

**Muito longo; Quero ler.**

Sabe quando estudamos os assuntos, achamos muito massa mas não sabemos exatamente quando aplicar na vida real (durante o desenvolvimento de algum projeto)? E quando você finamente usa acontece uma explosão no cérebro 🤯(caramba agora eu entendi!!!).

A ideia de usar isso não foi minha, partiu das pessoas que estavam desenvolvendo o card no momento. E eu não sei se teria a ideia de usar isso se fosse eu que estivesse fazendo. Quando eu vi, eu achei fantástico pois naquela hora começou a fazer sentido.

E fora que o desenvolvimento não estava completo no momento em que rotacionamos os cards, nisso consegui me aprofundar mais no desenvolvimento dele e os testes. E foi nesse momento que exercitei muito mais TDD pois tinha coisa em testes que ainda não fazia sentido para mim.

O que eu quero pra minha vida de pessoa desenvolvedora é chegar nesse nível de conseguir sugerir soluções viáveis e que façam sentido para o projeto em algum ponto. Ter conhecimento das coisas para poder sugerir "com sabedoria". Muitas coisas eu leio, estudo, mas não sei sugerir por causa da confiança e medo de que não de certo e não saber o que fazer e ficar na culpa de: "meu deus eu sugeri isso e ficou uma bosta".

Eu sei que não devemos ter medo e etc... Mas... `¯\*(ツ)*/¯`

## Notas

- Estou usando **Typescript** e **Jest** para testes
- No código tem `console.log` demais, só para fins de visualizar onde está passando
- O código está em português para facilitar o entendimento ~~(espero)~~
- Os desenhos foram feitos no: [https://excalidraw.com/](https://excalidraw.com/) 💜
- Não me sinto confortável ainda em explicar profundamente sobre **Typescript**, mas tem uns [videos massa do Willian Justen](https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_&index=1) que ele explica muito bem.
- Link para o código: [](https://github.com/talitaoliveira/chain-of-responsibility)

## Cadeia de Responsabilidade

_Chain of Responsibility_, é um _Design Pattern_ que existe para resolver problemas onde é necessário realizar vários processos encadeados, e como estão encadeados o proximo processo só ocorre quando os anteriores estiverem ok.

![Cadeia de Responsabilidade](/assets/img/chain-of-responsibility.png)

## O problema

~~Dessa vez pedi um exemplo pra minha irmã.~~

> Pessoa do curso de direito que deseja ter sua carteirinha da OAB e ser livre para advogar pelo Brasil afora..... 👐🏽

Para uma pessoa conseguir a carteirinha da OAB ela precisa de alguns requisitos:

- Não ter a carteirinha da OAB
- Ter feito as duas fases da prova
- Nota das duas provas acima 7 ~~(sei lá)~~
- Estar a 2 períodos de terminar o curso (o curso tem 10 períodos)

_(não tenho 100% certeza de que o processo oficial é esse, mas é isso ai)_

![Caso de Exemplo da cadeia de Responsabilidade](/assets/img/chain-example.png)

> _Então para cada pessoa que queira a carteirinha preciso verificar esses pontos.. show... bora lá..._

## A solução

### 1. Funções de verificações e ações

Vamos ter uma função para cada verificação dessas:

```jsx
const validaPossuiACarteira = pessoaInscrita => {}
const validaFezProvaDuasFases = pessoaInscrita => {}
const validaNotaSeteAcima = pessoaInscrita => {}
const validaUltimosPeriodos = pessoaInscrita => {}
```

E vamos ter uma ultima função que só deve ser executada se passar por todas as validações, que seria a ação final:

```jsx
const acaoEntregarCarteira = pessoaInscrita => {}
```

> _Massa! To com minhas verificações definidas! Se a pessoa estiver com tudo certinho ela recebe a carteira dela da OAB._

### 2. O objeto a ser verificado

Então para cada pessoa eu teria, por exemplo, essas propriedades para verificar:

```tsx
type PessoaInscrita = {
  nome: string
  carteiraOAB: boolean
  primeiraFase: boolean
  segundaFase: boolean
  notaPrimeiraFase: number
  notaSegundaFase: number
  periodo: number
}

/* Exemplo de objeto implementado (tá como object literal mesmo): */

const pessoaInscrita = {
  nome: "Fulano de Tal",
  carteiraOAB: false,
  primeiraFase: true,
  segundaFase: true,
  notaPrimeiraFase: 7,
  notaSegundaFase: 8,
  periodo: 8,
}
```

> _TOP! Mas... e pra validar? "Poderíamos fazer vários IFs.... né...? Ou um "IFão" com varias verificações de **true** ou **false**"_

Bem... É... Talvez.... Mas a ideia aqui é usar uma abordagem diferente.

E dessa forma, se entrassem mais verificações teríamos que ficar aumentando o if e ia ficar bem feioso (todas nós já fizemos isso, ~~talvez eu ainda até faça... sei la~~)

### 3. A estrutura das funções de validação

Para que as funções de validação passem para a próxima caso seja válida ela precisa ter:

- Uma condição para verificação
- E a chamada da próxima função caso a verificação passe

```tsx
/* mudamos a assinatura da função que está la em cima e
acrescentamos o parametro que vai ser a proxima função */

const validaPossuiACarteira = (pessoaInscrita, proximaValidacao: Function) => {
  if (!pessoaInscrita.carteiraOAB) {
    /* A pessoa não tem a carteira. Então pode ir para proxima validação*/

    return proximaValidacao()
  }
}
```

As funções seguem basicamente essa lógica. Essa é uma lógica beeem simples, pode ter algo mais complexo como busca no banco para validar algo ou qualquer coisa.

### 4. O Processador de Validações

O processador de validações vai ser responsável por processar as validações de forma encadeada, segundo a ordem que as validações foram passadas.

Tentando explicar por partes agora como vamos implementar nosso processador:

#### **Parte 1**

- Uma **classe** que vai conter o que é preciso para processar as validações e ações
- Uma **propriedade**, chamada `pessoaParaValidar` do tipo `PessoaInscrita` (que foi mostrado la em cima)
- Teremos o **construtor** da classe que vai receber o objeto que vai ser processado

```tsx
class ProcessaValidacoes {
  pessoaParaValidar: PessoaInscrita

  constructor(pessoaParaValidar: PessoaInscrita) {
    this.pessoaParaValidar = pessoaParaValidar
  }
}
```

> Então sempre que eu instanciar a classe, por padrão, eu preciso passar o que eu vou querer validar nela... beleza até aqui. 👍🏽

Para instanciar ela ficaria dessa forma:

```tsx
const processaAsValidacoes = new ProcessaValidacoes(pessoaInscrita)
```

#### **Parte 2**

Incrementando a classe, também vamos ter:

- Uma propriedade que vai armazenar as validações
- Uma propriedade que vai armazenar as ações
- E precisamos inicializar essas propriedades no construtor, inicialmente serão um array vazio
- Ambas as propriedades serão um **Array** de **Funções** (por isso o tipo `Array<Function>`)

```tsx
class ProcessaValidacoes {
  pessoaParaValidar: PessoaInscrita
  validacoes: Array<Function>
  acoes: Array<Function>

  constructor(pessoaParaValidar: PessoaInscrita) {
    this.pessoaParaValidar = pessoaParaValidar
    this.validacoes = []
    this.acoes = []
  }
}
```

> Então sempre que eu instanciar a classe agora, ~~como fizemos no fim da parte um~~, as validações e ações estarão como um array vazio. Prontos para serem preenchidos com várias funções cada. Massa!! 🤙🏽

#### Parte 3

Incrementando mais ainda a classe, vamos ter:

- Uma função que recebe as **funções de validação** e atribui elas a nossa propriedade da classe
- Uma função que recebe as **funções de ação** e atribui elas a nossa propriedade da classe
- Cada função retorna `this`, que é a referência do próprio objeto. As chamadas das funções serão encadeadas, então a referencia será passada para a próxima função.

```tsx
class ProcessaValidacoes {
  pessoaParaValidar: PessoaInscrita
  validacoes: Array<Function>
  acoes: Array<Function>

  constructor(pessoaParaValidar: PessoaInscrita) {
    this.pessoaParaValidar = pessoaParaValidar
    this.validacoes = []
    this.acoes = []
  }

  setValidacoes(...validacoes: Array<Function>) {
    this.validacoes = validacoes
    return this
  }

  setAcoes(...acoes: Array<Function>) {
    this.acoes = acoes
    return this
  }
}
```

💡 **\*Nota**: esses três pontinhos no parâmetro, significa que vamos receber vários parâmetros e não se sabe a quantidade exata. Podemos receber tanto **UMA** função como parâmetro quanto **50** funções, e esses três pontinhos transforma todas as funções recebidas por parâmetro num array de funções.\*

> Hm.. Então pra preencher as validações e ações que vamos utilizar no processo vamos ter uma função (para cada) que vai ser responsável por isso. Daí validações e ações não serão mais um array vazio quando chamarmos essas funções passando as validações e ações que elas precisam...
> Tá... beleza então... parece promissor.. 🤔

Então agora quando for preciso instanciar nossa classe de processar ficará desta forma:

```tsx
const processaAsValidacoes = new ProcessaValidacoes(pessoaInscrita)

processaAsValidacoes
  .setValidacoes(
    validaPossuiACarteira,
    validaFezProvaDuasFases,
    validaNotaSeteAcima,
    validaUltimosPeriodos
  )
  .setAcoes(acaoEntregarCarteira)
```

> Com nossa classe instanciada, chamamos as funções da classe e passando os parâmetros que elas precisam.

#### Parte 4

Incrementando um pouco mais nossa classe, teremos a função que vai processar as validações e ações:

```tsx
class ProcessaValidacoes {
  pessoaParaValidar: PessoaInscrita
  validacoes: Array<Function>
  acoes: Array<Function>

  constructor(pessoaParaValidar: PessoaInscrita) {
    this.pessoaParaValidar = pessoaParaValidar
    this.validacoes = []
    this.acoes = []
  }

  setValidacoes(...validacoes: Array<Function>) {
    this.validacoes = validacoes
    return this
  }

  setAcoes(...acoes: Array<Function>) {
    this.acoes = acoes
    return this
  }

  process() {
    /* aqui fica o código que vai processar
			validações e ações de forma encadeada */
  }
}
```

> Hm... entendi.. acho.. Parece promissor.. Mas cadê o código que vai processar? "Teoricamente" ele é a parte principal que vai fazer as coisas encadeada né?

Caaaaalma jovem.. Fica peixe ai... Vamo indo pra lá agora...

#### Parte "caramba... to cansada já. Mas acho que vai valer a pena"

Para o nosso `process`:

- vamos pegar as funções de validação e as funções de ação e coloca-las num único array, na ordem: **validações** e **depois** **ações**
- Vamos usar um map para percorrer esse array e retornar um novo array
- Esse novo array vai conter **funções** responsáveis por **executar determinada validação**
- E passar a **próxima função como parâmetro** para ser executada caso a validação passe
- E no final, vamos executar a **primeira função desse array** e com isso ele será responsável por executar as próximas

```tsx
process() {
    let validacoesEAcoes = [...this.validacoes, ...this.acoes];

    validacoesEAcoes = validacoesEAcoes.map((validacao: Function, index) => {
      return () => {
        validacao(this.pessoaParaValidar, validacoesEAcoes[index + 1]);
      };
    });

    validacoesEAcoes[0]();
  }
```

> Hm.. Errr... ficou meio confuso....

### Vou tentar desenhar aqui em 5 partes:

➡️ **Parte 1 do desenho:**

![Parte 1 do desenho](/assets/img/chain-draw-1.png)

> Estamos "espalhando" os valores dos arrays `this.validacoes` e `this.acoes` para esse novo array. Primeiro passando as validações e depois as ações...

➡️ **Parte 2 do desenho:**

![Parte 2 do desenho](/assets/img/chain-draw-2.png)

> Agora a variável `validacoesEAcoes` está assim: um array único com todas as funções de validação e ação

➡️ **Parte 3 do desenho:**

![Parte 3 do desenho](/assets/img/chain-draw-3.png)

> Usamos o `map` para percorrer o array de funções, e cada posição é substituída por uma função que chama o validador e **passa o próximo validador por parâmetro**...

➡️ **Parte 4 do desenho:**

![Parte 4 do desenho](/assets/img/chain-draw-4.png)

> Agora, `validacoesEAcoes` está mais ou menos assim. Um array de funções, onde cada função executa a validação/ação e passa a próxima validação/ação por parâmetro...

➡️ **Parte 5 do desenho:**

![Parte 5 do desenho](/assets/img/chain-draw-5.png)

> Por fim executamos a **primeira função do array**, no qual chama o primeiro validador e passando o segundo validador como parâmetro.

### 5. A execução

Depois de criarmos toda nossa estrutura, executamos nosso "Processador de Validações".
Ao final de "setar/definir" as funções de validação e funções de ação, chamamos a função que irá processar tudo isso.

```tsx
const processaAsValidacoes = new ProcessaValidacoes(pessoaInscrita)

processaAsValidacoes.setValidacoes(
validaPossuiACarteira,
validaFezProvaDuasFases,
validaNotaSeteAcima,
validaUltimosPeriodos)
.setAcoes(acaoEntregarCarteira)
**.process()**

```

~🌟~

UUUUUFA!!

Creio que tenha ficado bastante cansativo, mas essa foi a forma que encontrei de explicar da minha maneira e tentando deixar simples.

Tentei focar em compartilhar o que aprendi, até mesmo para treinar explicar (de forma escrita) algo um pouco mais complexo.

Espero que tenha gostado da explicação. Caso encontre algum erro, ou tenha alguma sugestão, pode falar comigo. **Feedbacks são extremamente bem vindos!**

Espero que eu tenha ajudado alguém, se não.. paciência. 😅

Até a próxima. 🤙🏽

**Link do código:**
Link para o código: [](https://github.com/talitaoliveira/chain-of-responsibility)

**Referências**:

[https://refactoring.guru/pt-br/design-patterns/chain-of-responsibility](https://refactoring.guru/pt-br/design-patterns/chain-of-responsibility)
