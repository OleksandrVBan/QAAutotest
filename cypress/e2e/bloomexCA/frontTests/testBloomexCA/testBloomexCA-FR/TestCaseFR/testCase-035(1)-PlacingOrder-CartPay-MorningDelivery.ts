import selectProduct from '../steps-FR/SelectProduct.stepsFR'
import CheckoutFR from '../steps-FR/Checkout.stepsFR'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import HomePage_PO from '../../pages/Homepage_PO';
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO';


describe("Test case № 35(1) -PlacingOrder-Calgary2-CartPayment-USAbilling", () => {

    it("Placing an order with Logged in user successfully-Calgary2-USAbilling-Test case № 35(1)", () => {

        HomePage_PO.getButtonLanguageChange().click()

        selectProduct.chooseProductSingleRoseFR();
        AuthorizationCreds.login_autotestscypressFR()
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test_USA_Billing();
        cy.wait(2000);

        addressData.SecondStep_PostalCode_FR();
        CheckoutFR.fillSecondStepchooseDataMorningDeliveryFR();
        CheckoutFR.fillSecondStepPayFromRealCartFR();
        CheckoutSecondStep_PO.getButtonPAY_GoToDelivery().click();
        cy.pause();
        cy.wait(2000);

        addressData.ThirdStepAddress_Vancouver4FR();
        CheckoutFR.fillThirdStepOccasionAnd3fielsFR();
        CheckoutFR.CompleteOrderFR();
        cy.wait(3000);
        // cy.get('.breadcrumb_active').should('contain', "NOUS VOUS REMERCIONS DE VOTRE COMMANDE");


    })
})