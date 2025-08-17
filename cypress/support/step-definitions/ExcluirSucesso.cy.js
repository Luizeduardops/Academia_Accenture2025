import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';

Given('que eu acesso a página de WebTables',() =>{
    cy.visit('/')
})

When('clico no botão delete do 3 usuário',() =>{
    cy.botãodelete()
})


Then('valido que o usuário foi deletado com sucesso',() =>{
   cy.Validaçãodelete()
})