import HomePage_PO from '../../pages/Homepage_PO'
import '@shelex/cypress-allure-plugin';
import FooterLinks from '../steps-ENG/FooterLinks.steps'

describe("Test case №9- Check WH FooterLinks", () => {

    it('Check WH FooterLinks - Test case №9', () => {
        cy.allure().suite('Test case №9 - Check Check WH FooterLinks');
        cy.allure().description('Test case №9 -  1 Scroll down to the bottom of the homepage,  2 Click on the warehouse flowers, links');

        FooterLinks.checkWHFooterLinks();
        

    })

})