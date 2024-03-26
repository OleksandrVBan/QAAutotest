import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';
import FooterLinksFR from '../steps-FR/FooterLinksFR.steps';


describe("Test case №9 Footer WH Links-FR", () => {

    it('Check  Footer WH Links - Test case №10', () => {
        cy.allure().suite('Test case №10 - Check Footer WH Links');
        cy.allure().description('Test case №10 - Check Footer WH Links');

        HomePage_PO.getButtonLanguageChange().click()

        FooterLinksFR.checkWHFooterLinks();
    })

})