
import ProductAttributes from '../steps-ENG/ProductAttributes.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №3-Landing page", () => {

    it('Check the products attributes on landing page - Test case №3', () => {
        cy.allure().suite('Test case №3 - Check product attributes');
        cy.allure().description('Check products attributes');
       
        ProductAttributes.checkProductsAttributesOnLandingPage();
      
    })

})