/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';

class ProductAttributes {

    //Check the products attributes on landing page


    checkProductsAttributesOnLandingPage() {
        cy.allure().step('Check product attributes', true);
        //images
        cy.allure().startStep('Check images')
        cy.log('Check images')
        HomePage_PO.getContainerProducts().each(element => {
            cy.wrap(element)
                .within(() => { cy.get('a').should('be.visible'); })
        });
        cy.allure().endStep();

        //title
        cy.allure().startStep('Check title')
        cy.log('Check title')
        HomePage_PO.getContainerProducts().each(element => {
            cy.wrap(element)
                .within(() => { cy.get('[class="product-title"]').should('be.visible'); })
        });

        cy.allure().endStep();

        //price
        cy.allure().startStep('Check price')
        cy.log('Check price')
        HomePage_PO.getContainerProducts().each(element => {
            cy.wrap(element)
                .within(() => { cy.get('[class="real_price_list"]').should('be.visible'); })
        });
        cy.allure().endStep();

        //old price
        cy.allure().startStep('Check old price')
        cy.log('Check old price')
        HomePage_PO.getContainerProducts().each(element => {
            cy.wrap(element)
                .within(() => { cy.get('[class="old_price_list"]').should('be.visible'); })
        });
        cy.allure().endStep();

        //button
        cy.allure().startStep('Check button')
        cy.log('Check button')
        HomePage_PO.getContainerProducts().each(element => {
            cy.wrap(element)
                .within(() => { cy.get('[class="add"]').should('be.visible'); })
        });
        cy.allure().endStep();

        //review
        cy.allure().startStep('Check review')
        cy.log('Check review')
        HomePage_PO.getContainerProducts().each(element => {
            cy.wrap(element)
                .within(() => { cy.get('[class="stars"]').should('be.visible'); })
        });
        cy.allure().endStep();
        cy.allure().endStep();
    }


}



export default new ProductAttributes;