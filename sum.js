// adds two numbers, returns their sum.


function sum(numberOne, numberTwo) {
  if (numberOne === undefined || numberTwo === undefined){
    throw new Error("You're missing an argument")
  }
  return Number(numberOne) + Number(numberTwo);

}

module.exports = sum;