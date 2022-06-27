class LoginPageObjects{

    email()
    {
        return cy.get('[data-qa-id="login-login-email-input"]')
    }

    password()
    {
        return cy.get('[data-qa-id="login-login-password-input"]')
    }

    loginButton()
    {
        return cy.get('[data-qa-id="login-login-submit-button"]')
    }

    emailfield()
    {
        return cy.get('[data-qa-id="login-form-username"]')
    }

    passwordfield()
    {
        return cy.get('[data-qa-id="login-form-password"]')
    }

    login()
    {
       return cy.get('[data-qa-id="login-form-loginForm-submit-button"]')
    }

    

}
export default LoginPageObjects;