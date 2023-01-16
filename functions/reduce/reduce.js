//-----------------------Important-------------------------------------//
//Function Statment or //Function Declartion
function reduce() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum = arr.reduce((accum, current) => {
    return accum + current;
  });
  console.log(sum);
  return sum;
}
//Export Code
export { reduce };
