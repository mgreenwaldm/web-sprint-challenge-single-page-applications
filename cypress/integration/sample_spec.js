// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Form Tests', () => {
    it('Enter Name on pizza', () => {

        cy.visit('http://localhost:3000')
        cy.get('#order-pizza').click()
        cy.get('#name-input').type('Hello World')
    })

    it('Can Select Multiple Toppings', () => {

        cy.visit('http://localhost:3000')
        cy.get('#order-pizza').click()

        cy.get('#topping1').click()
        cy.get('#topping2').click()
        cy.get('#topping4').click()
    })

    it('Can Submit Form', () => {

        cy.visit('http://localhost:3000')
        cy.get('#order-pizza').click()

        cy.get('#name-input').type('Hello World')

        cy.get('#topping1').click()
        cy.get('#topping2').click()
        cy.get('#topping4').click()

        cy.get('#order-button').click()
    })
})