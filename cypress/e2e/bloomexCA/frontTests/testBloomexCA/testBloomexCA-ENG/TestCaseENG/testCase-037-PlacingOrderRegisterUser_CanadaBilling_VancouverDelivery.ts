import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import '@shelex/cypress-allure-plugin';
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'

describe("Test case № 37-Placing an order with Registration using Credit Cart-CanadaBilling", () => {

    it("Placing an order with Registration of user using Credit Cart successfully-Test case № 37", () => {

        selectProduct.chooseProductTeddy();
        AuthorizationCreds.registerLogin()
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test1();
                
        addressData.SecondStep_PostalCode();
        Checkout.fillSecondStepchooseData();
        Checkout.fillSecondStepPayFromRealCart();
        CheckoutSecondStep_PO.getButtonPay().click();
        
        cy.pause();
        cy.wait(2000);
        addressData.ThirdStepAddress_Vancouver4();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(10000);
        cy.get('.image').should('contain', 'Order');

    })
})