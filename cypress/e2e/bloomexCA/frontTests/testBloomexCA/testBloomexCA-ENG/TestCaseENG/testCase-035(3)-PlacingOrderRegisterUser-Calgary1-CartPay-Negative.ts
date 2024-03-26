/// <reference types = "Cypress" />
import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'
import CheckoutSteps from '../steps-ENG/Checkout.steps'
import CartData from 'cypress/e2e/bloomexCA/data/CartData'

describe("Test case № 35(1) -PlacingOrder-Calgary1-CartPayment-Canadabilling", () => {

  it("Placing an order with Logged in user successfully-Calgary1-Canadabilling", () => {
    cy.visit("/")
    selectProduct.chooseProductTeddy();
    AuthorizationCreds.registerLogin();
    cy.wait(100);
    cy.pause();
    addressData.FistStepAddress_Test1();
    cy.wait(2000);

    addressData.SecondStep_PostalCode();
    Checkout.fillSecondStepchooseData();
    CartData.dataFillSecondStepEnterRealCart_incorrectNumberCart();

    CheckoutSecondStep_PO.getButtonPay().click();
    cy.pause();
    cy.get('[class="result"]').should('contain', 'Please confirm Credit Card details and try again.');
    cy.log('End error #1 incorrect numbercart')

    CartData.dataFillSecondStepEnterRealCart_incorrectCCScode();
 
    CheckoutSecondStep_PO.getButtonPay().click();
    cy.pause();
    cy.get('[class="result"]').should('contain', 'Please confirm Credit Card details and try again.');
    cy.log('Enderror #2 incorrect ccscode')

    CartData.dataFillSecondStepEnterRealCart_incorrectMonth();

    CheckoutSecondStep_PO.getButtonPay().click();
    cy.pause();
    cy.get('[class="result"]').should('contain', 'Please confirm Credit Card details and try again.');
    cy.get('[id="notification"]').should('contain', 'Payment Declined. Verify card details or contact your bank. Repeated payment declines will result in account suspension. For assistance, call 1-888-912-5666.');
    cy.log('End error #3 incorrect monthcart')

    CartData.dataFillSecondStepEnterRealCart_incorrectYear();

    CheckoutSecondStep_PO.getButtonPay().click();
    cy.pause();
    cy.get('[id="notification"]').should('contain', 'Payment Declined. Your Account is Now Blocked. To Place an Order or Unblock Your Account, Call Now: 1-888-912-5666.');
   
    cy.log('End error #4 incorrect yearcart and account should be blocked')

    cy.wait(3000);

   })








})