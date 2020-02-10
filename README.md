# JS/TS Start App Bundle

## Español

Este repositorio contiene una aplicación con configuraciones para utilizar JavaScript o TypeScript, SASS, build y deployar a now.sh

#### Ejecución

-   npm install (instala dependencias)
-   npm start

#### Contiene

-   Webpack
-   Babel (classes, spread operator, transform runtime, es6 -> es5)
-   TS Loader
-   CSS, SASS Loader
-   File Loader

#### Carpetas

-   public: contiene el build final. Apto para producción.
-   src:
    -   css: admite archivos .css o .sass que deben ser incluidos en index.scss\*
    -   js: admite archivos .js o .ts y el archivo main por configuración es index.js (pueden incluirse archivos .ts como el ejemplo)
    -   static: contiene archivos estáticos como imágenes, etc.
    -   index.html: se utiliza como plantilla para insertar index.scss + index.js en tiempo de ejecución el durante el build.

#### Archivos

-   now.json: contiguración de now.sh
-   package.json: incluye listado de dependencias y otros.
-   tsconfig.json: configuración para la transpilación de typescript.

#### Comandos

-   npm start: inicia el servidor en desarrollo
-   npm builddev: realiza el build de desarrollo
-   npm build: realiza el build productivo
-   npm nowbuild: utilizado por now.sh == npm build

#### Deployando a now.sh

Escribir en la terminal dentro de la carpeta del proyecto:

-   npm i -g now (si no se encuentra instalado)
-   now (opc --prod)
    ![GitHub Logo](https://raw.githubusercontent.com/AgustinQuetto/js-ts-startapp-bundle/master/now-commands.png)

#### Utilizar únicamente Typescript

Renombrar a .ts src/js/index.js y en webpack.config.js la línea main: "./src/js/index.js"
Renombrar también las carpetas /js si lo desea.

##### Autor: Agustín Quetto

---

## English:

This repository contains an application with configurations to use JavaScript or TypeScript, SASS, build and deploy to now.sh

#### Execution

-   npm install (install dependencies)
-   npm start

#### Contains

-   Webpack
-   Babel (classes, spread operator, transform runtime, es6 -> es5)
-   TS Loader
-   CSS, SASS Loader
-   File Loader

#### Folders

-   public: contains the final build. Suitable for production.
-   src:
        - css: supports .css or .sass files that must be included in index.scss \ \*
        - js: supports .js or .ts files and the main file by configuration is index.js (.ts files can be included as the example)
        - static: contains static files such as images, etc.
        - index.html: used as a template to insert index.scss + index.js at runtime during the build.

####Records

-   now.json: contiguation of now.sh
-   package.json: includes list of dependencies and others.
-   tsconfig.json: configuration for typescript transpilation.

#### Commands

-   npm start: start the developing server
-   npm builddev: perform development build
-   npm build: perform the productive build
-   npm nowbuild: used by now.sh == npm build

#### Deploying now.sh

Write in the terminal inside the project folder:

-   npm i -g now (if not installed)
-   now (opt --prod)
    ![GitHub Logo](https://raw.githubusercontent.com/AgustinQuetto/js-ts-startapp-bundle/master/now-commands.png)

#### Using only Typescript

Rename .ts src / js / index.js and in webpack.config.js the main line: "./src/js/index.js"
Rename also the folders / js if you wish.

##### Author: Agustín Quetto

Preview: [en now.sh](https://start-app-js-ts.now.sh/)
![GitHub Logo](https://raw.githubusercontent.com/AgustinQuetto/js-ts-startapp-bundle/master/screenshot.png)
