import Inventory from "../pages/inventory"
import login from "../pages/login"

describe('Login',()=>{
    beforeEach(() =>{
        login.visitarPagina()
    })

    it('realizar login com sucesso',()=>{

        //arrange
        login.preeencherCredenciaisValidas()
        
        //act
        Inventory.validarAcesso()
      
    } )

    it('realizar login sem sucesso', ()=>{
        //arrange
        
       //act
       login.preeencherCredenciaisInvalidas()
       
       // assert
       login.validarErrorCredInv()
    })
})