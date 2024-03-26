import selectProduct from '../steps-FR/SelectProduct.stepsFR'
import CheckoutFR from '../steps-FR/Checkout.stepsFR'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import HomePage_PO from '../../pages/Homepage_PO';

import '@shelex/cypress-allure-plugin';

describe("Test case №40-Placing an order with Registration using Credit Cart-FR", () => {

    it("Placing an order with Registration of user using Credit Cart successfully-Test case №40", () => {

        HomePage_PO.getButtonLanguageChange().click()

        selectProduct.chooseProductTeddyFR();
        AuthorizationCreds.login_autotestscypressFR()
        cy.wait(100);
        addressData.FistStepAddress_Canada_Billing();
        cy.wait(2000);
        
        CheckoutFR.fillSecond_Coupone_negativeFR();
        

    })
})
