import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
import CollectionsSteps from '../steps-ENG/Collections.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2-Gift Baskets Section", () => {

    it("Checking menu main entries - Test case №2- Gift Baskets Section", () => {
        cy.allure().suite('Test case №2 - Checking menu main entries- Gift Baskets Section');
        cy.allure().description('Checking menu main entries- Gift Baskets Section: Section page, Category pages and Collection pages');
       
        MenuSectionAndCategories.checkGiftBaskets();
        CollectionsSteps.checkGiftBasketsCollectionsSection();
        MenuSectionAndCategories.checkGiftBasketsCategories();

    })

})