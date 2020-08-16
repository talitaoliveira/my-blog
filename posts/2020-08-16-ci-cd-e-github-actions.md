---
title: CI/CD e Github Actions
description: Entendendo melhor CI/CD usando Github Actions
date: 2020-08-16T08:13:41.000Z
image: /assets/img/screen-shot-2020-08-16-at-20.11.25.png
category: dev
background: "#008BF8"
---

![](assets/img/screen-shot-2020-08-16-at-20.11.25.png)

## Conteúdo

- [Introdução/Motivação](#introducao-motivacao)
- [O que é CI?](#o-que-e-ci)
- [O que é CD?](#o-que-e-cd)
- [Primeiros Passos](#primeiros-passos)
- [Github Actions](#github-actions)
- [Como eu fiz pra testar](#como-eu-fiz-pra-testar)
- [Referências](#referencias)

<h2 id="introducao-motivacao">Introdução/Motivação</h2>

Práticas como TDD, testes automatizados, integração contínua estão presentes no meu dia-a-dia de trabalho cerca de um ano, antes tudo isso pra mim era ~~tudo mato~~ só teoria, com poooouca coisa de integração continua, basicamente fazia frequentes e pequenos commits.

Então nesse um ano que passou pude ter mais contato com essas práticas, o TDD tem ficado mais natural pra mim, monitorar pipelines, refatorar testes, criar testes de integração, conversar sobre pirâmide de testes, como testar, o que testar, consertar builds quando falham na pipeline...

Porém algumas coisas eu sinto que quero aprofundar mais um pouco, como por exemplo configurar uma pipeline, entender como se de fato tem uma integração contínua, e não somente usar.

Uma colega do meu time me sugeriu o github actions pra começar, e achei massa a sugestão e brinquei um pouco.

<h2 id="o-que-e-ci">O que é CI?</h2>

Continuous Integration - Integração Contínua

Fazer com que mudanças de código façam parte do código principal com mais frequência e assim tem sempre código atualizado. O pré-requisito para isso é que as mudanças não quebrem o build, ou outros testes.

- **Commits** frequentes e Repositório local sempre atualizado:

  - Cada pessoa que trabalha no código mantenha sempre ele atualizado localmente, com alterações que foram feitas por outras pessoas;
  - Resolvendo conflitos rápido;

- Testes automatizados:

  - Testes unitários, testes de integração....
  - Testes não mostram a ausência de bugs;
  - Porém, melhor testes não tão perfeitos que rodam frequentemente do que testes perfeitos que nunca foram escritos;

- Encontrar problemas mais rápido para conserta-los mais rápido;

Com isso sempre que o código for enviado para o repositório de origem, tendo um conjunto de tarefas para integração contínua, as tarefas vão ser executadas, como por exemplo:

- Instalar dependências;
- Rodar testes unitários;
- Rodar testes de integração;
- Realizar o Build;

Se tudo passar, sucesso. Se não o recomendável é voltar para a versão anterior (que teoricamente seria a mais estável), corrigir o problema localmente, realizar os devidos testes e enviar as alterações novamente;

Não é algo inevitável o **build** quebrar, porém se for muito frequente as pessoas precisam tomar mais cuidado ao enviar alterações para o repositório de origem, sempre rodar testes e **builds** localmente antes de envia-los.

<h2 id="o-que-e-cd">O que é CD?</h2>

Continuous Delivery - Entrega contínua

- Realizando a integração continua pode se alcançar a entrega contínua;
- Feedbacks mais rápidos;

  - Ter partes do software funcionando mais rápido para que tenha um feedback mais rápido sobre o que está sendo feito e de como vai ser usado. Ao invés de entregar tudo de uma vez e não ter tanto valor quanto se era esperado;

- Tem como mostrar o software funcionando em um ambiente estável;
- Ter ambiente similar ao de produção;
- Estar apto a realizar **deploys** para produção quando for preciso (diferente de enviar **deploy** o tempo todo - "Continuous Deployment")

<h2 id="primeiros-passos">Primeiros Passos</h2>

- Tenha um build automatizado;
- Crie testes automatizados;
- Comece um projeto com essas práticas;

Esses primeiros passos dá pra serem iniciados com usando o [Github Actions](https://docs.github.com/en/actions/getting-started-with-github-actions/about-github-actions).

<h2 id="github-actions">Github Actions</h2>

Permite que você automatize fluxos de desenvolvimento de software nos repositórios do Github.

- **Workflows** são processos customizados e automatizados que você pode adicionar ao seu repositório do Github;
- É possível criar ou usar tarefas existentes, **Actions**, e coloca-las no **workflow**;
- Essas tarefas podem ser de **build**, **teste**, **package**, **release**, **deploy**..
- Pode configurar para rodar essas tarefas quando algum evento ocorre, por exemplo um **push** no repositório;
- Após rodar essas tarefas é possível ver se foi rodado com sucesso ou se houve falha;

<h2 id="como-eu-fiz-pra-testar">Como eu fiz pra testar:</h2>

### Primeiro teste - projeto em node + typescript:

- Peguei um projeto que eu tenho no github que já estava com testes;
- \[1] - Fui na aba Actions;
- \[2] - Selecionei a sugestão que tinha para meu projeto "Workflows made for your TypeScript repository";
- \[3] - Olhei um pouco o código que foi gerado, e criei o commit.. Deixei pra entender melhor mexendo/brincando um pouco com ele;
- Peguei o commit que foi feito para meu computador, abri a [documentação](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions) e fui lendo o código e procurando na documentação o que era cada parte (o código vem com alguns comentários, mas pra entender melhor só vendo a documentação mesmo);

Usei esse projeto aqui: <https://github.com/talitaoliveira/design-pattern-chain-of-responsibility>

![Passos para comecar a usar o Github Actions](assets/img/steps-to-use-actions.png "Passos para comecar a usar o Github Actions")

### Segundo teste - projeto em react com deploy para o gh-pages:

- Iniciei um projeto simples com create-react-app
- Adicionei alguns componentes bem simples;
- Adicionei um teste simples;
- E queria que ao final de tudo fosse realizado o deploy para o gh-pages

  - Esse step eu utilizei uma action que outra pessoa criou para que fosse possível o deploy para o gh-pages, pois é necessário usar um token do GITHUB, e essa action consegue fazer o deploy. A action é [Deploy to Github Pages](https://github.com/marketplace/actions/deploy-to-github-pages). Achei bem simples de usar.

Usei esse projeto aqui: <https://github.com/talitaoliveira/simple-aplication>

Aqui tá o código de como ficou meu segundo workflow.

```yaml
name: Build and Deploy

on:
  push:
    branches: [master]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm run test:nowatch

      - name: Build project
        run: npm run build

      - name: Deploy to gh-pages
        uses: JamesIves/github-pages-deploy-action@3.5.9
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: build # The folder the action should deploy.
```

![Imagem do código acima, explicado. Linha 1: nome do workflow. Linha 5: Quando houver um "psuh" na branch "master" vai ser executado o job abaixo. Linha 8: Nome do "job". Linha 9: Máquina que vai ser rodado o "job". Linha 12 e 13: Uma action que realiza o checkout no meu repositório. Linha 15 e 16: Step que vai rodar o "npm install" para instalar as dependencias do meu projeto. Linha 18 e 19: Step que vai rodar o meu script de testes. Linha 21 e 22: Step que vai rodar o meu script de build. Linha 24 a 19: Step que vai usar uma action (JamesIves/github-pages-deploy-action@3.5.9) que vai fazer o deploy para o Github Pages.](assets/img/gh-actions-workflow.png 'Imagem do código acima, explicado. Linha 1: nome do workflow. Linha 5: Quando houver um "psuh" na branch "master" vai ser executado o job abaixo. Linha 8: Nome do "job". Linha 9: Máquina que vai ser rodado o "job". Linha 12 e 13: Uma action que realiza o checkout no meu repositório. Linha 15 e 16: Step que vai rodar o "npm install" para instalar as dependencias do meu projeto. Linha 18 e 19: Step que vai rodar o meu script de testes. Linha 21 e 22: Step que vai rodar o meu script de build. Linha 24 a 19: Step que vai usar uma action (JamesIves/github-pages-deploy-action@3.5.9) que vai fazer o deploy para o Github Pages.')

"Brinquei" bastante nele, adicionando mais jobs, colocando os steps em outros jobs, fazendo testes falhar e comitando pra saber se iria continuar com os próximos steps... Meus commits contam bem a história de como foi tentar configurar o workflow....

![Print dos nomes dos commits que fiz para testar as mudanças que estava fazendo no workflow. Comparando a primeira vez que testei o workflow (tentando entender como funcionava), e a segunda vez (ainda tentando entender só que melhor).](assets/img/first-time-vs-second-time.png "Print dos nomes dos commits que fiz para testar as mudanças que estava fazendo no workflow. Comparando a primeira vez que testei o workflow (tentando entender como funcionava), e a segunda vez (ainda tentando entender só que melhor).")

E aqui eu vendo quando eu fazia algum teste falhar pra ver se os steps iriam continuar. O step de teste falhou e não executou os steps de build nem o de deploy pro gh-pages. Então.. sucessso.

Eu gosto de testar mudar as coisas e ver cada umas das coisas que vou mudando como vai acontecer.

![Print do console do github mostrando os steps que foram rodados. O step de teste falhou e não executou os steps de build nem o de deploy pro gh-pages.](assets/img/screen-shot-2020-08-16-at-19.54.28.png "Print do console do github mostrando os steps que foram rodados. O step de teste falhou e não executou os steps de build nem o de deploy pro gh-pages.")

Meus próximos passos são basicamente, evoluir algum desses projetos e continuar usando o Github Actions, e pensar em outros steps que façam sentido. E no trampo começar a mexer mais com isso, entender de fato como tá sendo configurado, e se rolar de fazer alguma outra configuração parear com alguém que saiba para conseguir entender mais a fundo...

<h2 id="referencias">Referências</h2>

[](https://martinfowler.com/articles/continuousIntegration.html)<https://martinfowler.com/articles/continuousIntegration.html>

[](https://martinfowler.com/bliki/ContinuousDelivery.html)<https://martinfowler.com/bliki/ContinuousDelivery.html>

[](https://docs.github.com/en/actions/getting-started-with-github-actions/about-github-actions)<https://docs.github.com/en/actions/getting-started-with-github-actions/about-github-actions>

[](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)<https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions>

\~🌟\~

Bem.. é isso. 😉

Depois de uma semana um tanto desanimada todos os dias, esse final de semana consegui me sentir bem, fazer minhas coisas com calma, mexer nos meus códigos, estudar.. Tudo no meu ritmo..

Como falei lá em cima, uma colega do meu time sugeriu ver o Github Actions, já que entender mais a fundo sobre pipelines é um ponto que tá no meu radar de aprendizados.

Espero que possa ajudar alguém também. 😊

Até a próxima. 🤙🏽
