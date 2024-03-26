import '@shelex/cypress-allure-plugin';
import CheckIconsOutsiteDeliveries from '../steps-FR/OutsideDeliveriesIconsFR.steps'
import HomePage_PO from '../../pages/Homepage_PO';


describe("Test case №6- Link to the websites of the other countries in header site-FR", () => {

    it('Check   - Test case №6 - Link to the websites of the other countries in header site', () => {
        cy.allure().suite('Test case №6- Link to the websites of the other countries in header site');
        cy.allure().description('Test case №6- Link to the websites of the other countries in header site');

                CheckIconsOutsiteDeliveries.CheckingIconsOutsiteDeliveries();

    })
})