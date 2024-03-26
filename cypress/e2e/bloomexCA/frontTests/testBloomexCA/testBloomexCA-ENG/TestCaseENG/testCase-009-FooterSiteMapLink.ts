import Homepage_PO from '../../pages/Homepage_PO'
import '@shelex/cypress-allure-plugin';
import CheckSiteMapLinks from '../steps-ENG/SiteMapLinks.steps'


describe("Test case №9-Footer links - SiteMap", () => {

    it('Footer links - Test case №9', () => {
        cy.allure().suite('Test case №9 - Check Footer SiteMap links');
        cy.allure().description('Test case №9 - 3. Click on the site map link,  4. Click on any link on a site map');
      
           CheckSiteMapLinks.checkSiteMapTopMenuLinks();
           CheckSiteMapLinks.checkSiteMapCategoriesLinks();
           CheckSiteMapLinks.checkSiteMapFlowersLinks();
           CheckSiteMapLinks.checkSiteMapGiftBaskets();
           CheckSiteMapLinks.checkSiteMapSympathyFlowers();

    })


})