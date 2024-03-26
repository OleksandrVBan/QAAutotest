class MiniCart {

    getMiniCartIcon(){
        return  cy.get('.top_cart').find('.icon').find('[alt="Cart"]')
    }

    getMiniCartTitle(){
        return cy.get('.title').contains('SHOPPING CART')
    }

    getMiniCartInfo(){
        return cy.get('.info')
    }

    getMiniCartWindowProducttName1(){
        return cy.get('.hover_cart_wrapper').find('.name').eq(0)
    }

    getMiniCartWindowProductName2(){
        return cy.get('.hover_cart_wrapper').find('.name').eq(1)
    }

    getMiniCartWindowProducttName3(){
        return cy.get('.hover_cart_wrapper').find('.name').eq(2)
    }

    getMiniCartWindowProductName4(){
        return cy.get('.hover_cart_wrapper').find('.name').eq(3)
    }

    ////////////////////////////////////////////////////////////

    getMiniCartProductItemPrice1(){
        return cy.get('.hover_cart_wrapper').find('.price').eq(0)
    }

    getMiniCartProductItemPrice2(){
        return cy.get('.hover_cart_wrapper').find('.price').eq(1)
    }

    getMiniCartProductItemPrice3(){
        return cy.get('.hover_cart_wrapper').find('.price').eq(2)
    }

    getMiniCartProductItemPrice4(){
        return cy.get('.hover_cart_wrapper').find('.price').eq(3)
    }

    /////////////////////////////////////////////////////////////

    getMiniCartTotal(){
        return cy.get('.hover_cart_wrapper').find('.total')
    }

    getMiniCartButtonView(){
        return cy.get('.hover_cart_wrapper').find('.view')
    }

    getMiniCartButtonCheckout(){
        return cy.get('.hover_cart_wrapper').find('.proceed')
    }



    



  

   


}

export default new MiniCart;