/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';

class SearchHomePage {


    checkSearchHomePage() {
  
        cy.allure().startStep('Fill in the "search" field with a valid value-Search by word');
        cy.log('Fill in the "search" field with a valid value-Search by word');

        HomePage_PO.getSearchField().type('poignée');
        HomePage_PO.getSearchButton().click();
        cy.get('[class="container products"]').should('contain', "poignée");

        HomePage_PO.getSearchField().clear().type('Tests');
        HomePage_PO.getSearchButton().click();
        cy.get('[class="container search_error"]').should('contain', "Nothing found on your request")
        cy.allure().endStep();

        cy.allure().startStep('Fill in the "search" field with Not a valid value');
       
        cy.log('Fill in the "search" field with not a valid value - special symbols');
        HomePage_PO.getSearchField().clear().type('poi@');
        HomePage_PO.getSearchButton().click();
        cy.get('[class="container search_error"]').should('contain', "Nothing found on your request");

        cy.log('Fill in the "search" field with not a valid value - cyrillic symbols');
        HomePage_PO.getSearchField().clear().type('poiz');
        HomePage_PO.getSearchButton().click();
        cy.get('[class="container search_error"]').should('contain', "Nothing found on your request");

        cy.log('Fill in the "search" field with not a valid value - less 3 symbols');

        HomePage_PO.getSearchField().clear().type('po');
        HomePage_PO.getSearchButton().click();
        cy.get('[class="container search_error"]').should('contain', "The length of the search string must be at least 3 characters.");

        cy.log('Fill in the "search" field with not a valid value - spaсe');
        HomePage_PO.getSearchField().clear().type(' ');
        HomePage_PO.getSearchButton().click();
        cy.get('[class="container search_error"]').should('contain', "The length of the search string must be at least 3 characters.");

        cy.log('Fill in the "search" field with not a valid value - empty field');

        HomePage_PO.getSearchField().clear();
        HomePage_PO.getSearchButton().click();
        cy.get('[class="container search_error"]').should('contain', "The length of the search string must be at least 3 characters.");

        cy.allure().endStep();

    };




}



export default new SearchHomePage;