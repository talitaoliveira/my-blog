---
title: CSS Grid Layout - parte 1
description: Estudando CSS Grid Layout e postando o progresso
date: 2020-07-26 07:49:39
image: assets/img/thumb-css-grid.png
category: dev
background: "#008BF8"
---
![Desenho de uma mulher usando o computador e um quadro atras com o texto: CSS Grid Layout](assets/img/thumb-css-grid.png "Desenho de uma mulher usando o computador e um quadro atras com o texto: CSS Grid Layout")

## Conteúdo

Motivação

O que é

Terminologia

Referências

## Motivação

Já faz tempo que venho querendo estudar Grid Layout pra entender do jeito que eu entendo Flexbox. Flexbox comigo já está no automático há anos, pra qualquer coisa que faço com CSS eu uso Flexbox.

Cheguei a ver um pouquinho de Grid Layout há uns anos mas não tanto quanto gostaria, ainda não sei pra onde vai, como começar direito, nem o que fazer pra posicionar as coisas.

Mas por que aprender? Tem resposta melhor do que: "**pq eu quero?**" (risos). Apesar de ser verdade, a explicação mais longa pra isso seria: eu adoro CSS e gosto de aprender e entender coisas relacionada a CSS, e gosto de quando já tá automático em mim.

Decidi estudar e postar o progresso no blog, vamos ver se vai dar certo. Se der, faço pra mais outras coisas. O post de Chain of Responsibility foi quase isso, na verdade eu tinha aprendido há pouco tempo, assimilei o conhecimento fazendo alguns testes sozinha e depois postei tudo. Esse aqui pretendo fazer de forma gradual, aprender aos poucos e postando.

## O que é

* CSS Grid Layout, também conhecido como Grid.
* Tem como objetivo criar interfaces baseadas em "grade"
* De forma a posicionar os elementos que compõe o layout de uma página
* Foi criado especificamente para resolver os problemas de layout que aconteciam antes:

  * Incialmente com uso de tabela no HTML; (tabelas são para dados, e não layout)
  * Propriedades como float, de posicionamentos que era uma dor de cabeça pra conseguir alinhar bem e centralizar os elementos;
  * Flexbox, que não é um problema. Flexbox ajuda no layout mas não tanto quanto o grid. Porém um não exclui o outro e funcionam muito bem juntos. Porém Flexbox é **uni-direcional** e o Grid Layout é **bi-direcional.** (Esse aqui é um ponto que eu quero ver exatamente a diferença entre os dois, pra mim ainda não está tão evidente.)

## Terminologia

### Grid Container

Elemento que o `display:grid` vai ser aplicado. Nele é que vão conter os elementos que vão ser posicionados.

![Imagem contendo: Um titulo, um texto e uma imagem. Titulo: "Grid Container". Texto: "Elemento que o display:grid vai ser aplicado. Nele é que vão conter os elementos que vão ser posicionados.". Imagem: um retângulo representando o container](assets/img/grid-layout-1.png "Imagem contendo: Um titulo, um texto e uma imagem. Titulo: \"Grid Container\". Texto: \"Elemento que o display:grid vai ser aplicado. Nele é que vão conter os elementos que vão ser posicionados.\". Imagem: um retângulo representando o container")

### Grid Item

São os elementos que estão dentro do **Grid Container**. Porém os elementos que tiverem dentro de um **Grid Item** são são considerados **Grid Items**.

![Imagem contendo: Um titulo, um texto e uma imagem. Titulo: "Grid Item". Texto: "São os elementos que estão dentro do Grid Container. Porém os elementos que tiverem dentro de um Grid Item são são considerados Grid Items.". Imagem: um retângulo representando o container, dentro dele possui duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro dele formando duas linhas e 3 colunas. No primeiro espaço no canto esquerdo tem um quadrado vermelho dentro dele, representando um elemento dentro de um Grid item, porém esse elemento vermelho não é um Grid Item](assets/img/grid-layout-2.png "Imagem contendo: Um titulo, um texto e uma imagem. Titulo: \"Grid Item\". Texto: \"São os elementos que estão dentro do Grid Container. Porém os elementos que tiverem dentro de um Grid Item são são considerados Grid Items.\". Imagem: um retângulo representando o container, dentro dele possui duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro dele formando duas linhas e 3 colunas. No primeiro espaço no canto esquerdo tem um quadrado vermelho dentro dele, representando um elemento dentro de um Grid item, porém esse elemento vermelho não é um Grid Item")

### Grid Line

São as linhas que vão dividir a estrutura da **Grid**. Elas podem ser **verticais** ou **horizontais**.

