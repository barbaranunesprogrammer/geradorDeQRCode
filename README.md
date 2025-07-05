# 🚀 Gerador de QR Code para Terminal

![QR Code](https://img.shields.io/badge/qrcode-generator-blue)
![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)
![License](https://img.shields.io/badge/License-ISC-yellow)

Um utilitário de linha de comando simples e interativo para gerar QR Codes diretamente no seu terminal. Ideal para compartilhar links, textos ou qualquer outra informação de forma rápida.

## ✨ Funcionalidades

- **Geração Rápida**: Crie um QR Code a partir de qualquer URL ou texto.
- **Exibição no Terminal**: O QR Code é renderizado diretamente na sua linha de comando, sem a necessidade de abrir outros aplicativos.
- **Interface Interativa**: O script solicita a entrada do usuário de forma clara e objetiva.

## 🔧 Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

## 📦 Instalação

Siga os passos abaixo para configurar o projeto localmente.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/barbaranunesprogrammer/projeto-qrcode.git
   ```
  

2. **Navegue até o diretório do projeto:**
   ```bash
   cd projeto-qrcode
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

## ▶️ Como Usar

Para executar a aplicação, utilize o comando abaixo. O script irá pedir para você inserir o texto ou link que deseja transformar em QR Code.

```bash
npm start
```

Após inserir os dados e pressionar Enter, o QR Code correspondente será exibido no seu terminal.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **Node.js**: Ambiente de execução JavaScript.
- **chalk**: Para estilizar a saída do terminal com cores.
- **prompt**: Para criar prompts interativos na linha de comando.
- **qrcode-terminal**: Para gerar e exibir QR Codes no terminal.

## 📄 Licença

Este projeto está licenciado sob a licença ISC.