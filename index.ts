#! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
         message: "slect one of the operators to perform operation", 
    type: "list",
     name: "operator",
     choices: ["addition", "subtruction", "multipication", "division"],
    }
]);

// conditional statement
if (answer.operator === "addition") {
    console.log( answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "subtruction"){
    console.log( answer.firstNumber - answer.secondNumber);
}else if(answer.operator === "multipication"){
    console.log( answer.firstNumber * answer.secondNumber);
}else if(answer.operator === "division"){
    console.log( answer.firstNumber / answer.secondNumber);
}else{
    console.log("please select valid operator")
}