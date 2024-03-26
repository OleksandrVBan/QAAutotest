import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
import CollectionsSteps from '../steps-ENG/Collections.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2-Bulk Flowers Section", () => {

    it("Checking menu main entries - Test case №2- Bulk Flowers Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries- Bulk Flowers Section');
        cy.allure().description('Checking menu main entries- Bulk Flowers Section: Section page, Category pages and Collection pages');
        
        MenuSectionAndCategories.checkBulkFlowersSection();
        MenuSectionAndCategories.checkBulkFlowersCategories();
        CollectionsSteps.checkBulkFlowersCollectionsSection();

    })

})