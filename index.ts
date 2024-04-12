#!/usr/bin/env node

import inquirer from "inquirer"

const currency: any = {
    USD: 0.0036, 
    EUR: 0.0034,
    GBP: 0.0029,
    INR: 0.30,
    PKR: 1 // Base Currency
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    message: "Enter from Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"]
  },
  {
    name: "to",
    message: "Enter to Currency",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"]
  },
  {
    name: "amount",
    message: "Enter your amount",
    type: "number"
  }
]);

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = amount * toAmount
console.log(convertedAmount.toFixed(2));

