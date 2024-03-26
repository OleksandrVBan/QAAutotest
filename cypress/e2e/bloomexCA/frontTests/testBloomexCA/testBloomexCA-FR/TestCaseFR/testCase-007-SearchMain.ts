import '@shelex/cypress-allure-plugin';
import SearchHomePage from '../steps-FR/Search.steps'
import HomePage_PO from '../../pages/Homepage_PO';

describe("Test case №7 SearchMain", () => {

    it('Test case №7 Check SearchMain - FR', () => {
        cy.allure().suite('Test case №7 - CheckSearchMain');
        cy.allure().description('Test case №7 - Check SearchMain');

        HomePage_PO.getButtonLanguageChange().click()
  
        SearchHomePage.checkSearchHomePage();

     })
})