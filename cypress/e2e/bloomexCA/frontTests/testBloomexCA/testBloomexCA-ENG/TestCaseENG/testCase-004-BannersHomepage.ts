
import Banners from '../steps-ENG/Banners.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №4-Banners on homepage", () => {

    it('Banners on homepage - Test case №4', () => {

        cy.allure().description('Check Banners on homepage');
        cy.allure().suite('Test case №4 - Check Banners');
     
        Banners.checkStaticBanners();
        Banners.checkSliderBanners();
       
    })
})