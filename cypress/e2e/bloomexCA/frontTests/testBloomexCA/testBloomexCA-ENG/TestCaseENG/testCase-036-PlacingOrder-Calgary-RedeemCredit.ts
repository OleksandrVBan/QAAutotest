/// <reference types = "Cypress" />
import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'

describe("Test case № 36-PlacingOrder_Logged_in_user_RedeemCredit-Calgary", () => {

    it.only("Placing an order with Logged in user successfully-Calgary1-RedeemCredit-Test case № 36", () => {
        cy.visit("/")
        selectProduct.chooseProductTeddy();
        AuthorizationCreds.login_autotestscypress();
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test1();
        cy.wait(2000);

        addressData.SecondStep_PostalCode();
        Checkout.fillSecondStepchooseData();
        Checkout.fillSecondStepRedeemCredit();
        CheckoutSecondStep_PO.getButtonPay().click();
        cy.pause();

        addressData.ThirdStepAddress_Calgary1();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order');
    })

    it("Placing an order with Logged in user successfully-Calgary2", () => {
        cy.visit("/")
        selectProduct.chooseProductTeddy();
        AuthorizationCreds.login_autotestscypress();
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test1();
        cy.wait(2000);

        addressData.SecondStep_PostalCode();
        Checkout.fillSecondStepchooseData();
        Checkout.fillSecondStepRedeemCredit();
        CheckoutSecondStep_PO.getButtonPay().click();

        cy.pause();

        addressData.ThirdStepAddress_Calgary2();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order');
    })

    it("Placing an order with Logged in user successfully-Calgary3", () => {
        cy.visit("/")
        selectProduct.chooseProductTeddy();
        AuthorizationCreds.login_autotestscypress();
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test1();
        cy.wait(2000);

        addressData.SecondStep_PostalCode();
        Checkout.fillSecondStepchooseData();
        Checkout.fillSecondStepRedeemCredit();
        CheckoutSecondStep_PO.getButtonPay().click();

        cy.pause();

        addressData.ThirdStepAddress_Calgary3();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order');
    })

    it("Placing an order with Logged in user successfully-Calgary4", () => {
        cy.visit("/")
        selectProduct.chooseProductTeddy();
        AuthorizationCreds.login_autotestscypress();
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test1();
        cy.wait(2000);

        addressData.SecondStep_PostalCode();
        Checkout.fillSecondStepchooseData();
        Checkout.fillSecondStepRedeemCredit();
        CheckoutSecondStep_PO.getButtonPay().click();

        cy.pause();

        addressData.ThirdStepAddress_Calgary4();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order');
    })

    it("Placing an order with Logged in user successfully-Calgary5", () => {
        cy.visit("/")
        selectProduct.chooseProductTeddy();
        AuthorizationCreds.login_autotestscypress();
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test1();
        cy.wait(2000);

        addressData.SecondStep_PostalCode();
        Checkout.fillSecondStepchooseData();
        Checkout.fillSecondStepRedeemCredit();
        CheckoutSecondStep_PO.getButtonPay().click();

        cy.pause();

        addressData.ThirdStepAddress_Calgary5();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order');
    })

    it("Placing an order with Logged in user successfully-Calgary6", () => {
        cy.visit("/")
        selectProduct.chooseProductTeddy();
        AuthorizationCreds.login_autotestscypress();
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test1();
        cy.wait(2000);

        addressData.SecondStep_PostalCode();
        Checkout.fillSecondStepchooseData();
        Checkout.fillSecondStepRedeemCredit();
        CheckoutSecondStep_PO.getButtonPay().click();

        cy.pause();

        addressData.ThirdStepAddress_Calgary6();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order');
    })


})