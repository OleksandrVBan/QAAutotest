import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
import CollectionsSteps from '../steps-ENG/Collections.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2-By Price Section", () => {

    it("Checking menu main entries - Test case №2- By Price Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - By Price Section: Section page, Category pages and Collection pages');
        
        MenuSectionAndCategories.checkByPriceSection();
        CollectionsSteps.checkByPriceCollections();


    })

})