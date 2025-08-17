const NOME_A ='#firstName'
const NOME_B ='#lastName'
const INPUT_EMAIL ='#userEmail'
const INPUT_IDADE ='#age'
const INPUT_SALARIO ='#salary'
const INPUT_DEPARTAMENTO ='#department'
const BTN_SUBMIT ='#submit'

Cypress.Commands.add('cadastroSemNome',()=>{

    cy.get(NOME_B).type(Cypress.env('NOME_B'),{log:false})
    cy.get(INPUT_EMAIL).type(Cypress.env('EMAIL_USUARIO'),{log:false})
    cy.get(INPUT_IDADE).type(Cypress.env('IDADE'),{log:false})
    cy.get(INPUT_SALARIO).type(Cypress.env('SALARIO'),{log:false})
    cy.get(INPUT_DEPARTAMENTO).type(Cypress.env('DEPARTAMENTO'),{log:false})

})

Cypress.Commands.add('cadastroEmailInvalido',()=>{
    cy.get(NOME_A).type(Cypress.env('NOME_A'),{log:false})
    cy.get(NOME_B).type(Cypress.env('NOME_B'),{log:false})
    cy.get(INPUT_EMAIL).type('luiztestegmail.com')
    cy.get(INPUT_IDADE).type(Cypress.env('IDADE'),{log:false})
    cy.get(INPUT_SALARIO).type(Cypress.env('SALARIO'),{log:false})
    cy.get(INPUT_DEPARTAMENTO).type(Cypress.env('DEPARTAMENTO'),{log:false})

})

