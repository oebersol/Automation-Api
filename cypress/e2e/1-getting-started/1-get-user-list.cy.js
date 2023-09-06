import { faker } from "@faker-js/faker";
var randomName = faker.person.fullName();
var randomEmail = faker.internet.email();
var randomPassword = faker.internet.password();


describe("Teste de cadastro de usuário", () => {
  it("Cadastrando usuário", () => {
    const userData = {
      nome: randomName,
      email: randomEmail,
      password: randomPassword,
      administrador: "true"
    };

    cy.cadastroUsuario(userData)
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

