import { faker } from "@faker-js/faker"

const BTN_ADD ='#addNewRecordButton'
const NOME_A ='#firstName'
const NOME_B ='#lastName'
const INPUT_EMAIL ='#userEmail'
const INPUT_IDADE ='#age'
const INPUT_SALARIO ='#salary'
const INPUT_DEPARTAMENTO ='#department'
const BTN_SUBMIT ='#submit'
const BTN_EDIT = '#edit-record-4'
const MSG_SUCESSO =':nth-child(4) > .rt-tr'
const BTN_DELETE ='#delete-record-3'



const firstname =faker.person.firstName()
const lastname = faker.person.lastName()
const useremail = faker.internet.email()
const idade = faker.number.int()
const salario = faker.number.int({min:1000,max:5000})
const departamento= faker.commerce.product()


Cypress.Commands.add('acessarFormularioRegistro', ()=>{
cy.get(BTN_ADD).click()

})

Cypress.Commands.add('realizarcadastro',()=>{
    cy.get(NOME_A).type(firstname)
    cy.get(NOME_B).type(lastname)
    cy.get(INPUT_EMAIL).type(useremail)
    cy.get(INPUT_IDADE).type(idade)
    cy.get(INPUT_SALARIO).type(salario)
    cy.get(INPUT_DEPARTAMENTO).type(departamento)
})

Cypress.Commands.add('realizarsubmit',()=>{
cy.get(BTN_SUBMIT).click()

})

Cypress.Commands.add('realizarvalidação',()=>{
    cy.get('div.rt-tbody > div.rt-tr-group').should('have.length.at.least', 4) 

})

Cypress.Commands.add('botãoedit',()=>{
    cy.get(BTN_EDIT) .click()

})

Cypress.Commands.add('paginaedit',()=>{
    cy.get(NOME_A).clear().type('Luiz')
    cy.get(NOME_B).clear().type('Eduardo')
})

Cypress.Commands.add('validaçãocSucesso',()=>{
cy.get(MSG_SUCESSO).should('contain.text', 'Luiz')
})


Cypress.Commands.add('botãodelete',()=>{
cy.get(BTN_DELETE).click()
})

Cypress.Commands.add('Validaçãodelete',()=>{
cy.get('div.rt-tbody > div.rt-tr-group').should('have.length.at.least', 2)
})



