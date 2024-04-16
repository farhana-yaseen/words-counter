import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
console.log(chalk.bgBlue.bold(" \n\t Word Counter \n"));
while (condition) {
    const answer = await inquirer.prompt({
        name: "sentence",
        type: "input",
        message: "Enter sentences for word counting: "
    });
    const word = answer.sentence.trim().split(" ");
    console.log(word);
    console.log(chalk.bgBlue.bold(`\n Total word count is : ${word.length} \n`));
    const count = await inquirer.prompt({
        name: "countAgain",
        type: "confirm",
        message: "Do you want to count again?",
        default: false
    });
    condition = count.countAgain;
}
