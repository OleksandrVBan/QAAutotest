import CorporateAccountSteps from '../steps-ENG/CorporateAccount.steps';


describe("Test case №69-Check sending 20 corporate discount application", () => {

    it('Check sending 20 corporate discount application - Test case №69', () => {
        cy.allure().suite('Test case №69 - Check sending 20 corporate discount application');
        cy.allure().description('Check sending 20 corporate discount application');

        CorporateAccountSteps.checkLinkCLientTestimonials();
        CorporateAccountSteps.checkSendingApplicationFor20CorporateDiscount_withCorrectData();
        
        

    })

})