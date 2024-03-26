/// <reference types = "Cypress" />
import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import authorizationCreds from '../../../../data/AuthorizationCreds'
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'

describe("Test case № 36-PlacingOrder_Logged_in_user_RedeemCredit-Toronto1", () => {

  it("Placing an order with Logged in user successfully RedeemCredit-Toronto1-Test case № 36", () => {
    cy.visit("/")
    selectProduct.chooseProductTeddy();
    authorizationCreds.login_autotestscypress();
    cy.wait(100);
    cy.pause();
    addressData.FistStepAddress_Test1();
    cy.wait(2000);

    addressData.SecondStep_PostalCode();
    Checkout.fillSecondStepchooseData();
    Checkout.fillSecondStepRedeemCredit();
    CheckoutSecondStep_PO.getButtonPay().click();

    cy.pause();
    cy.wait(2000);
    addressData.ThirdStepAddress_Toronto1();
    Checkout.fillThirdStepOccasionAnd3fiels();
    Checkout.CompleteOrder();
    cy.wait(2000);
    cy.get('.image').should('contain', 'Order');
  })

  // it("Placing an order with Logged in user successfully-Toronto2", () => {
  //   cy.visit("/")
  //   selectProduct.chooseProduct();
  //   authorizationCreds.login_autotestscypress();
  //   cy.wait(100);
  //   cy.pause();
  //   addressData.FistStepAddress_Test1();
  //   cy.wait(2000);

  //      addressData.SecondStep_PostalCode();
  // Checkout.fillSecondStepchooseData();
  // Checkout.fillSecondStepRedeemCredit();
  // CheckoutSecondStep_PO.getButtonPay().click();

  //   cy.pause();
  //   cy.wait(2000);
  //   addressData.ThirdStepAddress_Toronto2();
  //   checkout.fillThirdStepOccasionAnd3fiels();
  //   checkout.CompleteOrder();
  //   cy.wait(2000);
  //   cy.get('.image').should('contain', 'Order');
  // })

  // it("Placing an order with Logged in user successfully-Toronto3", () => {
  //   cy.visit("/")
  //   selectProduct.chooseProduct();
  //   authorizationCreds.login_autotestscypress();
  //   cy.wait(100);
  //   cy.pause();
  //   addressData.FistStepAddress_Test1();
  //   cy.wait(2000);

  // addressData.SecondStep_PostalCode();
  // Checkout.fillSecondStepchooseData();
  // Checkout.fillSecondStepRedeemCredit();
  // CheckoutSecondStep_PO.getButtonPay().click();

  //   cy.pause();
  //   cy.wait(2000);
  //   addressData.ThirdStepAddress_Toronto3();
  //   checkout.fillThirdStepOccasionAnd3fiels();
  //   checkout.CompleteOrder();
  //   cy.wait(2000);
  //   cy.get('.image').should('contain', 'Order');
  // })

  // it("Placing an order with Logged in user successfully-Toronto4", () => {
  //   cy.visit("/")
  //   selectProduct.chooseProduct();
  //   authorizationCreds.login_autotestscypress();
  //   cy.wait(100);
  //   cy.pause();
  //   addressData.FistStepAddress_Test1();
  //   cy.wait(2000);

  // addressData.SecondStep_PostalCode();
  // Checkout.fillSecondStepchooseData();
  // Checkout.fillSecondStepRedeemCredit();
  // CheckoutSecondStep_PO.getButtonPay().click();

  //   cy.pause();
  //   cy.wait(2000);
  //   addressData.ThirdStepAddress_Toronto4();
  //   checkout.fillThirdStepOccasionAnd3fiels();
  //   checkout.CompleteOrder();
  //   cy.wait(2000);
  //   cy.get('.image').should('contain', 'Order');
  // })

  // it("Placing an order with Logged in user successfully-Toronto5", () => {
  //   cy.visit("/")
  //   selectProduct.chooseProduct();
  //   authorizationCreds.login_autotestscypress();
  //   cy.wait(100);
  //   cy.pause();
  //   addressData.FistStepAddress_Test1();
  //   cy.wait(2000);

  // addressData.SecondStep_PostalCode();
  // Checkout.fillSecondStepchooseData();
  // Checkout.fillSecondStepRedeemCredit();
  // CheckoutSecondStep_PO.getButtonPay().click();

  //   cy.pause();
  //   cy.wait(2000);
  //   addressData.ThirdStepAddress_Toronto5();
  //   checkout.fillThirdStepOccasionAnd3fiels();
  //   checkout.CompleteOrder();
  //   cy.wait(2000);
  //   cy.get('.image').should('contain', 'Order');
  // })

  // it("Placing an order with Logged in user successfully-Toronto6", () => {
  //   cy.visit("/")
  //   selectProduct.chooseProduct();
  //   authorizationCreds.login_autotestscypress();
  //   cy.wait(100);
  //   cy.pause();
  //   addressData.FistStepAddress_Test1();
  //   cy.wait(2000);

  // addressData.SecondStep_PostalCode();
  // Checkout.fillSecondStepchooseData();
  // Checkout.fillSecondStepRedeemCredit();
  // CheckoutSecondStep_PO.getButtonPay().click();

  //   cy.pause();
  //   cy.wait(2000);
  //   addressData.ThirdStepAddress_Toronto6();
  //   checkout.fillThirdStepOccasionAnd3fiels();
  //   checkout.CompleteOrder();
  //   cy.wait(2000);
  //   cy.get('.image').should('contain', 'Order');
  // })


  // it("Placing an order with Logged in user successfully-Toronto7", () => {
  //   cy.visit("/")
  //   selectProduct.chooseProduct();
  //   authorizationCreds.login_autotestscypress();
  //   cy.wait(100);
  //   cy.pause();
  //   addressData.FistStepAddress_Test1();
  //   cy.wait(2000);

  // addressData.SecondStep_PostalCode();
  // Checkout.fillSecondStepchooseData();
  // Checkout.fillSecondStepRedeemCredit();
  // CheckoutSecondStep_PO.getButtonPay().click();

  //   cy.pause();
  //   cy.wait(2000);
  //   addressData.ThirdStepAddress_Toronto7();
  //   checkout.fillThirdStepOccasionAnd3fiels();
  //   checkout.CompleteOrder();
  //   cy.wait(2000);
  //   cy.get('.image').should('contain', 'Order');
  // })

})