import MenuSectionAndCategories from '../steps-FR/MenuSectionAndCategories.steps-FR'
import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';
// import CollectionsSteps from './steps-ENG/Collections.steps'
import '@shelex/cypress-allure-plugin';

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

})