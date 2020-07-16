<h1 align=center>
<img src="https://user-images.githubusercontent.com/38081852/83580830-6f63e200-a513-11ea-9a27-0a109ec1e4d0.png" />
</h1>

<div align="center">

![BADGE_LICENSE] ![BADGE_NODE_VERSION] ![BADGE_NPM_VERSION] ![BADGE_WEB_REACT] ![BADGE_MOBILE_REACT_NATIVE] ![BADGE_SERVER_NODEJS] ![BADGE_TYPESCRIPT] ![BADGE_OPEN_SOURCE] ![BADGE_OPEN_ISSUES] ![BADGE_CLOSED_ISSUES] ![BADGE_STARS] ![BADGE_FORKS]

</div>

<h3 align="center">

♻️ Ecoleta é um projeto **Open Source** desenvolvido na semana **Next Level Week (1.0)** da **[Rocketseat][rocketseat_site]** utilizando as tecnologias ***TypeScript, Node, React e React Native***.

</h3>

![Banner](https://user-images.githubusercontent.com/38081852/84095189-04178580-a9d5-11ea-9496-9ec6f6a282e5.png)

## **:rocket: OBJETIVO**

O projeto tem como finalidade **estabelecer uma conexão** entre **empresas e/ou entidades que coletam resíduos** (orgânicos e inorgânicos) **às pessoas e/ou entidades que necessitam constantemente descartar esses resíduos**. Solucionando um grande problema recorrente que é o **descarte inadequado do lixo**, facilitando o processo de recliclagem e reutilização.

<!-- 
  ...
  Local Reservado para o GIF do projeto rodando.
  ...
-->

## **:computer: TECNOLOGIAS**


#### **Website** ([React][react] + [TypeScript][typescript])

  - **[React Router Dom][react_router_dom]**
  - **[React Icons][react_icons]**
  - **[Axios][axios]**
  - **[Leaflet][leaflet]**
  - **[React Leaflet][react_leaflet]**
  - **[React Dropzone][react_dropzone]**


  \* Veja o arquivo <kbd>[package.json](./sources/website/package.json)</kbd>

#### **Server** ([NodeJS][node] + [TypeScript][typescript])

  - **[Express][express]**
  - **[CORS][cors]**
  - **[KnexJS][knex]**
  - **[SQLite][sqlite3]**
  - **[ts-node][tsnode]**
  - **[dotENV][dotenv]**
  - **[Multer][multer]**
  - **[Celebrate][celebrate]**
  - **[Joi][joi]**

  \* Veja o arquivo <kbd>[package.json](./sources/server/package.json)</kbd>

#### **Mobile** ([React Native][react_native] + [TypeScript][typescript])

  - **[Expo][expo]**
  - **[Expo Google Fonts][expo_google_fonts]**
  - **[React Navigation][react_navigation]**
  - **[React Native Maps][react_native_maps]**
  - **[Expo Constants][expo_constants]**
  - **[React Native SVG][react_native_svg]**
  - **[Axios][axios]**
  - **[Expo Location][expo_location]**
  - **[Expo Mail Composer][expo_mail_composer]**

  \* Veja o arquivo <kbd>[package.json](./sources/mobile/package.json)</kbd>

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)</kbd>**
- API: **[IBGE API][ibge_api]** &rarr; **<kbd>[API de UFs][ibge_api_ufs]</kbd>**, **<kbd>[API de Municípios][ibge_api_municipios]</kbd>** 
- Maps: **[Leaflet][leaflet]**
- Editor: **[Visual Studio Code][vscode]** &rarr; Extensions: **<kbd>[SQLite][vscode_sqlite_extension]</kbd>**
- Markdown: **[StackEdit][stackedit]**, **<kbd>[Markdown Emoji][markdown_emoji]</kbd>**
- Commit Conventional: **[Commitlint][commitlint]**
- Teste de API: **[Insomnia][insomnia]**
- Ícones: **[Feather Icons][feather_icons]**, **[Font Awesome][font_awesome]**
- Fontes: **[Ubuntu][font_ubuntu]**, **[Roboto][font_roboto]**


## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React e React Native (Expo)** de forma global, utilizando os comandos:

```sh
# React:
$ npm install create-react-app -g

# Expo (React Native):
$ npm install -g expo-cli 
```

Você precisa renomear o arquivo `.env-example` para `.env` e inserir as informações que condizem com o seu **host**:

```sh
$ mv .env-example .env
```

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **server**, no diretório do **website** e no diretório **mobile**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```

Exemplos:
```sh
# Instalando as dependências do commitlint:
$ cd ./ecoleta
$ npm install

