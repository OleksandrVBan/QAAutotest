/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';

class CheckIconsOutsiteDeliveries {

    CheckingIconsOutsiteDeliveries() {
        // cy.allure().startStep('Check AU icon')
        // cy.log('Check  AU icon')

    
        // HomePage_PO.getIconOutsideCanadaAU().should('be.visible').invoke('removeAttr', 'target').click();
        // cy.origin('https://bloomex.com.au', () => {
        // cy.get('[class="col-xs-12 col-sm-7 col-md-7 deliveries_outside"]').should('contain', 'For deliveries outside of Australia')
        // })
        
        // cy.allure().endStep()

        // cy.allure().startStep('Check UK icon')
        // cy.log('Check UK icon')
        // cy.visit('/');

        // HomePage_PO.getIconOutsideCanadaUK().should('be.visible').invoke('removeAttr', 'target').click();
        // cy.get('[class="col-xs-12 col-sm-12 col-md-12 col-lg-12 content_title_inner"]').should('contain', 'Serenata Flowers')

        // cy.allure().endStep()

        // cy.allure().startStep('Check USA icon')
        // cy.log('Check USA icon')
        // cy.visit('/');
    
        // HomePage_PO.getIconOutsideCanadaUS().should('be.visible').invoke('removeAttr', 'target').click();
        // cy.get('[class="col-xs-12 col-sm-7 col-md-7 deliveries_outside"]').should('contain', 'For deliveries outside of USA')
    
        // cy.allure().endStep()

        // cy.allure().startStep('Check Switzerland icon')
        // cy.log('Check Switzerland icon')
        // cy.visit('/');
    
        // HomePage_PO.getIconOutsideCanadaCH().should('be.visible').invoke('removeAttr', 'target').click();
        // cy.get('[class="lf-grid lf-grid-tm-12a lf-grid-sm-6a lf-grid-lm-4a"]').should('contain', 'Flower delivery to Switzerland')
        // cy.allure().endStep()

        // cy.allure().startStep('Check New Zealand icon')
        // cy.log('Check New Zealand icon')

        // cy.visit('/');
    
        // HomePage_PO.getIconOutsideCanadaNZ().should('be.visible').invoke('removeAttr', 'target').click();
        // cy.get('[class="address-store"]').should('contain', 'New Zealand');
        // cy.visit('/');
        
        // cy.allure().endStep()


        // //////////////////////////////////////

      
        HomePage_PO.getButtonLanguageChange().click();

        HomePage_PO.getIconOutsideCanadaUK().should('be.visible').invoke('removeAttr', 'target').click();

    
        cy.get('[class="col-xs-12 col-sm-12 col-md-12 col-lg-12 content_title_inner"]').should('contain', 'Serenata Flowers')

        cy.allure().endStep()

        HomePage_PO.getButtonLanguageChange().click();

        HomePage_PO.getIconOutsideCanadaAU().should('be.visible').should('have.attr', 'href').and('equal', 'https://bloomex.com.au')

        cy.allure().startStep('Check USA icon')
        cy.log('Check USA icon')
            
        HomePage_PO.getIconOutsideCanadaUS().should('be.visible').should('have.attr', 'href').and('equal', 'https://bloomexusa.com')
 

        cy.allure().endStep()

        cy.allure().startStep('Check Switzerland icon')
        cy.log('Check Switzerland icon')
            
        HomePage_PO.getIconOutsideCanadaCH().should('be.visible').invoke('removeAttr', 'target').should('have.attr', 'href').and('equal', 'https://www.lesfleurs.ch/flower-delivery-switzerland/');
    
        cy.allure().startStep('Check New Zealand icon')
        cy.log('Check New Zealand icon')
        
        HomePage_PO.getButtonLanguageChange().click();
        HomePage_PO.getIconOutsideCanadaNZ().should('be.visible').should('have.attr', 'href').and('equal', 'https://bloomex.co.nz')
   
        cy.allure().endStep()
    }
   
}

export default new CheckIconsOutsiteDeliveries;