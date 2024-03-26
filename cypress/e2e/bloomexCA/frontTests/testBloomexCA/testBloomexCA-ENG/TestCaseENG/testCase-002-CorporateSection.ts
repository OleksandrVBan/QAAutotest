import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
import CollectionsSteps from '../steps-ENG/Collections.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2-Corporate Section", () => {

    it("Checking menu main entries - Test case №2- Corporate Section", () => {
        cy.allure().suite('Test case №2 - Checking menu main entries- Corporate Section');
        cy.allure().description('Checking menu main entries- Corporate Section');

        MenuSectionAndCategories.checkCorporate();
        CollectionsSteps.checkCorporateGiftsCollection();

    })

})