# Instalando as dependências do server:
$ cd ./sources/server
$ npm install

# Instalando as dependências do website:
$ cd ./sources/website
$ npm install

# Instalando as dependências do mobile:
$ cd ./sources/mobile
$ npm install
```

Veja os arquivos **`package.json`** do <kbd>[commitlint](./package.json)</kbd>, <kbd>[server](./sources/server/package.json)</kbd>, <kbd>[website](./sources/website/package.json)</kbd> e <kbd>[mobile](./sources/mobile/package.json)</kbd>.

### Utilizando o Server

```sh
# Abrindo o terminal no diretório do servidor:
$ cd ./sources/server

# Executando a aplicação em modo de desenvolvimento:
$ npm run dev

# Instanciando o banco de dados:
$ npm run knex:migrate

# Povoando o banco de dados (seeds):
$ npm run knex:seed
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./sources/server/package.json)</kbd> para saber quais scripts estão disponíveis.

### Utilizando o Website

```sh
# Abrindo o terminal no diretório do website:
$ cd ./sources/website

# Executando o website no modo de desenvolvimento:
$ npm run start
```

> Se o browser não abrir automaticamente, acesse: http://localhost:3000.

### Utilizando o Mobile

Instale o aplicativo <kbd>[Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)</kbd> no seu smartphone.

```sh
# Abrindo o terminal no diretório do mobile:
$ cd ./sources/mobile

# Executando o mobile no modo de desenvolvimento:
$ npm run start
```

Agora, abra o aplicativo do expo e no modo **LAN** faça o scan do QRCode.

> Se tiver algum problema para executar o aplicativo nesse modo, tente desabilitar o firewall da sua máquina.

