/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';
import ProductListingUnder20 from '../../pages/ProductListingUnder20_PO';
import ProductPage_PO from '../../pages/ProductPage_PO';
import Cart_PO from '../../pages/Cart_PO';



class selectProduct {

    // chooseProduct() {
    //     HomePage_PO.getButtonParPrix().trigger('mousemove')
    //     HomePage_PO.getButtonParPrix_MoinsDe20$().click({ force: true })
    //     ProductListingUnder20.getProductOursonEnPeluche().trigger('mousemove', 'center').click({ force: true })
    //     cy.wait(100)
    //     ProductPage.getButtonAjouterAuPanier().trigger('mousemove', 'center').click({ force: true })
    //     cy.wait(1000)
    //     Cart_PO.getButtonPasserLaCaisse().click({ force: true })
    //     cy.wait(1000)
    //     Cart_PO.getButtonCOMMANDER().click({ force: true })
    //     cy.wait(1000)
    // }

     //open section with products under 20$
     openProductPageUnder20FR(){
        HomePage_PO.getButtonParPrix().trigger('mousemove')
        HomePage_PO.getButtonParPrix_MoinsDe20$().click({ force: true })
    }
    




    //to open detail product page

// Without Size
    openProductPageTeddyFR(){
        this.openProductPageUnder20FR();
        ProductListingUnder20.getProductOursonEnPeluche().trigger('mousemove', 'center').click({ force: true })
        cy.wait(100)
    }

    // With Size
    openProductPageSingleRoseFR(){
        this.openProductPageUnder20FR();
        ProductListingUnder20.getproductUneSeuleRoseFR().trigger('mousemove', 'center').click({ force: true })
        cy.wait(100)
    }

   

    // Sold_out (товар меняется от сезона к сезону , нужно выбирать актуальный на момент теста )

    openProductPageLesOmbresDeRoseFR(){
        this.openProductPageUnder20FR();
        ProductListingUnder20.getproductLesOmbresDeRoseFR().trigger('mousemove', 'center').click({ force: true })
        cy.wait(100)
    }

    







    //click on Button Add To Cart 
    addToCartFromDetailProductPageFR(){
        ProductPage_PO.getButtonAjouterAuPanier().trigger('mousemove', 'center').click({ force: true })
        cy.wait(1000)
    }
    
    //proceed to Cart from pop-up
    ProceedToCartFromPopUpToCheckoutFR(){
        this.addToCartFromDetailProductPageFR();
        Cart_PO.getButtonPasserLaCaisse().click({ force: true })
       
        
       
    }

     //proceed to next step to Login before Checkout from Cart page - without Checkout Specials page
     ProceedToCheckoutWithOutCheckoutPageFR(){
        this.ProceedToCartFromPopUpToCheckoutFR();
        Cart_PO.getButtonCOMMANDER().click({ force: true })       
        cy.wait(1000)
    }

    //proceed to next step to  Checkout Specials page before Login before Checkout from Cart page - With Checkout Specials page
    ProceedToCheckoutWithCheckoutPageFR(){
        this.ProceedToCheckoutWithOutCheckoutPageFR()
        Cart_PO.getButtonCOMMANDER().click({ force: true })
        
        cy.wait(1000)
    }

    //full scenario of adding product via deatil page - without Checkout Specials page
    // without Change Size - 2 proceed to checkout
    chooseProductTeddyFR() {
        this.openProductPageTeddyFR();
        this.ProceedToCheckoutWithOutCheckoutPageFR();
        
        cy.wait(1000)
    }

    //full scenario of adding product via deatil page - With Checkout Specials page
    // With Change Size - 3 proceed to checkout
    chooseProductSingleRoseFR() {
        this.openProductPageSingleRoseFR()
        this.ProceedToCheckoutWithCheckoutPageFR();

   }

}

export default new selectProduct;
