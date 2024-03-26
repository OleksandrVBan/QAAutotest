/// <reference types = "Cypress" />
import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'


describe("Test case №40 -using Coupon-Negative checks", () => {

    it("Using Coupon-Negative checks- Test case № 40", () => {
        cy.visit("/")
        selectProduct.chooseProductTeddy();
        AuthorizationCreds.login_autotestscypress();
        cy.wait(100);
        cy.pause();
        addressData.FistStepAddress_Test1();
        cy.wait(2000);

        Checkout.checkfillSecond_Coupone_negative();
               
        
    })


})