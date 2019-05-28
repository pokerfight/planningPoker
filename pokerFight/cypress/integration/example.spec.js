describe('My First Test', function() {
it('Escrever o nome da Sprint e começar o poker-figth"', function() {
    cy.visit('http://localhost:4200/')

    cy.get('#input')
        .type('Sprint 04')
        .should('have.value', 'Sprint 04')

    cy.get('.btn')
        .click()
    })
})