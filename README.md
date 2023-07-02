
# Trabalho de Desenvolvimento Web - Backend

Uma API em Node para registro e visualização de usuários e login.



## Rotas

#### Lista todos os usuários cadastrados
```http
  GET /users
```

#### Cadastra um usuário
```http
  POST /register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email do usuário a ser cadastrado |
| `password` | `string` | **Obrigatório**. Senha do usuário a ser cadastrado |

#### Login de um usuário
```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email do usuário |
| `password` | `string` | **Obrigatório**. Senha do usuário |

#### Validação do Token JWT
```http
  POST /token/validate
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. Token a ser validado |


## Instalação

Para instalar todas as bibliotecas

```bash
  npm install
```
Para inicializar a API
```bash
  npm run dev
```
Para que a aplicação funcione, deve-se ter instalado o banco de dados PostgreSQL.

Além disso, as credenciais do banco devem ser alteradas no arquivo ./src/data-source.ts.

Por último, deve-se criar uma variável de ambiente no arquivo .env com a chave JWT_SECRET_KEY, com qualquer valor.
    
## Funcionalidades

- Cadastro dos dados no Banco de Dados PostgreSQL
- Tratamento de erros
- Separação do código em Controllers e Services
- Encriptação da senha antes de ser salva


## Stack utilizada

* Cors
* UUID
* Bcrypt
* Dotenv
* Express
* TypeORM
* Pg (Postgres)
* Json Web Token
* Reflect Metadata




