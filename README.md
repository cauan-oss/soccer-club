<img width="1893" height="894" alt="image" src="https://github.com/user-attachments/assets/7d55f088-6e57-47aa-92d6-261bf8109099" />
Trybe Futebol Clube (TFC)
O TFC é um site informativo sobre partidas e classificações de futebol. Este projeto é uma API back-end completa, desenvolvida com a metodologia TDD (Test Driven Development) e arquitetura de contêineres utilizando Docker e Docker Compose.

Funcionalidades da API
Autenticação de Usuário: O acesso a certas rotas (como adicionar uma nova partida) exige que o usuário esteja logado e tenha um token de autenticação válido.

Gerenciamento de Partidas: A API permite a criação de novas partidas, bem como a atualização dos placares.

Classificações em Tempo Real: As tabelas de classificação são geradas dinamicamente com base nos resultados das partidas, aplicando regras de negócio para exibir placares precisos no front-end.

Relacionamento de Dados: As tabelas de teams e matches estão relacionadas para garantir a integridade dos dados e facilitar as atualizações.

Estrutura do Projeto
O projeto é orquestrado via Docker Compose, que integra quatro componentes principais:

Banco de Dados (db): Um contêiner MySQL pré-configurado para fornecer dados à aplicação back-end.

Back-end (backend): O ambiente onde a API foi desenvolvida, rodando na porta 3001 e consumindo o banco de dados.

Front-end (frontend): A interface de usuário já está pronta e se comunica com o back-end na porta 3001.

Docker: Gerencia e orquestra os contêineres de forma coesa, permitindo que todas as partes do projeto funcionem em conjunto.

Tecnologias
Node.js: Ambiente de execução JavaScript.

TypeScript: Superset do JavaScript que adiciona tipagem estática.

Express: Framework web para criar a API.

Sequelize: ORM (Object-Relational Mapper) para manipulação do banco de dados MySQL.

JWT (JSON Web Tokens): Usado para autenticação de usuários.

Bcrypt.js: Para criptografar senhas.

Joi, Boom, express-async-errors: Pacotes para validação de dados, tratamento de erros e gerenciamento de rotas assíncronas.

Docker & Docker Compose: Para conteinerização e orquestração de serviços.

TDD (Test Driven Development): Metodologia de desenvolvimento guiada por testes.

ESLint: Ferramenta de análise estática para garantir a qualidade do código.
