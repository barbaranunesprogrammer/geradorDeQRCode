# 🚀 Kit de Utilitários para (Terminal QrCode e Senhas)

![Utilities](https://img.shields.io/badge/utilities-toolkit-blue)
![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)
![License](https://img.shields.io/badge/License-ISC-yellow)

Um conjunto de ferramentas de linha de comando para tarefas rápidas, como gerar QR Codes e senhas seguras, diretamente no seu terminal.

## ✨ Funcionalidades

- **Gerador de QR Code**: Crie um QR Code a partir de qualquer URL ou texto e exiba-o instantaneamente.
- **Gerador de Senhas**: Crie senhas seguras e personalizáveis.
- **Interface Interativa**: Um menu simples para escolher a ferramenta que você deseja usar.
- **Exibição no Terminal**: Todos os resultados são renderizados diretamente na sua linha de comando.

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

Para executar a aplicação, utilize o comando abaixo. Você será apresentado a um menu para escolher entre gerar um QR Code ou uma senha.

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