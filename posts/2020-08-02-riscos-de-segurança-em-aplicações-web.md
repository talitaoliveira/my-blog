---
title: Riscos de Segurança em Aplicações Web
description: Cross-Site Scripting (XSS)
date: 2020-08-02 07:44:30
image: assets/img/screen-shot-2020-08-02-at-19.51.53.png
category: dev
background: "#008BF8"
---
![Imagem de um monitor e um celular ao lado direito, ambos mostrando uma tela roxa com um sinal de alerta de triangulo com uma exclamação no meio.](assets/img/screen-shot-2020-08-02-at-19.51.53.png "Imagem de um monitor e um celular ao lado direito, ambos mostrando uma tela roxa com um sinal de alerta de triangulo com uma exclamação no meio.")

## Cross Site Scripting - XSS

* O que é
* 3 Tipos de XSS
* Como previnir
* Referncias

## O que é:

Vulnerabilidade que permite a inserção e execução de códigos Javascript maliciosos no lado do cliente (no navegador de um usuário).

A não validação de dados inseridos pode permitir que scripts maliciosos sejam passados e executados. Com isso pode:

* Modificar o HTML para roubar dados de usuário;
* Roubar sessões de usuário, que no caso a pessoa que estiver atacando pode ir direto para a sessão de um usuário sem precisar de login e senha;

Um exemplo que vi muito foi de sites com campos de texto, tipo fórum. Onde:

* Alguma vítima acessa o link de um site conhecido de forma "alternativa";
* A vítima chegou no site através de um link que recebeu por email ou em algum outro site;
* Esse link contém código malicioso previamente manipulado pela pessoa que está atacando;
* A vítima vai enviar, por exemplo, um comentário no fórum que contém junto um script malicioso escondido;
* Quando aquele comentário for renderizado pela página o código malicioso vai ser interpretado como um script e vai ser executado.

Também é possível que a partir de uma única vítima, afetar diversas outras pessoas. Quando o script malicioso for armazenado (de forma não tratada) e posteriormente exibido para outras pessoas, o código malicioso vai está lá e vai ser executado.

## 3 Tipos de XSS:

* **Reflected XSS**

  * Quando a vítima entra num site que ela já conhece só que através de um link alternativo que possui código malicioso sem que ela perceba, que vai ser executado quando ela abrir a página, por exemplo.
* **Stored XSS**

  * Scripts maliciosos são injetados junto a algum campo onde a vítima vai enviar dados para o servidor, e o servidor salva esses dados. Basicamente é quando a aplicação armazena dados do usuário de forma não tratada e que pode conter scripts maliciosos que no momento em que o dado for mostrado de volta para usuários aquele script será executado.
* **DOM XSS**

  * O código é executado sem precisar passar pelo servidor;
  * O código executado pode modificar o HTML da página, através da alteração do DOM por substituição/alteração de nós;

## Como previnir:

* Validações de dados tanto no lado do frontend quanto no backend - previne o Reflected e Stored XSS;
* Codificação de caracteres quando há modificação da página no lado do cliente - previne o DOM XSS.
* Uso de frameworks e bibliotecas que forneçam proteção a XSS.

A biblioteca React, por exemplo:

> "Por padrão, o React DOM escapa quaisquer valores incorporados no JSX antes de renderizá-los. Assim, assegura que você nunca injete algo que não esteja explicitamente escrito na sua aplicação. Tudo é convertido para string antes de ser renderizado. Isso ajuda a prevenir ataques XSS (cross-site-scripting)."

Fonte: [](https://pt-br.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)<https://pt-br.reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks>

\~🌟\~

Bem.. é isso. 😉

Essa semana rolaram algumas conversas sobre se seria seguro ou não armazenar token JWT no `localstorage`, e me deparei com esse link:

[LocalStorage vs Cookies: All You Need To Know About Storing JWT Tokens Securely in The Front-End](https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id)

Achei interessante, mas tenho muito pouco conhecimento sobre ataques a sites, basicamente sabia apenas que deveria tratar os dados que vem de formulários, que poderiam ser sucetíveis a injeção de SQL, sabia que dava pra executar scripts e etc...

Coisas que vamos ouvindo na vida mas não vamos muito a fundo pra entender.

Os nomes específicos dessas vulnerabilidades e desses ataques eu não sabia (já vi algumas siglas mas nunca sabia exatamente qual era o que).

A princípio escolhi o XSS para entender melhor.

E acho que foi sucesso pra entender, e cansativo 😅.

Queria ter colocado tipo umas 3 num post só, mas só essa vulnerabilidade, da forma que eu entendi, deu um post... Então tá de boa.

Depois trago outras em próximos posts.

Até a próxima. 🤙🏽

## Referências:

[](https://wiki.owasp.org/images/0/06/OWASP_Top_10-2017-pt_pt.pdf)<https://wiki.owasp.org/images/0/06/OWASP_Top_10-2017-pt_pt.pdf>

[](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html)<https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html>

[](https://www.youtube.com/watch?v=_Z9RQSnf8-g&feature=emb_logo)[https://www.youtube.com/watch?v=_Z9RQSnf8-g&feature=emb_logo](https://www.youtube.com/watch?v=_Z9RQSnf8-g&feature=emb_logo)

<https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id>