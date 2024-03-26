import Homepage_PO from '../../pages/Homepage_PO'
import '@shelex/cypress-allure-plugin';
import ChangingLanguage from '../steps-ENG/ChangingLanguage.steps'


describe("Test case №8-Check Changing language", () => {

    it('Check Changing language  - Test case №8', () => {
        cy.allure().suite('Test case №8 - Check Changing language');
        cy.allure().description('Test case №8 - Check Changing language');
        
        ChangingLanguage.changingLanguage();
        
    })
})