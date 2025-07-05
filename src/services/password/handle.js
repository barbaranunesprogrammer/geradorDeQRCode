import PermittedCharacters from "./utils/permitted-Characters.js";
import chalk from "chalk";

function handle() {
    let password = "";

    const passwordLength = process.env.PASSWORD_LENGTH || 12;
    const characters = PermittedCharacters();

    if (characters.length === 0) {
        console.log(chalk.red.bold("Erro: Nenhum conjunto de caracteres foi selecionado no arquivo .env."));
        return "Senha não pôde ser gerada.";
    }

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }
    return password;
}

export default handle;