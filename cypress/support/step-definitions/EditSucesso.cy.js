import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps';

Given('que eu acesso a página de WebTables',() =>{
    cy.visit('/')
})

When('faço um novo cadastro',() =>{
    cy.acessarFormularioRegistro()
    cy.realizarcadastro()
    cy.realizarsubmit()
})

And('clico no botão de editar',()=>{
    cy.botãoedit()
})

And('altero os dados dos campos',()=>{
   cy.paginaedit()
   cy.realizarsubmit()
})

Then('valido que a alteração foi feita com sucesso',() =>{
    cy.validaçãocSucesso()
})
