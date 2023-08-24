import { faker } from "@faker-js/faker";
var randomName = faker.person.fullName();
var randomEmail = faker.internet.email();
var randomPassword = faker.internet.password();


const userUrl = 'https://serverest.dev/usuarios';
let userID;


describe("Teste de cadastro de usuário", () => {
  it("Cadastrando usuário", () => {
    const userData = {
      nome: randomName,
      email: randomEmail,
      password: randomPassword,
      administrador: "true"
    };


    cy.request({
      method: "POST",
      url: userUrl,
      body: userData
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
      expect(response.body).to.have.property("_id");

      userID = response.body._id;

    });
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
    cy.request({
      method: "PUT",
      url: `${userUrl}/${userID}`,
      body: userData
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Registro alterado com sucesso");

    });
  });
});
