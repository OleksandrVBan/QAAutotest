/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';

class FooterLinksFR {

    checkWHFooterLinks() {
        cy.allure().startStep('Check WH FooterLinks');
        cy.log('START Check FooterLinks');

        HomePage_PO.getButtonWHToronto().click();
        cy.get('.landing_title').should('contain', 'Toronto Livraison de fleurs').should('be.visible');
        cy.get('#bar_on_map').should('contain', 'Toronto Livraison de fleurs').should('be.visible');
        cy.get('#map_canvas').should('be.visible');

        HomePage_PO.getButtonWHOttawa().click();
        cy.get('.landing_title').should('contain', 'Ottawa Livraison de fleurs').should('be.visible');
        cy.get('#bar_on_map').should('contain', 'Ottawa Livraison de fleurs').should('be.visible');
        cy.get('#map_canvas').should('be.visible');

        HomePage_PO.getButtonWHMontreal().click();
        cy.get('.landing_title').should('contain', 'Montreal Livraison de fleurs').should('be.visible');
        cy.get('#bar_on_map').should('contain', 'Montréal Livraison de fleurs').should('be.visible');
        cy.get('#map_canvas').should('be.visible');

        HomePage_PO.getButtonWHCalgary().click();
        cy.get('.landing_title').should('contain', 'Calgary Livraison de fleurs').should('be.visible');
        cy.get('#bar_on_map').should('contain', 'Calgary Livraison de fleurs').should('be.visible');
        cy.get('#map_canvas').should('be.visible');

        HomePage_PO.getButtonWHVancouver().click();
        cy.get('.landing_title').should('contain', 'Vancouver Livraison de fleurs').should('be.visible');
        cy.get('#bar_on_map').should('contain', 'Vancouver Livraison de fleurs').should('be.visible');
        cy.get('#map_canvas').should('be.visible');

        HomePage_PO.getButtonWHHalifax().click();
        cy.get('.landing_title').should('contain', 'Halifax Livraison de fleurs').should('be.visible');
        cy.get('#bar_on_map').should('contain', 'Halifax Livraison de fleurs').should('be.visible');
        cy.get('#map_canvas').should('be.visible');

        HomePage_PO.getButtonWHWinnipeg().click();
        cy.get('.landing_title').should('contain', 'Winnipeg Livraison de fleurs').should('be.visible');
        cy.get('#bar_on_map').should('contain', 'Winnipeg Livraison de fleurs').should('be.visible');
        cy.get('#map_canvas').should('be.visible');

        cy.log('END Check WH FooterLinks');
        cy.allure().endStep();
    }

}

export default new FooterLinksFR;