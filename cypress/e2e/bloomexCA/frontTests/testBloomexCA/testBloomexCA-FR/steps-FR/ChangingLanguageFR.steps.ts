/// <reference types = "Cypress" />
import Homepage_PO from '../../pages/Homepage_PO'

class  ChangingLanguage {

  changingLanguage() {
   
    cy.allure().startStep('Check Changing to French Language');
    cy.log('Check Changing to French Language');

    Homepage_PO.getButtonLanguageChange().click();
    cy.get('[class="nav navbar-nav"]').should('contain', 'English');
    cy.get('[class="container bottom_category"]').should('contain', 'Livraison de fleurs le jour-même');

    cy.allure().endStep();

    cy.allure().startStep('Check Changing to English Language');
    cy.log('Check Changing to English Language');

    Homepage_PO.getButtonLanguageChange().click();
    cy.get('[class="nav navbar-nav"]').should('contain', 'Français');
    cy.get('[class="container bottom_category"]').should('contain', 'Same Day Flower Delivery');

    cy.log('END Checking Changing Language');
    cy.allure().endStep();

  }
}

export default new ChangingLanguage;

