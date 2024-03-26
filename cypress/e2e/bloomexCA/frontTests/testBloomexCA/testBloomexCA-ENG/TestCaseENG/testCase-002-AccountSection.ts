import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2-Account Section", () => {

    it("Checking menu main entries - Test case №2 - Account Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries- Account Section');
        cy.allure().description('Checking menu main entries- Account Section');
        
        MenuSectionAndCategories.checkAccount();

    })

})