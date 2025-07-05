import prompt from "prompt";
import promptQRCode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";
import chalk from "chalk";

function createQRCode() {
    return new Promise((resolve, reject) => {
        prompt.get(promptQRCode, (err, result) => {
            if (err) {
                // Se o usuário cancelar (Ctrl+C), apenas encerramos esta parte.
                console.log(chalk.red.italic("\nOperação cancelada."));
                return resolve();
            }
            handle(result);
            resolve();
        });
    });
}

export default createQRCode;