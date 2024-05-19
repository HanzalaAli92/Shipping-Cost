#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

function calculateShippingCost(ShippingMethod:string){
  switch (ShippingMethod.toLowerCase()) {
    case chalk.italic.yellowBright.bold("standard"):
      return 5.00;
    case chalk.italic.magentaBright.bold("express"):
      return 10.00;
    case chalk.italic.blueBright.bold("overnight"):
      return 20.00;
    default:
      return chalk.italic.gray.bold("Invalid Shipping Method");
  }
}
async function add() {
  let { ShippingMethod } = await inquirer.prompt({
    name: "ShippingMethod",
    type: "list",
    message: chalk.italic.greenBright.bold("\nSelect Shipping Method:\n"),
    choices: [
      chalk.italic.yellowBright.bold("Standard"), 
      chalk.italic.magentaBright.bold("Express"), 
      chalk.italic.blueBright.bold("Overnight"),
    ],
  });
  let ans = calculateShippingCost(ShippingMethod);
  console.log(chalk.italic.redBright.bold(
    `Test Case: ${ShippingMethod}: ${
      typeof ans == "string" ? ans : "$" + ans.toFixed(2)}`));
}
add();
/*console.log(
  chalk.italic.cyan.bold(`\nTest Case: $` + calculateShippingCost("Standard"))
);
console.log(
  chalk.italic.yellow.bold(`\nTest Case: $` + calculateShippingCost("Express"))
);
console.log(
  chalk.italic.blue.bold(`\nTest Case: $` + calculateShippingCost("Overnight"))
);
console.log(
  chalk.italic.red.bold(`\nError Message: ` + calculateShippingCost("message"))
);*/

