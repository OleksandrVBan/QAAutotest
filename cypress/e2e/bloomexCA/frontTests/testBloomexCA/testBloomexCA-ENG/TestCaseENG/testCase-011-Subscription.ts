import SubscriptionEmail from '../steps-ENG/Subscribtion.steps'


describe("Test case №11-Subscription", () => {

    it('Check Subscription  - Test case №11', () => {

        cy.allure().description('Test case №11 - Check Subscription');
        cy.allure().suite('Test case №11 - Check Subscription');

        cy.allure().step('Check Subscription', true);
        cy.allure().startStep('Check Subscription')
        cy.log('Check Subscription')

        SubscriptionEmail.subscriptionForEmail();
        
        cy.allure().endStep()

    })
})

