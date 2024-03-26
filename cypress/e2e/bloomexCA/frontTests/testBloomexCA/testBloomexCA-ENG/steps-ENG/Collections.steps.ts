/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO';
import Collection from '../../pages/Collection';


class Collections {

   checkCollections_SpecialsSection() {

      cy.allure().startStep('Check that Specials Section contain collections');
      cy.log('START checking Collections_SpecialsSection');

      cy.get('.subcategories').should('contain', 'Friday Roses - 65% off');
      cy.get('.subcategories').should('contain', 'Sweet Blossoms Collection');
      cy.get('.subcategories').should('contain', 'Designer Collection');
      cy.get('.subcategories').should('contain', 'Sweetheart Collection');
      //not actual
      //cy.get('.subcategories').should('contain', 'Mothers Day Specials');

      cy.allure().endStep();

      cy.allure().startStep('Search and Click Designer Collection and check that open page is correct');

      Collection.searchAndClickElementByTitle('Designer Collection');
      cy.get('.landing_title').should('contain', 'Designer Collection');

      cy.allure().endStep();

      cy.allure().startStep('Search and Click Friday Roses Collection and check that open page is correct');
      HomePage_PO.getButtonSpecials().click();
      Collection.searchAndClickElementByTitle('Friday Roses - 65% off');
      cy.get('.landing_title').should('contain', '65% off Friday Roses!');

      cy.allure().endStep();

      cy.allure().startStep('Search and Click Sweet Blossoms Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials().click();
      Collection.searchAndClickElementByTitle('Sweet Blossoms Collection');
      cy.get('.landing_title').should('contain', 'Sweet Blossoms Collection');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Sweetheart Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials().click();
      Collection.searchAndClickElementByTitle('Sweetheart Collection');
      cy.get('.landing_title').should('contain', 'Sweetheart Collection');

      cy.allure().endStep();


      // cy.allure().startStep('Search and Click Mothers Day Specials Collection and check that open page is correct');

      // HomePage_PO.getButtonSpecials().click();
      // Collection.searchAndClickElementByTitle('Mothers Day Specials');
      // cy.get('.landing_title').should('contain', 'Mothers Day Specials');

      // cy.allure().endStep();
      cy.log('END checking Collections_SpecialsSection');
      cy.allure().endStep();
   }

   checkCollections_SpecialsSection_ShopForGood() {

      cy.allure().startStep('Checking Collections_SpecialsSection_ShopForGood');
      cy.allure().startStep('Check that SpecialsSection_ShopForGood Category contain collections');
      cy.log('START Checking Collections_SpecialsSection_ShopForGood');

      cy.get('.subcategories').should('contain', 'Make-A-Wish® Collection');
      cy.get('.subcategories').should('contain', 'Emotions Collection');
      cy.get('.subcategories').should('contain', 'Meagan Bebenek Foundation');
      cy.get('.subcategories').should('contain', 'Humane Canada');
      cy.get('.subcategories').should('contain', 'Toronto Humane Society');
      cy.get('.subcategories').should('contain', 'Heart & Stroke Collection');
      cy.get('.subcategories').should('contain', 'Ovarian Cancer Canada');
      cy.get('.subcategories').should('contain', 'Multiple Sclerosis Society of Canada Collection');
      cy.get('.subcategories').should('contain', 'Childhood Cancer Canada');

      cy.allure().endStep();

      cy.allure().startStep('Search and Click Make-A-Wish Collection and check that open page is correct');
      Collection.searchAndClickElementByTitle('Make-A-Wish® Collection');
      cy.get('.landing_title').should('contain', 'Make-A-Wish® Collection');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Emotions Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_ShopForGood().click({ force: true });

      Collection.searchAndClickElementByTitle('Emotions Collection');
      cy.get('.landing_title').should('contain', 'Emotions Collection');

      cy.allure().endStep();

      cy.allure().startStep('Search and Click Meagan Bebenek Foundation Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_ShopForGood().click({ force: true });

      Collection.searchAndClickElementByTitle('Meagan Bebenek Foundation');
      cy.get('.landing_title').should('contain', 'Meagan Bebenek Foundation');

      cy.allure().endStep();

      cy.allure().startStep('Search and Click Humane Canada and check that open page is correct');

      HomePage_PO.getButtonSpecials_ShopForGood().click({ force: true });

      Collection.searchAndClickElementByTitle('Humane Canada');
      cy.get('.landing_title').should('contain', 'Humane Canada');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Toronto Humane Society Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_ShopForGood().click({ force: true });

      Collection.searchAndClickElementByTitle('Toronto Humane Society');
      cy.get('.landing_title').should('contain', 'Toronto Humane Society');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Childhood Cancer Canada Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_ShopForGood().click({ force: true });

      Collection.searchAndClickElementByTitle('Childhood Cancer Canada');
      cy.get('.landing_title').should('contain', 'Childhood Cancer Canada');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Heart & Stroke Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_ShopForGood().click({ force: true });

      Collection.searchAndClickElementByTitle('Heart & Stroke Collection');
      cy.get('.landing_title').should('contain', 'Heart & Stroke Collection');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Multiple Sclerosis Society of Canada Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_ShopForGood().click({ force: true });

      Collection.searchAndClickElementByTitle('Multiple Sclerosis Society of Canada Collection');
      cy.get('.landing_title').should('contain', 'Multiple Sclerosis Society of Canada Collection');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Ovarian Cancer Canada Collection and check that open page is correct');
      HomePage_PO.getButtonSpecials_ShopForGood().click({ force: true });

      Collection.searchAndClickElementByTitle('Ovarian Cancer Canada');
      cy.get('.landing_title').should('contain', 'Ovarian Cancer Canada');

      cy.log('END checking Collections_SpecialsSection_ShopForGood');
      cy.allure().endStep();
      cy.allure().endStep();
      cy.allure().endStep();
   }

   checkCollections_SpecialsSection_DesignerCollection() {

      cy.allure().startStep('Search and Click Designer Collection and check that open page is correct');
      cy.log('START checking Collections_SpecialsSection_DesignerCollection');

      HomePage_PO.getButtonSpecials_Designer().click({ force: true });
      Collection.searchAndClickElementByTitle('Designer Collection');
      cy.get('.landing_title').should('contain', 'Designer Collection');

      cy.log('END checking Collections_SpecialsSection_DesignerCollection');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Birthday Designer Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_Designer().click({ force: true });

      Collection.searchAndClickElementByTitle('Birthday Designer Collection');
      cy.get('.landing_title').should('contain', 'Birthday Designer Collection');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Anniversary Designer Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_Designer().click({ force: true });

      Collection.searchAndClickElementByTitle('Anniversary Designer Collection');
      cy.get('.landing_title').should('contain', 'Anniversary Designer Collection');

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Sympathy Designer Collection and check that open page is correct');
      HomePage_PO.getButtonSpecials_Designer().click({ force: true });

      Collection.searchAndClickElementByTitle('Sympathy Designer Collection');
      cy.get('.landing_title').should('contain', 'Sympathy Designer Collection');

      cy.log('END checking Collections_SpecialsSection_DesignerCollection')
      cy.allure().endStep();
      cy.allure().endStep();
   }

   checkCollections_SpecialsSection_TeddyBearsVasesAndChocolates() {

      cy.allure().startStep('Search and Click Teddy Bears Collection and check that open page is correct');

      cy.log('START checkping Collections_SpecialsSection_TeddyBearsVasesAndChocolates');

      Collection.searchAndClickElementByTitle('Teddy Bears')
      cy.get('.landing_title').should('contain', 'Teddy Bears')

      cy.allure().endStep();

      cy.allure().startStep('Search and Click Vases Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_TeddyBearsVasesChocolates().click({ force: true })

      Collection.searchAndClickElementByTitle('Vases')
      cy.get('.landing_title').should('contain', 'Vases')

      cy.allure().endStep();


      cy.allure().startStep('Search and Click Chocolates and Treats Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_TeddyBearsVasesChocolates().click({ force: true })

      Collection.searchAndClickElementByTitle('Chocolates and Treats')
      cy.get('.landing_title').should('contain', 'Chocolates & Treats')

      cy.allure().endStep();

      cy.allure().startStep('Search and Click Cards Collection and check that open page is correct');

      HomePage_PO.getButtonSpecials_TeddyBearsVasesChocolates().click({ force: true })

      Collection.searchAndClickElementByTitle('Cards')
      cy.get('.landing_title').should('contain', 'Cards')

      cy.log('END checkping Collections_SpecialsSection_TeddyBearsVasesAndChocolates');
      cy.allure().endStep();
      cy.allure().endStep();
   }

   checkByPriceCollections() {
      cy.allure().startStep('Check page By Price Collections');
      cy.log('START Check page By Price Collections');

      HomePage_PO.getButtonByPrice().click({ force: true });

      cy.get('.subcategories').should('contain', 'under $20');
      cy.get('.subcategories').should('contain', '$20 - $30');
      cy.get('.subcategories').should('contain', '$30 - $40');
      cy.get('.subcategories').should('contain', '$40 - $50');
      cy.get('.subcategories').should('contain', '$50 and up');

      cy.allure().endStep();

      cy.allure().startStep('Check By Price Collections');
      Collection.searchAndClickElementByTitle('under $20');
      cy.get('.landing_title').should('contain', 'under $20');
      HomePage_PO.getButtonByPrice().click({ force: true })

      Collection.searchAndClickElementByTitle('$20 - $30');
      cy.get('.landing_title').should('contain', '$20 - $30');
      HomePage_PO.getButtonByPrice().click({ force: true });

      Collection.searchAndClickElementByTitle('$30 - $40');
      cy.get('.landing_title').should('contain', '$30 - $40');
      HomePage_PO.getButtonByPrice().click({ force: true });

      Collection.searchAndClickElementByTitle('$40 - $50');
      cy.get('.landing_title').should('contain', '$40 - $50');
      HomePage_PO.getButtonByPrice().click({ force: true });

      Collection.searchAndClickElementByTitle('$50 and up');
      cy.get('.landing_title').should('contain', '$50 and up');
      HomePage_PO.getButtonByPrice().click({ force: true });

      cy.log('END Check page By Price Collections');
      cy.allure().endStep();
      cy.allure().endStep();
   }

   checkOccasionsCollectionsSection() {

      cy.allure().startStep('Check Occasions Collections');
      cy.log('START Check Occasions Collections');

      HomePage_PO.getButtonOccasions().click({ force: true });
''
      cy.get('[title="Congratulations Flowers & Gifts"]').should('be.visible');
      cy.get('[title="New Baby Flowers & Gifts"]').should('be.visible');
      cy.get('[title="Love & Romance"]').should('be.visible');
      cy.get('[title="Housewarming Flowers & Gifts"]').should('be.visible');
      cy.get('[title="Thank You Flowers & Gifts"]').should('be.visible');
      cy.get('[title="Just Because"]').should('be.visible');
      cy.get('[title="Anniversary Flowers"]').should('be.visible');
      cy.get('[title="Get Well Flowers & Gifts"]').should('be.visible');
      
      Collection.searchAndClickElementByTitle('Just Because');
      cy.get('.landing_title').should('contain', 'Just Because');
      HomePage_PO.getButtonOccasions().click({ force: true });

      Collection.searchAndClickElementByTitle('Congratulations Flowers & Gifts');
      cy.get('.landing_title').should('contain', 'Congratulations Flowers & Gifts');
      HomePage_PO.getButtonOccasions().click({ force: true });

      Collection.searchAndClickElementByTitle('Get Well Flowers & Gifts');
      cy.get('.landing_title').should('contain', 'Get Well Flowers & Gifts');
      HomePage_PO.getButtonOccasions().click({ force: true });

      Collection.searchAndClickElementByTitle('Love & Romance');
      cy.get('.landing_title').should('contain', 'Love & Romance');
      HomePage_PO.getButtonOccasions().click({ force: true });

      Collection.searchAndClickElementByTitle('Housewarming Flowers & Gifts');
      cy.get('.landing_title').should('contain', 'Housewarming Flowers & Gifts');
      HomePage_PO.getButtonOccasions().click({ force: true })

      Collection.searchAndClickElementByTitle('Thank You Flowers & Gifts')
      cy.get('.landing_title').should('contain', 'Thank You Flowers & Gifts')
      HomePage_PO.getButtonOccasions().click({ force: true });

      Collection.searchAndClickElementByTitle('New Baby Flowers & Gift');
      cy.get('.landing_title').should('contain', 'New Baby Flowers & Gift');
      HomePage_PO.getButtonOccasions().click({ force: true });

      Collection.searchAndClickElementByTitle('Anniversary Flowers');
      cy.get('.landing_title').should('contain', 'Anniversary Flowers');
      HomePage_PO.getButtonOccasions().click({ force: true });
      
      cy.log('END Check Occasions Collections');
      cy.allure().endStep();
   }

   checkOccasionsCollectionsSection_BirthdayFlowersAndGifts() {

      cy.allure().startStep('Check Occasions Collection Section_BirthdayFlowersAndGifts');

      cy.get('.subcategories').should('contain', 'Birthday Designer Collection')
      cy.get('.subcategories').should('contain', 'Birthday Gourmet Collection')
      cy.get('.subcategories').should('contain', 'Birthday Flowers')
      cy.get('.subcategories').should('contain', 'Birthday Mug Collection ')

      Collection.searchAndClickElementByTitle('Birthday Designer Collection')
      cy.get('.landing_title').should('contain', 'Half Price Birthday Flowers')

      HomePage_PO.getButtonOccasions_BirthdayFlowersAndGifts().click({ force: true })

      Collection.searchAndClickElementByTitle('Birthday Gourmet Collection')
      cy.get('.landing_title').should('contain', 'Birthday Gourmet Collection')

      HomePage_PO.getButtonOccasions_BirthdayFlowersAndGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Birthday Flowers')
      cy.get('.landing_title').should('contain', 'Birthday Flowers')

      HomePage_PO.getButtonOccasions_BirthdayFlowersAndGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Birthday Mug Collection')
      cy.get('.landing_title').should('contain', 'Birthday Mug Collection')

      cy.allure().endStep();
   }

   checkOccasionsCollectionsSection_SympathyAndFuneral() {
      cy.allure().startStep('Check Occasions Collection Section_SympathyAndFuneral');
      cy.log('START Check Occasions Collection Section_SympathyAndFuneral');

      cy.get('[title="Casket and Funeral Sprays"]').should('be.visible');
      cy.get('[title="Sympathy Flowers"]').should('be.visible');
      cy.get('[title="Sympathy Best Sellers"]').should('be.visible');
      cy.get('[title="Urn Flower Arrangements"]').should('be.visible');
      cy.get('[title="Funeral Flower Packages"]').should('be.visible');
      cy.get('[title="Hearts and Crosses"]').should('be.visible');
      cy.get('[title="Designer Collection Sympathy Flowers"]').should('be.visible');
      cy.get('[title="Sympathy Wreaths"]').should('be.visible');

      HomePage_PO.getButtonOccasions_SympathyAndFuneral().click({ force: true })

      Collection.searchAndClickElementByTitle('Casket and Funeral Sprays')
      cy.get('.landing_title').should('contain', 'Casket and Funeral Sprays')

      HomePage_PO.getButtonOccasions_SympathyAndFuneral().click({ force: true })

      Collection.getCollectionOccasionsSection_SympathyFuneralFlowers_SympathyFlowers()
      Collection.searchAndClickElementByTitle('Sympathy Flowers')
      cy.get('.landing_title').should('contain', 'Sympathy Flowers')

      HomePage_PO.getButtonOccasions_SympathyAndFuneral().click({ force: true })
      Collection.searchAndClickElementByTitle('Sympathy Best Sellers')
      cy.get('.landing_title').should('contain', 'Sympathy Best Sellers')

      HomePage_PO.getButtonOccasions_SympathyAndFuneral().click({ force: true })
      Collection.searchAndClickElementByTitle('Urn Flower Arrangements')
      cy.get('.landing_title').should('contain', 'Urn Flower Arrangements')

      HomePage_PO.getButtonOccasions_SympathyAndFuneral().click({ force: true })
      Collection.searchAndClickElementByTitle('Funeral Flower Packages')
      cy.get('.landing_title').should('contain', 'Funeral Flower Packages')

      HomePage_PO.getButtonOccasions_SympathyAndFuneral().click({ force: true })
      Collection.searchAndClickElementByTitle('Hearts and Crosses')
      cy.get('.landing_title').should('contain', 'Hearts and Crosses')

      HomePage_PO.getButtonOccasions_SympathyAndFuneral().click({ force: true })
      Collection.searchAndClickElementByTitle('Designer Collection Sympathy Flowers')
      cy.get('.landing_title').should('contain', 'Designer Collection Sympathy Flowers')

      HomePage_PO.getButtonOccasions_SympathyAndFuneral().click({ force: true })
      Collection.searchAndClickElementByTitle('Sympathy Wreaths')
      cy.get('.landing_title').should('contain', 'Sympathy Wreaths')

      cy.log('END Check Occasions Collection Section_SympathyAndFuneral');
      cy.allure().endStep();
   }

   checkOccasionsCollectionsSection_CorporateGifts() {
      cy.allure().startStep('Check OccasionsCollectionsSection_CorporateGifts')
      cy.log('START Check OccasionsCollectionsSection_CorporateGifts')

      HomePage_PO.getButtonOccasions_CorporateGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Birthday Flowers')
      cy.get('.landing_title').should('contain', "Birthday Flowers")

      HomePage_PO.getButtonOccasions_CorporateGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Corporate Gift Baskets')
      cy.get('.landing_title').should('contain', "Corporate Gift Baskets")

      HomePage_PO.getButtonOccasions_CorporateGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Sympathy Flowers')
      cy.get('.landing_title').should('contain', "Sympathy Flowers")

      HomePage_PO.getButtonOccasions_CorporateGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Congratulation Gifts')
      cy.get('.landing_title').should('contain', "Congratulation Gifts")

      HomePage_PO.getButtonOccasions_CorporateGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Office Fruit Boxes')
      cy.get('.landing_title').should('contain', "Office Fruit Boxes")

      HomePage_PO.getButtonOccasions_CorporateGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Gourmet Gifts')
      cy.get('.landing_title').should('contain', "Gourmet Gifts")

      HomePage_PO.getButtonOccasions_CorporateGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Get Well Flowers')
      cy.get('.landing_title').should('contain', "Get Well Flowers")

      HomePage_PO.getButtonOccasions_CorporateGifts().click({ force: true })
      Collection.searchAndClickElementByTitle('Balloon Bouquets')
      cy.get('.landing_title').should('contain', "Balloon Bouquets")

      cy.log('END Check OccasionsCollectionsSection_CorporateGifts')
      cy.allure().endStep();

   }

   checkFlowersCollectionsSection() {
      cy.allure().startStep('Check FlowersCollectionsSection');
      cy.log('START Check FlowersCollectionsSection')

      HomePage_PO.getButtonFlowers().click({ force: true })

      cy.get('[title="Mixed Bouquets"]').should('be.visible');
      cy.get('[title="Lilies"]').should('be.visible');
      cy.get('[title="Designer Collection"]').should('be.visible');
      cy.get('[title="Roses"]').should('be.visible');
 
     Collection.searchAndClickElementByTitle('Mixed Bouquets')
      cy.get('.landing_title').should('contain', "Mixed Bouquets")

      HomePage_PO.getButtonFlowers().click({ force: true })
      Collection.searchAndClickElementByTitle('Lilies')
      cy.get('.landing_title').should('contain', "Lilies")

      HomePage_PO.getButtonFlowers().click({ force: true })
      Collection.searchAndClickElementByTitle('Designer Collection')
      cy.get('.landing_title').should('contain', "Designer Collection")

      HomePage_PO.getButtonFlowers().click({ force: true })
      Collection.searchAndClickElementByTitle('Roses')
      cy.get('.landing_title').should('contain', "Roses")

      cy.log('END Check FlowersCollectionsSection')
      cy.allure().endStep();
   }

   checkGiftBasketsCollectionsSection() {

      cy.allure().startStep('Check GiftBasketsCollectionsSection');
      cy.log('START Check GiftBasketsCollectionsSection')

      cy.get('[title="Wine & Beer Gift Baskets"]').should('be.visible');
      cy.get('[title="Corporate Gift Baskets"]').should('be.visible');
      cy.get('[title="Snack Gift Baskets"]').should('be.visible');
      cy.get('[title="Chocolate Gift Baskets"]').should('be.visible');
      cy.get('[title="Holiday Tradition Collection"]').should('be.visible');
      cy.get('[title="Sweets Baskets"]').should('be.visible');
      cy.get('[title="Lindt Gift Basket Collection"]').should('be.visible');
      cy.get('[title="Fruit Baskets"]').should('be.visible');
      cy.get('[title="Great Combinations"]').should('be.visible');
      cy.get('[title="Luxury Gift Box Collection"]').should('be.visible');
      cy.get('[title="Coffee Gift Baskets"]').should('be.visible');
      cy.get('[title="Gourmet Collection"]').should('be.visible');
      cy.get('[title="Custom - Any Budget"]').should('be.visible');
      cy.get('[title="Gourmet Gift Baskets"]').should('be.visible');
      cy.get('[title="Cheese Gift Baskets"]').should('be.visible');
      cy.get('[title="Tea Gift Baskets"]').should('be.visible');

      Collection.searchAndClickElementByTitle("Wine & Beer Gift Baskets")
      cy.get('.landing_title').should('contain', "Wine & Beer Gift Baskets")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Corporate Gift Baskets')
      cy.get('.landing_title').should('contain', "Corporate Gift Baskets")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Snack Gift Baskets')
      cy.get('.landing_title').should('contain', "Snack Gift Baskets")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Chocolate Gift Baskets')
      cy.get('.landing_title').should('contain', "Chocolate Gift Baskets")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Holiday Tradition Collection')
      cy.get('.landing_title').should('contain', "Holiday Tradition Collection")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Sweets Baskets')
      cy.get('.landing_title').should('contain', "Sweets Gift Baskets")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Lindt Gift Basket Collection')
      cy.get('.landing_title').should('contain', "Lindt Gift Basket Collection")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Fruit Baskets')
      cy.get('.landing_title').should('contain', "Fruit Baskets")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Great Combinations')
      cy.get('.landing_title').should('contain', "Great Combinations")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Luxury Gift Box Collection')
      cy.get('.landing_title').should('contain', "Luxury Gift Box Collection")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Coffee Gift Baskets')
      cy.get('.landing_title').should('contain', "Coffee Gift Baskets")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Gourmet Collection')
      cy.get('.landing_title').should('contain', "Gourmet Collection")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Custom - Any Budget')
      cy.get('.landing_title').should('contain', "Custom - Any Budget")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Cheese Gift Baskets')
      cy.get('.landing_title').should('contain', "Cheese Gift Baskets")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      Collection.searchAndClickElementByTitle('Tea Gift Baskets')
      cy.get('.landing_title').should('contain', "Tea Gift Baskets")
      HomePage_PO.getButtonGiftBasketsSection().click({ force: true })

      cy.log('END Check GiftBasketsCollectionsSection');
      cy.allure().endStep();

   }

   checkBulkFlowersCollectionsSection() {

      cy.allure().startStep('Check Bulk Flowers Collections Section');
      cy.log('START Check Bulk Flowers Collections Section');

      HomePage_PO.getButtonBulkFlowers().click({ force: true })

      cy.get('[title="Bulk Hydrangea"]').should('be.visible');
      cy.get('[title="Bulk Sunflowers"]').should('be.visible');
      cy.get('[title="Bulk Carnations"]').should('be.visible');
      cy.get('[title="Bulk Hydrangea"]').should('be.visible');
      cy.get('[title="Bulk Lilies"]').should('be.visible');
      cy.get('[title="Bulk Greens"]').should('be.visible');
      cy.get('[title="Bulk Roses"]').should('be.visible');
      cy.get('[title="Bulk Alstroemeria"]').should('be.visible');
      cy.get('[title="Bulk Gerberas"]').should('be.visible');
      cy.get('[title="Bulk Snapdragons"]').should('be.visible');
      cy.get('[title="Bulk Chrysanthemums"]').should('be.visible');
      cy.get('[title="Bulk Spray Roses"]').should('be.visible');
      cy.get('[title="Bulk Calla Lilies"]').should('be.visible');

      Collection.searchAndClickElementByTitle("Bulk Hydrangea");
      cy.get('.landing_title').should('contain', "Bulk Hydrangea");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Sunflowers");
      cy.get('.landing_title').should('contain', "Bulk Sunflowers");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Greens");
      cy.get('.landing_title').should('contain', "Bulk Greens");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Alstroemeria");
      cy.get('.landing_title').should('contain', "Bulk Alstroemeria");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Roses");
      cy.get('.landing_title').should('contain', "Bulk Roses");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Carnations");
      cy.get('.landing_title').should('contain', "Bulk Carnations");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Lilies");
      cy.get('.landing_title').should('contain', "Bulk Lilies");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Gerberas");
      cy.get('.landing_title').should('contain', "Bulk Gerberas");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Calla Lilies");
      cy.get('.landing_title').should('contain', "Bulk Calla Lilies");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Chrysanthemums");
      cy.get('.landing_title').should('contain', "Bulk Chrysanthemums");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Spray Roses");
      cy.get('.landing_title').should('contain', "Bulk Spray Roses");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      Collection.searchAndClickElementByTitle("Bulk Snapdragons");
      cy.get('.landing_title').should('contain', "Bulk Snapdragons");
      HomePage_PO.getButtonBulkFlowers().click({ force: true });

      cy.log('END Check Bulk Flowers Collections Section');
      cy.allure().endStep();
   }

   checkCorporateGiftsCollection(){
      cy.allure().startStep('Check Corporate Gifts Collection Section');
      cy.log('START Check Corporate Gifts Collection  Section');

      cy.get('[title="Sympathy Flowers"]').should('be.visible');
      cy.get('[title="Corporate Wine and Beer Gift Baskets"]').should('be.visible');
      cy.get('[title="Corporate Gourmet Collection"]').should('be.visible');
      cy.get('[title="Corporate Christmas Poinsettias"]').should('be.visible');
      cy.get('[title="Corporate Christmas Flowers"]').should('be.visible');
      cy.get('[title="Congratulation Gifts"]').should('be.visible');
      cy.get('[title="Corporate Gift Baskets"]').should('be.visible');
      cy.get('[title="Birthday Flowers"]').should('be.visible');
  
      HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })

      Collection.searchAndClickElementByTitle("Sympathy Flowers");
      cy.get('.landing_title').should('contain', "Sympathy Flow");
      HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })

      Collection.searchAndClickElementByTitle("Corporate Wine and Beer Gift Baskets");
      cy.get('.landing_title').should('contain', "Corporate Wine and Beer Gift Baskets");
      HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })

      Collection.searchAndClickElementByTitle("Corporate Gourmet Collection");
      cy.get('.landing_title').should('contain', "Corporate Gourmet Collection");
      HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })

      Collection.searchAndClickElementByTitle("Corporate Christmas Poinsettias");
      cy.get('.landing_title').should('contain', "Corporate Christmas Poinsettias");
      HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })

      Collection.searchAndClickElementByTitle("Corporate Christmas Flowers");
      cy.get('.landing_title').should('contain', "Corporate Christmas Flowers");
      HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })

      Collection.searchAndClickElementByTitle("Congratulation Gifts");
      cy.get('.landing_title').should('contain', "Congratulation Gifts");
      HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })

      Collection.searchAndClickElementByTitle("Corporate Gift Baskets");
      cy.get('.landing_title').should('contain', "Corporate Gift Baskets");
      HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })

      Collection.searchAndClickElementByTitle("Birthday Flowers");
      cy.get('.landing_title').should('contain', "Birthday Flowers");
      HomePage_PO.getButtonCorporate_CorporateGifts().click({ force: true })
      

      cy.log('END Check Corporate Gifts Collection  Section');
      cy.allure().endStep();
   }

   
   //not actual
   // checkOccasionsCollectionsSection_MothersDay() {

   //    cy.allure().startStep('Check Occasions Collection Mothers Day');
   //    cy.log('START Check Occasions Collection Mothers Day')

   //    cy.get('[class="page"]').should('contain', 'Mothers Day Tulips')
   //    cy.get('[class="page"]').should('contain', 'Mothers Day Mug & Flowers')
   //    cy.get('[class="page"]').should('contain', "Mother's Day Orchids")
   //    cy.get('[class="page"]').should('contain', 'Mothers Day Bunches Collection')
   //    cy.get('[class="page"]').should('contain', 'Mothers Day Assorted Roses')
   //    cy.get('[class="page"]').should('contain', 'Sweet Blossoms Collection')
   //    cy.get('[class="page"]').should('contain', 'Mothers Day Designers Collection')
   //    cy.get('[class="page"]').should('contain', 'Mothers Day Specials')

   //    HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
   //    Collection.searchAndClickElementByTitle('Mothers Day Tulips')
   //    cy.get('.landing_title').should('contain', "Mother's Day Tulips")


   //    HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
   //    Collection.searchAndClickElementByTitle('Mothers Day Mug & Flowers')
   //    cy.get('.landing_title').should('contain', "Mothers Day Mug & Flowers")

   //    HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
   //    Collection.searchAndClickElementByTitle('Mothers Day Specials')
   //    cy.get('.landing_title').should('contain', "Mothers Day Specials")

   //    HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
   //    Collection.searchAndClickElementByTitle('Sweet Blossoms Collection')
   //    cy.get('.landing_title').should('contain', "Sweet Blossoms Collection")

   //    HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
   //    Collection.searchAndClickElementByTitle('Mothers Day Designers Collection')
   //    cy.get('.landing_title').should('contain', "Mother's Day Flowers | Designer Collection")

   //    HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
   //    Collection.searchAndClickElementByTitle('Mothers Day Assorted Roses')
   //    cy.get('.landing_title').should('contain', "Mothers Day Assorted Roses")

   //    HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
   //    Collection.searchAndClickElementByTitle("Mother's Day Orchids")
   //    cy.get('.landing_title').should('contain', "Mother's Day Orchids")

   //    HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
   //    Collection.searchAndClickElementByTitle('Mothers Day Bunches Collection')
   //    cy.get('.landing_title').should('contain', "Mothers Day Bunches Collection")

   //    HomePage_PO.getButtonOccasions_MothersDayFlowersAndGifts().click({ force: true })
   //    Collection.searchAndClickElementByTitle('Mothers Day Tulips')
   //    cy.get('.landing_title').should('contain', "Mother's Day Tulips")

   //    cy.log('END Check Occasions Collection Mothers Day')
   //    cy.allure().endStep();
   // }
}


export default new Collections;

