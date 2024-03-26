/// <reference types = "Cypress" />
import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'

describe("Test case № 35(1) -PlacingOrder-Calgary1-CartPayment-Canadabilling", () => {

    it("Placing an order with Logged in user successfully-Calgary1-Canadabilling", () => {
        cy.visit("/")
        selectProduct.chooseProductTeddy();
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

        addressData.ThirdStepAddress_Calgary1();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order');
    })


})