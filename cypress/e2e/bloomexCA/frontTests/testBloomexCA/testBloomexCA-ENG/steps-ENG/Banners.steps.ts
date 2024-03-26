/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';
//import { PagesName } from "../../../../../../utils/pagesName";

class Banners {

    checkStaticBanners() {

        cy.allure().startStep('Check Static Banners Visibility and click on banners with link')
        cy.log('Check Banners Visibility and Click')

        cy.allure().startStep('Check Visibility and Click of the 20$ banner')
        cy.log('Check Visibility and Click of the 20$ banner')

        HomePage_PO.getBanner20DolGift().should('be.visible').click();
        cy.get('.content_title_inner').should('contain',"FREE $20.00 Gift Certificate")
        HomePage_PO.getLogo().click()
        cy.allure().endStep();

        cy.allure().startStep('Check Visibility and Click of the SameDayDelivery banner')
        cy.log('Check Visibility and Click of the SameDayDelivery banner')
        HomePage_PO.getBannerSameDayDelivery().should('be.visible');
        cy.allure().endStep();

        cy.allure().startStep('Check Visibility of the Smiles banner')
        cy.log('Check Visibility of the Smiles banner')
        HomePage_PO.getBannerSmiles().should('be.visible')
        cy.allure().endStep();


        //Chack 3 mini banners visible and click

        cy.allure().startStep('Check Visibility the Birthday Flowerrs Banner')
        cy.log('Check Visibility the Birthday Flowerrs Banner')
        HomePage_PO.get1MiniBannerBirthdayFlowerrs().should('be.visible').click();
        cy.get('.landing_title').should('contain',"Birthday Flowers & Gifts")
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Check the Sympathy Flowers')
        cy.log('Check Visibility of the Sympathy Flowers')
        HomePage_PO.get3MiniSympathyFlowers().should('be.visible').click();
        cy.get('.landing_title').should('contain',"Sympathy & Funeral Flowers")
        HomePage_PO.getLogo().click();
        cy.allure().endStep();
        cy.allure().endStep();

        cy.allure().startStep('Check Visibility the Designer Collection')
        cy.log('Check Visibility the Designer Collection')
        HomePage_PO.get2MiniBannerDesignerCollection().should('be.visible').click();
        cy.get('.landing_title').should('contain',"Designer Collection")
        HomePage_PO.getLogo().click();
        cy.allure().endStep();
            
        //and other mini banners after switching
        cy.allure().startStep('Check the Gourmet Collection HP')
        cy.log('Check Visibility of the Gourmet Collection HP')
        HomePage_PO.get3MiniGourmet().should('be.visible').click();
        cy.get('.landing_title').should('contain',"Gourmet Collection")
        HomePage_PO.getLogo().click();
        cy.allure().endStep();
        cy.allure().endStep();

    }

