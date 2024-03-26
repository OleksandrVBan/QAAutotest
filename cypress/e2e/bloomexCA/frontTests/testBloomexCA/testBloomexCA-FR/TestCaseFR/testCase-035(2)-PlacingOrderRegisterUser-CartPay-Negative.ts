import SelectProduct from '../steps-FR/SelectProduct.stepsFR'
import CheckoutFR from '../steps-FR/Checkout.stepsFR'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import HomePage_PO from '../../pages/Homepage_PO';
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO';
import CartData from 'cypress/e2e/bloomexCA/data/CartData'

describe("Test case № 35(1) -PlacingOrder-Calgary1-CartPayment-Canadabilling", () => {

    it("Placing an order with Logged in user successfully-Calgary1-Canadabilling", () => {
     
      HomePage_PO.getButtonLanguageChange().click()
      SelectProduct.chooseProductTeddyFR();
      AuthorizationCreds.registerNewUserFR();
      cy.wait(100);
      cy.pause();
      addressData.FistStepAddress_Canada_Billing();
      cy.wait(2000);
  
      addressData.SecondStep_PostalCode_FR();
      CheckoutFR.fillSecondStepchooseDataFR();
      CartData.dataFillSecondStepEnterRealCart_incorrectNumberCart();
  
      CheckoutSecondStep_PO.getButtonPAY_GoToDelivery().click();
      cy.pause();
      cy.get('[class="result"]').should('contain', 'Veuillez confirmer les détails de votre carte de crédit et réessayer.');
      cy.log('End error #1 incorrect numbercart')
  
      CartData.dataFillSecondStepEnterRealCart_incorrectCCScode();
   
      CheckoutSecondStep_PO.getButtonPAY_GoToDelivery().click();
      cy.pause();
      cy.get('[class="result"]').should('contain', 'Veuillez confirmer les détails de votre carte de crédit et réessayer.');
      cy.log('Enderror #2 incorrect ccscode')
  
      CartData.dataFillSecondStepEnterRealCart_incorrectMonth();
  
      CheckoutSecondStep_PO.getButtonPAY_GoToDelivery().click();
      cy.pause();
      cy.get('[class="result"]').should('contain', 'Veuillez confirmer les détails de votre carte de crédit et réessayer.');
      cy.get('[id="notification"]').should('contain', "Paiement refusé. Vérifiez les détails de la carte ou contactez votre banque. Les refus de paiement répétés entraîneront la suspension du compte. Pour obtenir de l'aide, composez le 1-888-912-5666.");
      cy.log('End error #3 incorrect monthcart')
  
      CartData.dataFillSecondStepEnterRealCart_incorrectYear();
  
      CheckoutSecondStep_PO.getButtonPAY_GoToDelivery().click();
      cy.pause();
      cy.get('[class="result"]').should('contain', 'Veuillez confirmer les détails de votre carte de crédit et réessayer.');
      cy.get('[id="notification"]').should('contain', 'Paiement refusé. Votre compte est maintenant bloqué. Pour passer une commande ou débloquer votre compte, appelez maintenant : 1-888-912-5666.');
     
      cy.log('End error #4 incorrect yearcart and account should be blocked')
  
      cy.wait(3000);
  
     })
    })