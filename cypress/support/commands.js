Cypress.Commands.add('login', (Email, PASSWORD) => {
    if (Email && PASSWORD) {
        cy.visit('/login')
        cy.get("#email").type(Email)
        cy.get("#password").type(PASSWORD)
        cy.get("button").click()
        return
    }
})