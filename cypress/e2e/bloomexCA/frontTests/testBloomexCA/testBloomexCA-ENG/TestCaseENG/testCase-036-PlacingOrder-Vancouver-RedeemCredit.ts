import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import '@shelex/cypress-allure-plugin';
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'


describe("Test case № 36-PlacingOrder_Logged_in_user_RedeemCredit-Vancouver", () => {

    it("Placing an order with Logged in user successfully using RedeemCredit-Vancouver-Test case № 36", () => {

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
        cy.wait(2000);
        addressData.ThirdStepAddress_Vancouver1();
        Checkout.fillThirdStepOccasionAnd3fiels();
        Checkout.CompleteOrder();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order').then(function(text2){

            cy.log(text2.text())
        })
        
        
        
        //.invoke('text').as('varName');
        
        
        // cy.get('@itemPrice').then($linkText => {
        //     var orderNumber = 0
        //     var orderNumber = $linkText.split('$')


        // })
     
    })
})