Se tiver algum problema com as fontes, utilize o comando:
```sh
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

**\* Lembre de inserir no arquivo `.env` o IP exato que foi gerado pelo seu mobile após utilizar o comando `npm run start`.**

## **:octocat: COMO CONTRIBUIR**
  
  - Verifique as **[Issues](https://github.com/x0n4d0/ecoleta/projects/1)** que estão abertas e se já não existe alguma com a sua feature;
  - Abra uma **Issue** com o nome e descrição da sua feature e assine com o seu usuário informando que irá fazê-la;
  - Faça um **[fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo)** do repositório;
  - Entre no sua página do GitHub e faça um **clone** do seu **fork**;
  - Crie uma *branch* com o nome da sua feature: `git chechout -b feat/minhaFeature`;
  - Faça as alterações necessárias no código ou na documentação;
  - Instale as dependências do *commitlint* na raíz do projeto para a verificação dos commits: `npm install` ou `yarn`;
  - Faça o *commit* das suas alterações seguindo as [convenções de commit](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), adicione na descrição o id da sua Issue em parênteses e lembre de fechar a sua Issue com o id no rodapé do commit:

  ```
    <tipo>(escopo opcional): <descrição> (#x)

    [corpo do commit]

    Close #x
  ```
  Exemplo:
  ```sh
    feat: adicionado componente para tal coisa (#52)

    Foi adicionado um componente para tal coisa com o objetivo de melhorar tal coisa, deixando o projeto de tal maneira.

    Close #52
  ```
  - Faça um *push* para a sua *branch*: `git push origin feat/minhaFeature`;
  - Agora é só abrir um *pull request* no repositório que você fez o *fork* e assim que acontecer o *merge* sua Issue será fechada e suas alterações irão fazer parte do projeto;
  - Depois que o *merge* da sua pull request for feito, você pode deletar a sua *branch*.

  \* **Obrigado por contribuir!** ❤️ :facepunch: :blush:

## **:star2: AGRADECIMENTOS**

<div align=center>

<table style="width:100%">
  <tr align=center>
    <th><strong>Next Level Week</strong></th>
    <th><strong>Rocketseat</strong></th>
    <th><strong>diego3g</strong></th>
    <th><strong>maykbrito</strong></th>
  </tr>
  <tr align=center>
    <td>
      <a href="https://nextlevelweek.com/">
        <img width="200" src="https://user-images.githubusercontent.com/42815135/83976057-f0352c00-a8cd-11ea-88da-22ff672ce842.png">
      </a>
    </td>
    <td>
      <a href="https://rocketseat.com.br/">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981650-1e2e6680-a8f6-11ea-9f42-6df8fe809e4b.png">
      </a>
    </td>
    <td>
      <a href="https://github.com/diego3g">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981712-b7f61380-a8f6-11ea-9099-bd3677e97e39.jpg">
      </a>
    </td>
    <td>
      <a href="https://github.com/maykbrito">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981753-1de29b00-a8f7-11ea-93cf-23d2ff65fa5c.png">
      </a>
    </td>
  </tr>
</table>

</div>

## **:books: REFERÊNCIAS**

- [React + TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)
- [Blog Rocketseat](https://blog.rocketseat.com.br/)
- [ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://expo.io/learn)
- [Knex][knex]
- [Express](https://expressjs.com/pt-br/)
- [Node](https://nodejs.org/en/)
- [Celebrate](https://github.com/arb/celebrate)
- [Joi](https://hapi.dev/module/joi/)

## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

<h3 align="center">
Feito com ❤️ por <a href="https://www.linkedin.com/in/mauricioromagnoli/">Maurício Romagnoli</a>
<br><br>
<a href="https://rocketseat.com.br">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
</a>
</h3>

<!-- Website Links -->

[rocketseat_site]: https://rocketseat.com.br/

<!-- Badges -->

[BADGE_CLOSED_ISSUES]: https://img.shields.io/github/issues-closed/x0n4d0/ecoleta?color=red

[BADGE_OPEN_ISSUES]: https://img.shields.io/github/issues/x0n4d0/ecoleta?color=green

[BADGE_LICENSE]: https://img.shields.io/github/license/x0n4d0/ecoleta

[BADGE_NODE_VERSION]: https://img.shields.io/badge/node-12.17.0-green

[BADGE_NPM_VERSION]: https://img.shields.io/badge/npm-6.14.4-red

[BADGE_WEB_REACT]: https://img.shields.io/badge/web-react-blue

[BADGE_MOBILE_REACT_NATIVE]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[BADGE_SERVER_NODEJS]: https://img.shields.io/badge/server-nodejs-important

[BADGE_STARS]: https://img.shields.io/github/stars/x0n4d0/ecoleta?style=social

[BADGE_FORKS]: https://img.shields.io/github/forks/x0n4d0/ecoleta?style=social

[BADGE_TYPESCRIPT]: https://badges.frapsoft.com/typescript/code/typescript.png?v=101

[BADGE_OPEN_SOURCE]: https://badges.frapsoft.com/os/v1/open-source.png?v=103

<!-- Techs -->

[react]: https://reactjs.org/

[typescript]: https://www.typescriptlang.org/

[node]: https://nodejs.org/en/

[leaflet]: https://react-leaflet.js.org/en/

[ibge_api]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1

[ibge_api_ufs]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet

[ibge_api_municipios]: https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet

[vscode]: https://code.visualstudio.com/

[react_native]: http://www.reactnative.com/

[stackedit]: https://stackedit.io

[vscode_sqlite_extension]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite

[markdown_emoji]: https://gist.github.com/rxaviers/7360908

[commitlint]: https://github.com/conventional-changelog/commitlint

[express]: https://expressjs.com/

[cors]: https://expressjs.com/en/resources/middleware/cors.html

[knex]: http://knexjs.org/

[sqlite3]: https://github.com/mapbox/node-sqlite3

[tsnode]: https://github.com/TypeStrong/ts-node

[feather_icons]: https://feathericons.com/

[insomnia]: https://insomnia.rest/

[react_leaflet]: https://react-leaflet.js.org/

[react_router_dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

[react_icons]: https://react-icons.github.io/react-icons/

[axios]: https://github.com/axios/axios

[dotenv]: https://github.com/motdotla/dotenv

[expo]: https://expo.io/

[expo_google_fonts]: https://github.com/expo/google-fonts

[react_navigation]: https://reactnavigation.org/

[react_native_maps]: https://github.com/react-native-community/react-native-maps

[expo_constants]: https://docs.expo.io/versions/latest/sdk/constants/

[react_native_svg]: https://github.com/react-native-community/react-native-svg

[expo_location]: https://docs.expo.io/versions/latest/sdk/location/

[expo_mail_composer]: https://docs.expo.io/versions/latest/sdk/mail-composer/

[font_roboto]: https://fonts.google.com/specimen/Roboto

[font_ubuntu]: https://fonts.google.com/specimen/Ubuntu

[font_awesome]: https://fontawesome.com/

[multer]: https://github.com/expressjs/multer

[celebrate]: https://github.com/arb/celebrate

[joi]: https://github.com/hapijs/joi

[react_dropzone]: https://github.com/react-dropzone/react-dropzone

[asdf]: https://github.com/asdf-vm/asdf

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable
