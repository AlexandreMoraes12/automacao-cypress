class Cart{
    validarProdutoNocarrinho(name){
        cy.contains(name).should('be.visible')
        cy.screenshot('produto adicionado')
        cy.url().should('eql', 'https://www.saucedemo.com/cart.html')
    }

}

export default new Cart()