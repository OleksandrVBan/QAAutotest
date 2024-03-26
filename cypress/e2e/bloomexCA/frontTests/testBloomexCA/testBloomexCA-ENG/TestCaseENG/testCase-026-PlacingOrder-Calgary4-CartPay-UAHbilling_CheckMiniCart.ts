/// <reference types = "Cypress" />
import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'
import MiniCartSteps from '../steps-ENG/MiniCart.steps'

describe("Test case № 35(1)-PlacingOrder-Calgary4-CartPayment-UAHbilling", () => {

       it("Placing an order with Logged in user successfully-Calgary4-Test case № 35(1)", () => {
        cy.visit("/")
        MiniCartSteps.checkMiniCartInfoEmpty();
        selectProduct.chooseProductSingleRose();
        MiniCartSteps.getMiniCartWindow();
        MiniCartSteps.checkMiniCartTitle();
        MiniCartSteps.checkMiniCartItemQuantity('1');
        MiniCartSteps.checkMiniCartPriceItem('9.99');
        MiniCartSteps.checkMiniCartButtonView();
        MiniCartSteps.checkMiniCartButtonCheckout();

        cy.visit("/")
        selectProduct.chooseProductTeddy();
        MiniCartSteps.checkMiniCartItemQuantity('2');
        MiniCartSteps.checkMiniCartPriceItem('19.98');

        
        // AuthorizationCreds.login_autotestscypress();
        // cy.wait(100);
        // cy.pause();
        // addressData.FistStepAddress_Test_Ukraine_Billing();
        // cy.wait(2000);

        // addressData.SecondStep_PostalCode();
        // Checkout.fillSecondStepchooseData();
        // Checkout.fillSecondStepPayFromRealCart();
        // CheckoutSecondStep_PO.getButtonPay().click();

        // cy.pause();

        // addressData.ThirdStepAddress_Calgary4();
        // Checkout.fillThirdStepOccasionAnd3fiels();
        // Checkout.CompleteOrder();
        // cy.wait(2000);
        // cy.get('.image').should('contain', 'Order');
    })


})