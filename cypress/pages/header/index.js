import { elements as el } from "./elements"

class cabecalho{
    validarAddAocarrinho(quantidade){
        
        cy.get(el.cartBadge).should('be.visible').and('have.text', quantidade.toString())
        
    }
    navtocart(){
        cy.get(el.cartButton).click()
    }

    validarcarrinhosemitens(){
        cy.get(el.cartBadge).should('not.exist')

        cy.screenshot('produto removido')
    }
}

export default new cabecalho()