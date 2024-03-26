import MenuSectionAndCategories from '../steps-FR/MenuSectionAndCategories.steps-FR'
import HomePage_PO from '../../pages/Homepage_PO';
import CollectionsFR from '../steps-FR/CollectionFR.steps';


describe("Test case №2-By Aide Comptre Section-FR", () => {

    it("Checking menu main entries - Test case №2- By Aide Comptre Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - By Aide Comptre Section: Section page, Category pages and Collection pages');

        HomePage_PO.getButtonLanguageChange().click()
        
        cy.log('// Check Aide Comptre for unregistred user')
        MenuSectionAndCategories.checkAide_CompteSection();


        //как опишем выбор товара и регистрацию надо будет вернутся 
        // cy.log('// Check Aide Comptre for registred user')
        // MenuSectionAndCategories.checkAideCompte1();
        
    })

    it("Checking menu main entries - Test case №2- Entreprise Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - Entreprise Section: Section page, Category pages and Collection pages');

        HomePage_PO.getButtonLanguageChange().click();
        
        MenuSectionAndCategories.checkEntrepriseSection();
        
    })

    it("Checking menu main entries - Test case №2- Fleurs Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - Fleurs Section: Section page, Category pages and Collection pages');

         HomePage_PO.getButtonLanguageChange().click()
        
        MenuSectionAndCategories.checkFleursSection();
        CollectionsFR.checkFleursSection();
        
    })

    it("Checking menu main entries - Test case №2- FleursEnVrac Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - FleursEnVrac Section: Section page, Category pages and Collection pages');

        HomePage_PO.getButtonLanguageChange().click()
        
        MenuSectionAndCategories.checkFleursEnVracSection();
        CollectionsFR.checkCollections_FleursEnVrac();
        
    })

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

    it("Checking menu main entries - Test case №2- Paniers Cadeaux Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - Paniers Cadeaux Section: Section page, Category pages and Collection pages');

        HomePage_PO.getButtonLanguageChange().click()
        
        MenuSectionAndCategories.checkPaniersCadeauxSection();

        CollectionsFR.checkCollections_PaniersCadeauxSection();
        
    })

    it("Checking menu main entries - Test case №2- Par Prix Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries');
        cy.allure().description('Checking menu main entries - Par Prix Section: Section page, Category pages and Collection pages');

        HomePage_PO.getButtonLanguageChange().click()
        
        MenuSectionAndCategories.checkParPrixSection();
        CollectionsFR.checkCollections_ParPrixSection();
        
    })

    // No more on website
    // it("Checking menu main entries - Test case №2- Politiques ", () => {
    //     cy.allure().suite('Test case №2 - Check menu main entries');
    //     cy.allure().description('Checking menu main entries - Politiques : Section page, Category pages and Collection pages');

    //     HomePage_PO.getButtonLanguageChange().click()

    //     MenuSectionAndCategories.checkPolitiquesSection();

    // })

    // it("Checking menu main entries - Test case №2 - Politiques Section", () => {
    //     cy.allure().suite('Test case №2 - Check menu main entries- Politiques Section');
    //     cy.allure().description('Checking menu main entries - Politiques Section');  
    
    //     HomePage_PO.getButtonLanguageChange().click()
    
    //     MenuSectionAndCategories.checkPolitiques();
    
    //   })

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