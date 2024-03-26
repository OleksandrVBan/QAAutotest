import Homepage_PO from '../../pages/Homepage_PO'
import '@shelex/cypress-allure-plugin';


describe("Test case №5-Contact Us page", () => {

    it('Check Contact Us page  - Test case №5', () => {
        cy.allure().suite('Test case №5 - Check Contact Us page');
        cy.allure().description('Test case №5 - Check Contact Us page');

        cy.allure().step('Check Contact Us page', true);
        cy.allure().startStep('Check Contact Us page')
        cy.log('Check Contact Us page')

        Homepage_PO.getButtonContactUs().click();
        cy.get('.breadcrumbs_wrapper').should('contain', 'contact')

        cy.allure().endStep()

    })
})