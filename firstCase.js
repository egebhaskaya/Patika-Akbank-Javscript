//Please open the console and type "node firstCase.js" command//
const readline = require("readline");

const askInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

askInput.question(
  "Please enter the number to learn if it is even or odd!",
  function (number) {
    const splitted = number.split(""); //Splitting number
    let splittedArray = []; 

    for (i = 0; i < splitted.length; i++) {
      splittedArray.push(parseInt(splitted[i])); //Splitted number stored in an array
    }

    //Splitted numbers are summed
    const sum = splittedArray.reduce((accumulator, value) => {
      return accumulator + value;
    });
    console.log(`Sum of values: ${sum}`);

    //Check for even or odd
    if (sum % 2 === 1) {
      console.log(`Remainder from division by 2: ${sum % 2}`);
      console.log("Number is odd");
    } else {
      console.log(`Remainder from division by 2: ${sum % 2}`);
      console.log("Number is even");
    }

    process.exit();
  }
);
