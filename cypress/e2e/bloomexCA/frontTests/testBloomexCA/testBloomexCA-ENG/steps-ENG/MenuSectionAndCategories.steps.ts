/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';


class MenuSectionAndCategories {

    checkSpecialSection() {
        cy.allure().startStep('Check Special Section');
        cy.log('START of checking Special Section')

        cy.allure().startStep('Check Button Specials');
        HomePage_PO.getButtonSpecials().click();
       
        cy.get('.landing_title').should('contain', 'Specials');

        cy.log('END of checking Special Section')
        cy.allure().endStep();
    };

    checkCategorySpecialsSection_ShopForGood() {

        cy.allure().startStep('Check CategorySpecialsSection_ShopForGood');

        cy.log('START of checking Special Categories');

        cy.allure().startStep('Check page in CategorySpecialsSection_ShopForGood');
        cy.log('checkCategorySpecialsSection_ShopForGood');

        HomePage_PO.getButtonSpecials_ShopForGood().click({ force: true });
        cy.get('.landing_title').should('contain', 'Shop for Good');

        cy.log('END of checking Special Categories');

        cy.allure().endStep()
    }

    checkCategorySpecialsSection_DesignerCollection() {

        cy.allure().startStep('Check CategorySpecialsSection_DesignerCollection');
        cy.allure().startStep('Check page CategorySpecialsSection_DesignerCollection');

        cy.log('START CheckCategorySpecialsSection_DesignerCollection');

        HomePage_PO.getButtonSpecials_Designer().click({ force: true });
        cy.get('.landing_title').should('contain', 'Designer Collection');

        cy.log('END CheckCategorySpecialsSection_DesignerCollection');
        cy.log('END of checking Specials Categories')
        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_TeddyBearsVasesChocolates() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_TeddyBearsVasesChocolates');
        cy.allure().startStep('START Check page CategorySpecialsSection_getButtonSpecials_TeddyBearsVasesChocolates');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_TeddyBearsVasesChocolates');

        cy.wait(200)
        HomePage_PO.getButtonSpecials_TeddyBearsVasesChocolates().click({ force: true });
        cy.get('.landing_title').should('contain', 'Cards, Vases & Teddy Bears');

        cy.allure().startStep('END Check page CategorySpecialsSection_getButtonSpecials_TeddyBearsVasesChocolates');

        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_FlowerSubscription() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_FlowerSubscription');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_FlowerSubscription');

