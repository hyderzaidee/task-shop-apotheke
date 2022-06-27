import LoginPageObjects from '../pageObjects/loginPageObjects'

const loginPageObjects = new LoginPageObjects



describe('Login Tests', function() {

    before(function () {
        cy.fixture('staticData').then(function(data)
        {
            this.data = data
        })

    })

    it('should open the browser and vist baseUrl', function() {


        cy.visit(this.data.baseUrl)
        loginPageObjects.email().type(this.data.email)
        cy.wait(5000)
        loginPageObjects.password().type(this.data.password);
        loginPageObjects.loginButton().click();
        cy.wait(10000)
        
        loginPageObjects.emailfield().type(this.data.email)
        loginPageObjects.passwordfield().type(this.data.password);
        cy.wait(10000)
        loginPageObjects.login().click({ force: true })
        cy.url().should('contain','after=login')
    
    })

})