---
title: Web Share API
description: Compartilhando links usando o compartilhamento nativo
date: 2020-07-19 05:10:55
image: /assets/img/social-share.png
category: dev
background: "#008BF8"
---
![Imagem de um celular grande no meio, e uma menina sentada do lado direito dele. No celular icones do twitter, facebook e instagram na parte de baixo com um fundo roxo. Menina com camiseta rosa e cabelo preto.](assets/img/social-share.png "Imagem mostrando duas telas. Primeira tela ao lado esquerdo mostrando o twitter de fundo um pouco desfocado e uma parte saindo de baixo pra cima com as opções de compartilhamento do tweet. Imagem da direita é a parte de compartilhamento expandida na tela inteira, cobrindo a parte que mostrava o twitter")

Conteúdo:

* [Contexto/Problema](#contexto-problema)
* [A solução](#a-solucao)
* [Posso Usar?](#posso-usar)
* [Minha reflexão](#minha-reflexao)
* [Referências](#referencias)

<h2 id="contexto-problema">Contexto/Problema</h2>

Sabe quando entramos em algum app de tem funções de compartilhar informações - via Whatsapp, Telegram, Email, Direct do instagram, e diversos outros apps que podem receber essa informação de alguma forma - e aparece aquela telinha para voce escolher para qual outro app você quer compartilhar?

Tipo dessa forma aqui que tem no app do Twitter, por exemplo.

![Imagem mostrando duas telas. Primeira tela ao lado esquerdo mostrando o twitter de fundo um pouco desfocado e uma parte saindo de baixo pra cima com as opções de compartilhamento do tweet. Imagem da direita é a parte de compartilhamento expandida na tela inteira, cobrindo a parte que mostrava o twitter](assets/img/twitter-share.png "Imagem mostrando duas telas. Primeira tela ao lado esquerdo mostrando o twitter de fundo um pouco desfocado e uma parte saindo de baixo pra cima com as opções de compartilhamento do tweet. Imagem da direita é a parte de compartilhamento expandida na tela inteira, cobrindo a parte que mostrava o twitter")

Normalmente para websites, vemos mais os botões de compartilhar em alguma área específica da tela que já nos redirecionam para onde você quer compartilhar, de forma meio limitada.

Tipo esses:

![Uma imagem com dois prints de visualização desktop. Um do linkedin enfatizando a forma de compartilhamento. O outro print é o do medium, enfatizando também a forma de compartilhamento. Ambos com botões de compartilhar para twitter, facebook, linkedin (no caso do medium)](assets/img/share-examples.png "Uma imagem com dois prints de visualização desktop. Um do linkedin enfatizando a forma de compartilhamento. O outro print é o do medium, enfatizando também a forma de compartilhamento. Ambos com botões de compartilhar para twitter, facebook, linkedin (no caso do medium)")

Ou assim:

O que é tranquilo, mas quando vamos para a versão web no celular as opções de compartilhamento se mantem lá em algum canto da tela, com as opções que o próprio site dá. E só se vc for no app é que consegue ter aquele experiência que mostrei lá em cima como exemplo.

![Print da tela do medium aberta no navegador, texto desfocado enfatizando os botões de compartilhamento: twitter, linkedin, facebook...](assets/img/medium-example.png "Print da tela do medium aberta no navegador, texto desfocado enfatizando os botões de compartilhamento: twitter, linkedin, facebook...")

> Poxa... Seria massa se no meu website ou minha aplicação web pudesse entregar pra pessoa a mesma experiência de um app na parte de compartilhar né?

<h2 id="a-solucao">A solução</h2>

Usando a **Web Share API** podemos colocar no nosso website ou aplicação web a funcionalidade de compartilhar o conteúdo usando o compartilhamento nativo do dispositivo (que vai dar as opções para onde se deseja compartilhar).

Para isso usamos o objeto `navigator` que nele podem ser acessadas informações sobre o browser. Usando o método `share()` do objeto `navigator` podemos passar as informações para que o conteúdo seja compartilhado.

```jsx
navigator.share({
    title: 'Blog - Talita Oliveira',
    text: 'Veja mais posts no blog.',
    url: 'http://blog.talitaoliveira.com.br/',
})
```

Para o `share()` passamos um objeto que precisa ter pelo menos uma dessas propriedades:

* **title**: Um simples título (se for compartilhado via email, esse **title** aparece no assunto do email)
* **text**: Esse texto vai junto com a url no momento de compartilhar
* **url**: A URL que deseja compartilhar

O retorno do método `share()` é uma promisse.

\=== ⭐️ ===

"**Algum dia vou explicar sobre promisse no blog"**

Essa frase acima é uma `promisse`(uma promessa~) então nesse caso, vocês vão ficar **aguardando** essa promessa finalizar pra **então** ler o artigo. 😅😅😅 ~~(que merda, Talita)~~

\=== ⭐️ ===

Nesse meu caso o `navigator.share()` vai ser chamado quando houver o clique em algum botão (que é o que geralmente acontece)de compartilhar e vai ser responsável por chamar o compartilhamento nativo do dispositivo.

Tenho:

* Um botão, que pego do HTML
* Que ao ser clicado, vai ser verificado se podemos usar o `navigator.share`
* Caso sim, usamos a função `navigator.share()`
* Após terminar o compartilhamento, mostro no console a mensagem "Compartilhado com Sucesso" no `then`
* Caso dê algum erro no momento de compartilhar, entra no `catch`

```jsx
const btnShare = document.getElementById("btn-compartilhar")

btnShare.addEventListener("click", () => {
    if(navigator.share) {
        navigator.share({
            title: 'Blog - Talita Oliveira',
            text: 'Veja mais posts no blog.',
            url: 'http://blog.talitaoliveira.com.br/',
        })
        .then(() => console.log('Compartilhado com Sucesso'))
        .catch((error) => console.log('Erro ao compartilhar', error));
    }else{
        alert("Navigator.share não disponível, tenta num celular :)")
    }
})
```

**Obs: Esse código não é o mais bonito do mundo, foi mais para exemplificar.**

E aqui foi um exemplo que fiz direto no meu blog, você pode conferir aqui na [página about](https://blog.talitaoliveira.com.br/about/).

![Imagem mostrando duas telas. Primeira tela ao lado esquerdo mostrando a pagina sobre do meu blog de fundo um pouco desfocado e uma parte saindo de baixo pra cima com as opções de compartilhamento do blog. Imagem da direita é a parte de compartilhamento expandida na tela inteira, cobrindo a parte que mostrava o blog](assets/img/blog-example.png "Imagem mostrando duas telas. Primeira tela ao lado esquerdo mostrando a pagina sobre do meu blog de fundo um pouco desfocado e uma parte saindo de baixo pra cima com as opções de compartilhamento do blog. Imagem da direita é a parte de compartilhamento expandida na tela inteira, cobrindo a parte que mostrava o blog")

> A minha ideia é colocar ele nos posts... Vai rolar, primeiro tinha que testar a funcionalidade e deixar os componentes prontos para poder usar e adaptar para pagina de posts. Vai rolar...

<h2 id="posso-usar">Posso usar?</h2>

Infelizmente, não são em todos os navegadores que isso funciona. Aqui em casa testei no celular da minha irmã que é um Xiomi, e testei no "Mi Browser" e infelizmente não pega.

Fiz um código avulso pra poder testar a funcionalidade: [](https://talitaoliveira.com.br/lab/web-share-api/)<https://talitaoliveira.com.br/lab/web-share-api/>

![Tela de navegador no celular, mostrando de fundo um texto centralizado e um botão. No texto está escrito a palavra Compartilhe e no botão apenas um icone de compartilhamento (uma bolinha que dela saem para o lado direito duas linhas curtas e bolinhas em cada ponta, totalizando 3 bolinhas e 2 linhas)](assets/img/xiomi-example.png "Tela de navegador no celular, mostrando de fundo um texto centralizado e um botão. No texto está escrito a palavra Compartilhe e no botão apenas um icone de compartilhamento (uma bolinha que dela saem para o lado direito duas linhas curtas e bolinhas em cada ponta, totalizando 3 bolinhas e 2 linhas)")

Olhando no site [](https://caniuse.com/)<https://caniuse.com/> procurei por essa funcionalidade e ela ainda não tem muita compatibilidade.

E tem um aviso que essa **feature** ainda está em fase **experimental**. O que precisa ter cautela ao usar em ambiente de produção.

![Print do site do Can I Use mostrando a compatibilidade do Nagivator API: share](assets/img/can-i-use.png "Print do site do Can I Use mostrando a compatibilidade do Nagivator API: share")

<h2 id="minha-reflexao">Minha Reflexão</h2>

A motivação de procurar por essa funcionalidade foi a partir de uma sugestão no projeto que estou. Eu gosto muito de assuntos relacionados a PWA, eu já estudei sobre web apps por um bom tempo mas com o tempo bateu desanimo pois eu não conseguia aplicar em nada da vida real e parei de estudar. Espero voltar a estudar com mais animo agora.

Eu era o tipo de pessoa que **pregava a palavra do PWA** pois acho uma coisa sensacional (mas não tinha muuuuita experiencia). Adorava discutir sobre PWA, e ver o que dava pra fazer. Mas as coisas que eu fazia profissionalmente, nunca tinham muito a ver com o assunto e eu ficava até sem animo pra estudar por mim mesma, não que uma coisa exclua a outra mas foi assim comigo. Mas eu sempre saia tentando ir atras de empresas ou projetos que me deixasse um pouco próxima dessas coisas.

Eu era do **PHP** e mudei pro **Javascript** justamente nessa época. Deixei de ir pra uma empresa trabalhar com PHP e ganhar mais do que eu ganhava e fui pra outra ganhar um pouco menos mas iria ter a experiencia que eu queria com **JS.**

\~🌟\~

É isso aí galera!

Espero que tenha sido útil pra alguém.

Pra mim foi uma coisa totalmente nova e foi um estudo massa.

Até a próxima. 🤙🏽

## Referências:

Documentação no W3C: [](https://w3c.github.io/web-share/)<https://w3c.github.io/web-share/>

[](https://web.dev/web-share/)<https://web.dev/web-share/>

[](https://labs.thisdot.co/blog/share-in-a-pwa-like-a-native-app-using-the-web-share-api)<https://labs.thisdot.co/blog/share-in-a-pwa-like-a-native-app-using-the-web-share-api>

[](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share)<https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share>

Can I Use: [](https://caniuse.com/#search=navigator%20API%20share)<https://caniuse.com/#search=navigator> API share