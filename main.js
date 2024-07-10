#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 1,
    USD: 0.0036,
    INR: 0.30,
    EUR: 0.0033,
    GBP: 0.0028
};
let user_answer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: "Enter from currency",
        choices: [
            { name: "USD", value: "USD" },
            { name: "EUR", value: "EUR" },
            { name: "INR", value: "INR" },
            { name: "GBP", value: "GBP" },
            { name: "PKR", value: "PKR" }
        ]
    },
    {
        name: "To",
        type: "list",
        message: "Enter to currency",
        choices: [
            { name: "USD", value: "USD" },
            { name: "EUR", value: "EUR" },
            { name: "INR", value: "INR" },
            { name: "GBP", value: "GBP" },
            { name: "PKR", value: "PKR" }
        ]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount",
    }
]);
let fromAmount = currency[user_answer.From];
let toAmount = currency[user_answer.To];
let amount = user_answer.amount;
let baseamount = amount / fromAmount;
let convertedAmount = baseamount * toAmount;
console.log(Math.round(convertedAmount));
