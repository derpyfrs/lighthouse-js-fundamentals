var chalk = require("chalk");

var message = chalk.bold.underline.green("Hello ") + chalk.gray("World");
console.log(message);