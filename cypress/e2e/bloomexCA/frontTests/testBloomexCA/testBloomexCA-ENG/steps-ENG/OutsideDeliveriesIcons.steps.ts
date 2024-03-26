/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';

class CheckIconsOutsiteDeliveries {

    CheckingIconsOutsiteDeliveries() {
        cy.allure().startStep('Check AU icon')
        cy.log('Check  AU icon')
    
        HomePage_PO.getIconOutsideCanadaAU().should('be.visible').should('have.attr', 'href').and('equal', 'https://bloomex.com.au')
    
        HomePage_PO.getIconOutsideCanadaUK().should('be.visible').invoke('removeAttr', 'target').click();

    
        cy.get('[class="col-xs-12 col-sm-12 col-md-12 col-lg-12 content_title_inner"]').should('contain', 'Serenata Flowers')

        cy.allure().endStep()

        cy.allure().startStep('Check USA icon')
        cy.log('Check USA icon')
        cy.visit('/');
    
        HomePage_PO.getIconOutsideCanadaUS().should('be.visible').should('have.attr', 'href').and('equal', 'https://bloomexusa.com')
 

        cy.allure().endStep()

        cy.allure().startStep('Check Switzerland icon')
        cy.log('Check Switzerland icon')
        cy.visit('/');
    
        HomePage_PO.getIconOutsideCanadaCH().should('be.visible').invoke('removeAttr', 'target').should('have.attr', 'href').and('equal', 'https://www.lesfleurs.ch/flower-delivery-switzerland/');
    
        cy.allure().startStep('Check New Zealand icon')
        cy.log('Check New Zealand icon')

        cy.visit('/');
    
        HomePage_PO.getIconOutsideCanadaNZ().should('be.visible').should('have.attr', 'href').and('equal', 'https://bloomex.co.nz')
   
        cy.allure().endStep()
     }
   
}

export default new CheckIconsOutsiteDeliveries;