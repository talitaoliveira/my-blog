---
title: Exibindo um Loader para uma requisição no React
description: Usando um loader criado com CSS para aguardar uma requisição
  finalizar e mostrar os dados retornados
date: 2020-09-06 09:17:26
image: assets/img/screen-shot-2020-09-06-at-21.26.08.png
category: dev
background: "#008BF8"
---
![](assets/img/screen-shot-2020-09-06-at-21.26.08.png)

## Conteúdo

* Motivação
* Componente principal
* Componente do Loader
* Adicionando o Loader no componente principal
* Função da chamada da API
* Dados retornados
* Código completo
* Ao vivo

## Motivação

No ultimo post que eu fiz mostrei como fazer um loader com CSS.

> Massa..... show de bola esse loader.... Mas eu fico só olhando pra ele? tem como eu usar ele "na vida real"?

**Yaaaaaas!**

Então, para demonstrar isso, criei um projeto básico. Usei o `create-react-app` para iniciar o projeto. Aqui: [](https://create-react-app.dev/docs/getting-started/)<https://create-react-app.dev/docs/getting-started/>

O que eu quero para este projeto **simples**:

* Ter um **input** onde a pessoa pode inserir o nome do seu usuário do github;
* Ter um **botão** que vai fazer uma chamada à API do github;
* Mostrar o **Loader** enquanto é feita a requisição;
* Mostrar os **dados** da pessoas que vieram da API do github.

Então.... LET'S DO IT! 👊🏽

## Componente principal

Inicialmente no componente principal vamos ter um **form** e dentro dele colocamos:

* uma `label` para o `input`**;**
* o `input` \*\*\*\*para receber o nome do usuário;
* `botão` de **submit**.

```jsx
import React, { useState } from 'react';

const App = () => {

  return (
    <div className="app">
      <form className="form-github-user">
        <label htmlFor="github-user" className="label-github-user">Digite seu usuário do Github:</label>
        <input type="text" id="github-user" className="input-github-user"/>
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
```

## Componente do Loader

Depois criamos um componente para o Loader, pegando o código do post anterior. Ele tem somente uma div e CSS (só diminuí um pouco o tamanho dele e adicionei uma margem no topo):

**Loader.js**

```jsx
import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div role="alert" className="loader"></div>
      );
}

export default Loader
```

**Loader.css**

```css
.loader {
    width: 50px;
    height: 50px;
    border: 10px solid #eee;
    border-bottom-color: rebeccapurple;
    border-radius: 50%;
    animation: rotate 1.5s linear infinite;
    margin-top: 2rem;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
```

## Adicionando o Loader no componente principal

E no componente principal eu fazemos algumas coisas:

* Importamos o `Loader` no componente principal.
* Para o loader criamos uma variável `showLoader` para poder lidar com a mudança uma mudança de estado, usando o hook [useState()](https://pt-br.reactjs.org/docs/hooks-state.html).

  * O estado inicial da variável definimos o valor "**false**" com a função do `useState()`, o retorno dele são duas coisas: **o valor do estado atual** e uma **função que permite que se atualize o valor**;
  * Vamos usar ela para controlar a renderização do componente `Loader`.
* Para pegar o `username` que vem do input também usamos o hook [useState()](https://pt-br.reactjs.org/docs/hooks-state.html);
* Adicionamos um `onChange` no input para pegar o que foi digitado e inserir o valor no `username` usando o `setUsername()`;
* E abaixo do `form` colocamos uma condicional que faz com que incialmente o `Loader` não será renderizado (devido ao valor false que colocamos ).

```jsx
import React, { useState } from 'react';
import Loader from './components/Loader/Loader'

const App = () => {
  const [showLoader, setShowLoader] = useState(false)
	const [username, setUsername] = useState('')

  return (
    <div className="app">
      <form className="form-github-user">
        <label htmlFor="github-user" className="label-github-user">Digite seu usuário do Github:</label>
        <input type="text" id="github-user" className="input-github-user" onChange={e=>setUsername(e.target.value)}/>
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
      {showLoader && <Loader/>}
    </div>
  );
}

export default App;
```

## Função da chamada da API

Agora vamos criar uma função que será chamada quando houver o submit do form. Chamaremos a função de "**handleForm**":

* Antes da função criamos uma variável `userData` para poder armazenar os dados que vão retornar da API, usando o hook [useState()](https://pt-br.reactjs.org/docs/hooks-state.html).
* Na função usamos o `e.preventDefault` para evitar um comportamento padrão, nesse caso só queremos evitar o comportamento padrão do `form`, esse comportamento padrão do `form` é o **reload** da página quando o `form` é submetido. Usando o `e.preventDefault` conseguimos fazer com que a ação de **submit** do `form` fique de forma assíncrona só esperando a resposta;
* Atualizamos o estado do `showLoader` para "**true**" (que na renderização vai fazer ele aparecer devido a condicional);
* Usamos o [`fetch`](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch) para fazer a requisição na API do Github, usando o "**username**" que vai ser preenchido no momento que a pessoa digita no input, e na url pegamos esse valor que foi inserido pela pessoa;
* Após a resposta do `fetch`, no segundo `then` nós pegamos os dados que vem como resposta (após ser transformado num json usando a o [`.json()`](https://developer.mozilla.org/pt-BR/docs/Web/API/Body/json) \*\*\*\*no qual retorna uma promisse com o resultado);
* E após colocar os dados retornados no `setUserData()` também mudamos o estado do loader de volta para "**false"** (que na renderização vai fazer ele sumir devido a condicional);

Então é basicamente: mostra o loader enquanto pega os dados, após trazer os dados tira o loader;

```jsx
const [userData, setUserData] = useState({})

const handleForm = (e) => {
    e.preventDefault();
    setShowLoader(true)
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
          setUserData(data)
          setShowLoader(false)
        })
        .catch((err) => {
          console.log(err)
          setShowLoader(false)
        })
  }
```

E no `form` adicionamos o atributo `onSubmit` chamando a função acima, para que quando haja um click no botão de `submit` a função seja executada.

```jsx
<form onSubmit={handleForm} className="form-github-user">
```

## Dados retornados

E para vermos o que foi retornado, criamos um componente chamado "UserData" e exibimos os dados que vai vir das "props"

```jsx
import React from 'react';
import './UserData.css';

const UserData = ({data}) => {
    return (
        <div className="user-data">
        <img src={data.avatar_url} alt={data.name}/>
        <table>
          <tbody>
            <tr>
              <td><strong>Name:</strong></td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td><strong>Localização:</strong></td>
              <td>{data.location}</td>
            </tr>
            <tr>
              <td><strong>Bio:</strong></td>
              <td>{data.bio}</td>
            </tr>
            <tr>
              <td><strong>Perfil criado em:</strong></td>
              <td>{data.created_at}</td>
            </tr>
          </tbody>
        </table>
      </div>
      );
}

export default UserData
```

E no componente principal, importamos esse componente e passamos os dados retornados para ele que foram preenchidos no `setUserData` para `userData`.

* Adicionamos o componente **UserData** para ser renderizado e passamos `userData` apara o componente através da **prop** `data`;
* No componente **UserData** temos a **prop** `data` e recebemos os dados através dela;

```jsx
import React, { useState } from 'react';
import Loader from './components/Loader/Loader'
import UserData from './components/UserData/UserData'

import './App.css';

const App = () => {
  const [showLoader, setShowLoader] = useState(false)
  const [username, setUsername] = useState('')
  const [userData, setUserData] = useState({})


  const handleForm = (e) => {
    e.preventDefault();
    setShowLoader(true)
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
          setUserData(data)
          setShowLoader(false)
        })
        .catch((err) => {
					console.log(err)
          setShowLoader(false)
        })
  }

  return (
    <div className="app">
      <form onSubmit={handleForm} className="form-github-user">
        <label htmlFor="github-user" className="label-github-user">Digite seu usuário do Github:</label>
        <input type="text" id="github-user" className="input-github-user" onChange={e=>setUsername(e.target.value)}/>
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
      {showLoader && <Loader/>}
      <UserData data={userData} />
    </div>
  );
}

export default App;
```

## Código completo

Esse código pode ser melhorado, tentei deixa-lo simples.

O código completo está nesse repositório:

[](https://github.com/talitaoliveira/using-loader-wait-request-react)<https://github.com/talitaoliveira/using-loader-wait-request-react>

No projeto que está no repositório incrementei algumas coisas além do que está aqui.

* Criei alguns testes
* Tentei colocar uma mensagem de erro caso de algum problema na requisição
* Dados são mostrados somente se o objeto `userData` estiver preenchido (não fica mostrando a tabela vazia com "nome", "localização, "bio", "perfil criado em")
* Também coloquei um workflow usando Github Actions, pra rodar os testes e se tudo tiver passando fazer o deploy para o gh-pages. Mostrei um pouco como fiz isso nesse post: [CI/CD e Github Actions](https://blog.talitaoliveira.com.br/ci-cd-e-github-actions/) 😊

\~🌟\~

Bem.. é isso. 😉

Esse post era pra ter sido postado semana passada, mas por motivo de força maior (final de semana na praia com a família) não postei nada.

Preferi descansar, relaxar a mente... Passei por um momento não muito legal, e precisava desacelerar um pouco.

Mas está tudo bem agora, só preciso me manter mais "pé no chão". 🙃

Espero que este post possa ser útil para alguém 😊.

Até a próxima. 🤙🏽