![Imagem contendo: Um titulo, um texto e uma imagem. Titulo: "Grid Line". Texto: "São as linhas que vão dividir a estrutura da Grid. Elas podem ser verticais ou horizontais..". Imagem: dois retângulos um ao lado do outro representando containers. Ambos possuem duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro deles formando duas linhas e 3 colunas. O primeiro retângulo ao lado esquerdo tem destaque da ultima linha vertical dentro dele, linha em vermelho. O segundo retângulo ao lado esquerdo tem destaque da linha horizontal dentro dele, linha em vermelho.](assets/img/grid-layout-3.png "Imagem contendo: Um titulo, um texto e uma imagem. Titulo: \"Grid Line\". Texto: \"São as linhas que vão dividir a estrutura da Grid. Elas podem ser verticais ou horizontais..\". Imagem: dois retângulos um ao lado do outro representando containers. Ambos possuem duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro deles formando duas linhas e 3 colunas. O primeiro retângulo ao lado esquerdo tem destaque da ultima linha vertical dentro dele, linha em vermelho. O segundo retângulo ao lado esquerdo tem destaque da linha horizontal dentro dele, linha em vermelho.")

### Grid Cell

É uma única unidade da Grid. É o espaço entre duas linhas adjacentes e duas colunas adjacentes.

![Imagem contendo: Um titulo, um texto e uma imagem. Titulo: "Grid Cell". Texto: "É uma única unidade da Grid. É o espaço entre duas linhas adjacentes e duas colunas adjacentes.". Imagem: um retângulo representando o container, dentro dele possui duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro dele formando duas linhas e 3 colunas. Na primeira linha e segunda coluna (que está entre as linhas 1 e 2 e colunas 2 e 3),  destaque a todo o elemento que representa  Grid Cell](assets/img/grid-layout-4.png "Imagem contendo: Um titulo, um texto e uma imagem. Titulo: \"Grid Cell\". Texto: \"É uma única unidade da Grid. É o espaço entre duas linhas adjacentes e duas colunas adjacentes.\". Imagem: um retângulo representando o container, dentro dele possui duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro dele formando duas linhas e 3 colunas. Na primeira linha e segunda coluna (que está entre as linhas 1 e 2 e colunas 2 e 3),  destaque a todo o elemento que representa  Grid Cell")

### Grid Track

É o espaço entre duas linhas adjacentes. Podemos pensar nelas como colunas ou linhas da grid.

![Imagem contendo: Um titulo, um texto e uma imagem. Titulo: "Grid Track". Texto: "É o espaço entre duas linhas adjacentes. Podemos pensar nelas como colunas ou linhas da grid.". Imagem: dois retângulos um ao lado do outro representando containers. Ambos possuem duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro deles formando duas linhas e 3 colunas. O primeiro retângulo ao lado esquerdo tem destaque da ultima linha dentro dele que possui 3 colunas, linha em vermelho. O segundo retângulo ao lado esquerdo tem destaque da segunda coluna dentro dele, que possui duas linhas](assets/img/grid-layout-5.png "Imagem contendo: Um titulo, um texto e uma imagem. Titulo: \"Grid Track\". Texto: \"É o espaço entre duas linhas adjacentes. Podemos pensar nelas como colunas ou linhas da grid.\". Imagem: dois retângulos um ao lado do outro representando containers. Ambos possuem duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro deles formando duas linhas e 3 colunas. O primeiro retângulo ao lado esquerdo tem destaque da ultima linha dentro dele que possui 3 colunas, linha em vermelho. O segundo retângulo ao lado esquerdo tem destaque da segunda coluna dentro dele, que possui duas linhas")

### Grid Area

O espaço total composto por 4 Grid Lines. Pode ser composta por qualquer quantidade de Grid Cells.

![Imagem contendo: Um titulo, um texto e uma imagem. Titulo: "Grid Area". Texto: "O espaço total composto por 4 Grid Lines. Pode ser composta por qualquer quantidade de Grid Cells.". Imagem: um retângulo representando o container, dentro dele possui duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro dele formando duas linhas e 3 colunas. Destacando 4 elementos da grid composto pelas linhas 1 e 2 e colunas 1 e 2.](assets/img/grid-layout-6.png "Imagem contendo: Um titulo, um texto e uma imagem. Titulo: \"Grid Area\". Texto: \"O espaço total composto por 4 Grid Lines. Pode ser composta por qualquer quantidade de Grid Cells.\". Imagem: um retângulo representando o container, dentro dele possui duas linhas verticais paralelas no meio e uma linha vertical cortando as duas paralelas, formando um retângulo com 6 espaços dentro dele formando duas linhas e 3 colunas. Destacando 4 elementos da grid composto pelas linhas 1 e 2 e colunas 1 e 2.")

\~🌟\~

Bem.. é isso. 😉

Comecei o estudo hoje, e não vi código ainda. Decidi focar nesse comecinho primeiro. Como não estou com pressa pra aprender, tá tranquilo.. Vou absorvendo o conteúdo aos poucos mesmo.

Tem outros estudos que ando focando mais, esse sobre **Grid Layout** achei legal pois junto o estudo e postagem no blog, nisso eu vejo como vai ser pra ver se consigo aplicar pra outros assuntos. 😊

Até a próxima 🤙🏽

## Referência

[](https://css-tricks.com/snippets/css/complete-guide-grid/)<https://css-tricks.com/snippets/css/complete-guide-grid/>