describe("Zadanie1'", function(){
    it("test_login_negative_1", function(){
        cy.visit('https://staging.paymi.com/')
        cy.url().should("include","https://staging.paymi.com/")
        cy.get("input[name='user[email]']").type("example@login.com")
        cy.get("input[name='user[password]']").type("1234567890")
        cy.contains("[type='submit']","Log In").click()
        cy.contains("Invalid email address or password.").should("be.visible")
    })
})