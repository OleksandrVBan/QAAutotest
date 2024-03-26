/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';
import SiteMap from '../../pages/SiteMap'

class CheckSiteMapLinks {
    checkSiteMapTopMenuLinks() {

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkPolicies().click();
        cy.get('.content_title_inner').should('contain', 'Order & Return Policy');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkContacFreeDelivery().click({ force: true });
        cy.get('.content_title_inner').should('contain', 'Contact-Free Delivery');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkOrderAndReturnPolicy().click();
        cy.get('.content_title_inner').should('contain', 'Order & Return Policy');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSubstitutionPolicy().click();
        cy.get('.content_title_inner').should('contain', 'Substitution Policy');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkDeliveryPolicy().click();
        cy.get('.content_title_inner').should('contain', 'Delivery Policy');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkPromotionPolicy().click();
        cy.get('.content_title_inner').should('contain', 'Promotion & Discount Policy');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkPrivacyPolicy().click();
        cy.get('.content_title_inner').should('contain', 'Privacy Policy');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkTermsOfUse().click();
        cy.get('.content_title_inner').should('contain', 'TERMS OF USE');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHelpAccount().click();
        cy.get('.breadcrumb_active').should('contain', 'account');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkYourBloomexAccount().click();
        cy.get('.breadcrumb_active').should('contain', 'account');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkLostPassword().click();
        cy.get('.new_checkout_header').should('contain', 'Create Password');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkYourShoppingCart().click();
        cy.get('[class="col-xs-12 col-sm-12 col-md-12 col-lg-12"]').should('contain', 'Shopping cart Summary');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkFlowerCare().click();
        cy.get('.content_title_inner').should('contain', 'Flower Care');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBloomexLoyaltyProgram().click();
        cy.get('.content_title_inner').should('contain', 'Bloomex Loyalty Program');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkYourBloomexBucks().click();
        cy.get('.breadcrumb_active').should('contain', ' your bloomex buck history');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCanadasOfficialFlorist().click();
        cy.get('.content_title_inner').should('contain', "Canada's Official Florist");

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkAboutUs().click();
        cy.get('.content_title_inner').should('contain', "Canada's Official Florist");

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCanadaOfficialFlorist().click();
        cy.get('.content_title_inner').should('contain', "Canada's Official Florist");

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBloomexF3().click();
        cy.get('.content_title_inner').should('contain', 'Bloomex "F3"');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCommunityPartners().click();
        cy.get('.content_title_inner').should('contain', 'Bloomex Community Partners');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkLoyaltyProgram().click();
        cy.get('.content_title_inner').should('contain', 'Bloomex Loyalty Program');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCorporate().click();
        cy.get('.content_title_inner').should('contain', 'Bloomex Corporate Account');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkApplyForCorporateDiscount().click();
        cy.get('.content_title_inner').should('contain', 'Bloomex Corporate Account');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkQuoteRequestForm().click();
        cy.get('[class="text-center"]').should('contain', 'Quote Form');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkJobs().click();
        cy.get('.breadcrumb_active').should('contain', 'jobs');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkIT().click();
        cy.get('.content_title_inner').should('contain', 'Job Full-Stack Developer');


    }


