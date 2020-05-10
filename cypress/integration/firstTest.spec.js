describe('My first test with cypress', () => {
    it('Navigate to the form', () => {
       cy.visit("http://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html", {timeout: 120000})
    })

    it("Fill firstName and lastName", () => {
        cy.get("#first-name").type("Viktor")
        cy.get("#last-name").type("Viktor1")
        cy.contains("Submit").click()
        cy.get("#email-error").getText()
    })
})