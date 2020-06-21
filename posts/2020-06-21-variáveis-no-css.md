---
title: Variáveis no CSS
description: Usando propriedades customizadas no CSS
date: 2020-06-21T03:52:10.000Z
image: assets/img/screen-shot-2020-06-21-at-16.25.07.png
category: dev
background: "#008BF8"
---
![Desenho com uma mulher usando laptop e um quadro atras com codigos](assets/img/screen-shot-2020-06-21-at-16.25.07.png "Desenho com uma mulher usando laptop e um quadro atras com codigos")

Também conhecidas como *"custom property"*. Com elas podemos usar variáveis no CSS de forma nativa, sem precisar de pre-processador CSS. E como são nativas elas não existem somente no momento de desenvolvimento, o que permite manipula-las com Javascript.

## O problema

Quando temos valores que se repetem no CSS, e principalmente quando é necessário muda-los.

## A solução

Com variáveis basta apenas mudar o valor em um único lugar. E caso em algum lugar específico o valor seja outro basta atribuir um novo valor para a variável no lugar onde ela vai ser diferente.

## Como usar

* Primeiro declaramos a variável usando esses dois tracinhos em frente do nome que queremos para a variável
* Usamos `:` (dois pontos) para atribuir um valor a ela
* Seguido do valor que quer ser armazenar nela (por exemplo, uma cor)

```css
--cor-principal: #493657;
```

Lembrando que ela é *"case sensitive"* ou seja:

```css
--cor-principal /* é diferente de */ --Cor-Principal
```

* Para usar o valor da variável, na propriedade que queremos aplicar o valor usamos a função `var()` e passamos nossa variável como parâmetro.

```css
background-color: var(--cor-principal)
```

> *Tá... mas e onde vamos declarar nossas variáveis?*

## :root

Uma pseudoclasse do CSS que indica a "raiz" do documento. Dentro dela podemos colocar nossas variáveis e elas podem ser acessadas a partir de qualquer parte do arquivo.

```css
:root {
	--cor-principal: #493657;
}
```

Exemplo:

![- Primeiro declaramos a variável usando esses dois tracinhos em frente do nome que queremos para a variável](assets/img/variaveis_css1.png "- Primeiro declaramos a variável usando esses dois tracinhos em frente do nome que queremos para a variável")

E para cada um desses, também podemos sobrescrever o valor de

`—cor-principal` para que somente naquela classe tenha um valor diferente.

![Mesma imagem da anterior, porém na segunda div o valor da variável é "—cor-principal" sobreescrito por: "#FFD1BA" (cor rosa claro)](assets/img/variaveis_css2.png "Mesma imagem da anterior, porém na segunda div o valor da variável é \"—cor-principal\" sobreescrito por: \"#FFD1BA\" (cor rosa claro)")

Link do código no codepen: [](https://codepen.io/talitaoliveira/pen/EvVOrv)<https://codepen.io/talitaoliveira/pen/EvVOrv>

## Fallback

Ao usar a variável com a função `var()` podemos passar como segundo parâmetro algum outro valor caso não consiga encontrar a variável

```css
background-color: var(--cor-principal, red)
```

## Posso usar?

De acordo com o [Can I Use](https://caniuse.com/#feat=css-variables), o suporte para browsers mais antigos não rola. Mas a porcentagem tá até boa. Caso sua aplicação precise funcionar em browsers antigos, é recomendado usar a propriedade com o valor sem ser com a variável.

![print do can I use: https://caniuse.com/#feat=css-variables](assets/img/can_i_use.png "print do can I use: https://caniuse.com/#feat=css-variables")

Link: [](https://caniuse.com/#feat=css-variables)<https://caniuse.com/#feat=css-variables>

\~🌟\~

Bem.. é isso. 😉

Quando conheci variáveis no CSS foi em 2017 e já nem era tão novo.

Mas tudo é novidade para que está começando. :)

Até a próxima. 🤙🏽