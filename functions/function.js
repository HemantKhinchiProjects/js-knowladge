//-----------------------Important-------------------------------------//
//Function Statment or //Function Declartion
function sample() {
  console.log('simple Function called');
  const functionDisplay = document.querySelector('.simpleFunction');
  functionDisplay.innerHTML = `<h1>JS Starter</h1> `;

  return functionDisplay;
}
//Export Code
export { sample };
