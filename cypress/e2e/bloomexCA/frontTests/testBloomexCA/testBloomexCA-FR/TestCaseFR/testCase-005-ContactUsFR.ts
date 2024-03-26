import ContactUsFR from '../steps-FR/ContactUsFR.steps'
import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';

describe("Test case №5 ContactUs-FR", () => {

    it('Check the Contact Us Page - Test case №5', () => {
        cy.allure().suite('Test case №5 - Check Contact Us Page');
        cy.allure().description('Check Contact Us Page');

        HomePage_PO.getButtonLanguageChange().click()
        
        ContactUsFR.checkContactUsPage();
      
    })

})