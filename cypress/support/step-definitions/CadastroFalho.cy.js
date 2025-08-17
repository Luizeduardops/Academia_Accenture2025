import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';

Given('que eu acesso a página de WebTables',() =>{
    cy.visit('/')
})

When('eu abro o formulário de cadastro',() =>{
    cy.acessarFormularioRegistro()
})

And('preencho os campos sem o firstname',()=>{
    cy.cadastroSemNome()
    cy.realizarsubmit()
})

Then('valido que o campo {string} ficará em vermelho exigindo um valor',(campo) =>{
    const seletor = campo
    cy.get(seletor, { timeout: 10000 }).should('be.visible')
    cy.get(seletor).should("have.css", "border-color").and("eq", "rgb(220, 53, 69)")    

})

And('preencher os campos com dados válidos exceto o e-mail inválido',()=>{
  cy.cadastroEmailInvalido()
})

