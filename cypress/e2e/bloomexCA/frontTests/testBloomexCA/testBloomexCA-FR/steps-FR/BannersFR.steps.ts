
import HomePage_PO from '../../pages/Homepage_PO';


class BannersFR {

    checkStaticBanners() {

     cy.allure().startStep('Check Banners Visibility and Click')
     cy.log('Check Banners Visibility and Click')

     cy.allure().startStep('Check Visibility of the 20$ banner')
     cy.log('Check Visibility of the 20$ banner')

     HomePage_PO.getBanner20DolGiftFR().should('be.visible').click();
     cy.get('.content_title_inner').should('contain',"Certificat-cadeau GRATUIT de 20,00 $ avec CHAQUE achat")
     HomePage_PO.getLogo().click()
     cy.allure().endStep();

     cy.allure().startStep('Check Visibility of the SameDayDelivery banner')
     cy.log('Check Visibility of the SameDayDelivery banner')
     HomePage_PO.getBannerSameDayDeliveryFR().should('be.visible')
     cy.allure().endStep();

     cy.allure().startStep('Check Visibility of the SmilesFR banner')
     cy.log('Check Visibility of the SmilesFR banner')
     HomePage_PO.getBannerSmilesFR().should('be.visible')
     cy.allure().endStep();


     //Chack 3 mini banners visible and click

    //  cy.allure().startStep('Check Visibility the Birthday Flowerrs')
    //  cy.log('Check Visibility the Birthday Flowerrs')
    //  HomePage_PO.get1MiniBannerBirthdayFlowerrsFR().should('be.visible').click();
    //  cy.get('.landing_title').should('contain',"Fleurs et cadeaux d'anniversaire")
    //  HomePage_PO.getLogo().click();
    //  cy.allure().endStep();
 
    //  cy.allure().startStep('Check Visibility the Designer Collection')
    //  cy.log('Check Visibility the Designer Collection')
    //  HomePage_PO.get2MiniBannerDesignerCollectionFR().should('be.visible').click();
    //  cy.get('.landing_title').should('contain',"Collection du Créateur")
    //  HomePage_PO.getLogo().click();
    //  cy.allure().endStep();

    //  cy.allure().startStep('Check the Sympathy Flowers')
    //  cy.log('Check Visibility of the Sympathy Flowers')
    //  HomePage_PO.get3MiniSympathyFlowersFR().should('be.visible').click();
    //  cy.get('.landing_title').should('contain',"Fleurs de sympathie et funéraires")
    //  HomePage_PO.getLogo().click();
    //  cy.allure().endStep();
    //  cy.allure().endStep();

    }

