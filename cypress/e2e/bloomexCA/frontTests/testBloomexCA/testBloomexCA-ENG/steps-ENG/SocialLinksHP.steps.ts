/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';

class SocialLinksHomepage {

    SocialFooterLinks() {
        cy.allure().startStep('Check Social Footer Links');
        cy.log('START Check Social Footer Links');

        HomePage_PO.getButtonTwitter().invoke('removeAttr', 'target').click();
        cy.url().should('include', 'Bloomex_canada')

        cy.visit('/');
        HomePage_PO.getButtonFB().invoke('removeAttr', 'target').click();
        cy.url().should('include', '/bloomex')

        cy.visit('/');
        HomePage_PO.getButtonPinterest().invoke('removeAttr', 'target').click();
        cy.url().should('include', '/bloomexCA')

        cy.visit('/');
        HomePage_PO.getButtonPartners().invoke('removeAttr', 'target').click();
        cy.get('[class="col-xs-12 col-sm-12 col-md-12 col-lg-12 content_title_inner"]').should('contain', 'Bloomex Community Partners')
    
        cy.log('END Check Social Footer Links');
        cy.allure().endStep();
    }

}

export default new SocialLinksHomepage;
