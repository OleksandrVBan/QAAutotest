import selectProduct from '../steps-FR/SelectProduct.stepsFR'
import CheckoutFR from '../steps-FR/Checkout.stepsFR'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import HomePage_PO from '../../pages/Homepage_PO';
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO';

import '@shelex/cypress-allure-plugin';

describe("Test case №39(1)-PlacingOrder-LogginUser-CartPayment-Canadabilling-with using Coupon-FR", () => {

    it("PlacingOrder-LogginUser-CartPayment-Canadabilling-with using Coupon-FR-Test case №39(1)", () => {

        HomePage_PO.getButtonLanguageChange().click()

        selectProduct.chooseProductTeddyFR();
        AuthorizationCreds.login_autotestscypressFR()
        cy.wait(100);
        addressData.FistStepAddress_Canada_Billing();
        cy.wait(2000);
        
        CheckoutFR.checkSecondStep_ApplyingCouponeFR();
        addressData.SecondStep_PostalCode_FR();
        CheckoutFR.fillSecondStepchooseDataFR();
        CheckoutFR.fillSecondStepPayFromRealCartFR();
        CheckoutFR.checkSecondStep_OrderPriceDetailCouponeFR();
        CheckoutSecondStep_PO.getButtonPAY_GoToDelivery().click();

        cy.pause();
        cy.wait(2000);
        addressData.ThirdStepAddress_Vancouver4FR();
        CheckoutFR.fillThirdStepOccasionAnd3fielsFR();
        CheckoutFR.CompleteOrderFR();
        cy.wait(3000);
        
        

    })
})


