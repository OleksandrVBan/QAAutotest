import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
import CollectionsSteps from '../steps-ENG/Collections.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2-Flowers Section", () => {

    it("Checking menu main entries - Test case №2 - Flowers Section", () => { 
        cy.allure().suite('Test case №2 - Checking menu main entries - Flowers Section');
        cy.allure().description('Checking menu main entries- Flowers Section: Section page, Category pages and Collection pages');
      
        MenuSectionAndCategories.checkFlowersSection();
        CollectionsSteps.checkFlowersCollectionsSection();

        
    })

})