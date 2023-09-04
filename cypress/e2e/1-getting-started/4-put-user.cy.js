import { faker } from "@faker-js/faker";
var randomName = faker.person.fullName();
var randomEmail = faker.internet.email();
var randomPassword = faker.internet.password();

let userID;

describe("Teste de cadastro de usuário", () => {
  it("Cadastrando usuário", () => {
    const userData = {
      nome: randomName,
      email: randomEmail,
      password: randomPassword,
      administrador: "true"
    };

  });
});

describe("Teste de edição de usuários", () => {
  it("Alteração de usuário", () => {
    const userData = {
      nome: randomName,
      email: randomEmail,
      password: randomPassword,
      administrador: "true"
    };
    cy.api({
      method: "PUT",
      url: `/usuarios/${userID}`,
      body: userData
    })
  });
});
