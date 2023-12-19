# Fastify Node.js Web Server

Este é um servidor web Node.js criado durante meus estudos de Node.js, utilizando o framework [Fastify](https://www.fastify.io/) para construir uma aplicação web rápida e eficiente.
<br>

## Tecnologias Utilizadas

- **Fastify:** Um framework web extremamente rápido e eficiente para Node.js. Saiba mais em [Fastify](https://www.fastify.io/).

- **Knex.js:** Um construtor de consultas SQL para Node.js, utilizado para interagir com o banco de dados SQLite. Mais informações em [Knex.js](http://knexjs.org/).

- **SQLite:** Um sistema de gerenciamento de banco de dados leve e embutido, perfeito para aplicações simples. Conheça mais sobre o SQLite em [SQLite](https://www.sqlite.org/index.html).

- **Zod:** Uma biblioteca de validação de esquemas TypeScript-first para JavaScript. Saiba mais em [Zod](https://github.com/colinhacks/zod).

- **ESLint:** Uma ferramenta de linting para identificar e corrigir problemas no código JavaScript. Mais detalhes em [ESLint](https://eslint.org/).

<br>

## Configuração do Ambiente e Uso.

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina antes de prosseguir.

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/myguelangello/02-api-rest-nodejs.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd 02-api-rest-nodejs
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

### Configuração do Banco de Dados

1. Certifique-se no `package.json` de que a dependência do SQLite foi instalada.

2. Execute as migrações do banco de dados:

   ```bash
   npm run knex -- migrate:latest
   ```

### Execução

Inicie o servidor com o seguinte comando:

```bash
npm run dev
```

O servidor estará disponível em [http://localhost:3333](http://localhost:3333).

### Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento, com hot-reloading ativado.
- `npm run knex -- migrate:latest`: Executa as migrações do banco de dados.
- `npm run knex -- migrate:rollback`: Desfaz a última migração do banco de dados.
- `npm run lint`: Executa o ESLint para identificar e corrigir problemas no código.

<br>

## Requisitos Funcionais (RF)

### 1. Criar Nova Transação

- [  ] **Descrição:** O usuário deve ter a capacidade de criar uma nova transação em sua conta.

### 2. Obter Resumo da Conta

- [  ] **Descrição:** O usuário deve ter a capacidade de obter um resumo da sua conta, incluindo informações relevantes sobre saldos, transações recentes, etc.

### 3. Listar Todas as Transações

- [  ] **Descrição:** O usuário deve poder visualizar uma lista contendo todas as transações que ocorreram em sua conta.

### 4. Visualizar Uma Transação Específica

- [  ] **Descrição:** O usuário deve poder visualizar uma transação específica.

<br>

## Regras de Negócio (RN)

### 1. Tipos de Transação

- [  ] **Descrição:** Uma transação pode ser do tipo crédito, que adiciona um valor ao total da conta, ou débito, que subtrai um valor do total.

### 2. Identificação do Usuário

- [  ] **Descrição:** O sistema deve ser capaz de identificar o usuário entre as requisições, garantindo que as transações e informações da conta sejam associadas corretamente.

### 3. Visualização de Transações Próprias

- [  ] **Descrição:** O usuário só pode visualizar transações que ele mesmo criou.
<!-- 
## Requisitos Não Funcionais (RNF)

### 1. Desempenho

- **Descrição:** O sistema deve ser otimizado para garantir um desempenho rápido e eficiente, mesmo com um grande volume de transações.

### 2. Segurança

- **Descrição:** As informações do usuário e transações devem ser tratadas com segurança. Utilize práticas recomendadas para proteger dados sensíveis.

### 3. Escalabilidade

- **Descrição:** O sistema deve ser escalável, capaz de lidar com um aumento no número de usuários e transações sem comprometer o desempenho.

### 4. Documentação

- **Descrição:** A documentação do código, APIs e procedimentos de instalação/configuração deve ser clara e abrangente para facilitar a manutenção e colaboração.

### 5. Testes Automatizados

- **Descrição:** Implemente testes automatizados para garantir a confiabilidade e estabilidade do sistema ao longo do tempo.
 -->

<br>

## Autor

### Myguel Angello 
[GitHub](https://github.com/myguelangello) | [LinkedIn](https://www.linkedin.com/in/myguelangello/)
#### Sistemas e Mídias Digitais - Instituto UFC Virtual.
Universidade Federal do Ceará.


## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Abra uma issue ou envie um pull request!