        HomePage_PO.getButtonSpecials_FlowerSubscription().click({ force: true });
        cy.get('.landing_title').should('contain', 'Subscription');

        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_Bunches() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_Bunches');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_Bunches');

        HomePage_PO.getButtonSpecials_Bunches().click({ force: true });
        cy.get('.landing_title').should('contain', 'The Bunches Collection');

        cy.allure().endStep();

    }

    checkCategorySpecialsSection_getButtonSpecials_FridayOnlyRoses() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_FridayOnlyRoses');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_FridayOnlyRoses');

        HomePage_PO.getButtonSpecials_FridayOnlyRoses().click({ force: true });
        cy.get('.landing_title').should('contain', '65% off Friday Roses!');

        cy.allure().endStep();

    }
     
    checkCategorySpecialsSection_getButtonSpecials_MasonJar() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_MasonJar');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_MasonJar');

        HomePage_PO.getButtonSpecials_MasonJar().click({ force: true });
        cy.get('.landing_title').should('contain', 'The Mason Jar Collection');

        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_HugsAndKisses() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_HugsAndKisses');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_HugsAndKisses');

        HomePage_PO.getButtonSpecials_HugsAndKisses().click({ force: true });
        cy.get('.landing_title').should('contain', 'Hugs and Kisses Collection');

        cy.allure().endStep();
    }

    //not actual
    checkCategorySpecialsSection_getButtonSpecials_MothersDay() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_MothersDay');
        cy.log('START checkCategorySpecialsSection_getButtonSpecials_MothersDay');

        HomePage_PO.getButtonSpecials_MothersDay().click({ force: true });
        cy.get('.landing_title').should('contain', 'Mothers Day Specials');

        cy.log('END checkCategorySpecialsSection_getButtonSpecials_MothersDay');
        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_SpringTulips() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_SpringTulips');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_SpringTulips');

        HomePage_PO.getButtonSpecials_SpringTulips().click({ force: true });
        cy.get('.landing_title').should('contain', 'Fresh Cut Tulips');

        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_Sweetheart() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_Sweetheart');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_Sweetheart');

        HomePage_PO.getButtonSpecials_Sweetheart().click({ force: true });
        cy.get('.landing_title').should('contain', 'Sweetheart Collection');

        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_SweetBlossom() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_SweetBlossom');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_SweetBlossom');

        HomePage_PO.getButtonSpecials_SweetBlossom().click({ force: true });
        cy.get('.landing_title').should('contain', 'Sweet Blossoms Collection');

        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_LindtGiftBaskets() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_LindtGiftBaskets');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_LindtGiftBaskets');

        HomePage_PO.getButtonSpecials_LindtGiftBaskets().click({ force: true });
        cy.get('.landing_title').should('contain', 'Lindt Gift Basket Collection');

        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_RosesAndWine() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_RosesAndWine');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_RosesAndWine');

        HomePage_PO.getButtonSpecials_RosesAndWine().click({ force: true });
        cy.get('.landing_title').should('contain', 'Roses & Wine Collection');

        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_RedTagSpecials() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_RedTagSpecials');
        cy.log(' checkCategorySpecialsSection_getButtonSpecials_RedTagSpecials');

        HomePage_PO.getButtonSpecials_RedTagSpecials().click({ force: true });
        cy.get('.landing_title').should('contain', 'RED TAG SPECIALS');

        cy.allure().endStep();
    }

    checkCategorySpecialsSection_getButtonSpecials_Gourmet() {

        cy.allure().startStep('Check CategorySpecialsSection_getButtonSpecials_Gourmet');
        cy.log('checkCategorySpecialsSection_getButtonSpecials_Gourmet');


        HomePage_PO.getButtonSpecials_Gourmet().click({ force: true })
        cy.get('.landing_title').should('contain', 'Gourmet Collection')

        cy.allure().endStep();
        cy.allure().endStep();

    }
    checkByPriceSection() {

        cy.allure().startStep('Check page ByPrice Section');
        cy.log('START checking ByPriceSection')

        HomePage_PO.getButtonByPrice().click({ force: true })
        cy.get('.landing_title').should('contain', 'Shop by Price')

        HomePage_PO.getButtonByPrice_Under20().click({ force: true })
        cy.get('.landing_title').should('contain', 'under $20')

        HomePage_PO.getButtonByPrice_20_30().click({ force: true })
        cy.get('.landing_title').should('contain', '$20 - $30')

        HomePage_PO.getButtonByPrice_30_40().click({ force: true })
        cy.get('.landing_title').should('contain', '$30 - $40')

        HomePage_PO.getButtonByPrice_40_50().click({ force: true })
        cy.get('.landing_title').should('contain', '$40 - $50')

        HomePage_PO.getButtonByPrice_50().click({ force: true })
        cy.get('.landing_title').should('contain', '$50 and up')

        cy.log('END checking ByPriceSection')
        cy.allure().endStep();
    }

    checkOccasionsSection() {
       

        cy.allure().startStep('Check Occasions Section menu categories');
        cy.log('START Check Occasions Section menu categories');

        HomePage_PO.getButtonOccasions().click({ force: true });
        cy.get('[class="landing_title"]').should('contain', 'Special Occasions');

        cy.log('End Check Occasions Section menu categories')
        cy.allure().endStep();
    }

    checkOccasions_BirthdayFlowersAndGifts() {

        cy.allure().startStep('Check Occasions_BirthdayFlowersAndGifts Category');

        HomePage_PO.getButtonOccasions_BirthdayFlowersAndGifts().click({ force: true })
        cy.get('[class="landing_title"]').should('contain', 'Birthday Flowers & Gifts')

        cy.allure().endStep();
    }

    checkOccasions_SympathyAndFuneral() {
        cy.allure().startStep('Check Occasions_SympathyAndFuneral Category');
        cy.log('START Check Occasions_SympathyAndFuneral Category')

        HomePage_PO.getButtonOccasions_SympathyAndFuneral().click({ force: true })
        cy.get('[class="landing_title"]').should('contain', 'Sympathy & Funeral Flowers')

        cy.log('END Check Occasions_SympathyAndFuneral Category')
        cy.allure().endStep();
    }

    checkOccasions_Anniversary() {
        HomePage_PO.getButtonOccasions_Anniversary().click({ force: true })
        cy.get('.landing_title').should('contain', 'Anniversary Flowers')
    }

    //Administrative Professionals Day - 26 of April

    checkOccasions_AdministrativeProfessionalsDay() {
        HomePage_PO.getButtonOccasions_AdministrativeProfessionalsDay()
        cy.get('.landing_title').should('contain', 'Administrative Professionals Day')
    }

    checkOccasions_MothersDay() {
        cy.allure().startStep('Check Occasions_MothersDayFlowersAndGifts');
        cy.log('START Check Occasions_MothersDayFlowersAndGifts')
        HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
        cy.get('[class="landing_title"]').should('contain', 'Mothers Day Flowers & Gifts')

        cy.log('END Check Occasions_MothersDayFlowersAndGifts')
        cy.allure().endStep();
    }

    checkOccasions_JustBecause() {
        cy.allure().step('Check Occasions Just Because', true);
        cy.log('START Check Occasions_JustBecause')

        HomePage_PO.getButtonOccasions_JustBecause().click({ force: true })
        cy.get('.landing_title').should('contain', "Just Because")

        cy.log('END Check Occasions_JustBecause')
        cy.allure().endStep();
    }

    checkOccasions_LoveAndRomance() {
        cy.allure().step('Check Occasions Love And Romance', true);
        cy.log('START Check Occasions_LoveAndRomance')

        HomePage_PO.getButtonOccasions_LoveAndRomance().click({ force: true })
        cy.get('.landing_title').should('contain', "Love & Romance")

        cy.log('END Check Occasions_LoveAndRomance')
        cy.allure().endStep();
    }

    checkOccasions_NewBaby() {
        cy.allure().step('Check Occasions New Baby', true);
        cy.log('START Check Occasions_NewBaby')

        HomePage_PO.getButtonOccasions_NewBaby().click({ force: true })
        cy.get('.landing_title').should('contain', "New Baby Flowers & Gifts")

        cy.log('END Check Occasions_NewBaby')
        cy.allure().endStep();
    }

    checkOccasions_Housewarming() {
        cy.allure().step('Check Occasions Housewarming', true);
        cy.log('START Check Occasions_Housewarming')

        HomePage_PO.getButtonOccasions_Housewarming().click({ force: true })
        cy.get('.landing_title').should('contain', "Housewarming Flowers & Gifts")

        cy.log('END Check Occasions_Housewarming')
        cy.allure().endStep();
    }

    checkOccasions_GetWell() {
        cy.allure().step('Check Occasions Get Well', true);
        cy.log('START Check Occasions_GetWell')

        HomePage_PO.getButtonOccasions_GetWell().click({ force: true })
        cy.get('.landing_title').should('contain', "Get Well Flowers & Gifts")

        cy.log('END Check Occasions_GetWell')
        cy.allure().endStep();
    }

    checkOccasions_GiftsForHim() {
        cy.allure().step('Check Occasions Gifts For Him', true);
        cy.log('START Check Occasions_GiftsForHim')

        HomePage_PO.getButtonOccasions_GiftsForHim().click({ force: true })
        cy.get('.landing_title').should('contain', "Gifts For Him")

        cy.log('END Check Occasions_GiftsForHim')
        cy.allure().endStep();
    }

    checkOccasions_CorporateGifts() {       
        cy.allure().startStep('Check Occasions_CorporateGifts');
        cy.log('START Check Occasions_CorporateGifts')

        HomePage_PO.getButtonOccasions_CorporateGifts().click({ force: true })
        cy.get('.landing_title').should('contain', "Corporate Gifts")

        cy.log('END Check Occasions_CorporateGifts');
        cy.allure().endStep();
    }

    checkOccasions_Congratulations() {
        cy.allure().step('Check Occasions Congratulations', true);
        cy.log('START Check Occasions_Congratulations')

        HomePage_PO.getButtonOccasions_Congratulations().click({ force: true })
        cy.get('.landing_title').should('contain', "Congratulations Flowers & Gifts")

        cy.log('END Check Occasions_Congratulations')
        cy.allure().endStep()
    }

    checkOccasions_ThankYou() {
        cy.allure().step('Check Occasions ThankYou', true);
        cy.log('START Check Occasions_ThankYou')

        HomePage_PO.getButtonOccasions_ThankYou().click({ force: true })
        cy.get('.landing_title').should('contain', "Thank You Flowers & Gifts")

        cy.log('END Check Occasions_ThankYou')
        cy.allure().endStep();
    }

    // not available now, Easter was on the 9 April  
    // HomePage_PO.getButtonOccasions_EasterFlowersAndGifts().click({ force: true })
    // cy.get('.landing_title').should('contain', 'Easter Flowers')
    //////////////////////////////////////////////////////////////////////////


    checkFlowersSection() {
        cy.allure().step('Check Flowers Section', true);
        cy.log('START Check FlowersSection')

        HomePage_PO.getButtonFlowers().click({ force: true })
        cy.get('[class="landing_title"]').should('contain', 'Fresh Cut Flowers')

        HomePage_PO.getButtonFlowers_MixedBouquets().click({ force: true })
        cy.get('.landing_title').should('contain', "Mixed Bouquets")

        HomePage_PO.getButtonFlowers_Lilies().click({ force: true })
        cy.get('.landing_title').should('contain', "Lilies")

        HomePage_PO.getButtonFlowers_Daisies().click({ force: true })
        cy.get('.landing_title').should('contain', "Daisy Bouquets")

        HomePage_PO.getButtonFlowers_Roses().click({ force: true })
        cy.get('.landing_title').should('contain', "Roses")

        HomePage_PO.getButtonFlowers_FlowerAndPlanterBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Flower & Planter Baskets")

        HomePage_PO.getButtonFlowers_Sunflowers().click({ force: true })
        cy.get('.landing_title').should('contain', "Sunflowers")

        HomePage_PO.getButtonFlowers_TropicalPlants().click({ force: true })
        cy.get('.landing_title').should('contain', "Tropical Plants")

        HomePage_PO.getButtonFlowers_BulkDIYFlowers().click({ force: true })
        cy.get('.landing_title').should('contain', "DIY Bulk Flowers")

        //not actual
        // HomePage_PO.getButtonFlowers_Tulips().click({ force: true })
        // cy.get('.landing_title').should('contain', "Fresh Cut Tulips")

        cy.log('END Check FlowersSection')
        cy.allure().endStep();
    }

    checkGiftBaskets() {

        cy.allure().startStep('Check page Gift Baskets');
        cy.log('START Check page Gift Baskets')

        HomePage_PO.getButtonGiftBasketsSection().click({ force: true })
        cy.get('[class="landing_title"]').should('contain', 'Gift Baskets Delivery')

        cy.log('END Check page Gift Baskets')
        cy.allure().endStep();
    }

    checkGiftBasketsCategories() {

        cy.allure().startStep('Check Gift Baskets Categories')
        cy.log('START Check Gift Baskets Categories')

        HomePage_PO.getButtonGiftBaskets_GourmetCollection().click({ force: true })
        cy.get('.landing_title').should('contain', "Gourmet Collection");

        HomePage_PO.getButtonGiftBaskets_BeerAndWineBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Wine & Beer Gift Baskets");

        HomePage_PO.getButtonGiftBaskets_CorporateGiftBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Corporate Gift Baskets");

        HomePage_PO.getButtonGiftBaskets_FruitBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Fruit Baskets");

        HomePage_PO.getButtonGiftBaskets_LindtGiftBasketCollection().click({ force: true })
        cy.get('.landing_title').should('contain', "Lindt Gift Basket Collection");

        HomePage_PO.getButtonGiftBaskets_HolidayTraditionCollection().click({ force: true })
        cy.get('.landing_title').should('contain', "Holiday Tradition Collection");

        HomePage_PO.getButtonGiftBaskets_GourmetGiftBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Gourmet Gift Baskets");

        HomePage_PO.getButtonGiftBaskets_EleganceGiftBasketCollection().click({ force: true })
        cy.get('.landing_title').should('contain', "Elegance Gift Basket Collection");

        HomePage_PO.getButtonGiftBaskets_LuxuryGiftBoxes().click({ force: true })
        cy.get('.landing_title').should('contain', "Luxury Gift Box Collection");

        HomePage_PO.getButtonGiftBaskets_SweetsGiftBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Sweets Gift Baskets");

        HomePage_PO.getButtonGiftBaskets_CheeseGiftBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Cheese Gift Baskets");

        HomePage_PO.getButtonGiftBaskets_ChocolateGiftBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Chocolate Gift Baskets");

        HomePage_PO.getButtonGiftBaskets_SnackGiftBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Snack Gift Baskets");

        HomePage_PO.getButtonGiftBaskets_GiftBasketsForMen().click({ force: true })
        cy.get('.landing_title').should('contain', "Gift Baskets for Men");

        HomePage_PO.getButtonGiftBaskets_CoffeeAndTeaBaskets().click({ force: true })
        cy.get('.landing_title').should('contain', "Coffee and Tea Baskets");

        HomePage_PO.getButtonGiftBaskets_MakeAWishCollection().click({ force: true })
        cy.get('.landing_title').should('contain', "Make-A-Wish® Collection");

        cy.log('END Check Gift Baskets Categories')
        cy.allure().endStep();
    }

    
    checkBulkFlowersSection() {

        cy.allure().startStep('Check page Bulk Flowers Section');
        cy.log('START Check page Bulk Flowers')

        HomePage_PO.getButtonBulkFlowers().click({ force: true })
        cy.get('.landing_title').should('contain', 'DIY Bulk Flowers')

        cy.log('END Check page Bulk Flowers')
        cy.allure().endStep();
    }

    checkBulkFlowersCategories() {

        cy.allure().startStep('Check Bulk Flowers')
        cy.log('START Check Bulk Flowers Categories')

        HomePage_PO.getButtonBulkFlowers_BulkHydrangea().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Hydrangea");

        HomePage_PO.getButtonBulkFlowers_BulkSunflowers().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Sunflowers");

        HomePage_PO.getButtonBulkFlowers_BulkGreens().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Greens");

        HomePage_PO.getButtonBulkFlowers_BulkAlstroemeria().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Alstroemeria");

        HomePage_PO.getButtonBulkFlowers_BulkRoses().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Roses");

        HomePage_PO.getButtonBulkFlowers_BulkCarnations().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Carnations");

        HomePage_PO.getButtonBulkFlowers_BulkTulips().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Tulips");

        HomePage_PO.getButtonBulkFlowers_BulkLilies().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Lilies");

        HomePage_PO.getButtonBulkFlowers_BulkGerberas().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Gerberas");

        HomePage_PO.getButtonBulkFlowers_BulkCallaLilies().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Calla Lilies");

        HomePage_PO.getButtonBulkFlowers_BulkChrysanthemums().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Chrysanthemums");

        HomePage_PO.getButtonBulkFlowers_BulkSprayRoses().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Spray Roses");

        HomePage_PO.getButtonBulkFlowers_BulkSnapdragons().click({ force: true })
        cy.get('.landing_title').should('contain', "Bulk Snapdragons");

        cy.log('END Check Bulk Flowers Categories')
        cy.allure().endStep();

    }


    checkTropicalPlantsSection() {
        cy.allure().step('Check Tropical Plants Section', true)
        cy.log('START Check Tropical Plants Section')

        HomePage_PO.getButtonTropicalPlants().click({ force: true })
        cy.get('.landing_title').should('contain', "Tropical Plants & Planter Baskets");

        cy.log('END Check Tropical Plants Section')
        cy.allure().endStep();
    }

    checkCorporate() {
        cy.allure().step('Check Corporate Section', true)
        cy.log('START Check Corporate Section')

        HomePage_PO.getButtonCorporate().click({ force: true })
        cy.get('h1').should('contain', "Bloomex Corporate Account");

        HomePage_PO.getButtonCorporate_ApplyForCorporateDiscount().click({ force: true })
        cy.get('h1').should('contain', "Bloomex Corporate Account");

        HomePage_PO.getButtonCorporate_QuoteRequestForm().click({ force: true })
        cy.get('h1').should('contain', "Quote Form");

        HomePage_PO.getButtonCorporate_CorporateGiftBaskets().click({ force: true })
        cy.get('h1').should('contain', "Corporate Gift Baskets");

        HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })
        cy.get('h1').should('contain', "Corporate Gifts");

        //not actual
        // HomePage_PO.getButtonCorporate_CorporateWellnessProgram().click({ force: true })
        // cy.get('h1').should('contain', "Office Fruit Boxes");

        cy.log('END Check Corporate Section')
        cy.allure().endStep();
    }

    checkAccount() {
        cy.log('START Check Account Section')

        HomePage_PO.getButtonHelpAccount().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'account')

        HomePage_PO.getButtonHelpAccount_YourBloomexAccount().click({ force: true })
        cy.get('span').should('contain', 'Please use your username and password to gain full access')

        HomePage_PO.getButtonHelpAccount_LostPassword().click({ force: true })
        cy.get('.new_checkout_header').should('contain', 'Create Password')

        HomePage_PO.getButtonHelpAccount_YourShoppingCart().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'cart')

        HomePage_PO.getButtonHelpAccount_YourBloomexBucks().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'your bloomex buck history')

        HomePage_PO.getButtonHelpAccount_FlowerCare().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'flower care')

        cy.log('END Check Account Section')

    }

    checkPolicies() {
        cy.log('START Check Policies Section')

        HomePage_PO.getButtonPolicies().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'order and return policy')
        cy.get('h1').should('contain', 'Order & Return Policy')

        HomePage_PO.getButtonPolicies_OrderAndReturnPolicy().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'order and return policy')
        cy.get('h1').should('contain', 'Order & Return Policy')

        HomePage_PO.getButtonPolicies_SubstitutionPolicy().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'substitution policy')
        cy.get('h1').should('contain', 'Substitution Policy')

        HomePage_PO.getButtonPolicies_DeliveryPolicy().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'delivery policy')
        cy.get('h1').should('contain', 'Delivery Policy')

        HomePage_PO.getButtonPolicies_PromotionPolicy().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'promotion policy')
        cy.get('h1').should('contain', 'Promotion & Discount Policy')

        HomePage_PO.getButtonPolicies_PrivacyPolicy().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'privacy policy')
        cy.get('h1').should('contain', 'Privacy Policy')

        HomePage_PO.getButtonPolicies_ContactFreeDelivery().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'contact free delivery')
        cy.get('h1').should('contain', 'Contact-Free Delivery')

        cy.log('END Check Policies Section')
    }

    checkLeftMenu() {
        HomePage_PO.getLeft_menu().should('contain', 'Designer Collection - Half Price')
        HomePage_PO.getLeft_menu().should('contain', '"Bunches" Collection | 50% off')
        HomePage_PO.getLeft_menu().should('contain', 'Sweet Blossom Collection')
        HomePage_PO.getLeft_menu().should('contain', 'RED TAG SPECIALS')
        HomePage_PO.getLeft_menu().should('contain', 'Shop by Price')
        HomePage_PO.getLeft_menu().should('contain', 'Anniversary Flowers')
    }

    checkLeftMenuByNameAndClick(name: string, counter: number = 0) {

        HomePage_PO.getLeft_menu().contains(name).then(el => {
            el.is('exist')

        })

        if (HomePage_PO.getLeft_menu().should('contain', name)) {
            HomePage_PO.getLeft_menu().contains('li', name).click()
        } else {
            cy.reload();
            counter = counter + 1
            if (counter < 10) {
                this.checkLeftMenuByNameAndClick(name, counter);
            } else {
                throw new Error("Element not found: " + name)
            }
        }

    }





}

export default new MenuSectionAndCategories;