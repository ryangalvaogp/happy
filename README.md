

<h1 align="center">
<img alt="Happy"  src="happy-frontend/src/images/map-marker.svg" height="80" width="150px">
</h1>

<h3 align="center">
  Happy
</h3>
<h4 align="center">
   NLW #3 Next Level Week
</h4>



<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ryangalvaogp/Be-the-Hero">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ryangalvaogp/Be-the-Hero">
  
  <a href="https://github.com/ryangalvaogp/Be-the-Hero/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ryangalvaogp/Be-the-Hero">
  </a>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-red">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>




<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#octocat-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#anger-pr%C3%A9-requisitos">Pré Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#-web-demo">Demo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Instala%C3%A7%C3%A3o">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="######Desenvolvido">Créditos</a>
</p>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [Typescript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/)
- [Axios](https://github.com/axios/axios)
- [Leaflet](https://leafletjs.com/)


 
 

## :octocat: Projeto
Happy é uma aplicação para cadastro de orfanatos que foi idealizada em homenagem ao dia das crianças, sem fins lucrativos.
O backend foi criado em Node.js com Typescript, api com sqlite e é responsável por cadastrar informações dos orfanatos, utilização do ORM para API e integração com sistema de upload de imagens. 
O frontend da aplicação foi desenvolvida com React via Typescript, em estilo de Landing page.

## :anger: Pré-requisitos:
 - Ter o ambiente preparado com nodejs, node, npm, yarn.
 - Git instalado para clonar o projeto.


### Verificar instalação/ versões utilizadas
Verificar se os requisitos estão instalados, não é necessário utilizar as versões especificadas abaixo, porém no momento que foi criado esse projeto, essas são as versões do ambiente:
```sh
$ node -v  
v12.16.1

$ npm -v   
6.13.4

$ nodejs -v
v10.19.0

$ yarn -v   
1.22.4

$ expo --version
3.17.23
```


## 💻 Web Demo

<h1 align="center">
<img alt="Happy"  src="/demo-assets/Home.svg" height="500" width="570px">
<img alt="Happy"  src="/demo-assets/Mapa.svg" height="500" width="570px">
<img alt="Happy"  src="/demo-assets/02. Dados (preechidos).svg" height="500" width="570px">

</h1>




## Instalação<a id="instalação"></a>
Para executar o projeto, você precisará ter Node e NPM ou Yarn instalado para configurar todas as dependências


### Instalação - Backend (Servidor e API) <a id="installation-back"></a>

```bash
cd server
npm install
npm run typeorm migration:run
npm run dev
```

Se estiver usando Yarn, execute:
```bash
cd server
yarn install
yarn typeorm migration:run
yarn dev
```

### Instalação - Frontend <a id="installation-front"></a>

```bash
cd web
npm install
npm run start
```

Se estiver usando Yarn, execute:
```bash
cd web
yarn install
yarn start
```

A página abirá automáticamente após o servidor ser iniciado com sucesso

### Installation - Mobile (App) <a id="installation-mobile"></a>

Vá no arquivo `api.ts` em `mobile/src/services`, e `backend/src/views/images_view.ts`, e mude o IP para o IP do servidor da sua máquina.
Se você precisar instalar o * Expo *, execute o seguinte comando: `yarn global add expo-cli`.
Depois, execute o projeto.


```bash
cd mobile
npm install
npm run start
```

Se estiver usando Yarn, execute:
```bash
cd mobile
yarn install
yarn start
```

Ao executar o projeto, a página de depuração do * Expo * será aberta em seu navegador.

Para abrir o aplicativo em seu dispositivo móvel, baixe o aplicativo * Expo's * na Play Store ou App Store e escaneie o código QR mostrado na página de depuração e espere até que a instalação termine.
---

###### Desenvolvido durante o Next Level Week da [Rocketseat](https://rocketseat.com.br) by [Ryan Galvão GP](https://www.linkedin.com/in/ryangalvaogp/) :rocket:.
