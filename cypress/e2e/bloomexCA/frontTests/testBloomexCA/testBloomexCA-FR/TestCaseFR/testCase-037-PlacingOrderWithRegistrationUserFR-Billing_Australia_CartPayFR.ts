import selectProduct from '../steps-FR/SelectProduct.stepsFR'
import CheckoutFR from '../steps-FR/Checkout.stepsFR'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import HomePage_PO from '../../pages/Homepage_PO';
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO';
import '@shelex/cypress-allure-plugin';

describe("Placing an order with Registration using Credit Cart-FR", () => {

    it("Placing an order with Registration of user using Credit Cart successfully", () => {

        HomePage_PO.getButtonLanguageChange().click()

        selectProduct.chooseProductTeddyFR();
        AuthorizationCreds.registerNewUserFR()
        cy.wait(100);
        addressData.FistStepAddress_Australia_Billing();
        cy.wait(2000);

        addressData.SecondStep_PostalCode_FR();
        CheckoutFR.fillSecondStepchooseDataFR();
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