import Homepage_PO from '../../pages/Homepage_PO'
import '@shelex/cypress-allure-plugin';
import SocialLinksHomepage from '../steps-ENG/SocialLinksHP.steps'

describe("Test case №10-Social links in footer", () => {

    it('Check  Social links in footer - Test case №10', () => {
        cy.allure().suite('Test case №10 - Check Social links in footer');
        cy.allure().description('Test case №10 - Check Social links in footer');
  
        SocialLinksHomepage.SocialFooterLinks();
    })
    
})