# API Hotel 🏨

Uma API RESTful desenvolvida em **Node.js** utilizando **Express** e **MySQL** para o gerenciamento de hóspedes de um hotel. Este projeto permite realizar operações completas de CRUD (Criar, Ler, Atualizar e Deletar) de forma simples e eficiente.

---

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript
- **[Express](https://expressjs.com/)** — Framework web minimalista para Node.js
- **[MySQL](https://www.mysql.com/)** — Banco de dados relacional
- **[Nodemon](https://nodemon.io/)** — Monitoramento e restart automático durante o desenvolvimento
- **[Morgan](https://github.com/expressjs/morgan)** — Middleware para logs de requisições HTTP
- **[Body-Parser](https://github.com/expressjs/body-parser)** — Parsing de corpos de requisição JSON e URL-encoded
- **[CORS](https://github.com/expressjs/cors)** — Middleware para controle de acesso do navegador

---

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado na sua máquina:

- **[Node.js](https://nodejs.org/)** (v18 ou superior)
- **[Git](https://git-scm.com/)**
- Servidor **MySQL** em execução

---

## 🔧 Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/api-hotel.git
   cd api-hotel
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o Banco de Dados MySQL:**
   Execute o script SQL abaixo no seu cliente MySQL (ex: MySQL Workbench, DBeaver, phpMyAdmin):

   ```sql
   CREATE DATABASE IF NOT EXISTS hotel;

   USE hotel;

   CREATE TABLE IF NOT EXISTS hospedes (
       id INT AUTO_INCREMENT PRIMARY KEY,
       nome VARCHAR(255) NOT NULL,
       documento VARCHAR(50) NOT NULL,
       telefone VARCHAR(50) NOT NULL
   );
   ```

4. **Configure as Variáveis de Ambiente:**
   Certifique-se de alterar as credenciais do banco de dados no arquivo `rotas/nodemon.json` com suas informações locais:

   ```json
   {
     "env": {
       "MYSQL_USER": "root",
       "MYSQL_PASSWORD": "sua_senha_aqui",
       "MYSQL_DATABASE": "hotel",
       "MYSQL_HOST": "localhost",
       "MYSQL_PORT": 3306
     }
   }
   ```

---

## ▶️ Executando a Aplicação

Para rodar a aplicação em modo de desenvolvimento com o Nodemon:

```bash
npm start
```

O servidor estará rodando em: `http://localhost:3000`

---

## 📍 Endpoints da API

A URL base para todas as rotas de hóspedes é:
`http://localhost:3000/api.hotel/hotel`

### 📋 Tabela de Rotas

| Método | Endpoint | Descrição | Exemplo de Parâmetro / Query |
| :--- | :--- | :--- | :--- |
| **GET** | `/listar` | Retorna todos os hóspedes cadastrados | N/A |
| **GET** | `/getId` | Retorna os detalhes de um hóspede específico | `?id=1` |
| **POST** | `/cadastrar` | Cadastra um novo hóspede | Body (JSON) |
| **PUT** | `/atualizar` | Atualiza os dados de um hóspede | `?id=1` + Body (JSON) |
| **DELETE** | `/excluir` | Remove um hóspede | `?id=1` |

---

### 📥 Exemplos de Requisições e Respostas

<details>
<summary><b>1. Listar Hóspedes (GET /listar)</b></summary>

**Requisição:**
`GET http://localhost:3000/api.hotel/hotel/listar`

**Resposta (`200 OK`):**
```json
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
```
</details>

<details>
<summary><b>2. Buscar Hóspede por ID (GET /getId)</b></summary>

**Requisição:**
`GET http://localhost:3000/api.hotel/hotel/getId?id=1`

**Resposta (`200 OK`):**
```json
{
  "mensagem": "hospede encontrado com sucesso.",
  "hospedes": {
    "id": 1,
    "nome": "João Silva",
    "documento": "123456789",
    "telefone": "912345678"
  }
}
```
</details>

<details>
<summary><b>3. Cadastrar Hóspede (POST /cadastrar)</b></summary>

**Requisição:**
`POST http://localhost:3000/api.hotel/hotel/cadastrar`

**Corpo da Requisição (JSON):**
```json
{
  "nome": "João Silva",
  "documento": "123456789",
  "telefone": "912345678"
}
```

**Resposta (`201 Created`):**
```json
{
  "mensagem": "hospede cadastrado com sucesso.",
  "id_hospede": 1,
  "hospedes": {
    "nome": "João Silva",
    "documento": "123456789",
    "telefone": "912345678"
  }
}
```
</details>

<details>
<summary><b>4. Atualizar Hóspede (PUT /atualizar)</b></summary>

**Requisição:**
`PUT http://localhost:3000/api.hotel/hotel/atualizar?id=1`

**Corpo da Requisição (JSON):**
```json
{
  "nome": "João Silva Atualizado",
  "documento": "987654321",
  "telefone": "987654321"
}
```

**Resposta (`200 OK`):**
```json
{
  "mensagem": "Hospede atualizado com sucesso.",
  "id_hospede": "1",
  "hospede": {
    "nome": "João Silva Atualizado",
    "documento": "987654321",
    "telefone": "987654321"
  }
}
```
</details>

<details>
<summary><b>5. Excluir Hóspede (DELETE /excluir)</b></summary>

**Requisição:**
`DELETE http://localhost:3000/api.hotel/hotel/excluir?id=1`

**Resposta (`200 OK`):**
```json
{
  "mensagem": "Hospede excluído com sucesso."
}
```
</details>

---

## 📁 Estrutura do Projeto

```text
api-hotel/
├── rotas/
│   ├── hotel.js         # Definição das rotas e regras de negócio dos hóspedes
│   └── nodemon.json     # Variáveis de ambiente para o banco de dados
├── app.js               # Configuração do Express, CORS e Middlewares
├── server.js            # Ponto de entrada (inicialização do servidor HTTP)
├── mysql.js             # Pool de conexão com o banco MySQL
├── package.json         # Dependências e scripts do Node.js
└── README.md            # Documentação do projeto
```

---

## 📝 Licença

Este projeto está sob a licença **ISC**. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.