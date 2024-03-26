import HomePage_PO from '../../pages/Homepage_PO'
import '@shelex/cypress-allure-plugin';
import SocialLinksHomepage from '../steps-FR/SocialLinks.steps'


describe("Test case №10 Social links in footer-FR", () => {


    it('Check  Social links in footer - Test case №10', () => {
        cy.allure().suite('Test case №10 - Check Social links in footer');
        cy.allure().description('Test case №10 - Check Social links in footer');

        HomePage_PO.getButtonLanguageChange().click()

        SocialLinksHomepage.SocialFooterLinks();
    })

})