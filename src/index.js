import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import chalk from "chalk";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";



async function main(){
    prompt.start();

    prompt.get(mainPrompt, async (err, choose) => {
        if (err) {
            console.log(chalk.red.italic("\nOperação cancelada."));
            return;
        }
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) createPassword();

    });
}

main();