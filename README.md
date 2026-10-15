API Hotel 🏨

Uma API RESTful desenvolvida em Node.js utilizando Express e MySQL para o gerenciamento de hóspedes de um hotel. Este projeto permite realizar operações de CRUD (Criar, Ler, Atualizar e Deletar) de forma simples e estruturada.

🚀 Tecnologias Utilizadas

As seguintes ferramentas e bibliotecas foram utilizadas na construção da API:

Node.js - Ambiente de execução JavaScript

Express - Framework web para Node.js

MySQL - Banco de dados relacional

Nodemon - Utilitário para reiniciar automaticamente o servidor durante o desenvolvimento

Morgan - Middleware de log HTTP para Node.js

Body-Parser - Middleware para análise de requisições JSON e URL-encoded

CORS - Middleware para habilitar o compartilhamento de recursos de origem cruzada

⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

Node.js (Versão 18 ou superior recomendada)

Um servidor MySQL ativo (Local ou Remoto)

🔧 Instalação e Configuração

Clone o repositório ou baixe os arquivos do projeto:

git clone <url-do-repositorio>
cd api-hotel


Instale as dependências:

npm install


Configure o Banco de Dados:
Crie um banco de dados MySQL chamado hotel e uma tabela hospedes com a seguinte estrutura:

CREATE DATABASE hotel;

USE hotel;

CREATE TABLE hospedes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    documento VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL
);


Configure as credenciais de acesso:
Verifique o arquivo nodemon.json (ou crie um arquivo de variáveis de ambiente equivalente) e certifique-se de que os dados do seu MySQL estão corretos:

{
    "env" : {
        "MYSQL_USER" : "root",
        "MYSQL_PASSWORD" : "sua_senha",
        "MYSQL_DATABASE" : "hotel",
        "MYSQL_HOST" : "localhost",
        "MYSQL_PORT" : 3306
    }
}


▶️ Executando o Projeto

Para iniciar o servidor em ambiente de desenvolvimento (com recarregamento automático via Nodemon):

npm start


O servidor será iniciado na porta 3000 (por padrão):

Servidor rodando em http://localhost:3000


📍 Endpoints da API

A base URL para todas as rotas de hóspedes é: http://localhost:3000/api.hotel/hotel

1. Listar todos os Hóspedes

Método: GET

Rota: /listar

Exemplo de URL: http://localhost:3000/api.hotel/hotel/listar

Resposta de Sucesso (200 OK):

{
    "mensagem": "hospedes encontrados com sucesso.",
    "quantidade": 1,
    "hospedes": [
        {
            "id": 1,
            "nome": "João Silva",
            "documento": "123456789",
            "telefone": "912345678"
        }
    ]
}


2. Consultar Hóspede por ID

Método: GET

Rota: /getId?id={id}

Exemplo de URL: http://localhost:3000/api.hotel/hotel/getId?id=1

Resposta de Sucesso (200 OK):

{
    "mensagem": "hospede encontrado com sucesso.",
    "hospedes": {
        "id": 1,
        "nome": "João Silva",
        "documento": "123456789",
        "telefone": "912345678"
    }
}


3. Cadastrar Novo Hóspede

Método: POST

Rota: /cadastrar

Exemplo de URL: http://localhost:3000/api.hotel/hotel/cadastrar

Corpo da Requisição (JSON):

{
    "nome": "João Silva",
    "documento": "123456789",
    "telefone": "912345678"
}


Resposta de Sucesso (201 Created):

{
    "mensagem": "hospede cadastrado com sucesso.",
    "id_hospede": 1,
    "hospedes": {
        "nome": "João Silva",
        "documento": "123456789",
        "telefone": "912345678"
    }
}


4. Atualizar Hóspede

Método: PUT

Rota: /atualizar?id={id}

Exemplo de URL: http://localhost:3000/api.hotel/hotel/atualizar?id=1

Corpo da Requisição (JSON):

{
    "nome": "João Silva Atualizado",
    "documento": "987654321",
    "telefone": "987654321"
}


Resposta de Sucesso (200 OK):

{
    "mensagem": "Hospede atualizado com sucesso.",
    "id_hospede": "1",
    "hospede": {
        "nome": "João Silva Atualizado",
        "documento": "987654321",
        "telefone": "987654321"
    }
}


5. Excluir Hóspede

Método: DELETE

Rota: /excluir?id={id}

Exemplo de URL: http://localhost:3000/api.hotel/hotel/excluir?id=1

Resposta de Sucesso (200 OK):

{
    "mensagem": "Hospede excluído com sucesso."
}


📁 Estrutura do Projeto

api-hotel/
├── rotas/
│   ├── hotel.js         # Rotas e regras de negócio para hóspedes
│   └── nodemon.json     # Configurações de ambiente para o banco de dados
├── app.js               # Configuração do Express e middlewares
├── server.js            # Inicialização do servidor HTTP
├── mysql.js             # Conexão com o banco de dados via Pool
├── package.json         # Dependências e scripts do projeto
└── README.md            # Documentação do projeto


📝 Licença
