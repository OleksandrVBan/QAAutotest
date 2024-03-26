import SubscriptionEmail from '../steps-FR/Subscribtion.steps';
import HomePage_PO from '../../pages/Homepage_PO';




describe("Test case №11 Subscription-FR", () => {

    it('Check Subscription  - Test case №11', () => {

        cy.allure().description('Test case №11 - Check Subscription');
        cy.allure().suite('Test case №11 - Check Subscription');

        cy.allure().step('Check Subscription', true);
        cy.allure().startStep('Check Subscription')
        cy.log('Check Subscription')

        HomePage_PO.getButtonLanguageChange().click()

        SubscriptionEmail.subscriptionForEmail();
        
        cy.allure().endStep()

    })
})
