import MenuSectionAndCategories from '../steps-FR/MenuSectionAndCategories.steps-FR'
import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';

describe("Test case №2-Politiques Section-FR", () => {

  it("Checking menu main entries - Test case №2 - Politiques Section", () => {
    cy.allure().suite('Test case №2 - Check menu main entries- Politiques Section');
    cy.allure().description('Checking menu main entries - Politiques Section');  

    HomePage_PO.getButtonLanguageChange().click()

    MenuSectionAndCategories.checkPolitiques();

  })

})