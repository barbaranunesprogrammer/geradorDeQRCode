import chalk from "chalk";

const mainPrompt =[
    {
        name:"select",
        description: chalk.yellow.bgBlue.bold("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),
        pattern: /^[1-2]$/,
        message: chalk.red.bold("Escolha apenas 1 ou 2."),
        required :true,
    }
]
export default mainPrompt;