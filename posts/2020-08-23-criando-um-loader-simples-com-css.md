---
title: 'Criando um "loader" simples com CSS '
description: Usando animation e keyframes para criar um loader em CSS
date: 2020-08-23 06:39:29
image: assets/img/screen-shot-2020-08-23-at-18.35.34.png
category: dev
background: "#008BF8"
---
![](assets/img/screen-shot-2020-08-23-at-18.35.34.png)

Pro HTML precisamos só de uma DIV e uma classe pra essa div, que chamei de "loader"

```html
<div class="loader"></div>
```

Essa div por si só não vai mostrar nada, vamos usar o CSS para mostrar o loader estilizando a classe `.loader`:

* Definir uma altura e largura de mesmo tamanho;
* Definir uma borda com:

  * 15px de largura;
  * o estilo dela seja de linha (solid);
  * uma cor cinza;

```css
.loader {
	width: 100px;
	height: 100px;
	border: 15px solid #EEE;
}
```

Com isso, temos esse resultado, um quadrado com borda cinza:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7abafa64-f32b-4779-a8e7-c3985b87b7e6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7abafa64-f32b-4779-a8e7-c3985b87b7e6/Untitled.png)

* Deixar a borda de baixo com uma cor diferente:
* Arredondar o quadrado, para ficar um circulo

```css
.loader {
	width: 100px;
	height: 100px;
	border: 15px solid #EEE;
	border-bottom-color: rebeccapurple;
	border-radius: 50%;
}
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb1f84d5-c6ea-4357-8e12-f9c29eac7488/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb1f84d5-c6ea-4357-8e12-f9c29eac7488/Untitled.png)

E agora pra rotacionar, usamos keyframes:

* Definimos um bloco de keyframes e damos um nome ao nosso keyframe
* Definimos os keyframes de:

  * Inicio (usando `from` ou `0%`);
  * e Fim (`to` ou `100%`);

Obs: usando porcentagem dá pra ter vários keyframes de momentos diferentes, colocando diferentes porcentagens entre 0% e 100%

```css
@keyframes rotate{
  to {
   /* aqui a propriedade de vai fazer rodar */
  }
  from {
    /* aqui a propriedade de vai fazer rodar */
  }
}
```

E dentro de cada um dos keyframes, vamos colocar as propriedades que vai fazer nosso circulo girar.

Usando a propriedade `transform` que vai receber como valor a função `rotate()` e passando por parâmetro o ângulo que vai ser rotacionado.

Para os valores do ângulo:

* 🕐➡️Colocando valores **positivos**, a rotação será no **sentido horário**;
* 🕐⬅️Colocando valores **negativos** a rotação será no **sentido anti-horário**;
* A unidade usada para ângulos é o `deg`

```css
@keyframes rotate{
  to {
   /* aqui a propriedade de vai fazer rodar */
  }
  from {
    /* aqui a propriedade de vai fazer rodar */
  }
}
```

Aqui colocamos que vai começar do angulo 0 (zero) até o angulo 360. Vai dar uma volta completa.

> Massa. Mas o circulo ainda não tá girando....

Agora vamos usar os Keyframes no nosso circulo usando a propriedade `animation` na classe `.loader`. Pata usar animation, vamos entender do que ela é composta:

* `animation-name`**:** O nome do bloco de keyframe que vai ser usado;
* `animation-duration`**:** O tempo de duração para completar um ciclo;
* `animation-timing-function`**:** Como a animação vai se transicionar nos keyframes. Pode ser começando lento e terminando acelerado, todo lento... Tem um monte de valores que podem ser usados. Se for de sua curiosidade recomento testar eles e ver como se comportam, no site do [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function) tem vários exemplos;
* `animation-delay`**:** O delay que vai ter após o elemento ser carregado e a animação começar;
* `animation-iteration-count`**:** O numero de vezes que a animação deve repetir, pode ser infinito;
* `animation-direction`**:** Define se a animação vai alternar sua direção ou se sempre vai voltar para o ponto inicial e começar novamente;
* `animation-fill-mode`**:** define como a animação aplica os estilos antes e depois da execução (esse aqui eu n tenho muita certeza de como acontece);
* `animation-play-state`**:** pode definir se uma animação está rodando ou pausada;

Aplicando para o caso do loader, adicionando as propriedades de `animation` na classe `.loader`:

* `animation-name` com o **nome** do bloco de keyframes que foi criado acima, **rotate;**
* `animation-duration`: com duração de **1.5 segundos**;
* `animation-timing-function`: como **linear**, sem mudar a "velocidade" da animação ela fica meio que constante;
* `animation-iteration-count` : com valor **infitite**, pois quero que ela fique sempre rodando;

```css
.loader {
	width: 100px;
	height: 100px;
	border: 15px solid #EEE;
	border-bottom-color: rebeccapurple;
	border-radius: 50%;
	animation-name: rotate;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
```

E pra o animation, podemos usar uma forma curta (shorthand), que é só com a propriedade animation e que colocamos todos os valores numa unica linha:

```css
.loader {
	width: 100px;
	height: 100px;
	border: 15px solid #EEE;
	border-bottom-color: rebeccapurple;
	border-radius: 50%;
	animation: rotate 1.5s linear infinite;
}
```

> E tá pronto ~~o sorvetinho~~!

E por fim temos o HTML:

```html
<div class="loader"></div>
```

E o CSS completo:

```css
.loader {
	width: 100px;
	height: 100px;
	border: 15px solid #EEE;
	border-bottom-color: rebeccapurple;
	border-radius: 50%;
	animation: rotate 1.5s linear infinite;
}

@keyframes rotate{
  to {
		transform: rotate(0deg);  
	}
  from {
    transform: rotate(360deg); 
  }
}
```

\[colocar aqui a div]

\~🌟\~

Bem.. é isso. 😉

Um loader simplezão~ pra brincar um pouco com CSS caso você não tenha muita prática :)

Até a próxima. 🤙🏽

## Referencias:

[](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations>

[](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@keyframes)<https://developer.mozilla.org/pt-BR/docs/Web/CSS/@keyframes>

[](https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform-function/rotate)<https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform-function/rotate>

[](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)<https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function>