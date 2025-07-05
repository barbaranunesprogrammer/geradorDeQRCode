import chalk from "chalk";
import handle from "./handle.js";

function createPassword() {
    const password = handle();
    console.log(chalk.green("\nSua senha segura foi gerada:"));
    console.log(chalk.bold.yellow(password));
}
export default createPassword;