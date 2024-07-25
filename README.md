
<!-- PROJECT LOGO -->
<br />
<div id="readme-top" align="center">

  <h3 align="center">MY SHOP MANAGER</h3>

  <p align="center">
    PUBERT ELISE
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
      <ul>
        <li><a href="#serveur">Serveur</a></li>
        <li><a href="#mongodb">MongoDB</a></li>
        <li><a href="#front-end">Front-end</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Ce Projet est basé sur le framework javascript React et une base de donnée NoSQL. Il permet la gestion d'un magasin et possède les features suivantes :

* Lister les articles et les filtrer selon différents critères
* Lister les commandes et en ajouter
* Ajouter un document dans n’importe quelle collection

### Built With

Liste et documentations des frameworks et outils utilisés.

* [![React][React]][React-url]
* [![Mongodb][Mongodb]][Mongodb-url]
* [![JS][js]][js-url]
* [![HTML][html]][html-url]
* [![CSS][css]][css-url]


<!-- INSTALLATION -->
## Installation

### Serveur
```bash
cd backend && npm install
node server.js
```

### MongoDB 
```bash
mkdir data 
mongod --dbpath=./data/
```

### Front-end
```bash
cd frontend && npm install
npm start
```
Se rendre sur ``http://localhost:3000/``


<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React]: https://img.shields.io/badge/React-grey?style=for-the-badge&logo=react
[React-url]: https://react.dev/
[mongodb]: https://img.shields.io/badge/mongodb-white?style=for-the-badge&logo=mongodb
[mongodb-url]: https://www.mongodb.com/fr-fr
[html]: https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white
[html-url]: https://www.w3schools.com/html/default.asp
[css]: https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
[css-url]: https://www.w3schools.com/css/default.asp
[js]: https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=flat-square
[js-url]: https://www.javascript.com/

 
