import ProductAttributesFR from '../steps-FR/ProductAttributesFR.steps'
import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';

describe("Test case №3 LandingPage-FR", () => {

    it('Check the products attributes on landing page - Test case №3', () => {
        cy.allure().suite('Test case №3 - Check product attributes');
        cy.allure().description('Check products attributes');

        HomePage_PO.getButtonLanguageChange().click()

        ProductAttributesFR.checkProductsAttributesOnLandingPage();

    })

})