// Import stylesheets
import './style.css';
// Import script files
import { sample } from './functions/function.js';
import { reduce } from './functions/reduce/reduce.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Reduce example ${reduce()}</h1>`;

//const functionDisplay = document.querySelector('.simpleFunction');
//functionDisplay.innerHTML = `<h1>JS Starter</h1> ${sample()}`;

const functionDisplay = document.querySelector('.simpleFunction');
functionDisplay.innerHTML = <h1>Reduce method </h1>;
reduce();
