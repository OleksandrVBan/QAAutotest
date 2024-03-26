import MenuSectionAndCategories from '../steps-FR/MenuSectionAndCategories.steps-FR'
import CollectionsFR from '../steps-FR/CollectionFR.steps';
import HomePage_PO from '../../pages/Homepage_PO';

import '@shelex/cypress-allure-plugin';

describe("Test case №2-Spéciaux Section-FR", () => {

    it("Checking menu main entries - Test case №2- Spéciaux Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - Spéciaux Section: Section page, Category pages and Collection pages');

        HomePage_PO.getButtonLanguageChange().click()
        
        MenuSectionAndCategories.checkSpéciauxSection();

        CollectionsFR.checkCollections_SpéciauxSection();
        CollectionsFR.checkCollections_SpéciauxSection_MagasinerPourLaBonté();
        CollectionsFR.checkCollections_SpéciauxSection_CollectionDeCréateursMoitiéPrix();
        CollectionsFR.checkCollections_SpéciauxSection_OursEnPelucheVasesEtChocolats();

    })

})