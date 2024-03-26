import '@shelex/cypress-allure-plugin';
import CheckIconsOutsiteDeliveries from '../steps-ENG/OutsideDeliveriesIcons.steps'

describe("Test case №6- Link to the websites of the other countries in header site", () => {

    it('Check   - Test case №6 - Link to the websites of the other countries in header site', () => {
        cy.allure().suite('Test case №6- Link to the websites of the other countries in header site');
        cy.allure().description('Test case №6- Link to the websites of the other countries in header site');
        
        CheckIconsOutsiteDeliveries.CheckingIconsOutsiteDeliveries();

    })
})