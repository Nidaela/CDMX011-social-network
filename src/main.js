import Login from "./componentes/Login.js";
// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/index.js';

const rootElement = document.getElementById('root');
const containLogin = Login();
rootElement.appendChild(containLogin);

//myFunction();