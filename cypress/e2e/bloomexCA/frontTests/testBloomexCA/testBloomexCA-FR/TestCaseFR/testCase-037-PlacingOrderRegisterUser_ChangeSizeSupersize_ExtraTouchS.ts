import SelectProduct from '../steps-FR/SelectProduct.stepsFR'
import CheckoutFR from '../steps-FR/Checkout.stepsFR'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import HomePage_PO from '../../pages/Homepage_PO';
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO';
import ProductPage_PO from '../../pages/ProductPage_PO'


describe("Test case № 37-(1) Placing an order with Registration using Credit Cart-AustraliaBilling", () => {

    it("Placing an order with Registration of user using Credit Cart successfully-Test case № 37", () => {
        
        HomePage_PO.getButtonLanguageChange().click()
        SelectProduct.openProductPageSingleRoseFR();
           
        ProductPage_PO.getCheckboxSelectSizeSupersize();
        ProductPage_PO.searchAndClickExtraTouchByTitle('Cartes de salutations');
        ProductPage_PO.searchAndClickExtraTouchByTitle('Petit ballon mylar');
        ProductPage_PO.searchAndClickExtraTouchByTitle("Chope d'Anniversaire");
        SelectProduct.ProceedToCheckoutWithOutCheckoutPageFR();

        AuthorizationCreds.registerLoginFR();
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Canada_Billing();
        cy.wait(2000);

        addressData.SecondStep_PostalCode();
        CheckoutFR.fillSecondStepchooseDataFR();
        CheckoutFR.fillSecondStepPayFromRealCartFR();
        CheckoutSecondStep_PO.getButtonPAY_GoToDelivery().click();

        cy.pause();
        cy.wait(2000);
        addressData.ThirdStepAddress_Calgary1();
        CheckoutFR.fillThirdStepOccasionAnd3fielsFR();
        CheckoutFR.CompleteOrderFR();
        cy.wait(2000);
        cy.get('.image').should('contain', 'Order');

    })
})