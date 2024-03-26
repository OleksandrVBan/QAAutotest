import '@shelex/cypress-allure-plugin';
import SearchHomePage from '../steps-ENG/Search.steps'

describe("Test case №7-Check Search results on main page", () => {

    it('Check Contact Us page  - Test case №7', () => {
        cy.allure().suite('Test case №7 - Check Search results');
        cy.allure().description('Test case №7 - Check Search results');
  
        SearchHomePage.checkSearchHomePage();

     })
})