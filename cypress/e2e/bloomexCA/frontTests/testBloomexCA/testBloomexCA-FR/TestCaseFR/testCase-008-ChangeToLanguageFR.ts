import Homepage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';
import ChangingLanguage from '../steps-FR/ChangingLanguageFR.steps'


describe("Test case №8 - Change To Language-FR", () => {

    it('Check Change To LanguageFR  - Test case №8', () => {
        cy.allure().suite('Test case №8 - Check Change To LanguageFR');
        cy.allure().description('Test case №8 - Check Change To LanguageFR');

        ChangingLanguage.changingLanguage();

    })
})