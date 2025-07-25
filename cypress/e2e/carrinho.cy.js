import login from "../pages/login"
import Inventory from "../pages/inventory"
import cabecalho from "../pages/header"
import cart from "../pages/cart"
import inventory from "../pages/inventory"
describe('carrinho', () =>{
    beforeEach(() => {
        //Arrange
        login.visitarPagina()
        login.preeencherCredenciaisValidas()
    })
    it('Adicionar produto ao carrinho com sucesso', ()=>{

        //Act
        Inventory.addProduto('Sauce Labs Backpack')
        //Assert
        const qtdItensAdd = 1

        cabecalho.validarAddAocarrinho(qtdItensAdd)
        
        cabecalho.navtocart()

        cart.validarProdutoNocarrinho('Sauce Labs Backpack')

    })

    it('remover produto do carrinho com sucesso',()=>{
        //Arrange
        Inventory.addProduto('Sauce Labs Backpack')
        
    
        //Act
        Inventory.removerProduto('Sauce Labs Backpack')
        
        

        //Assert
        cabecalho.validarcarrinhosemitens()
        
    })
})