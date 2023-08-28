import { faker } from "@faker-js/faker";
var randomName = faker.person.fullName();
var randomEmail = faker.internet.email();
var randomPassword = faker.internet.password();


const userUrl = 'https://serverest.dev/usuarios';

describe("Teste de cadastro de usuário", () => {
  it("Cadastrando usuário", () => {
    const userData = {
      nome: randomName,
      email: randomEmail,
      password: randomPassword,
      administrador: "true"
    };

    cy.cadastroUsuario(userData)

      .then((response)=> {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq("Cadastro realizado com sucesso")
        expect(response.body).to.have.property("_id")

      })
    cy.log(userData.password);

  })
})


describe("Teste de busca de usuários", () => {
  it("Buscando usuários", () => {
    cy.api({
      method: "GET",
      url: '/usuarios',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.usuarios).to.be.an('array').that.is.not.empty;
    });
  });
});

