---
title: "CSS: pseudo-elementos ::before e ::after"
description: Criando elementos no CSS
date: 2020-07-05 03:40:28
image: assets/img/before-after.png
category: dev
background: "#008BF8"
---
![Três criaturas em formato de bolinha com um olho e duas pernas, uma ao lado da outra distanciadas igualmente. E uma árvore em tom de cinza entre a criatura do meio e da esquerda, e outra árvore em tom de cinza entre a criatura do meio e a da direita.](assets/img/before-after.png "Três criaturas em formato de bolinha com um olho e duas pernas, uma ao lado da outra distanciadas igualmente. E uma árvore em tom de cinza entre a criatura do meio e da esquerda, e outra árvore em tom de cinza entre a criatura do meio e a da direita.")

Esses pseudo-elementos servem para "criar elementos" sem necessidade de cria-los no HTML.

O HTML:

```html
<span class="meu-elemento">Olá mundo!</span>
```

O CSS:

```css
.meu-elemento {
  background-color: #7CB518;
}
```

O resultado

![Imagem com o texto "Ola mundo!"](assets/img/exemplo1-css.png "Imagem com o texto \"Ola mundo!\"")

Se quisermos adicionar algo antes desse elemento, no CSS:

* Mantemos o estilo principal da classe "meu-elemento"
* Criamos uma outra estilização para "meu-elemento" adicionando ao lado direito do nome `::before`
* Usamos a propriedade content para adicionar um conteúdo para aquele elemento
* E adicionamos algum estilo, por exemplo o `background-color`

```css
.meu-elemento {
  background-color: #7CB518;
}

.meu-elemento::before {
  content: ">>> ";
  background-color: #FB6107;
}
```

O resultado

![Imagem com o texto ">>> Ola mundo!"](assets/img/exemplo2-css.png "Imagem com o texto \">>> Ola mundo!\"")

E quando inspecionamos o HTML, é mostrado dessa forma:

![](assets/img/exemplo3-css.png)

E agora se formos acrescentar algo depois do elemento utilizamos o `::after`

```css
.meu-elemento {
  background-color: #7CB518;
}

.meu-elemento::before {
  content: ">>> ";
  background-color: #FB6107;
}

.meu-elemento::after {
  content: "<<<";
  background-color: #F3DE2C;
}
```

E o resultado

![Imagem com o texto ">>> Ola mundo!<<<"](assets/img/exemplo4-css.png "Imagem com o texto \">>> Ola mundo!<<<\"")

E inspecionando o HTML

![](assets/img/exemplo5-css.png)

> *Massa Talita, mas pra que tu usa isso?*

Eu gosto bastante de desenhar com CSS, quando tenho alguma inspiração sobre o que desenhar. E para não ficar criando diversos elementos no HTML, eu uso bastante o `::before` e o `::after`, porém deixando-os de forma mais livre usando posicionamento absoluto.

Nessa imagem, "vemos" pelo menos uns 3 elementos.

![Retângulo grande com cor de fundo escura com largura de 300px e altura 400px com dois retângulo menores dentro dele posicionados no meio e espaçados entre eles. Ambos os retângulo com largura de 200px e altura de 100px. Retângulo de cima com um tom de vermelho e retângulo de baixo com tom verde claro. ](assets/img/exemplo6-css.png "Retângulo grande com cor de fundo escura com largura de 300px e altura 400px com dois retângulo menores dentro dele posicionados no meio e espaçados entre eles. Ambos os retângulo com largura de 200px e altura de 100px. Retângulo de cima com um tom de vermelho e retângulo de baixo com tom verde claro. ")

Porém tem apenas um:

```html
<div class="retangulo"></div>
```

Que foram adicionados o `::before` e `::after`

```css
.retangulo{
  width: 300px;
  height: 400px;
  background-color: #333745;
  position: relative;
  border-radius: 5px;
  margin:auto;
}

.retangulo::before{
  content: 'before';
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: #E63462;
  top: 70px;
  left: 50px;
  border-radius: 5px;
}
.retangulo::after{
  content: 'after';
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: #C7EFCF;
  bottom: 70px;
  left: 50px;
  border-radius: 5px;
}
```

O que fiz:

1. Na classe somente ".retangulo" acrescentei a propriedade `position` com valor `relative` para que o que tiver dentro dela eu consiga manipular melhor.
2. Nos pseudo-elementos `::before` e `::after`:

* coloquei um `content` (normalmente eu coloco vazio, pois não quero conteúdo, só quero um elemento extra, coloquei apenas para ficar visível)
* Coloquei um `position: absolute`, com isso eu consigo manipular usando as propriedades `top`, `botom`, `left`, `right` (com o `position: absolute` meus elementos perdem seus posicionamentos e ficam "flutuando" tendo como referencia o elemento que está acima dele "hierarquicamente falando")
* defini tamanhos, cores, "arrendondamento" de borda...

🔗 **Aqui tá o link para o código no codepen:** [](https://codepen.io/talitaoliveira/pen/QWyQQZb?editors=1100)**<https://codepen.io/talitaoliveira/pen/QWyQQZb?editors=1100>**

Essas explicações de `position` tão bem rasas aqui, e até pessoalmente as vezes me enrolo pra explicar, mas depois que vc entende é muito massa..

Quem sabe algum dia eu me arrisco tentando escrever. Quando eu dava aula eu gostava de ficar desenhando no quadro +- o comportamento do `position` ai ficava vendo a cara de confusos do pessoal tentando me entender... risos.

Obrigada pela paciência pra quem já teve aula comigo ❤️

É assim que gosto de fazer meus desenhos com CSS.

Já desenhei algumas coisas com CSS, e eu já listei alguns dos desenhos que fiz aqui:

[Desenhando Nintendo Swicth](https://blog.talitaoliveira.com.br/desenhando-nintendo-swicth/)

Profissionalmente trabalhei menos com front-end do que com back-end, adoro front-end e desde a faculdade gosto bastante de "brincar" com as coisas de front, gostava muito de tentar replicar páginas que via, ou estudar propriedades e o que dá pra fazer no front (ainda gosto).

Profissionalmente até já fiz umas paradas que me deram mó orgulho. 😋

\~🌟\~

É isso. 😉

Hoje eu nem tinha planejado nada pra postar, tava com uma preguicinha~ tomando uma cerveja 🍺 e desenhando no CSS aí decidi que o `::before` e `::after` seriam o tema de hoje. 😊

Até a próxima. 🤙🏽