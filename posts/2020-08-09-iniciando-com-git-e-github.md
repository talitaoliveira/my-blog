---
title: Iniciando com Git e Github
description: Explicando o que é Git e Github para quem está começando
date: 2020-08-09T05:41:06.000Z
image: /assets/img/screen-shot-2020-08-09-at-17.39.34.png
category: dev
background: "#008BF8"
---
![](assets/img/screen-shot-2020-08-09-at-17.39.34.png)

## Conteúdo

* [O que é Git?](#o-que-e-git)
* [O que é Github?](#o-que-e-github)
* [Por que usar o Github?](#por-que-usar-github)
* [Diferença](#diferenca)
* [Alguns termos comuns](#alguns-termos-comuns)
* [Como Usar?](#como-usar)
    * [Alguns comandos mais comuns?](#alguns-comandos-mais-comuns)
* [Reflexão sobre o que vem pela frente](#reflexao-sobre-o-que-vem-pela-frente)
* [Referência](#referencia)
* [⭐ Extra: Ilustrando minimamente o fluxo de versionamento ](#ilustracao-fluxo)

<h2 id="o-que-e-git">O que é Git?</h2>

É uma ferramenta usada para versionamento de projetos.

**O que seria versionar projetos?**

* Projetos evoluem, funcionalidades são adicionadas, melhoradas, consertadas;
* Uma ferramenta de versionamento irá garantir o históricos das alterações;
* Porém, ele não faz isso sozinho;
* As pessoas que estão no desenvolvimento do projeto que são responsáveis por registar as mudanças usando o Git;
* Com isso, é possível ter um histórico de alterações, reverter alterações para um ponto específico "no passado"....

![](assets/img/screen-shot-2020-08-09-at-16.08.27.png)

<h2 id="o-que-e-github">O que é Github?</h2>

[Github](https://github.com/) é uma plataforma para hospedagem dos projetos. Muitas vezes temos a necessidade de mostrar nosso código a outras pessoas (ou não, as vezes fazemos só para estudo e que ficam só em nossa máquina), para que o código seja acessível para outras pessoas, normalmente hospedamos ele em algum lugar. Existem plataformas específicas para este propósito, o Github é uma delas.

Existem outras plataformas com o mesmo propósito do Github como por exemplo o GitLab e Bitbucket.

<h2 id="por-que-usar-github">Por que usar o Github?</h2>

* Tem uma interface aparentemente amigável;
* É bastante popular;
  * Tem uma funcionalidade nova de adicionar mais informações suas no seu perfil;
* Poder seguir pessoas e ver os projetos delas e os quais elas contribuem;
* Vários projetos de **código aberto (Open Source)** estão lá;
* Tem possibilidade de ter **projetos (repositórios)** tanto publico quanto privados;
* Pessoas podem realizar contribuições aos seus projetos;

Estando o projeto em algum lugar como o Github, é possível criar uma cópia dele em qualquer* computador e continuar o desenvolvimento, basta manter o código sempre atualizado. Estando público, nem todas as pessoas podem realizar alterações diretas, mas é possível enviar sugestões de alterações e a pessoa dona do projeto pode aprovar aquela alteração e deixar com que faça parte do código original.

<h2 id="diferenca">Diferença</h2>

Após essas duas breves introduções, vemos a diferença do Git para o Github:

* **Git é a ferramenta para o versionar projetos**
* Git mantém histórico
* Pessoas usam Git para o registro de alterações do projeto
* **Github é o lugar que os projetos ficam**
* Há outras alternativas para o Github
* Github é popular

<h2 id="alguns-termos-comuns">Alguns termos comuns</h2>

Por ser algo usado por pessoas desenvolvedoras de todo o mundo, a nomenclatura que segue da estrutura é em inglês. Esses são só alguns que escolhi considerando a partir de coisas que falamos num dia a dia de um projeto.

* **Repository**: É onde está o código fonte do projeto;
* **[README.md](http://README.md)**: É um arquivo que comumente é utilizado para colocar documentação sobre o projeto, como rodar, como usar, como rodar testes, e qualquer outra informação que possa ser necessária para o entendimento tanto do código quanto to projeto
* **Commit**: São os registros das alterações que foram realizadas num projeto.
* **Branch**: Literalmente traduzindo, são galhos. Um projeto com git possui uma branch principal (main), onde ficam todos os registros de alterações, sempre que fazemos um commit e push, é para esta branch que eles vão. Porém, podemos criar **branchs**, ao criar uma **branch** criamos uma "ramificação" para poder realizar **commits** de forma que não afete a **branch** principal, e somente quando estamos "satisfeitos" com a alteração, podemos juntar esta **branch** com a **branch** principal.

<h2 id="como-usar">Como Usar?</h2>

* **Download**

Para instalar o git é necessário instala-lo na sua máquina.

Esse link do próprio site do git explica como instalar em máquinas com Linux, MacOs e Windows. Porém está em inglês.

[](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)<https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>

* **Terminal**

Comumente se usa o "terminal" para utilizar o git, onde você passa os comandos e o computador vai executa-lo. Normalmente os computadores vem com ele, talvez não sejam muito conhecidos para quem não seja da área.

<h2 id="alguns-comandos-mais-comuns">Alguns comandos mais comuns?</h2>

`git clone` : O git clone normalmente é seguido de uma URL que vai ser a do projeto que será clonado. O projeto vai estar por exemplo no github e você irá pegar uma cópia dele e rodar no seu computador.

**Documentação**: [](https://git-scm.com/docs/git-clone)<https://git-scm.com/docs/git-clone>

`git log`: Mostra todo histórico de alterações que aconteceram no projeto, com **autor**, **data e hora**, **código que identifica unicamente o commit** e **mensagem que foi colocada para aquele commit**.

**Documentação:** [](https://git-scm.com/docs/git-log)<https://git-scm.com/docs/git-log>

`git status` : Vai mostrar o status atual do código no seu computador, caso tenha sido feita alguma alteração em algum arquivo é aqui que você pode saber.

**Documentação**: [](https://git-scm.com/docs/git-status)<https://git-scm.com/docs/git-status>

`git add`: Adiciona arquivos alterados e que vão ser versionados naquele momento, os arquivos ficam numa área chamada "Stage".

**Documentação**: [](https://git-scm.com/docs/git-add)<https://git-scm.com/docs/git-add>

`git commit -m "mensagem que vai descrever quais foram as alterações realizadas no projeto"` : Pega todos os arquivos que foram adicionados,

e registra as alterações que houveram. O Git cria um identificador único para cada commit e normalmente contém uma mensagem escrita pela pessoa que realizou a alteração explicando as mudanças que ocorreram.

**Documentação**: [](https://git-scm.com/docs/git-commit)<https://git-scm.com/docs/git-commit>

`git push` : Irá atualizar o repositório original com as alterações que foram realizadas e registradas nos **commits**. Ao invés de as mudanças estarem apenas no seu computador, elas vão para o repositório.

**Documentação**: [](https://git-scm.com/docs/git-push)<https://git-scm.com/docs/git-push>

`git pull`: Atualiza o código que está em sua máquina com mudanças que ocorreram no repositório original, caso mais de uma pessoa esteja mexendo no código é preciso usar esse comando para que seu código esteja sempre atualizado com as mudanças que foram feitas por outras pessoas.

**Documentação**: [](https://git-scm.com/docs/git-pull)<https://git-scm.com/docs/git-pull>

Criei esse processo ilustrado nessa parte [Extra: Ilustrando minimamente o fluxo de versionamento](#ilustracao-fluxo)

E vários outros.

<h2 id="reflexao-sobre-o-que-vem-pela-frente">Reflexão sobre o que vem pela frente</h2>

* Git é usado por muitas empresas que trabalho com desenvolvimento de software;
* Lidar com Git num time em que várias pessoas mexem no código é bem diferente que do que em um projeto onde só tem você mexendo no código;
* Só com a prática que se consegue entender melhor sobre o git, dependendo das necessidades e problemas do dia a dia de uma pessoa desenvolvedora;
* Problemas acontecem o tempo inteiro e só com o tempo vamos conseguindo entender melhor o que fazer para resolver;
* Trabalhando em times, o Git não é para procurar culpados. Em um time saudável, quando problemas acontecem as pessoas não devem procurar quem fez a besteira para culpa-la. Devem tentar encontrar o problema e entrar em acordo para uma possível solução. E após isso pode ser conversado como o problema poderia ter sido evitado, se houve alguma falha em algum processo;
* Quando se está num time, começando um projeto novo é sempre bom definir acordos de como vai ser a estratégia dos **commits**. Se as alterações vão sempre para a **branch** principal, se vai ser necessário criar **branch** para cada **feature** nova, padrões de mensagem de **commit**.. E muuuuitas outras coisas que podem ser discutidas.

<h2 id="referencia">Referência</h2>

[](https://git-scm.com/docs)<https://git-scm.com/docs>

\~🌟\~

Bem.. é isso. 😉

Essa semana fiz um mini **roadmap** pra uma pessoa para iniciar os estudos com frontend, me empolguei um pouco e fiz um [repositório com essa "jornada"](https://github.com/talitaoliveira/inicio-jornada-frontend) de forma bem simples.

E com isso hoje deu vontade de postar sobre Git/Github. É bom que além de exercitar um pouco como eu explico o que são ambos de forma escrita, talvez dê pra ajudar alguém.

Em outubro começa o [Hacktoberfest](https://hacktoberfest.digitalocean.com/), e pra quem esteja iniciando e queira participar é bom que já aprende um pouco antes sobre Git e Github para poder contribuir com projetos Open Source. 😊

Espero que possa ajudar alguém.

Até a próxima. 🤙🏽

<h2 id="ilustracao-fluxo">⭐ Extra: Ilustrando minimamente o fluxo de versionamento</h2>

Fiz um fluxo que passa entre fases de:

* clonar o projeto
* ver o histórico
* ver alterações novas
* adicionar alterações para stage
* commitando alterações
* enviando alterações para a origem

![](assets/img/clone-changes-commit.png)