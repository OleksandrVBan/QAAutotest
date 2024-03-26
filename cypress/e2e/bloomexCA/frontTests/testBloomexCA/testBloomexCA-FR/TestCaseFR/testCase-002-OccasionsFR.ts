import MenuSectionAndCategories from '../steps-FR/MenuSectionAndCategories.steps-FR'
import CollectionsFR from '../steps-FR/CollectionFR.steps';
import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';

describe("Test case №2- OccasionsFR Section-FR", () => {

    it("Checking menu main entries - Test case №2- OccasionsFR Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - OccasionsFR Section: Section page, Category pages and Collection pages');
        
        HomePage_PO.getButtonLanguageChange().click()


        MenuSectionAndCategories.checkOccasionsSection();

        CollectionsFR.checkCollections_OccasionsFR();
        CollectionsFR.checkCollections_OccasionsFR_FleursEtCadeauxDanniversaire();
        CollectionsFR.checkCollections_OccasionsFR_SympathieEtFunérailles();
        CollectionsFR.checkCollections_CadeauxDentreprise();



    })

})