    checkSliderBanners() {

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
      cy.allure().startStep('Click and visible on slides in banners')
      cy.log('Click and visible on slides in banners')


      cy.allure().startStep('Click and visible on Banner DIYBulkFlowersSliderFR')
      cy.log('Click and visible on Banner DIYBulkFlowersSliderFR')
      HomePage_PO.getBannerDIYBulkFlowersSliderFR().click({ force: true });
      cy.get('.landing_title').should('be.visible').should('contain',"Fleurs en Vrac DIY");
      HomePage_PO.getLogo().click();
      cy.allure().endStep();

      cy.allure().startStep('Click and visible on Banner BirthdayFlowersSliderFR')
      cy.log('Click and visible on Banner BirthdayFlowersSliderFR')
      HomePage_PO.getBannerBirthdayFlowersSliderFR().click({ force: true });
      cy.get('.landing_title').should('be.visible').should('contain',"Fleurs et cadeaux d'anniversaire");
      HomePage_PO.getLogo().click();
 
      cy.allure().endStep();


      cy.allure().startStep('Click and visible on Banner REDTAGSpecialsSliderFR')
      cy.log('Click and visible on REDTAGSpecialsSliderFR')
      HomePage_PO.getBannerREDTAGSpecialsSliderFR().click({ force: true });
      cy.get('.landing_title').should('be.visible').should('contain', "SPÉCIAL ÉTIQUETTES ROUGES");
      HomePage_PO.getLogo().click();
      cy.allure().endStep();

    //   cy.allure().startStep('Click and visible on FridayOnlyRosesSliderFR')
    //   cy.log('Click and visible on FridayOnlyRosesSliderFR')
    //   HomePage_PO.getBannerFridayOnlyRosesSliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain',"Moitié Prix des Vendredis");
    //   HomePage_PO.getLogo().click();
    //   cy.allure().endStep();


    //   cy.allure().startStep('Click and visible on Banner DesignerCollectionSliderFR')
    //   cy.log('Click and visible on DesignerCollectionSliderFR')
    //   HomePage_PO.getBannerDesignerCollectionSliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain',"Collection du Créateur");
    //   HomePage_PO.getLogo().click();
    //   cy.allure().endStep();

    //   cy.allure().startStep('Click and visible on Banner MasonJarSliderFR')
    //   cy.log('Click and visible on Banner MasonJarSliderFR')
    //   HomePage_PO.getBannerMasonJarSliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain',"Collection Bocal de Maçon");
    //   HomePage_PO.getLogo().click();
    //   cy.allure().endStep();

    //   cy.allure().startStep('Click and visible on Banner SympathySliderFR')
    //   cy.log('Click and visible on Banner SympathySliderFR')
    //   HomePage_PO.getBannerSympathySliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain',"Fleurs de sympathie et funéraires");
    //   HomePage_PO.getLogo().click();
    //   cy.allure().endStep();

    //   cy.allure().startStep('Click and visible on Banner Gourmet')
    //   cy.log('Click and visible on Banner Gourmet')
    //   HomePage_PO.getBannerGourmetSliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain',"Paniers cadeaux gourmands");
    //   HomePage_PO.getLogo().click();
    //   cy.allure().endStep();

    //   cy.allure().startStep('Click and visible on Banner AnniversarySliderFR')
    //   cy.log('Click and visible on Banner AnniversarySliderFR')
    //   HomePage_PO.getBannerAnniversarySliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain',"Anniversary Flowers");
    //   HomePage_PO.getLogo().click();
    //   cy.allure().endStep();

    //   cy.allure().startStep('Click and visible on Banner SweetheartCollectionSliderFR')
    //   cy.log('Click and visible on Banner SweetheartCollectionSliderFR')
    //   HomePage_PO.getBannerSweetheartCollectionSliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain','Collection "Chérie"');
    //   HomePage_PO.getLogo().click();
    //   cy.allure().endStep();

    //   cy.allure().startStep('Click and visible on Banner SweetBlossomsCollectionSliderFR')
    //   cy.log('Click and visible on Banner SweetBlossomsCollectionSliderFR')
    //   HomePage_PO.getBannerSweetBlossomsCollectionSliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain', 'Fleurs pour la fête des Mères - "Fleurs douces"');
    //   HomePage_PO.getLogo().click();
    //   cy.allure().endStep();

    //   cy.allure().startStep('Click and visible on Banner BunchesCollectionSliderFR')
    //   cy.log('Click and visible on Banner BunchesCollectionSliderFR')
    //   HomePage_PO.getBannerBunchesCollectionSliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain', "La collection des grappes");
    //   HomePage_PO.getLogo().click();
    //   cy.allure().endStep();

    //   cy.allure().startStep('Click and visible on NewGCSliderFR')
    //   cy.log('Click and visible on NewGCSliderFR')
    //   HomePage_PO.getBannerNewGCSliderFR().click({ force: true });
    //   cy.get('.landing_title').should('be.visible').should('contain', "Collection Gourmande");
    //   HomePage_PO.getLogo().click();
      

      cy.log('END Click SLIDER banners')
      cy.allure().endStep();
      cy.allure().endStep();
    }

}

export default new BannersFR;