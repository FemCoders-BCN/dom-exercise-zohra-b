En el archivo app.js hemos creado constantes y addEventListener para haver cambios en la página HTML según el color del botón clickeado.
Luego, hemos refactorizado el código HTML para que sea semántico.

Installación de Vitest: 
npm init 
	-- descripción : descripción del proyecto
	-- entry point: index.js  (o app.js ?)
	-- test command : npm t
	-- author :
	-- license : isc
	-- url : "<https:// link del repositorio en github>"

//crear archivo .gitignore y escribir en el file : linea 1 : 
node_modules
package-lock.json

//para instalar las librerías : en la terminal, en la carpeta del proyecto
npm install -D vitest vite jsdom @testing-libray/dom @testing-library/jest-dom

//en el archivo app.js
export { /*nombre de las funciones sepradas por coma*/changeColor, changeText, changeStyles };   


// en el archivo app.tests.js
1. import {describe, expect, it, beforeAll} from 'vitest';
2. import { JSDOM } from "jsdom";

-----------------------------------------------------
# Dom exercise

Este repositorio nos servirá como base para coonocer los diferente tipos de Dom que tenemos en javascript y construir de tal forma un proyecto que podría ser real. También, a parte de la explicación recibida en clase, las coder deberán realizar una refactorización del código que tenga después de la explicación y la realización de los test de cada función.

El proyecto ya esta realizado con la arquitectura adecuada para su funcionamiento.

## Requisitos para el funcionamiento actual

- Visual Studio Code

## Requisitos para realizar el testing

- El testing se deberá de realizar en [vitest](https://vitest.dev/guide/)
- Una vez instalado deberás poner en este **readme** (que deberás modificar), el proceso para que una persona que llegué al repositorio pueda hacer correr los test

## Requisitos del Readme

- DEBERÁ llevar una breve descripción del proyecto
- DEBERÁ lleva las imágenes que muestren el proyecto
- DEBERÁ llevar las tecnologías empleadas
- DEBERÁ llevar como se debe hacer el proceso para instalar todo lo necesario para que se corran los test (instalar nodejs, hacer npm install  o npm i)


