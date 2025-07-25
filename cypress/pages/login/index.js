import { elements as el } from "./elements"

class Login{
    visitarPagina(){
        cy.visit('https://www.saucedemo.com/')
    }

    preeencherCredenciaisValidas(){
       cy.get(el.username).type('standard_user')
       cy.get(el.password).type('secret_sauce')
       cy.get(el.button).click()


    }
    
    preeencherCredenciaisInvalidas(){
       cy.get(el.username).type('user.invalid')
       cy.get(el.password).type('senha')
       cy.get(el.button).click()


    }
    validarErrorCredInv(){
        cy.get(el.error).should('contain.text',
        'Epic sadface: Username and password do not match any user in this service')
       
        cy.url().should('eql', 'https://www.saucedemo.com/')

        cy.screenshot('erro credenciais invalidads')

    }
}

export default new Login()