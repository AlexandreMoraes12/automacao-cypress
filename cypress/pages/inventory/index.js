import { elements2 as el } from "./elements"

class Inventory{
    validarAcesso(){
    cy.url().should('eql', 'https://www.saucedemo.com/inventory.html')
    cy.screenshot('Acesso a pagina de inventario')
    }

    addProduto(itemName){
        cy.get(el.AddButton(itemName)).click()
    }

    removerProduto(itemName){
        cy.get(el.RevomovefromCart(itemName)).click()
    }

}

export default new Inventory()