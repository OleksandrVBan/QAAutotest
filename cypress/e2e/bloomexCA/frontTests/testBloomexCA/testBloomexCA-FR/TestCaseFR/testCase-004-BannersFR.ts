import BannersFR from '../steps-FR/BannersFR.steps';
import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';

describe("Test case №4 Banners-FR", () => {

    it('Banners on homepage FR - Test case №4', () => {

        cy.allure().description('Check Banners on homepage');
        cy.allure().suite('Test case №4 - Check Banners');

        HomePage_PO.getButtonLanguageChange().click()

        BannersFR.checkStaticBanners();
        BannersFR.checkSliderBanners();



    })
})
