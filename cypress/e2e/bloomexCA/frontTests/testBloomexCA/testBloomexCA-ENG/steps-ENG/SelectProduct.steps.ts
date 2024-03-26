/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';
import ProductListingUnder20 from '../../pages/ProductListingUnder20_PO';
import ProductPage_PO from '../../pages/ProductPage_PO';
import Cart_PO from '../../pages/Cart_PO';
import SearchSteps from './Search.steps';
import ProductListingUnder20_PO from '../../pages/ProductListingUnder20_PO';
import MiniCartSteps from './MiniCart.steps';



class selectProduct {

    //open section with products under 20$
    openProductPageUnder20() {
        HomePage_PO.getButtonByPrice().trigger('mousemove')
        HomePage_PO.getButtonByPrice_Under20().click({ force: true })
    }

    //to open detail product page
    openProductPageSingleRose() {
        this.openProductPageUnder20();
        ProductListingUnder20.getproductSingleRose().trigger('mousemove', 'center').click({ force: true })
        cy.wait(100)
    }

    openProductPageTeddy() {
        this.openProductPageUnder20();
        ProductListingUnder20.getproductTeddy().trigger('mousemove', 'center').click({ force: true })
        cy.wait(100)
    }

    openVoucher() {
        SearchSteps.checkSearchVoucher();
        ProductListingUnder20_PO.getProduct('$20 Voucher').trigger('mousemove', 'center').click({ force: true })
    }

    openProductSuperSnapdragons() {
        this.openProductPageUnder20();
        ProductListingUnder20_PO.getProduct('Super Snapdragons').trigger('mousemove', 'center').click({ force: true })
    }

    //open product OUT OF SEASON
    openProduct20xBulkSunflowers(){
        HomePage_PO.getButtonBulkFlowers_BulkSunflowers().click({ force: true })
        cy.reload()
        ProductListingUnder20_PO.getProduct('20 x Bulk Sunflowers').click({ force: true })
       
    }

    //click on Button Add To Cart 
    addToCartFromDetailProductPage() {
        ProductPage_PO.getButtonAddToCart().trigger('mousemove', 'center').click({ force: true })
        cy.wait(1000)
    }

    //proceed to Cart from pop-up
    ProceedToCartFromPopUpToCheckout() {
        this.addToCartFromDetailProductPage();
        Cart_PO.getButtonProcedToCheckout().click({ force: true })
        cy.wait(1000)
        // HomePage_PO.getButtonCloseChat().click({ force: true })

    }

    //proceed to next step to Login before Checkout from Cart page - without Checkout Specials page
    ProceedToCheckoutWithOutCheckoutPage() {
        this.ProceedToCartFromPopUpToCheckout();
        Cart_PO.getButtonprocedToCheckout().click({ force: true })
        cy.wait(1000)
    }

    //proceed to next step to  Checkout Specials page before Login before Checkout from Cart page - With Checkout Specials page
    ProceedToCheckoutWithCheckoutPage() {
        this.ProceedToCheckoutWithOutCheckoutPage()
        Cart_PO.getButtonprocedToCheckout().click({ force: true })

        cy.wait(1000)
    }

    //full scenario of adding product via deatil page - without Checkout Specials page
    chooseProductTeddy() {
        this.openProductPageTeddy();
        this.ProceedToCheckoutWithOutCheckoutPage();

        cy.wait(1000)
    }

    //full scenario of adding product via deatil page - With Checkout Specials page
    // With Change Size - 3 proceed to checkout
    chooseProductSingleRose() {
        this.openProductPageSingleRose()
        this.ProceedToCheckoutWithCheckoutPage();

    }


    chooseProductSuperSnapdragons() {
        this.openProductSuperSnapdragons()
        this.ProceedToCheckoutWithCheckoutPage();
    }


    chooseProductVoucher() {
        this.openVoucher();
        this.ProceedToCheckoutWithCheckoutPage();
    }

    












}

export default new selectProduct;


