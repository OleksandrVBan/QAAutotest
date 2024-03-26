import MenuSectionAndCategories from '../steps-FR/MenuSectionAndCategories.steps-FR'
import HomePage_PO from '../../pages/Homepage_PO';
// import CollectionsSteps from './steps-ENG/Collections.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2- Entreprise Section-FR", () => {

    it("Checking menu main entries - Test case №2- Entreprise Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - Entreprise Section: Section page, Category pages and Collection pages');

        HomePage_PO.getButtonLanguageChange().click();
        
        MenuSectionAndCategories.checkEntrepriseSection();
        


    })

})