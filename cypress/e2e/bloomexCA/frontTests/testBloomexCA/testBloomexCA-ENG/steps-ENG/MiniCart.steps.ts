import MiniCart from "../../pages/MiniCart";

class MiniCartSteps {

    getMiniCartWindow(){
        MiniCart.getMiniCartIcon().trigger('mouseover')
    }

    checkMiniCartTitle(){
        MiniCart.getMiniCartTitle().should('contain', 'SHOPPING CART')
    }

    checkMiniCartInfoEmpty(){
        MiniCart.getMiniCartInfo().should('contain', '0 Items - $0.00')
    }

    checkMiniCartItemQuantity(stringNumber: string){

        MiniCart.getMiniCartInfo().contains(stringNumber).should('exist');
        
    }

   

     ////////////////////////////////////////////////////////////////////
    
     
     checkMiniCartPriceItem(stringTitle: string) {

        MiniCart.getMiniCartInfo().contains(stringTitle).should('exist');

    };
   

      






    /////////////////////////////////////////////////////////////////////

    checkMiniCartProductNameSingleRose(){
        MiniCart.getMiniCartWindowProducttName1().should('contain', 'Single Rose')
    }

   
    ////////////////////////////////////////////////////////////////////
    checkMiniCartProductItemPrice1$99(){
        MiniCart.getMiniCartProductItemPrice1().should('contain', '9.99')
    }

    ////////////////////////////////////////////////////////////////////

    checkMiniCartTotalWithItem1$9(){
        MiniCart.getMiniCartTotal().should('contain', '$9.99')
    }

    checkMiniCartButtonView(){
        MiniCart.getMiniCartButtonView().should('contain', 'VIEW CART')
    }

    checkMiniCartButtonCheckout(){
        MiniCart.getMiniCartButtonCheckout().should('contain', 'CHECKOUT')
    }

    



 
    




    
}

export default new MiniCartSteps;