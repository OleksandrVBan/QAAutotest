class HomePage_PO {

    getLogo() {
        return cy.get('.logo')
    }

    getButtonLanguageChange() {
        return cy.get('.nav > :nth-child(1) > a');
    }

    getIconOutsideCanadaAU() {
        return cy.get('[class="col-xs-12 col-sm-7 col-md-7 deliveries_outside"]').children('[target="_blank"]').eq(0)
    };

    getIconOutsideCanadaUK() {
        return cy.get('[class="col-xs-12 col-sm-7 col-md-7 deliveries_outside"]').children('[target="_blank"]').eq(1)
    };

    getIconOutsideCanadaUS() {
        return cy.get('[class="col-xs-12 col-sm-7 col-md-7 deliveries_outside"]').children('[target="_blank"]').eq(2)
    };

    getIconOutsideCanadaCH() {
        return cy.get('[class="col-xs-12 col-sm-7 col-md-7 deliveries_outside"]').children('[target="_blank"]').eq(3)
    };

    getIconOutsideCanadaNZ() {
        return cy.get('[class="col-xs-12 col-sm-7 col-md-7 deliveries_outside"]').children('[target="_blank"]').eq(4)
    };

     //Specials section
    getButtonSpecials() {
        return cy.get('.dropdown-toggle').contains('Specials');
    }

    getButtonSpecials_ShopForGood() {
        return cy.get('.dropdown-menu').contains('Shop for Good')
    }

    getButtonSpecials_Bunches() {
        return cy.get('.dropdown-menu').contains('Bunches Collection | Half Price')
    }

    getButtonSpecials_FlowerSubscription() {
        return cy.get('.dropdown-menu').contains('Flower Subscription')
    }

    getButtonSpecials_TeddyBearsVasesChocolates() {
        return cy.get('.dropdown-menu').contains('Teddy Bears, Vases and Chocolates')
    }

    getButtonSpecials_FridayOnlyRoses() {
        return cy.get('.dropdown-menu').contains('Friday Only Roses - 65% off')
    }

    getButtonSpecials_Designer() {
        return cy.get('.dropdown-menu').contains('Designer Collection - Half Price!')
    }

    getButtonSpecials_MasonJar() {
        return cy.get('.dropdown-menu').contains('Mason Jar Collection')
    }

    getButtonSpecials_HugsAndKisses() {
        return cy.get('.dropdown-menu').contains('Hugs and Kisses - Half Price!')
    }

    getButtonSpecials_MothersDay() {
        return cy.get('.dropdown-menu').contains('Mothers Day Specials')
    }

    getButtonSpecials_SpringTulips() {
        return cy.get('.dropdown-menu').contains('Half Price Spring Tulips')
    }

    getButtonSpecials_Sweetheart() {
        return cy.get('.dropdown-menu').contains('Sweetheart Collection - 50% off')
    }

    getButtonSpecials_SweetBlossom() {
        return cy.get('.dropdown-menu').contains('Sweet Blossom Collection - Half Price!')
    }

    getButtonSpecials_LindtGiftBaskets() {
        return cy.get('.dropdown-menu').contains('Lindt Gift Baskets - 50% off')
    }

    getButtonSpecials_RosesAndWine() {
        return cy.get('.dropdown-menu').contains('Roses and Wine')
    }

    getButtonSpecials_RedTagSpecials() {
        return cy.get('.dropdown-menu').contains('Red Tag Specials')
    }

    getButtonSpecials_Gourmet() {
        return cy.get('.dropdown-menu').contains('Gourmet Collection - Half Price!')
    }

    //Spéciaux section FR VERSION

    getButtonSpéciaux() {
        return cy.get('.dropdown-toggle').contains('Spéciaux');
    }

    getButtonSpecials_CollectionFeursDouces() {
        return cy.get('.dropdown-menu').contains('Collection Feurs Douces');
    }

    getButtonSpecials_CâlinsEtBisousMoitiéPrix() {
        return cy.get('.dropdown-menu').contains('Câlins et Bisous - moitié prix');
    }

    getButtonSpecials_CollectionChérie1_2Prix() {
        return cy.get('.dropdown-menu').contains('Collection Chérie - 1/2 prix');
    }

    getButtonSpecials_CollectionDeCréateursMoitiéPrix() {
        return cy.get('.dropdown-menu').contains('Collection de Créateurs - Moitié prix');
    }

    getButtonSpecials_SPÉCIALESÉTIQUETTEROUGE() {
        return cy.get('.dropdown-menu').contains('SPÉCIALES ÉTIQUETTE ROUGE');
    }

    getButtonSpecials_CollectionGourmetMoitiéPrix() {
        return cy.get('.dropdown-menu').contains('Collection Gourmet - Moitié Prix');
    }

    getButtonSpecials_OursEnPelucheVasesEtChocolats() {
        return cy.get('.dropdown-menu').contains('Ours en Peluche, Vases et Chocolats');
    }

    getButtonSpecials_CollectionDeBocauxMason() {
        return cy.get('.dropdown-menu').contains('Collection de bocaux Mason');
    }

    getButtonSpecials_PaniersCadeauxLindt50Prix() {
        return cy.get('.dropdown-menu').contains('Paniers Cadeaux Lindt - 50% prix');
    }

    getButtonSpecials_CollectionPoignéeDeFleursMoitiéPrix() {
        return cy.get('.dropdown-menu').contains('Collection Poignée de Fleurs - Moitié Prix');
    }

    getButtonSpecials_RosesEtVin() {
        return cy.get('.dropdown-menu').contains('Roses et vin');
    }

    getButtonSpecials_MagasinerPourLaBonté() {
        return cy.get('.dropdown-menu').contains('Magasiner pour la bonté');
    }

    getButtonSpecials_RosesDuVendredi_à_MoitiéPrix() {
        return cy.get('.dropdown-menu').contains('Roses du vendredi à Moitié Prix');
    }

    //By Price section

    getButtonByPrice() {
        return cy.get('.dropdown-toggle').contains('By Price');
    }

    getButtonByPrice_Under20() {
        return cy.get('.dropdown-menu').contains('Under $20')
    }

    getButtonByPrice_20_30() {
        return cy.get('.dropdown-menu').contains('$20 - $30')
    }

    getButtonByPrice_30_40() {
        return cy.get('.dropdown-menu').contains('$30 - $40')
    }

    getButtonByPrice_40_50() {
        return cy.get('.dropdown-menu').contains('$40 - $50')
    }

    getButtonByPrice_50() {
        return cy.get('.dropdown-menu').contains('$50+')
    }

    //Par Prix section FR VERSION

    getButtonParPrix() {
        return cy.get('.dropdown-toggle').contains('Par Prix');
    }

    getButtonParPrix_MoinsDe20$() {
        return cy.get('.dropdown-menu').contains('Moins de 20$')
    }

    getButtonParPrix_20$_30$() {
        return cy.get('.dropdown-menu').contains('20$ - 30$')
    }

    getButtonParPrix_30$_40$() {
        return cy.get('.dropdown-menu').contains('30$ - 40$')
    }

    getButtonParPrix_40$_50$() {
        return cy.get('.dropdown-menu').contains('40$ - 50$')
    }

    getButtonParPrix_50$plus() {
        return cy.get('.dropdown-menu').contains('50$ plus')
    }

    //Occasions section

    getButtonOccasions() {
        return cy.get('.dropdown-toggle').contains('Occasions')
    }

    getButtonOccasions_BirthdayFlowersAndGifts() {
        return cy.get('.dropdown-menu').contains('Birthday Flowers and Gifts')
    }

    getButtonOccasions_SympathyAndFuneral() {
        return cy.get('.dropdown-menu').contains('Sympathy and Funeral')
    }

    getButtonOccasions_Anniversary() {
        return cy.get('.dropdown-menu').contains('Anniversary')
    }

    // not available now, Easter was on the 9 April 
    // getButtonOccasions_EasterFlowersAndGifts() {
    //     return cy.get('.dropdown-menu').contains('Easter Flowers and Gifts')
    // }

    getButtonOccasions_MothersDayFlowersAndGifts() {
        return cy.get('.dropdown-menu').contains('Mothers Day Flowers and Gifts')
    }

    // not available now,  Passover was on the 5 April 
    // getButtonOccasions_PassoverFlowers() {
    //     return cy.get('.dropdown-menu').contains('Passover Flowers')
    // }

    getButtonOccasions_JustBecause() {
        return cy.get('.dropdown-menu').contains('Just Because')
    }

    getButtonOccasions_LoveAndRomance() {
        return cy.get('.dropdown-menu').contains('Love and Romance')
    }

    getButtonOccasions_NewBaby() {
        return cy.get('.dropdown-menu').contains('New Baby')
    }

    getButtonOccasions_Housewarming() {
        return cy.get('.dropdown-menu').contains('Housewarming')
    }

    getButtonOccasions_GetWell() {
        return cy.get('.dropdown-menu').contains('Get Well')
    }

    getButtonOccasions_GiftsForHim() {
        return cy.get('.dropdown-menu').contains('Gifts For Him')
    }

    getButtonOccasions_CorporateGifts() {
        return cy.get('.dropdown-menu').contains('Corporate Gifts')
    }

    getButtonOccasions_Congratulations() {
        return cy.get('.dropdown-menu').contains('Congratulations')
    }

    getButtonOccasions_ThankYou() {
        return cy.get('.dropdown-menu').contains('Thank You')
    }

    //Administrative Professionals Day - 26 of April
    getButtonOccasions_AdministrativeProfessionalsDay() {
        return cy.get('.dropdown-menu').contains('Administrative Professionals Day')
    }

    //Occasions section FR VERSION

    getButtonOccasionsFR() {
        return cy.get('.dropdown-toggle').contains('Occasions');
    }

    getButtonOccasions_FleursEtCadeauxDanniversaire() {
        return cy.get('.dropdown-menu').contains("Fleurs et cadeaux d'anniversaire");
    }

    getButtonOccasions_SympathieEtFunérailles() {
        return cy.get('.dropdown-menu').contains('Sympathie et Funérailles');
    }

    getButtonOccasions_Anniversaire() {
        return cy.get('.dropdown-menu').contains('Anniversaire');
    }

    getButtonOccasions_JusteParceQue() {
        return cy.get('.dropdown-menu').contains('Juste parce que');
    }

    getButtonOccasions_AmourEtRomance() {
        return cy.get('.dropdown-menu').contains('Amour et Romance');
    }

    getButtonOccasions_NouveauBébé() {
        return cy.get('.dropdown-menu').contains('Nouveau Bébé');
    }

    getButtonOccasions_PendrelaCrémaillère() {
        return cy.get('.dropdown-menu').contains('Pendre la crémaillère');
    }

    getButtonOccasions_BonRétablissement() {
        return cy.get('.dropdown-menu').contains('Bon rétablissement');
    }

    getButtonOccasions_CadeauxPourLui() {
        return cy.get('.dropdown-menu').contains('Cadeaux Pour Lui');
    }

    getButtonOccasions_CadeauxDentreprise() {
        return cy.get('.dropdown-menu').contains("Cadeaux d'entreprise");
    }

    getButtonOccasions_ToutesNosFélicitations() {
        return cy.get('.dropdown-menu').contains('Toutes nos Félicitations');
    }

    getButtonOccasions_Remerciements() {
        return cy.get('.dropdown-menu').contains('Remerciements');
    }

    //Flowers|Plants section

    getButtonFlowers() {
        return cy.get('.dropdown-toggle').contains('Flowers')
    }

    getButtonFlowers_Lilies() {
        return cy.get('.dropdown-menu').contains('Lilies')
    }

    getButtonFlowers_Roses() {
        return cy.get('.dropdown-menu').contains('Roses')
    }

    getButtonFlowers_MixedBouquets() {
        return cy.get('.dropdown-menu').contains('Mixed Bouquets')
    }

    getButtonFlowers_FlowerAndPlanterBaskets() {
        return cy.get('.dropdown-menu').contains('Flower and Planter Baskets')
    }

    getButtonFlowers_Daisies() {
        return cy.get('.dropdown-menu').contains('Daisies')
    }

    getButtonFlowers_Sunflowers() {
        return cy.get('.dropdown-menu').contains('Sunflowers')
    }

    getButtonFlowers_TropicalPlants() {
        return cy.get('.dropdown-menu').contains('Tropical Plants')
    }

    getButtonFlowers_BulkDIYFlowers() {
        return cy.get('.dropdown-menu').contains('Bulk DIY Flowers')
    }

    ///////////////////not actual
    // getButtonFlowers_Tulips() {
    //    return cy.get('.dropdown-menu').find('[href="/flowers/fresh-cut-tulips/"]').contains('Tulips')
    // }

    //Fleurs section FR VERSION

    getButtonFleurs() {
        return cy.get('.dropdown-toggle').contains('Fleurs');
    }

    getButtonFleurs_Marguerites() {
        return cy.get('.dropdown-menu').contains('Marguerites');
    }

    getButtonFleurs_DIYFleursEnVrac() {
        return cy.get('.dropdown-menu').contains('DIY Fleurs en Vrac');
    }

    getButtonFleurs_Tournesols() {
        return cy.get('.dropdown-menu').contains('Tournesols');
    }

    getButtonFleurs_TropicalPlants() {
        return cy.get('.dropdown-menu').contains('Tropical Plants');
    }

    getButtonFleurs_BouquetsMélangés() {
        return cy.get('.dropdown-menu').contains('Bouquets Mélangés');
    }

    getButtonFleurs_DesRoses() {
        return cy.get('.dropdown-menu').contains('Des Roses');
    }

    getButtonFleurs_PaniersDesFleursEtPlantes() {
        return cy.get('.dropdown-menu').contains('Paniers des fleurs et Plantes');
    }

    getButtonFleurs_Lys() {
        return cy.get('.dropdown-menu').contains('Lys');
    }

    // Gift Baskets section
    getButtonGiftBasketsSection() {
        return cy.get('.dropdown-toggle').contains('Gift Baskets')
    }

    getButtonGiftBaskets_GourmetCollection() {
        return cy.get('.dropdown-menu').contains('Gourmet Collection - Half Price')
    }

    getButtonGiftBaskets_BeerAndWineBaskets() {
        return cy.get('.dropdown-menu').contains('Beer and Wine Baskets')
    }

    getButtonGiftBaskets_CorporateGiftBaskets() {
        return cy.get('.dropdown-menu').contains('Corporate Gift Baskets')
    }

    getButtonGiftBaskets_FruitBaskets() {
        return cy.get('.dropdown-menu').contains('Fruit Baskets')
    }

    getButtonGiftBaskets_LindtGiftBasketCollection() {
        return cy.get('.dropdown-menu').contains('Lindt Gift Basket Collection')
    }

    getButtonGiftBaskets_HolidayTraditionCollection() {
        return cy.get('.dropdown-menu').contains('Holiday Tradition Collection')
    }

    getButtonGiftBaskets_GourmetGiftBaskets() {
        return cy.get('.dropdown-menu').contains('Gourmet Gift Baskets')
    }

    getButtonGiftBaskets_EleganceGiftBasketCollection() {
        return cy.get('.dropdown-menu').contains('Elegance Gift Basket Collection')
    }

    getButtonGiftBaskets_LuxuryGiftBoxes() {
        return cy.get('.dropdown-menu').contains('Luxury Gift Boxes')
    }

    getButtonGiftBaskets_SweetsGiftBaskets() {
        return cy.get('.dropdown-menu').contains('Sweets Gift Baskets')
    }

    getButtonGiftBaskets_CheeseGiftBaskets() {
        return cy.get('.dropdown-menu').contains('Cheese Gift Baskets')
    }

    getButtonGiftBaskets_ChocolateGiftBaskets() {
        return cy.get('.dropdown-menu').contains('Chocolate Gift Baskets')
    }

    getButtonGiftBaskets_SnackGiftBaskets() {
        return cy.get('.dropdown-menu').contains('Snack Gift Baskets')
    }

    getButtonGiftBaskets_GiftBasketsForMen() {
        return cy.get('.dropdown-menu').contains('Gift Baskets for Men')
    }

    getButtonGiftBaskets_CoffeeAndTeaBaskets() {
        return cy.get('.dropdown-menu').contains('Coffee and Tea Baskets')
    }

    getButtonGiftBaskets_MakeAWishCollection() {
        return cy.get('.dropdown-menu').contains('Make-A-Wish® Collection')
    }

    // Paniers Cadeaux section FR VERSION

    getButtonPaniersCadeaux() {
        return cy.get('.dropdown-toggle').contains('Paniers Cadeaux');
    }

    getButtonPaniersCadeaux_CollectionGourmetMoitiéPrix() {
        return cy.get('.dropdown-menu').contains('Collection Gourmet - Moitié Prix');
    }

    getButtonPaniersCadeaux_PaniersDeBièreEtVin() {
        return cy.get('.dropdown-menu').contains('Paniers de Bière et Vin');
    }

    getButtonPaniersCadeaux_PaniersCadeauxDentreprise() {
        return cy.get('.dropdown-menu').contains("Paniers Cadeaux d'entreprise");
    }

    getButtonPaniersCadeaux_PaniersDeFruits() {
        return cy.get('.dropdown-menu').contains('Paniers de Fruits');
    }

    getButtonPaniersCadeaux_CollectionDePaniersCadeauxLindt() {
        return cy.get('.dropdown-menu').contains('Collection de Paniers-Cadeaux Lindt');
    }

    getButtonPaniersCadeaux_CollectionTraditionDesFêtes() {
        return cy.get('.dropdown-menu').contains('Collection Tradition des Fêtes');
    }

    getButtonPaniersCadeaux_PaniersCadeauxGourmands() {
        return cy.get('.dropdown-menu').contains('Paniers Cadeaux Gourmands');
    }

    getButtonPaniersCadeaux_CollectionEleganceDePaniersCadeaux() {
        return cy.get('.dropdown-menu').contains('Collection Elegance de Paniers-Cadeaux');
    }

    getButtonPaniersCadeaux_CoffretsCadeauxDeLuxe() {
        return cy.get('.dropdown-menu').contains('Coffrets Cadeaux De Luxe');
    }

    getButtonPaniersCadeaux_PaniersCadeauxBonbons() {
        return cy.get('.dropdown-menu').contains('Paniers Cadeaux Bonbons');
    }

    getButtonPaniersCadeaux_PaniersCadeauxFromage() {
        return cy.get('.dropdown-menu').contains('Paniers Cadeaux Fromage');
    }

    getButtonPaniersCadeaux_PaniersCadeauxChocolat() {
        return cy.get('.dropdown-menu').contains('Paniers Cadeaux Chocolat');
    }

    getButtonPaniersCadeaux_PaniersCadeauxCollation() {
        return cy.get('.dropdown-menu').contains('Paniers Cadeaux Collation');
    }

    getButtonPaniersCadeaux_PaniersCadeauxPourHommes() {
        return cy.get('.dropdown-menu').contains('Paniers Cadeaux pour Hommes');
    }

    getButtonPaniersCadeaux_PaniersàCaféetThé() {
        return cy.get('.dropdown-menu').contains('Paniers à Café et thé');
    }

    getButtonPaniersCadeaux_CollectionMakeAWish() {
        return cy.get('.dropdown-menu').contains('Collection Make-A-Wish®');
    }

    //Bulk Flowers Section

    getButtonBulkFlowers() {
        return cy.get('.dropdown-toggle').contains('Bulk Flowers');
    }

    getButtonBulkFlowers_BulkHydrangea() {
        return cy.get('.dropdown-menu').contains('Bulk Hydrangea');
    }

    getButtonBulkFlowers_BulkSunflowers() {
        return cy.get('.dropdown-menu').contains('Bulk Sunflowers');
    }

    getButtonBulkFlowers_BulkGreens() {
        return cy.get('.dropdown-menu').contains('Bulk Greens');
    }

    getButtonBulkFlowers_BulkAlstroemeria() {
        return cy.get('.dropdown-menu').contains('Bulk Alstroemeria');
    }

    getButtonBulkFlowers_BulkRoses() {
        return cy.get('.dropdown-menu').contains('Bulk Roses');
    }

    getButtonBulkFlowers_BulkCarnations() {
        return cy.get('.dropdown-menu').contains('Bulk Carnations');
    }

    getButtonBulkFlowers_BulkTulips() {
        return cy.get('.dropdown-menu').contains('Bulk Tulips');
    }

    getButtonBulkFlowers_BulkLilies() {
        return cy.get('.dropdown-menu').contains('Bulk Lilies');
    }

    getButtonBulkFlowers_BulkGerberas() {
        return cy.get('.dropdown-menu').contains('Bulk Gerberas');
    }

    getButtonBulkFlowers_BulkCallaLilies() {
        return cy.get('.dropdown-menu').contains('Bulk Calla Lilies');
    }

    getButtonBulkFlowers_BulkChrysanthemums() {
        return cy.get('.dropdown-menu').contains('Bulk Chrysanthemums');
    }

    getButtonBulkFlowers_BulkSprayRoses() {
        return cy.get('.dropdown-menu').contains('Bulk Spray Roses');
    }

    getButtonBulkFlowers_BulkSnapdragons() {
        return cy.get('.dropdown-menu').contains('Bulk Snapdragons');
    }

    // Fleurs en Vrac section FR VERSION

    getButton_FleursEnVrac() {
        return cy.get('.dropdown-toggle').contains('Fleurs en Vrac');
    }

    getButtonFleursEnVrac_ChrysanthèmesEnVrac() {
        return cy.get('.dropdown-menu').contains('Chrysanthèmes En Vrac');
    }

    getButtonFleursEnVrac_HortensiaEnVrac() {
        return cy.get('.dropdown-menu').contains('Hortensia En Vrac');
    }

    getButtonFleursEnVrac_MiniRosesEnVrac() {
        return cy.get('.dropdown-menu').contains('Mini Roses En Vrac');
    }

    getButtonFleursEnVrac_LysEnVrac() {
        return cy.get('.dropdown-menu').contains('Lys En Vrac');
    }

    getButtonFleursEnVrac_TulipesEnVrac() {
        return cy.get('.dropdown-menu').contains('Tulipes En Vrac');
    }

    getButtonFleursEnVrac_VerduresEnVrac() {
        return cy.get('.dropdown-menu').contains('Verdures En Vrac');
    }

    getButtonFleursEnVrac_RosesEnVrac() {
        return cy.get('.dropdown-menu').contains('Roses En Vrac');
    }

    getButtonFleursEnVrac_MufliersEnVrac() {
        return cy.get('.dropdown-menu').contains('Mufliers En Vrac');
    }

    getButtonFleursEnVrac_OeilletsEnVrac() {
        return cy.get('.dropdown-menu').contains('Oeillets En Vrac');
    }

    getButtonFleursEnVrac_AlstroemeriaEnVrac() {
        return cy.get('.dropdown-menu').contains('Alstroemeria En Vrac');
    }

    getButtonFleursEnVrac_TournesolsEnVrac() {
        return cy.get('.dropdown-menu').contains('Tournesols En Vrac');
    }

    getButtonFleursEnVrac_LysCallaEnVrac() {
        return cy.get('.dropdown-menu').contains('Lys Calla En Vrac');
    }

    getButtonFleursEnVrac_GerberasEnVrac() {
        return cy.get('.dropdown-menu').contains('Gerberas En Vrac');
    }

    // Tropical Plants section

    getButtonTropicalPlants() {
        return cy.get('li').find('a').contains('Tropical Plants')
    }

    // Corporate section

    getButtonCorporate() {
        return cy.get('.dropdown-toggle').contains('Corporate')
    }

    getButtonCorporate_ApplyForCorporateDiscount() {
        return cy.get('.dropdown-menu').contains('Apply for 20% Corporate Discount')
    }

    getButtonCorporate_QuoteRequestForm() {
        return cy.get('.dropdown-menu').contains('Quote Request Form')
    }

    getButtonCorporate_CorporateGiftBaskets() {
        return cy.get('.dropdown-menu').contains('Corporate Gift Baskets')
    }
    
    getButtonCorporate_CorporateGifts(){
        return cy.get('.dropdown-menu').contains('Corporate Gifts')
    }

    //not actual
    // getButtonCorporate_CorporateWellnessProgram() {
    //     return cy.get('.dropdown-menu').contains('Corporate Wellness Program')
    // }


    // Entreprise section FR VERSION

    getButtonEntreprise() {
        return cy.get('.dropdown-toggle').contains('Entreprise')
    }

    getButtonEntreprise_DemanderUnRabaisCorporatifDe20() {
        return cy.get('.dropdown-menu').contains('Demander un Rabais Corporatif de 20%')
    }

    getButtonEntreprise_FormulaireDeDemandeDeDevis() {
        return cy.get('.dropdown-menu').contains('Formulaire de Demande de Devis')
    }

    getButtonEntreprise_PaniersCadeauxDentreprise() {
        return cy.get('.dropdown-menu').contains("Paniers Cadeaux d'entreprise")
    }

    getButtonEntreprise_ProgrammeDeBienêtreDentreprise() {
        return cy.get('.dropdown-menu').contains("Programme de bien-être d'entreprise")
    }

    // Help/Account section

    getButtonHelpAccount() {
        return cy.get('.dropdown-toggle').contains('Help/Account')
    }

    getButtonHelpAccount_LostPassword() {
        return cy.get('.dropdown-menu').contains('Lost Password?')
    }

    getButtonHelpAccount_FlowerCare() {
        return cy.get('.dropdown-menu').contains('Flower Care')
    }

    getButtonHelpAccount_YourShoppingCart() {
        return cy.get('.dropdown-menu').contains('Your Shopping Cart')
    }

    getButtonHelpAccount_YourBloomexAccount() {
        return cy.get('.dropdown-menu').contains('Your Bloomex Account')
    }

    getButtonHelpAccount_YourBloomexBucks() {
        return cy.get('.dropdown-menu').contains('Your Bloomex Bucks')
    }

    // Aide / Compte section FR VERSION

    getButtonAideCompte() {
        return cy.get('.dropdown-toggle').contains('Aide / Compte')
    }

    getButtonAideCompte_MotDePassePerdu() {
        return cy.get('.dropdown-menu').contains('Mot de passe perdu?')
    }

    getButtonAideCompte_SoinDesFleurs() {
        return cy.get('.dropdown-menu').contains('Soin des Fleurs')
    }

    getButtonAideCompte_VotrePanier() {
        return cy.get('.dropdown-menu').contains('Votre Panier')
    }

    getButtonAideCompte_VotreCompteBloomex() {
        return cy.get('.dropdown-menu').contains('Votre compte Bloomex')
    }

    getButtonAideCompte_EspaceFidélitéBloomex() {
        return cy.get('.dropdown-menu').contains('Espace Fidélité Bloomex')
    }

    // Policies section

    getButtonPolicies() {
        return cy.get('.dropdown-toggle').contains('Policies')
    }

    getButtonPolicies_OrderAndReturnPolicy() {
        return cy.get('.dropdown-menu').contains('Order and Return Policy')
    }

    getButtonPolicies_SubstitutionPolicy() {
        return cy.get('.dropdown-menu').contains('Substitution Policy')
    }

    getButtonPolicies_DeliveryPolicy() {
        return cy.get('.dropdown-menu').contains('Delivery Policy')
    }

    getButtonPolicies_PromotionPolicy() {
        return cy.get('.dropdown-menu').contains('Promotion Policy')
    }

    getButtonPolicies_PrivacyPolicy() {
        return cy.get('.dropdown-menu').contains('Privacy Policy')
    }

    getButtonPolicies_ContactFreeDelivery() {
        return cy.get('.dropdown-menu').contains('Contact-Free Delivery')
    }

    // Politiques section FR VERSION

    getButtonPolitiques() {
        return cy.get('.dropdown-toggle').contains('Politiques')
    }

    getButtonPolitiques_CommandeEtPolitiqueDeRetour() {
        return cy.get('.dropdown-menu').contains('Commande et Politique de Retour')
    }

    getButtonPolitiques_PolitiqueDeSubstitution() {
        return cy.get('.dropdown-menu').contains('Politique de Substitution')
    }

    getButtonPolitiques_PolitiqueDelivraison() {
        return cy.get('.dropdown-menu').contains('Politique de livraison')
    }

    getButtonPolitiques_PolitiqueDePromotion() {
        return cy.get('.dropdown-menu').contains('Politique de Promotion')
    }

    getButtonPolitiques_PolitiqueDeConfidentialité() {
        return cy.get('.dropdown-menu').contains('Politique de Confidentialité')
    }

    getButtonPolitiques_LivraisonSansContact() {
        return cy.get('.dropdown-menu').contains('Livraison sans-contact')
    }

    // About Us section

    getButtonAboutUs() {
        return cy.get('.dropdown-toggle').contains('About Us')
    }

    getButtonAboutUs_CanadasOfficialFlorist() {
        return cy.get('.dropdown-menu').contains("Canada's Official Florist")
    }

    getButtonAboutUs_BloomexF3() {
        return cy.get('.dropdown-menu').contains('Bloomex F3')
    }

    getButtonAboutUs_CommunityPartners() {
        return cy.get('.dropdown-menu').contains('Community Partners')
    }

    getButtonAboutUs_LoyaltyProgram() {
        return cy.get('.dropdown-menu').contains('Loyalty Program')
    }


    //

    getButtonCloseChat() {
        return cy.get('[id="lhc_need_help_close"]')
    }

    getButtonContactUs() {
        return cy.get('.contact_account').contains('Contact Us')
    }

    getButtonContactezNous() {
        return cy.get('.contact_account').contains('Contactez nous')
    }

    getContainerContactezNous() {
        return cy.get('[class="row"]')
    }
    
    //Banners

    getBanner20DolGift() {
        return cy.get(".banner_covid")
    }

    getBanner20DolGiftFR() {
        return cy.get(".banner_covid")
    }

    getBannerSameDayDelivery() {
        return cy.get(".banner_top_1")
    }

    getBannerSameDayDeliveryFR() {
        return cy.get(".banner_top_1")
    }

    getBannerSmiles() {
        return cy.get(".banner_top_2")
    }

    getBannerSmilesFR() {
        return cy.get(".banner_top_2")

    }

    getSliderBlock() {
        return cy.get('[id="block-for-slider"]')

    }

    getSliderBlockFR() {
        return cy.get('[id="block-for-slider"]')

    }

    // Banners 3 on homepage

    get1MiniBannerBirthdayFlowerrs() {
        return cy.get('[alt="Birthday Flowerrs - EN"]')
    }

    get1MiniBannerBirthdayFlowerrsFR() {
        return cy.get('[alt="Birthday Flowers FR"]')
    }

    get2MiniBannerDesignerCollection() {
        return cy.get('[alt="Designer Collection - EN"]')
    }

    get2MiniBannerDesignerCollectionFR() {
        return cy.get('[alt="Designer Collection -  FR"]')
    }

    get3MiniSympathyFlowers() {
        return cy.get('[alt="Sympathy Flowers - EN - HP"]')
    }

    get3MiniSympathyFlowersFR() {
        return cy.get('[alt="Sympathy Flower - FR - HP"]')
    }

    get3MiniGourmet(){
        return cy.get('[alt="Gourmet Collection HP"]')  
    }


    //slider update on 03.08.23

    getBannerDIYBulkFlowersSlider() {
        return cy.get('[alt="slider_DIY-Bulk-Flowers-615x265-EN-02"]')
    }

    getBannerDIYBulkFlowersSliderFR() {
        return cy.get('[alt="slider_DIY-Bulk-Flowers-615x265-FR-02"]')
    }

    getBannerBirthdayFlowersSlider() {
        return cy.get('[alt="slider_Birthday Slider EN NC"]')
    }

    getBannerBirthdayFlowersSliderFR() {
        return cy.get('[alt="slider_Birthday-Flowers-Slider-FR"]')
    }

    getBannerREDTAGSpecialsSlider() {
        return cy.get('[alt="slider_RED-TAG-Specials-Slider-EN"]')
    }

    getBannerREDTAGSpecialsSliderFR() {
        return cy.get('[alt="slider_slider_RED-TAG-Specials-Slider-FR"]')
    }

    getBannerFridayOnlyRosesSlider() {
        return cy.get('[alt="slider_Friday-Only-Roses-SLIDER  EN"]')
    }

    getBannerFridayOnlyRosesSliderFR() {
        return cy.get('[alt="slider_Friday-Only-Roses--SLIDER  FR"]')
    }

    getBannerDesignerCollectionSlider() {
        return cy.get('[alt="slider_slider_Designer-Collection new slider NP"]')
    }

    getBannerDesignerCollectionSliderFR() {
        return cy.get('[alt="slider_Designer-Collection-Slider FR"]')
    }


    getBannerMasonJarSlider() {
        return cy.get('[alt="slider_slider_Mason-Jar-banner-Slider-EN NP"]')
    }

    getBannerMasonJarSliderFR() {
        return cy.get('[alt="slider_Mason-Jar-banner-Slider-FR"]')
    }

    getBannerTropicalPlantsSlider() {
        return cy.get('[alt="slider_Assorted-Tropical-Plants-SLIDER ENG"]')
    }

    getBannerSympathySlider() {
        return cy.get('[alt="slider_Sympathy Flowers Banner EN (1)"]')
    }

    getBannerSympathySliderFR() {
        return cy.get('[alt="slider_BLX CA Sympathy Flowers Banner FR"]')
    }

    getBannerGourmetSlider() {
        return cy.get('[alt="slider_Gourmet Gift Baskets Slider English"]')
    }

    getBannerGourmetSliderFR() {
        return cy.get('[alt="slider_Gourmet Gift Baskets Slider French"]')
    }

    getBannerAnniversarySlider() {
        return cy.get('[alt="slider_Anniversary-Flowers-Slider-EN"]')
    }

    getBannerAnniversarySliderFR() {
        return cy.get('[alt="slider_slider_Anniversary-Flowers-Slider-FR"]')
    }

    getBannerSweetheartCollectionSlider() {
        return cy.get('[alt="slider_Sweetheart Collection Slider Canada EN"]')
    }

    getBannerSweetheartCollectionSliderFR() {
        return cy.get('[alt="slider_Sweetheart Collection Slider Canada FR"]')
    }

    getBannerSweetBlossomsCollectionSlider() {
        return cy.get('[alt="slider_slider_Sweet-Blossoms-Collection-Slider NP"]')
    }

    //not actual
    getBannerSweetBlossomsCollectionSliderFR() {
        return cy.get('[alt="slider_slider_Mothers Day Banner CAN FR Sweet Blossoms"]')
    }

    getBannerBunchesCollectionSlider() {
        return cy.get('[alt="slider_slider_Bunches Collection banner - en NP"')
    }

    getBannerBunchesCollectionSliderFR() {
        return cy.get('[alt="slider_Bunches Collection banner - fr"]')
    }

    getBannerGourmetCollectionSlider() {
        return cy.get('[alt="slider_slider_Gourmet_Collection-slider-NP')
    }

    getBannerNewGCSliderFR() {
        return cy.get('[alt="slider_NEW GC Banner FR RG"]')
    }

     getBannerTewTulips() {
        return cy.get('[alt="slider_new tulips banner EN"]')
    }


    getBannerOttawaSenators(){
        return cy.get('[alt="slider_Ottawa-Senators-CA-EN-04"]')
    }

    getBannerHugsAndKisses() {
        return cy.get('[alt="slider_Slider Hugs and Kisses -NEW 34.99 EN"]')
    }

    getBannerVDRosesWine() {
        return cy.get('[alt="slider_slider_VD-Roses-wine-EN"]')
    }

    // getBannerMDBunchesEN() {
    //     return cy.get('[alt="slider_MD Bunches EN')
    // }

    // getBannerFlowerSubscription() {
    //     return cy.get('[alt="slider_Subscription flowers banner')
    // }

    // getBannerMothersDay() {
    //     return cy.get('[alt="slider_Mothers Day Sneak Peek - CAN EN"]')
    // }

    // getBannerMothersDaySpecials() {
    //     return cy.get('[alt="slider_MD Specials 2019"]')
    // }

    // getBannerMothersDayDesignersCollection() {
    //     return cy.get('[alt="slider_Designer Collection MD 2019 EN"]')
    // }

    // getBannerMothersDayTulips() {
    //     return cy.get('[alt="slider_Mothers Day Banner CAN EN Tulips"]')
    // }

    // getBannerMothersDayGiftBaskets() {
    //     return cy.get('[alt="slider_Gift Baskets MD 2019 EN"]')
    // }

    // getBannerMothersMothersDayOrchids() {
    //     return cy.get('[alt="slider_Mothers Day Banner CAN EN Orchids"]')
    // }

    // getBannerMothersDayAssortedRoses() {
    //     return cy.get('[alt="slider_Assorted Roses EN"]')
    // }


    //Arrow buttons
    getSliderArrowRight() {
        return cy.get('[class="slider_arrow right"]')
    }

    getSliderArrowLeft() {
        return cy.get('[class="slider_arrow left"]')
    }

    // Left_menu

    getLeft_menu() {
        return cy.get('.left_menu')
    }

    // Products container 

    getContainerProducts() {
        return cy.get('[class="container products"]').eq(0)
    }

    getContainerPDPProducts() {
        return cy.get('[class="container product_details_wrapper"]')
    }


    getSearchField() {
        return cy.get('[id="mainsearch"]')
    }

    getSearchButton() {
        return cy.get('[id="search_btn"]')
    }

    //Subscribtion

    getFieldSubscribtion() {
        return cy.get('[id="subscribe_input_email"]')
    }

    getButtonSubscribtion() {
        return cy.get('[class="subscribe_button input-group-btn"]')
    }

    getFieldSOUSCRIRE() {
        return cy.get('[id="subscribe_input_email"]')
    }

    getButtonSOUSCRIRE() {
        return cy.get('[class="subscribe_button input-group-btn"]')
    }



    //Social links in footer EN and FR Version

    getButtonTwitter() {
        return cy.get('[class="col-xs-12 col-sm-6 col-md-6 col-lg-4 signup_social"]').find('a').eq(0)
    }

    getButtonFB() {
        return cy.get('[class="col-xs-12 col-sm-6 col-md-6 col-lg-4 signup_social"]').find('a').eq(1)
    }

    getButtonPinterest() {
        return cy.get('[class="col-xs-12 col-sm-6 col-md-6 col-lg-4 signup_social"]').find('a').eq(2)
    }

    getButtonPartners() {
        return cy.get('[class="col-xs-12 col-sm-6 col-md-6 col-lg-4 signup_social"]').find('a').eq(3)
    }

    //Fotter links EN and FR Version

    getButtonWHToronto() {
        return cy.get('[class="col-xs-12 landings"]').children().eq(0)
    }

    getButtonWHOttawa() {
        return cy.get('[class="col-xs-12 landings"]').children().eq(1)
    }

    getButtonWHMontreal() {
        return cy.get('[class="col-xs-12 landings"]').children().eq(2)
    }

    getButtonWHCalgary() {
        return cy.get('[class="col-xs-12 landings"]').children().eq(3)
    }

    getButtonWHVancouver() {
        return cy.get('[class="col-xs-12 landings"]').children().eq(4)
    }

    getButtonWHHalifax() {
        return cy.get('[class="col-xs-12 landings"]').children().eq(5)
    }

    getButtonWHWinnipeg() {
        return cy.get('[class="col-xs-12 landings"]').children().eq(6)
    }

    getButtonSiteMap() {
        return cy.get('.site_map').find('a').contains('Site Map')
    }

    //Fotter links "Plan du Site" (Site Map) FR Version

    getButtonPlanDuSite() {
        return cy.get('.site_map').find('a').contains('Plan du Site')
    }


    //Close burger button on mob version
    getButtonCloseBurger() {
        return cy.get('.remove')
    }

    //no need now
    // getCloseSubsriptionPopUp(){
    //     return cy.get('#attentive_creative').then(SubPopUp => {
    //         cy.wrap(window.top.document.querySelector('[id="closeIconContainer"]'))
            
    //         //cy.wrap(SubPopUp).find('[id="closeIconContainer"]');
    //             //.find('[id="closeIconContainer"]');
    //     //cy.get('[id="page1"]')
    //     //('.css-flq1iw')
    //     //('[id="closeIconContainer"]')
    //     })
    
     
    // }

     

}

export default new HomePage_PO;


