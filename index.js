// Import stylesheets
import './style.css';
// Import script files
import { sample } from './functions/function.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const functionDisplay = document.querySelector('.simpleFunction');
functionDisplay.innerHTML = `<h1>JS Starter</h1> ${sample()}`;
