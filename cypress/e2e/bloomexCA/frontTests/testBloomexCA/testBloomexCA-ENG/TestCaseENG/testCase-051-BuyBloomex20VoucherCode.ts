/// <reference types = "Cypress" />
import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'


describe("Test case №51 - Buy Bloomex $20.00 voucher code", () => {

    it("Buy Bloomex $20.00 voucher code- Test case № 51", () => {
        cy.visit("/")
       
        selectProduct.chooseProductVoucher();

        AuthorizationCreds.login_autotestscypress();
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test1();
        cy.wait(2000);
        
        addressData.SecondStep_PostalCode();
        Checkout.fillSecondStepchooseData();
        Checkout.fillSecondStepPayFromRealCart();
        CheckoutSecondStep_PO.getButtonPay().click();

        cy.pause();
        cy.wait(2000);
        
        cy.get('.image').should('contain', 'Order');
               
    })


})