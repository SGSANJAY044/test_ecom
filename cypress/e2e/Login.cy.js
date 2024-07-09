describe('Login page', () => {
    beforeEach(() => {
        // cy.visit("/login") 
    })
    it("Login with proper credentials", () => {
        cy.request("http://localhost:1810")
            .then((data) => console.log(data))
    })
})