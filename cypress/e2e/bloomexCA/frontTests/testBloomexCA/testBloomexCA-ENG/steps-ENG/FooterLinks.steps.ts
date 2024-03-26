/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';

class FooterLinks {

checkWHFooterLinks(){
    cy.allure().startStep('Check WH FooterLinks');
    cy.log('START Check FooterLinks');

    HomePage_PO.getButtonWHToronto().click();
    cy.get('.landing_title').should('contain', 'Toronto Flower Delivery').should('be.visible');
    cy.get('#bar_on_map').should('contain', 'Toronto Flower Delivery').should('be.visible');
    cy.get('#map_canvas').should('be.visible');

    HomePage_PO.getButtonWHOttawa().click();
    cy.get('.landing_title').should('contain', 'Ottawa Flower Delivery').should('be.visible');
    cy.get('#bar_on_map').should('contain', 'Ottawa Flower Delivery').should('be.visible');
    cy.get('#map_canvas').should('be.visible');

    HomePage_PO.getButtonWHMontreal().click();
    cy.get('.landing_title').should('contain', 'Montreal Flower Delivery').should('be.visible');
    cy.get('#bar_on_map').should('contain', 'Montréal Flower Delivery').should('be.visible');
    cy.get('#map_canvas').should('be.visible');

    HomePage_PO.getButtonWHCalgary().click();
    cy.get('.landing_title').should('contain', 'Calgary Flower Delivery').should('be.visible');
    cy.get('#bar_on_map').should('contain', 'Calgary Flower Delivery').should('be.visible');
    cy.get('#map_canvas').should('be.visible');

    HomePage_PO.getButtonWHVancouver().click();
    cy.get('.landing_title').should('contain', 'Vancouver Flower Delivery').should('be.visible');
    cy.get('#bar_on_map').should('contain', 'Vancouver Flower Delivery').should('be.visible');
    cy.get('#map_canvas').should('be.visible');

    HomePage_PO.getButtonWHHalifax().click();
    cy.get('.landing_title').should('contain', 'Halifax Flower Delivery').should('be.visible');
    cy.get('#bar_on_map').should('contain', 'Halifax Flower Delivery').should('be.visible');
    cy.get('#map_canvas').should('be.visible');

    HomePage_PO.getButtonWHWinnipeg().click();
    cy.get('.landing_title').should('contain', 'Winnipeg Flower Delivery').should('be.visible');
    cy.get('#bar_on_map').should('contain', 'Winnipeg Flower Delivery').should('be.visible');
    cy.get('#map_canvas').should('be.visible');

    cy.log('END Check WH FooterLinks');
    cy.allure().endStep();
}
  
}

export default new FooterLinks;