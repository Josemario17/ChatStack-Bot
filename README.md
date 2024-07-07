# Website Manager

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Descrição

O **Website Manager** é uma aplicação poderosa e fácil de usar que permite gerenciar o conteúdo de um blog, suas páginas e realizar o deploy do site. Projetado para ser intuitivo, este gestor oferece uma interface amigável para administradores e editores, facilitando a criação, edição e publicação de conteúdo online.

## Funcionalidades

- **Gerenciamento de Conteúdo de Blog**: Crie, edite e organize posts de blog com facilidade.
- **Gerenciamento de Páginas**: Adicione, edite e remova páginas do seu site de forma intuitiva.
- **Deploy Integrado**: Realize o deploy do seu site com apenas alguns cliques.
- **Editor WYSIWYG**: Um editor "What You See Is What You Get" para facilitar a formatação do conteúdo.
- **Suporte a Markdown**: Escreva seus posts e páginas usando Markdown para maior flexibilidade.
- **Controle de Versão**: Mantenha o histórico de edições e versões dos seus conteúdos.
- **Interface Responsiva**: Gerencie seu site de qualquer dispositivo, seja desktop, tablet ou celular.
- **SEO Otimizado**: Ferramentas integradas para otimização de SEO, melhorando a visibilidade do seu site nos motores de busca.

## Tecnologias Utilizadas

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB
- **Deploy**: Docker, GitHub Actions

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:

    ```sh
    git clone https://github.com/seu-usuario/website-manager.git
    cd website-manager
    ```

2. Instale as dependências do backend e frontend:

    ```sh
    # Backend
    cd backend
    npm install

    # Frontend
    cd ../frontend
    npm install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` no diretório `backend` com as seguintes variáveis:

    ```env
    MONGODB_URI=your_mongodb_uri
    PORT=5000
    JWT_SECRET=your_jwt_secret
    ```

4. Inicie a aplicação:

    ```sh
    # Backend
    cd backend
    npm start

    # Frontend
    cd ../frontend
    npm start
    ```

    O frontend estará disponível em `http://localhost:3000` e o backend em `http://localhost:5000`.
---

Obrigado por usar o **Website Manager**! Esperamos que ele facilite a gestão do seu conteúdo online.
