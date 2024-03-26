import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import '@shelex/cypress-allure-plugin';
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'
import ProductPage_PO from '../../pages/ProductPage_PO'

describe("Test case № 37-Placing an order with Registration using Credit Cart-USABilling", () => {

    it("Placing an order with Registration of user using Credit Cart successfully-Test case № 37", () => {

        selectProduct.openProductPageSingleRose();
           
        ProductPage_PO.getCheckboxSelectSizeDeluxe()
        ProductPage_PO.searchAndClickExtraTouchByTitle('Glass Vase');
        selectProduct.ProceedToCheckoutWithOutCheckoutPage();

        AuthorizationCreds.registerLogin()
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test_USA_Billing();
        cy.wait(2000);

        addressData.SecondStep_PostalCode();
        Checkout.fillSecondStepchooseData();
        Checkout.fillSecondStepPayFromRealCart();
        CheckoutSecondStep_PO.getButtonPay().click();
        
        cy.pause();
        cy.wait(2000);
        addressData.ThirdStepAddress_Toronto1();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order');
    
    })
})
