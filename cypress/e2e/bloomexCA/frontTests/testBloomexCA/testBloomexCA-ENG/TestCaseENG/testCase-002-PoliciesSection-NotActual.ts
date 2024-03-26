import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2-Policies Section", () => {

  it("Checking menu main entries - Test case №2 - Policies Section", () => {
    cy.allure().suite('Test case №2 - Check menu main entries- Policies Section');
    cy.allure().description('Checking menu main entries - Policies Section');  

    MenuSectionAndCategories.checkPolicies();

  })

})