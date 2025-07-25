export const elements2 ={
    AddButton: (itemName)=> `[data-test="add-to-cart-${Transform(itemName)}"]`,
    RevomovefromCart: (itemName)=> `[data-test="remove-${Transform(itemName)}"]`
}

function Transform(texto){
    return texto.replaceAll(' ', '-').toLowerCase()

}