    checkSliderBanners() {
       
        //Click the arrow on all sliders

        cy.allure().startStep("Click the arrow on all sliders");
        cy.log("Click the arrow on all sliders");

        for (let outerI = 0; outerI < 1; outerI++) {
            for (let innerI = 0; innerI < 15; innerI++) {
                cy.log("Clicking the Right slider on the main banner of the page");
                HomePage_PO.getSliderArrowRight().click({ force: true });
                cy.log("Waiting page reaction");
                cy.wait(1000);
            }

            cy.log("Pause before next cycle");
            cy.wait(2000);
        }

        for (let outerI = 0; outerI < 1; outerI++) {
            for (let ineerI = 0; ineerI < 15; ineerI++) {
                cy.log("Clicking the Left slider on the main banner of the page");
                HomePage_PO.getSliderArrowLeft().click({ force: true });
                cy.log("Waiting page reaction");
                cy.wait(1000);
            }
            cy.log("Pause before next cycle");
            cy.wait(2000);
        }

        cy.allure().endStep();



        // Click on slides in banners
        cy.allure().startStep('Click on slides in banners')
        cy.log('Click on slides in banners')

        cy.allure().startStep('Click on Banner BirthdayFlowersSlider')
        cy.log('Click on Banner BirthdayFlowersSlider')
        HomePage_PO.getBannerBirthdayFlowersSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain', "Birthday Flowers & Gifts")
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner REDTAGSpecials')
        cy.log('Click on Banner REDTAGSpecials')
        HomePage_PO.getBannerREDTAGSpecialsSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain', "RED TAG SPECIALS")
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner BunchesCollection')
        cy.log('Click on BunchesCollection')
        HomePage_PO.getBannerBunchesCollectionSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"The Bunches Collection");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner DesignerCollection')
        cy.log('Click on DesignerCollection')
        HomePage_PO.getBannerDesignerCollectionSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"Designer Collection");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner MasonJar')
        cy.log('Click on MasonJar')
        HomePage_PO.getBannerMasonJarSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"The Mason Jar Collection");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner TropicalPlants')
        cy.log('Click on Banner TropicalPlants')
        HomePage_PO.getBannerTropicalPlantsSlider().click({ force: true });
        cy.get('[itemprop="name"]').should('be.visible').should('contain',"Assorted Tropical Plants");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner Sympathy')
        cy.log('Click on Banner Sympathy')
        HomePage_PO.getBannerSympathySlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"Sympathy & Funeral Flowers");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner Gourmet')
        cy.log('Click on Banner Gourmet')
        HomePage_PO.getBannerGourmetSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"Gourmet Gift Baskets");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner Anniversary')
        cy.log('Click on Banner Anniversary')
        HomePage_PO.getBannerAnniversarySlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"Anniversary Flowers");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner SweetheartCollection')
        cy.log('Click on Banner SweetheartCollection')
        HomePage_PO.getBannerSweetheartCollectionSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"Sweetheart Collection");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner SweetBlossomsCollection')
        cy.log('Click on Banner SweetBlossomsCollection')
        HomePage_PO.getBannerSweetBlossomsCollectionSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"Sweet Blossoms Collection");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on Banner GourmetCollection')
        cy.log('Click on Banner GourmetCollection')
        HomePage_PO.getBannerGourmetCollectionSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"Gourmet Collection");
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        cy.allure().startStep('Click on FridayOnlyRosesSlider')
        cy.log('Click on FridayOnlyRosesSlider')
        HomePage_PO.getBannerFridayOnlyRosesSlider().click({force: true});
        cy.get('.landing_title').should('be.visible').should('contain',"65% off Friday Roses!");
        HomePage_PO.getLogo().click();
        

        cy.allure().startStep('Click on DIY Bulk Flowers')
        cy.log('Click on DIY Bulk Flowers')
        HomePage_PO.getBannerDIYBulkFlowersSlider().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"DIY Bulk Flowers");
        HomePage_PO.getLogo().click();


        cy.allure().startStep('Click on Banner Ottawa Senators')
        cy.log('Click on Banner Ottawa Senators')
        HomePage_PO.getBannerOttawaSenators().click({ force: true });
        cy.get('.landing_title').should('be.visible').should('contain',"Ottawa Senators Collection");
        HomePage_PO.getLogo().click();
        
        HomePage_PO.getBannerHugsAndKisses().click({force: true});
        cy.get('.landing_title').should('contain', 'Hugs and Kisses Collection')
        HomePage_PO.getLogo().click();

        cy.log('END Click SLIDER banners')

        cy.allure().endStep();
        cy.allure().endStep();

       
        //not actual below

        // cy.allure().startStep('Click on Banner MDBunchesEN')
        // cy.log('Click on Banner MDBunchesEN')
        // HomePage_PO.getBannerMDBunchesEN().click({ force: true });
        // cy.get('.landing_title').should('contain', 'Mothers Day Bunches Collection')
        // HomePage_PO.getLogo().click();
        // cy.allure().endStep();

        cy.allure().startStep('Click on Banner VDRosesWine')
        cy.log('Click on VDRosesWine')
        HomePage_PO.getBannerVDRosesWine().click({ force: true });
        cy.get('.landing_title').should('contain', 'Roses & Wine Collection')
        HomePage_PO.getLogo().click();
        cy.allure().endStep();

        // cy.allure().startStep('Click on Banner TewTulips')
        // cy.log('Click on Banner TewTulips')
        // HomePage_PO.getBannerTewTulips().click({ force: true });
        // cy.get('.landing_title').should('contain', PagesName.FRESH_CUT_TULIPS)
        // HomePage_PO.getLogo().click();
        // cy.allure().endStep();

        // cy.allure().startStep('Click on Banner MothersDaySpecials')
        // cy.log('Click on Banner MothersDaySpecials')
        // HomePage_PO.getBannerMothersDaySpecials().click({ force: true });
        // cy.get('.landing_title').should('contain', 'Mothers Day Specials')
        // HomePage_PO.getLogo().click();
        // cy.allure().endStep();

        // cy.allure().startStep('Click on Banner MothersDayDesignersCollection')
        // cy.log('Click on Banner MothersDayDesignersCollection')
        // HomePage_PO.getBannerMothersDayDesignersCollection().click({ force: true });
        // cy.get('.landing_title').should('contain', 'Mother\'s Day Flowers | Designer Collection')
        // HomePage_PO.getLogo().click();
        // cy.allure().endStep();

        // cy.allure().startStep('Click on Banner MothersDayGiftBaskets')
        // cy.log('Click on Banner MothersDayGiftBaskets')
        // HomePage_PO.getBannerMothersDayGiftBaskets().click({ force: true });
        // cy.get('.landing_title').should('contain', 'Mothers Day Gift Baskets')
        // HomePage_PO.getLogo().click();
        // cy.allure().endStep();

        // cy.allure().startStep('Click on BannerMothersDayTulips')
        // cy.log('Click on Banner MothersDayTulips')
        // HomePage_PO.getBannerMothersDayTulips().click({ force: true });
        // cy.get('.landing_title').should('contain', 'Mother\'s Day Tulips')
        // HomePage_PO.getLogo().click();
        // cy.allure().endStep();

        // cy.allure().startStep('Click on MothersDayAssortedRoses')
        // cy.log('Click on Banner MothersDayAssortedRoses')
        // HomePage_PO.getBannerMothersDayAssortedRoses().click({ force: true });
        // cy.get('.landing_title').should('contain', 'Mothers Day Assorted Roses')


        // HomePage_PO.getLogo().click();
        // HomePage_PO.getBannerMothersMothersDayOrchids().click({force: true});
        // cy.get('.landing_title').should('contain', '??404page??')

        //not swown banner on stage now
        // HomePage_PO.getLogo().click();
        // HomePage_PO.getBannerMothersDay().click({force: true});
        // cy.get('.landing_title').should('contain', 'Mothers Day Specials')


       

    }


}


export default new Banners;

