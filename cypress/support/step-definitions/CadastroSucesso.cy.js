import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';

Given('que eu acesso a página de WebTables',() =>{
    cy.visit('/')
})

When('clico no botão ADD',() =>{
    cy.acessarFormularioRegistro()
})

And('preencho todos os campos obrigatórios com dados válidos',()=>{
    cy.realizarcadastro()
})

And('submeto o formulário',()=>{
   cy.realizarsubmit()
})

Then('o novo usuário deve aparecer corretamente na tabela',() =>{
    cy.realizarvalidação()
})
