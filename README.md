# Desafio 01 - Introdução ao SOLID

<div align="center">
    <img width="900px" alt="Ignite" src="assets/capa_ignite.png" />

Este desafio faz parte da lista de desafios que compõem o curso de NodeJS.

Visite à [Rockseat](https://rocketseat.com.br/) para saber mais sobre o curso.

</div>

<p align="center">

  <a href="https://github.com/code36u4r60">
    <img alt="Made by Eduardo Queirós" src="https://img.shields.io/badge/made%20by-Eduardo%20Queirós-red">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
  
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#keyboard-instalação-e-execução-do-projeto">Instalação e Execução do Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#template-da-aplicação">Template da aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Rotas-da-aplicação">Rotas da aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#especificação-dos-testes">Específicação dos testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Nesse desafio, foi criado uma API seguindo a estrutura de arquitetura limpa aprendida até agora.

Essa será uma aplicação de listagem e cadastro de usuários. Para que a listagem de usuários funcione, o usuário que solicita a listagem deve ser um admin (mais detalhes ao longo da descrição).

## :keyboard: Instalação e Execução do Projeto

- Clone o repositório

```
https://github.com/code36u4r60/ignite-desafio-introducao-ao-SOLID.git
```

ou

```
git@github.com:code36u4r60/ignite-desafio-introducao-ao-SOLID.git
```

ou

```
gh repo clone code36u4r60/ignite-desafio-introducao-ao-SOLID
```

- Entrar na pasta do projeto

```
cd ignite-desafio-introducao-ao-SOLID
```

- Instale as dependências com o Yarn

```
yarn
```

- Executar o projeto

```
yarn dev
```

- Para correr os testes

```
yarn test
```

Deve aparecer uma mensagem parecida com esta:

```shell

➜  ignite-desafio-introducao-ao-SOLID git:(main) ✗ yarn test
yarn run v1.22.5
$ jest
 PASS  src/__tests__/users/useCases/CreateUserUseCase.spec.ts
  CreateUserUseCase
    ✓ should be able to create new users (5 ms)
    ✓ should not be able to create new users when email is already taken (3 ms)

 PASS  src/__tests__/users/useCases/ListAllUsersUseCase.spec.ts
  ListAllUsersUseCase
    ✓ should be able to list all users (5 ms)
    ✓ should not be able to a non admin user get list of all users (3 ms)
    ✓ should not be able to a non existing user get list of all users

 PASS  src/__tests__/users/useCases/ShowUserProfileUseCase.spec.ts
  ShowUserProfileUseCase
    ✓ should be able to get user profile by ID (5 ms)
    ✓ should not be able to show profile of a non existing user (3 ms)

 PASS  src/__tests__/users/useCases/TurnUserAdminUseCase.spec.ts
  TurnUserAdminUseCase
    ✓ should be able to turn an user as admin (4 ms)
    ✓ should not be able to turn a non existing user as admin (2 ms)

 PASS  src/__tests__/users/model/User.spec.ts
  User model
    ✓ should be able to create an user with all props (5 ms)

 PASS  src/__tests__/users/repositories/UsersRepository.spec.ts
  UsersRepository
    ✓ should be able to create new users (5 ms)
    ✓ should be able to list all users (1 ms)
    ✓ should be able to find user by ID (1 ms)
    ✓ should be able to find user by e-mail address (1 ms)
    ✓ should be able to turn an user as admin (1 ms)

 PASS  src/__tests__/routes.spec.ts
  [POST] /users
    ✓ should be able to create new users (44 ms)
    ✓ should not be able to create new users when email is already taken (5 ms)
  [PATCH] /users/:user_id/admin
    ✓ should be able to turn an user as admin (4 ms)
    ✓ should not be able to turn a non existing user as admin (3 ms)
  [GET] /users/:user_id
    ✓ should be able to get user profile by ID (3 ms)
    ✓ should not be able to show profile of a non existing user (2 ms)
  [GET] /users
    ✓ should be able to list all users (4 ms)
    ✓ should not be able to a non admin user get list of all users (3 ms)
    ✓ should not be able to a non admin user get list of all users (2 ms)
    ✓ should not be able to a non existing user get list of all users (3 ms)

Test Suites: 7 passed, 7 total
Tests:       25 passed, 25 total
Snapshots:   0 total
Time:        4.244 s
Ran all test suites.
Done in 5.04s.

```

## Template da aplicação

Foi utilizado um modelo de template que possui o esqueleto do projeto.

O template está disponível na seguinte URL:

[rocketseat-education/ignite-introducao-ao-SOLID](https://github.com/rocketseat-education/ignite-introducao-ao-SOLID)

**Dica**: Caso não saiba utilizar repositórios do GitHub como template, temos um guia em **[nosso FAQ](https://www.notion.so/FAQ-Desafios-ddd8fcdf2339436a816a0d9e45767664).**

## Rotas da aplicação

### POST `/users`

A rota deve receber `name`, e `email` dentro do corpo da requisição para que seja possível cadastrar um usuário.

### PATCH `/users/:user_id/admin`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e transformar esse usuário em admin.

### GET `/users/:user_id`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e devolver as informações do usuário encontrado pelo corpo da resposta.

### GET `/users`

A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os usuários cadastrados. O `id` deverá ser usado para validar se o usuário que está solicitando a listagem é um admin. O retorno da lista deve ser feito apenas se o usuário for admin.

## Especificação dos testes

Em cada teste, tem uma breve descrição no que sua aplicação deve cumprir para que o teste passe.

Caso você tenha dúvidas quanto ao que são os testes, e como interpretá-los, dê uma olhada em **[nosso FAQ](https://www.notion.so/FAQ-Desafios-ddd8fcdf2339436a816a0d9e45767664)**

Para esse desafio, temos os seguintes testes:

### Teste do model

- **Should be able to create an user with all props**

  Para que esse teste passe, você deve completar o código do model de usuários que está em **src/modules/users/model/User.ts**.
  O usuário deve ter as seguintes propriedades:

```json
{
	id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;
}
```

Lembre que a propriedade `admin` deve sempre ser iniciada como `false` e o `id` deve ser um `uuid` gerado automaticamente.

### Testes do repositório

- **Should be able to create new users**

  Para que esse teste passe, é necessário que o método `create` do arquivo **src/modules/users/repositories/implementations/UsersRepository** permita receber o `name` e `email` de um usuário, crie um usuário a partir do model (que foi completado no teste anterior).

- **Should be able to list all users**

  Para que esse teste passe, é necessário que o método `list` do arquivo **src/modules/users/repositories/implementations/UsersRepository** retorne a lista de todos os usuários cadastrados na aplicação.

- **Should be able to find user by ID**

  Para que esse teste passe, é necessário que o método `findById` do arquivo **src/modules/users/repositories/implementations/UsersRepository** receba o `id` \***\*de um usuário e \*\***retorne o usuário que possui o mesmo `id`.

- **Should be able to find user by e-mail address**

  Para que esse teste passe, é necessário que o método `findByEmail` do arquivo **src/modules/users/repositories/implementations/UsersRepository** receba o `email` \***\*de um usuário e \*\***retorne o usuário que possui o mesmo `email`.

- **Should be able to turn an user as admin**

  Para que esse teste passe, é necessário que o método `turnAdmin` do arquivo **src/modules/users/repositories/implementations/UsersRepository** receba o objeto do usuário completo, mude a propriedade `admin` para `true`, atualize também a propriedade `updated_at` e retorne o usuário atualizado.

### Testes de useCases

- **Should be able to create new users**

  Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/createUser/CreateUserUseCase.ts** receba `name` e `email` do usuário a ser criado, crie o usuário através do método `create` do repositório e retorne o usuário criado.

- **Should not be able to create new users when email is already taken**

  Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/createUser/CreateUserUseCase.ts** não permita que um usuário seja criado caso já exista um usuário com o mesmo email e, nesse caso, lance um erro no seguinte formato:

  ```tsx
  throw new Error("Mensagem do erro");
  ```

- **Should be able to turn an user as admin**

  Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/turnUserAdmin/TurnUserAdminUseCase.ts** receba o `id` de um usuário, chame o método do repositório que transforma esse usuário em administrador e retorne o usuário após a alteração.

- **Should not be able to turn a non existing user as admin**

  Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/turnUserAdmin/TurnUserAdminUseCase.ts** não permita que um usuário que não existe seja transformado em admin. Caso o usuário não exista, lance um erro no seguinte formato:

  ```tsx
  throw new Error("Mensagem do erro");
  ```

- **Should be able to get user profile by ID**

  Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/showUserProfile/ShowUserProfileUseCase.ts** receba o `id` de um usuário, chame o método do repositório que busca um usuário pelo `id` e retorne o usuário encontrado.

- **Should not be able to show profile of a non existing user**

  Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/showUserProfile/ShowUserProfileUseCase.ts** não permita que um usuário que não existe seja retornado. Caso o usuário não exista, lance um erro no seguinte formato:

  ```tsx
  throw new Error("Mensagem do erro");
  ```

- **Should be able to list all users**

  Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/listAllUsers/ListAllUsersUseCase.ts** receba o `id` de um usuário, chame o método do repositório que retorna todos os usuários cadastrados e retorne essa informação.

- **Should not be able to a non admin user get list of all users**

  Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/listAllUsers/ListAllUsersUseCase.ts** não permita que um usuário que não seja admin, acesse a listagem de usuários cadastrados na aplicação. Caso o usuário não seja admin, lance um erro no seguinte formato:

  ```tsx
  throw new Error("Mensagem do erro");
  ```

- **Should not be able to a non existing user get list of all users**

  Para que esse teste passe, é necessário que o método `execute` do arquivo **src/modules/users/useCases/listAllUsers/ListAllUsersUseCase.ts** não permita que um usuário que não exista, acesse a listagem de usuários cadastrados na aplicação. Caso o usuário não exista, lance um erro no seguinte formato:

  ```tsx
  throw new Error("Mensagem do erro");
  ```

### Testes das rotas

Para que esses testes passem, você deve fazer alterações em todos os controllers da aplicação.

Você pode olhar qual controller recebe o conteúdo de qual rota observando o arquivo **src/routes/users.routes.ts**.

- **Rota - [POST] /users**
- **Rota - [PATCH] /users/:user_id/admin**
- **Rota - [GET] /users/:user_id**
- **Rota - [GET] /users**

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt) para mais detalhes.

---

Created with 💜 by <a href="https://www.linkedin.com/in/eduardoqueiros/">Eduardo Queirós</a> :wave:
