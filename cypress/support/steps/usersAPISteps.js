import { When } from "@badeball/cypress-cucumber-preprocessor";


When("eu valido a execucao da operacao POST para criar um usuario", () => {
    cy.postUsers()
})

When("eu valido a execucao da operacao GET para buscar uma lista usuarios", () => {
    cy.getUsers()
})

When("eu valido a execucao da operacao DELETE para deletar um usuario", () => {
    cy.deleteUsers()
})

When("eu valido a execucao da operacao PUT para atualizar um usuario", () => {
    cy.putUsers()
})