    checkSiteMapCategoriesLinks() {

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSpecialOccasions().click();
        cy.get('.landing_title').should('contain', 'Special Occasions');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkAnniversaryFlowers().click();
        cy.get('.landing_title').should('contain', 'Anniversary Flowers');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCongratulationsFlowersGifts().click();
        cy.get('.landing_title').should('contain', 'Congratulations Flowers & Gifts');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGetWellFlowersGifts().click();
        cy.get('.landing_title').should('contain', 'Get Well Flowers & Gifts');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHousewarmingFlowersGifts().click();
        cy.get('.landing_title').should('contain', 'Housewarming Flowers & Gifts');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkJustBecause().click();
        cy.get('.landing_title').should('contain', 'Just Because');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkLoveRomance().click();
        cy.get('.landing_title').should('contain', 'Love & Romance');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkNewBabyFlowersGifts().click();
        cy.get('.landing_title').should('contain', 'New Baby Flowers & Gifts');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkThankYouFlowersGifts().click();
        cy.get('.landing_title').should('contain', 'Thank You Flowers & Gifts');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkWeddingFlowers().click();
        cy.get('.landing_title').should('contain', 'Wedding Flowers');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCenterpieces().click();
        cy.get('.landing_title').should('contain', 'Centerpieces');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBalloonBouquets().click();
        cy.get('.landing_title').should('contain', 'Balloon Bouquets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSympathyFuneralFlowers().click();
        cy.get('.landing_title').should('contain', 'Sympathy & Funeral Flowers');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkUnder40().click();
        cy.get('.landing_title').should('contain', 'Under $40');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLink40_60().click();
        cy.get('.landing_title').should('contain', '$40 - $60');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLink60_100().click();
        cy.get('.landing_title').should('contain', '$60 - $100');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSympathyFlowers().click();
        cy.get('.landing_title').should('contain', 'Sympathy Flowers');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSympathyWreaths().click();
        cy.get('.landing_title').should('contain', 'Sympathy Wreaths');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHeartsAndCrosses().click();
        cy.get('.landing_title').should('contain', 'Hearts and Crosses');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCasketSprays().click();
        cy.get('.landing_title').should('contain', 'Casket and Funeral Sprays');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSympathyFlowerPackages().click();
        cy.get('.landing_title').should('contain', 'Funeral Flower Packages');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkUrnFlowerArrangements().click();
        cy.get('.landing_title').should('contain', 'Urn Flower Arrangements');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSympathyFlowerBaskets().click();
        cy.get('.landing_title').should('contain', 'Sympathy Flower Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSympathyGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Sympathy Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkFreshCutFlowers().click();
        cy.get('.landing_title').should('contain', 'Fresh Cut Flowers');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMixedBouquets().click();
        cy.get('.landing_title').should('contain', 'Mixed Bouquets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkDaisies().click();
        cy.get('.landing_title').should('contain', 'Daisy Bouquets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkRoses().click();
        cy.get('.landing_title').should('contain', 'Roses');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSunflowers_().click();
        cy.get('.landing_title').should('contain', 'Sunflowers');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkFlowerPlanterBaskets().click();
        cy.get('.landing_title').should('contain', 'Flower & Planter Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkAutumnCollection().click();
        cy.get('.landing_title').should('contain', 'Autumn Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHalloween().click();
        cy.get('.landing_title').should('contain', 'Halloween');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkThanksgivingFlowers().click();
        cy.get('.landing_title').should('contain', 'Thanksgiving Flowers');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBusinessGifts().click();
        cy.get('.landing_title').should('contain', 'Business Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGourmetGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Gourmet Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGiftsForHim_().click();
        cy.get('.landing_title').should('contain', 'Gifts For Him');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkKidsGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Gift Baskets for Kids');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkWeddingGifts().click();
        cy.get('.landing_title').should('contain', 'Wedding Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkTreatsGourmetSnacks().click();
        cy.get('.landing_title').should('contain', 'Treats & Gourmet Snack Baskets');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGourmetChocolates().click();
        cy.get('.landing_title').should('contain', 'Gourmet Chocolates');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkByPrice().click();
        cy.get('.landing_title').should('contain', 'Shop by Price');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLink40_50().click();
        cy.get('.landing_title').should('contain', '$40 - $50');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkUnder20().click();
        cy.get('.landing_title').should('contain', 'under $20');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentinesDay().click();
        cy.get('.landing_title').should('contain', "Valentines Day Flowers");


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentinesDesignersCollection().click();
        cy.get('.landing_title').should('contain', "Valentines Designer's Collection");

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentineBouquets().click();
        cy.get('.landing_title').should('contain', "Valentine Bouquets");


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentineGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Valentine Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentineChocolates().click();
        cy.get('.landing_title').should('contain', 'Valentine Chocolates');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentineComboSavings().click();
        cy.get('.landing_title').should('contain', 'Valentine Combo Savings');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentineTulips().click();
        cy.get('.landing_title').should('contain', 'Valentine Tulips');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkRadiantOrchidCollection().click();
        cy.get('.landing_title').should('contain', 'Radiant Orchid Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBeMyValentineTulips().click();
        cy.get('.landing_title').should('contain', 'Be My Valentine Tulips');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHotLadyRoses().click();
        cy.get('.landing_title').should('contain', 'Hot Lady Roses');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentinesSweetheartCollection().click();
        cy.get('.landing_title').should('contain', 'Valentines Sweetheart Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentineHotLadySprayRoses().click();
        cy.get('.landing_title').should('contain', 'Valentine Hot Lady Spray Roses');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentinesDayAlstroemeriaCollection().click();
        cy.get('.landing_title').should('contain', "Valentine's Day Alstroemeria Collection");


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentineAssortedRoseSpecials().click();
        cy.get('.landing_title').should('contain', 'Valentine Assorted Rose Specials');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkEasterFlowers().click();
        cy.get('.landing_title').should('contain', 'Easter Flowers');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkAdministrativeAssistantDay().click();
        cy.get('.landing_title').should('contain', 'Administrative Professionals Day');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMothersDayFlowersGifts().click();
        cy.get('.landing_title').should('contain', 'Mothers Day Flowers & Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMothersDayDesignersCollection().click();
        cy.get('.landing_title').should('contain', "Mother's Day Flowers | Designer Collection");

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMothersDaySpecials().click();
        cy.get('.landing_title').should('contain', 'Mothers Day Specials');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMothersDayGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Mothers Day Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMothersDayOrchids().click();
        cy.get('.landing_title').should('contain', "Mother's Day Orchids");


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMothersDayAssortedRoses().click();
        cy.get('.landing_title').should('contain', 'Mothers Day Assorted Roses');

        //bug 404
        // HomePage_PO.getButtonSiteMap().click();
        // SiteMap.getLinkFathersDay().click();
        // cy.get('.landing_title').should('contain', "Father's Day");

        //bug 404
        // HomePage_PO.getButtonSiteMap().click();
        // SiteMap.getLinkGourmetGiftBasketsForFather().click();
        // cy.get('.landing_title').should('contain', 'Gourmet Gift Baskets for Father');

        // //bug 404
        // HomePage_PO.getButtonSiteMap().click();
        // SiteMap.getLinkFathersDayGifts().click();
        // cy.get('.landing_title').should('contain', 'Fathers Day Gifts');

        // //bug 404
        // HomePage_PO.getButtonSiteMap().click();
        // SiteMap.getLinkWineAndBeerGiftBaskets().click();
        // cy.get('.landing_title').should('contain', 'Wine and Beer Gift Baskets');

        //////////////////////////////////trying to avoid error out of memory
        cy.log('start trying to avoid error out of memory')
        cy.getAllLocalStorage().should('not.be.empty')
        cy.clearLocalStorage()
      //  cy.getAllLocalStorage().should('be.empty')

        cy.getCookies().should('not.be.empty')
        cy.clearCookies()
        cy.clearAllCookies()
      //  cy.getCookies().should('be.empty')

        
        cy.log('END start trying to avoid error out of memory')



        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHanukkahFlowers().click();
        cy.get('.landing_title').should('contain', 'Hanukkah Flowers');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkFruitBaskets().click();
        cy.get('.landing_title').should('contain', 'Fruit Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSweetsBaskets().click();
        cy.get('.landing_title').should('contain', 'Sweets Gift Baskets');

        // //bug 404
        // HomePage_PO.getButtonSiteMap().click();
        // SiteMap.getLinkGourmetGiftBaskets2().click();
        // cy.get('.landing_title').should('contain', 'Gourmet Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkTeaGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Tea Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCoffeeGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Coffee Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSnackGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Snack Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCheeseGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Cheese Gift Baskets');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGourmetCollection().click();
        cy.get('.landing_title').should('contain', 'Gourmet Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCorporateGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Corporate Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChocolateGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Chocolate Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGourmetCollection2().click();
        cy.get('.landing_title').should('contain', 'Gourmet Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGiftBasketsForMen().click();
        cy.get('.landing_title').should('contain', 'Gift Baskets for Men');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkWineBeerGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Wine & Beer Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHolidayTraditionCollection().click();
        cy.get('.landing_title').should('contain', 'Holiday Tradition Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkLindtGiftBasketCollection().click();
        cy.get('.landing_title').should('contain', 'Lindt Gift Basket Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkLuxuryGiftBoxCollection().click();
        cy.get('.landing_title').should('contain', 'Luxury Gift Box Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSpecials().click();
        cy.get('.landing_title').should('contain', 'Specials');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkFridayRoses65off().click();
        cy.get('.landing_title').should('contain', '65% off Friday Roses!');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkAutumnBouquets().click();
        cy.get('.landing_title').should('contain', 'Autumn Bouquets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHolidayCentrepieces().click();
        cy.get('.landing_title').should('contain', 'Holiday Centrepieces');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkValentineSpecials().click();
        cy.get('.landing_title').should('contain', 'Valentine Specials');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBirthdayFlowersGifts().click();
        cy.get('.landing_title').should('contain', 'Birthday Flowers & Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBirthdayFlowers().click();
        cy.get('.landing_title').should('contain', 'Birthday Flowers');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBirthdayGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Birthday Gift Baskets');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBirthdayBalloonBouquets().click();
        cy.get('.landing_title').should('contain', 'Birthday Balloon Delivery');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBirthdayDesignerCollection().click();
        cy.get('.landing_title').should('contain', 'Half Price Birthday Flowers');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkBirthdayGourmetCollection().click();
        cy.get('.landing_title').should('contain', 'Birthday Gourmet Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCorporateGifts().click();
        cy.get('.landing_title').should('contain', 'Corporate Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkOfficeFruitBoxes().click();
        cy.get('.landing_title').should('contain', 'Office Fruit Boxes');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGourmetGifts().click();
        cy.get('.landing_title').should('contain', 'Gourmet Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGetWellFlowers().click();
        cy.get('.landing_title').should('contain', 'Get Well Flowers');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSympathyFlowers2().click();
        cy.get('.landing_title').should('contain', 'Sympathy Flowers');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkirthdayFlowers().click();
        cy.get('.landing_title').should('contain', 'Birthday Flowers');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCongratulationGifts().click();
        cy.get('.landing_title').should('contain', 'Congratulation Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkPoinsettias().click();
        cy.get('.landing_title').should('contain', 'Poinsettias');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGiftPack3().click();
        cy.get('.landing_title').should('contain', 'Gift Pack 3');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkRoshHashanah().click();
        cy.get('.landing_title').should('contain', 'Rosh Hashanah');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasGifts().click();
        cy.get('.landing_title').should('contain', 'Christmas Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkEleganceGiftBasketCollection().click();
        cy.get('.landing_title').should('contain', 'Elegance Gift Basket Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasFlowersAndGifts().click();
        cy.get('.landing_title').should('contain', 'Christmas Flowers and Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasFlowers().click();
        cy.get('.landing_title').should('contain', 'Christmas Flowers');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHolidayGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Holiday Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasPoinsettias().click();
        cy.get('.landing_title').should('contain', 'Christmas Planter Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasCentrepieces().click();
        cy.get('.landing_title').should('contain', 'Christmas Centrepieces');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasBellsCollection().click();
        cy.get('.landing_title').should('contain', 'Christmas Bells Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasDesignerCollection().click();
        cy.get('.landing_title').should('contain', 'Christmas Designer Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasGourmetCollection().click();
        cy.get('.landing_title').should('contain', 'Christmas Gourmet Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasLindtGiftBasketCollection_().click();
        cy.get('.landing_title').should('contain', 'Christmas Lindt Gift Basket Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasWineAndBeerGiftBaskets().click();
        cy.get('.landing_title').should('contain', 'Christmas Wine and Beer Gift Baskets');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkLiveMiniChristmasTrees().click();
        cy.get('.landing_title').should('contain', 'Live Mini Christmas Trees');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkChristmasLuxuryGiftBoxCollection().click();
        cy.get('.landing_title').should('contain', 'Christmas Luxury Gift Box Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkTheMasonJarCollection().click();
        cy.get('.landing_title').should('contain', 'The Mason Jar Collection');

        //bug!!!
        // HomePage_PO.getButtonSiteMap().click();
        // SiteMap.getLink2022McDonaldsCanadaCoast().click();
        // cy.get('.landing_title').should('contain', "2022 McDonald’s® Canada Coast to Coast MONOPOLY® REWARDS");


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkDHL().click();
        cy.get('.landing_title').should('contain', 'DHL');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkAutumnBlooms().click();
        cy.get('.landing_title').should('contain', 'Autumn Bunches Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkRWBBalletBloomHolidayCollection().click();
        cy.get('.landing_title').should('contain', 'RWB Ballet  in Bloom Holiday Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkRealtorProgram().click();
        cy.get('.landing_title').should('contain', 'Realtor Program');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCanadianTulipFestivalCollection().click();
        cy.get('.landing_title').should('contain', 'Canadian Tulip Festival Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkTheInspirationCollectionREWARDS().click();
        cy.get('.landing_title').should('contain', 'The Inspiration Collection');

        //BUG  404   
        // HomePage_PO.getButtonSiteMap().click();
        // SiteMap.getLink2022McDonaldsCanadaCoastPRIZES().click();
        // cy.get('.landing_title').should('contain', '404');

        //////////////////////////////////trying to avoid error out of memory
        cy.log('start trying to avoid error out of memory')
        cy.getAllLocalStorage().should('not.be.empty')
        cy.clearLocalStorage()
      //  cy.getAllLocalStorage().should('be.empty')

        cy.getCookies().should('not.be.empty')
        cy.clearCookies()
        cy.clearAllCookies()
      //  cy.getCookies().should('be.empty')

        
        cy.log('END start trying to avoid error out of memory')


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHugsAndKissesCollection().click();
        cy.get('.landing_title').should('contain', 'Hugs and Kisses Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkABetterFLORIST().click();
        cy.get('.landing_title').should('contain', 'A BETTER FLORIST');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkREDTAGSPECIALS().click();
        cy.get('.landing_title').should('contain', 'RED TAG SPECIALS');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkInternationalWomensDay().click();
        cy.get('.landing_title').should('contain', 'International Womens Day');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHeirloomGifts().click();
        cy.get('.landing_title').should('contain', 'Heirloom Gifts');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkGourmetGiftClubs().click();
        cy.get('.landing_title').should('contain', 'Gourmet Gift Clubs');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkEdwardJonesCustomProducts().click();
        cy.get('.landing_title').should('contain', 'Edward Jones Custom Products');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkRosesWineCollection().click();
        cy.get('.landing_title').should('contain', 'Roses & Wine Collection');


        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkTropicalPlantsPlanterBaskets().click();
        cy.get('.landing_title').should('contain', 'Tropical Plants & Planter Baskets');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkShopForGood().click();
        cy.get('.landing_title').should('contain', 'Shop for Good');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMakeAWishCollection().click();
        cy.get('.landing_title').should('contain', 'Make-A-Wish® Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSeasonOfHopeCollection().click();
        cy.get('.landing_title').should('contain', 'Season of Hope Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHeartStrokeCollection().click();
        cy.get('.landing_title').should('contain', 'Heart & Stroke Collection');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkHumaneCanada().click();
        cy.get('.landing_title').should('contain', 'Humane Canada');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMultipleSclerosisSocietyOfCanadaCollection().click();
        cy.get('.landing_title').should('contain', 'Multiple Sclerosis Society of Canada Collection');

        // HomePage_PO.getButtonSiteMap().click();
        // SiteMap..click();
        // cy.get('.landing_title').should('contain', '');

    }


    checkSiteMapFlowersLinks() {

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCalgaryFlowers().click({ force: true });
        cy.get('.landing_title').should('contain', 'Calgary Flower Delivery');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkEdmontonFlowers().click({ force: true });
        cy.get('.landing_title').should('contain', 'Edmonton Flower Delivery');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkNeepawaFlowers().click({ force: true });
        cy.get('.landing_title').should('contain', 'Neepawa Flower Delivery');
        
        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkSaintCuthbertFlowers().click({ force: true });
        cy.get('.landing_title').should('contain', 'Saint-Cuthbert Flower Delivery');

    }

    checkSiteMapGiftBaskets() {
        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCalgaryGiftBaskets().click({ force: true });
        cy.get('.landing_title').should('contain', 'Calgary Gift Baskets  Delivery');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkEdmontonGiftBaskets().click({ force: true });
        cy.get('.bottom_category').find('.landing_title').should('contain', 'Edmonton Gift Baskets  Delivery');

        ////
        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkMataneGiftBaskets().click({ force: true });
        cy.get('.landing_title').should('contain', 'Matane Gift Baskets  Delivery');

        ////
        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkPortWadeGiftBaskets().click({ force: true });
        cy.get('.bottom_category').find('.landing_title').should('contain', 'Port Wade Gift Baskets  Delivery');


    }

    

    checkSiteMapSympathyFlowers(){
        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkCalgarySympathyFlowers().click({ force: true });
        cy.get('.landing_title').should('contain', 'Calgary Sympathy Flowers');

        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkEdmontonSympathyFlowers().click({ force: true });
        cy.get('.landing_title').should('contain', 'Edmonton Sympathy Flowers');

        ////
        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkPetitMetisSympathyFlowers().click({ force: true });
        cy.get('.landing_title').should('contain', 'Petit-Metis Sympathy Flowers');

        ///
        HomePage_PO.getButtonSiteMap().click();
        SiteMap.getLinkPortWadeSympathyFlowers().click({ force: true });
        cy.get('.landing_title').should('contain', 'Port Wade Sympathy Flowers');


    }



}

export default new CheckSiteMapLinks;