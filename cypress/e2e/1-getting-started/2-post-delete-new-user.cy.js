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


    cy.api({
      method: "POST",
      url: '/usuarios',
      body: userData
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
      expect(response.body).to.have.property("_id");

      userID = response.body._id;

    });
    cy.log(userData.password);

  });
});

describe("Teste de remoção de usuário", () => {
  it("Removendo usuário", () => {
    cy.api({
      method: "DELETE",
      url: `/usuarios/${userID}`,
      body: {
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Registro excluído com sucesso");
    });

  });
});
