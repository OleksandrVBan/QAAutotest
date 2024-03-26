/// <reference types = "Cypress" />
import HomePage_PO from './Homepage_PO';

class Collection {


    //remove code after ...
    // PO part
    // end PO part

    // ... in test code (In steps or test) 
    searchAndClickElementByTitle(stringTitle: string) {

        cy.get('[class="title"]').contains(stringTitle).should('exist').click({ force: true })

    };

    searchAndClickElementByTitleFR(stringTitle: string) {

        cy.get('[class="title"]').contains(stringTitle).should('exist').should('be.visible').click({ force: true })

    };



    //Specials section

    // do not delete, in use in checkCollections_SpecialsSection_DesignerCollection()

    getCollectionSpecialsSection_DesignerCollection() {
        return cy.get('[class="title"]').contains('Designer Collection')
    }

    // getCollectionByName(name: string){
    //     return cy.get('[class="title"]').contains(name)
    // }

    getCollectionSpecialsSection_FridayRoses() {
        return cy.get('[class="title"]').contains('Friday Roses - 65% off')
    }

    getCollectionSpecialsSection_SweetBlossomsCollection() {
        return cy.get('[class="title"]').contains('Sweet Blossoms Collection')
    }

    getCollectionSpecialsSection_SweetheartCollection() {
        return cy.get('[class="title"]').contains('Sweetheart Collection')
    }

    //Spéciaux section / FR VERSION

    getCollectionSpéciauxSection_CollectionChérie() {
        return cy.get('[class="title"]').contains('Collection Chérie');
    }

    getCollectionSpéciauxSection_CollectionConcepteur() {
        return cy.get('[class="title"]').contains('Collection Concepteur');
    }

    getCollectionSpéciauxSection_MoitiéPrixDesVendredis() {
        return cy.get('[class="title"]').contains('Moitié-Prix des Vendredis');
    }

    getCollectionSpéciauxSection_LaCollectionDeFleursDouces() {
        return cy.get('[class="title"]').contains('La collection de fleurs douces');
    }

    //Specials section / "Shop for Good" Collections

    getCollectionSpecialsSection_ShopForGood_MakeAWish() {
        return cy.get('[class="title"]').contains('Make-A-Wish® Collection')
    }

    getCollectionSpecialsSection_ShopForGood_EmotionsCollection() {
        return cy.get('[class="title"]').contains('Emotions Collection')
    }

    getCollectionSpecialsSection_ShopForGood_MeagansBeb() {
        return cy.get('[class="title"]').contains('Meagan Bebenek Foundation')
    }

    getCollectionSpecialsSection_ShopForGood_TorontoHumaneSociety() {
        return cy.get('[class="title"]').contains('Toronto Humane Society')
    }

    getCollectionSpecialsSection_ShopForGood_ChildhoodCancerCanada() {
        return cy.get('[class="title"]').contains('Childhood Cancer Canada')
    }

    getCollectionSpecialsSection_ShopForGood_HeartStrokeCollection() {
        return cy.get('[class="title"]').contains('Heart & Stroke Collection')
    }

    getCollectionSpecialsSection_ShopForGood_MultipleSclerosisSocietyCanadaCollection() {
        return cy.get('[class="title"]').contains('Multiple Sclerosis Society of Canada Collection')
    }

    getCollectionSpecialsSection_ShopForGood_OvarianCancerCanada() {
        return cy.get('[class="title"]').contains('Ovarian Cancer Canada')
    }

    //Spéciaux section / Magasiner pour la bonté Collection / FR VERSION

    getCollectionSpéciauxSection_MagasinerPourlaBonté_CollectionMakeAWish() {
        return cy.get('[class="title"]').contains('Collection Make-A-Wish®')
    }

    getCollectionSpéciauxSection_MagasinerPourlaBonté_EmotionsBC() {
        return cy.get('[class="title"]').contains('Emotions BC')
    }

    getCollectionSpéciauxSection_MagasinerPourlaBonté_MeagansHug() {
        return cy.get('[class="title"]').contains('Meagans Hug')
    }

    getCollectionSpéciauxSection_MagasinerPourlaBonté_SociétéHumaneDeToronto() {
        return cy.get('[class="title"]').contains('Société Humane de Toronto')
    }

    getCollectionSpéciauxSection_MagasinerPourlaBonté_CancerDelovaireCanada() {
        return cy.get('[class="title"]').contains('Cancer de l’ovaire Canada')
    }

    getCollectionSpéciauxSection_MagasinerPourlaBonté_HumaneCanada() {
        return cy.get('[class="title"]').contains('Humane Canada')
    }

    getCollectionSpéciauxSection_MagasinerPourlaBonté_FondationCanadienneDuCancerChezlEnfant() {
        return cy.get('[class="title"]').contains("Fondation Canadienne du Cancer chez l’Enfant")
    }

    getCollectionSpéciauxSection_MagasinerPourlaBonté_CollectionHeartStroke() {
        return cy.get('[class="title"]').contains('Collection Heart & Stroke')
    }

    getCollectionSpéciauxSection_MagasinerPourlaBonté_CollectionDelaSociétéCanadienneDelaSP() {
        return cy.get('[class="title"]').contains('Collection de la Société canadienne de la SP')
    }

    //Specials section / Designer Collection

    getCollectionSpecialsSection_BirthdayDesignerCollection() {
        return cy.get('[class="title"]').contains('Birthday Designer Collection')
    }

    getCollectionSpecialsSection_AnniversaryDesignerCollection() {
        return cy.get('[class="title"]').contains('Anniversary Designer Collection')
    }

    getCollectionSpecialsSection_SympathyDesignerCollection() {
        return cy.get('[class="title"]').contains('Sympathy Designer Collectio')
    }

    //Spéciaux section / Collection de Créateurs - Moitié prix / FR VERSION

    getCollectionSpéciauxSection_CollectionDeCréateursMoitiéPrix_CollectionDartisansSympathieDeuil() {
        return cy.get('[class="title"]').contains("Collection d'artisans - Sympathie & Deuil")
    }

    getCollectionSpéciauxSection_CollectionDeCréateursMoitiéPrix_CollectiondArtisansPourAnniversaire() {
        return cy.get('[class="title"]').contains("Collection d'Artisans pour Anniversaire")
    }

    getCollectionSpéciauxSection_CollectionDeCréateursMoitiéPrix_CollectionDeCréateursDanniversaire() {
        return cy.get('[class="title"]').contains("Collection de créateurs d'anniversaire")
    }

    getCollectionSpéciauxSection_CollectionDeCréateursMoitiéPrix_CollectionDeCréateurs() {
        return cy.get('[class="subcategory_image_real"]').contains("Collection de créateurs")
    }

    // ... 
    //Specials section / Cards, Vases & Teddy Bears

    getCollectionSpecialsSection_TeddyBears() {
        return cy.get('[class="title"]').contains('Teddy Bears')
    }

    getCollectionSpecialsSection_Vases() {
        return cy.get('[class="title"]').contains('Vases')
    }

    getCollectionSpecialsSection_ChocolatesAndTreats() {
        return cy.get('[class="title"]').contains('Chocolates and Treats')
    }

    getCollectionSpecialsSection_Cards() {
        return cy.get('[class="title"]').contains('Cards')
    }

    //Spéciaux section / Ours en Peluche, Vases et Chocolats / FR VERSION

    getCollectionSpéciauxSection_OursEnPelucheVasesEtChocolats_Nounours() {
        return cy.get('[class="title"]').contains('Nounours')
    }

    getCollectionSpéciauxSection_OursEnPelucheVasesEtChocolats_Vases() {
        return cy.get('[class="title"]').contains('Vases')
    }

    getCollectionSpéciauxSection_OursEnPelucheVasesEtChocolats_ChocolatsEtFriandises() {
        return cy.get('[class="title"]').contains('Chocolats et Friandises')
    }

    getCollectionSpéciauxSection_OursEnPelucheVasesEtChocolats_Cartes() {
        return cy.get('[class="title"]').contains('Cartes')
    }

    //Specials section / Shop by Price 

    getCollectionSpecialsSection_Under20() {
        return cy.get('[class="title"]').contains('under $20')
    }

    getCollectionSpecialsSection_20_30() {
        return cy.get('[class="title"]').contains('$20 - $30')
    }

    getCollectionSpecialsSection_30_40() {
        return cy.get('[class="title"]').contains('$30 - $40')
    }

    getCollectionSpecialsSection_40_50() {
        return cy.get('[class="title"]').contains('$40 - $50')
    }

    getCollectionSpecialsSection_$50AndUp() {
        return cy.get('[class="title"]').contains('$50 and up')
    }

    //Par Prix section / Par Prix Collection / FR VERSION

    getCollectionParPrixSection_MoinsDe20$() {
        return cy.get('[class="title"]').contains('Moins de 20 $')
    }

    getCollectionParPrixSection_20$_30$() {
        return cy.get('[class="title"]').contains('20$ - 30$')
    }

    getCollectionParPrixSection_30$_40$() {
        return cy.get('[class="title"]').contains('30$ - 40$')
    }

    getCollectionParPrixSection_40$_50$() {
        return cy.get('[class="title"]').contains('40$ - 50$')
    }

    getCollectionParPrixSection_50$ouPlus() {
        return cy.get('[class="title"]').contains('50$ ou Plus')
    }

    //Occasions section 

    getCollectionOccasionsSection_JustBecause() {
        return cy.get('[class="title"]').contains('Just Because')
    }

    getCollectionOccasionsSection_CongratulationsFlowersGifts() {
        return cy.get('[class="title"]').contains('Congratulations Flowers & Gifts')
    }

    getCollectionOccasionsSection_GetWellFlowersGifts() {
        return cy.get('[class="title"]').contains('Get Well Flowers & Gifts')
    }

    getCollectionOccasionsSection_LoveRomance() {
        return cy.get('[class="title"]').contains('Love & Romance')
    }

    getCollectionOccasionsSection_HousewarmingFlowersGifts() {
        return cy.get('[class="title"]').contains('Housewarming Flowers & Gifts')
    }

    getCollectionOccasionsSection_ThankYouFlowersGifts() {
        return cy.get('[class="title"]').contains('Thank You Flowers & Gifts')
    }

    getCollectionOccasionsSection_NewBabyFlowersGifts() {
        return cy.get('[class="title"]').contains('New Baby Flowers & Gifts')
    }

    getCollectionOccasionsSection_AnniversaryFlowers() {
        return cy.get('[class="title"]').contains('Anniversary Flowers')
    }

    getCollectionOccasionsSection_SympathyFuneralFlowers_SympathyFlowers() {
        return cy.get('[class="title"]').contains('Sympathy Flowers')

    }

    //Occasions section / FR VERSION

    getCollectionOccasionsSection_FleursDanniversaire() {
        return cy.get('[class="title"]').contains("Fleurs d'anniversaire")
    }

    getCollectionOccasionsSection_FleursEtCadeauxDePendaisonDeCrémaillère() {
        return cy.get('[class="title"]').contains('Fleurs et Cadeaux de Pendaison de Crémaillère')
    }

    getCollectionOccasionsSection_NouveauBébéFleursEtCadeaux() {
        return cy.get('[class="title"]').contains('Nouveau Bébé Fleurs et Cadeaux')
    }

    getCollectionOccasionsSection_FleursDamour() {
        return cy.get('[class="title"]').contains("Fleurs d'amour")
    }

    getCollectionOccasionsSection_FleursEtCadeauxDeRétablissement() {
        return cy.get('[class="title"]').contains('Fleurs et cadeaux de rétablissement')
    }

    getCollectionOccasionsSection_FleursEtCadeauxDeRemerciement() {
        return cy.get('[class="title"]').contains('Fleurs et cadeaux de Remerciement')
    }

    getCollectionOccasionsSection_JusteParceQue() {
        return cy.get('[class="title"]').contains('Juste Parce Que')
    }

    getCollectionOccasionsSection_FleursCadeauxDeFélicitations() {
        return cy.get('[class="title"]').contains('Fleurs & Cadeaux de félicitations')
    }

    //Occasions section / Fleurs et cadeaux d'anniversaire / FR VERSION

    getCollectionOccasionsSection_FleursEtCadeauxDanniversaire_FleursDanniversaire() {
        return cy.get('[class="title"]').contains("Fleurs d'anniversaire")
    }

    getCollectionOccasionsSection_FleursEtCadeauxDanniversaire_CollectionDartisansPourAnniversaire() {
        return cy.get('[class="title"]').contains("Collection d'artisans pour anniversaire")
    }

    getCollectionOccasionsSection_FleursEtCadeauxDanniversaire_CollectionGourmandeAnniversaire() {
        return cy.get('[class="title"]').contains('Collection Gourmande Anniversaire')
    }

    getCollectionOccasionsSection_FleursEtCadeauxDanniversaire_PanierCadeauDanniversaire() {
        return cy.get('[class="title"]').contains("Panier Cadeau D'anniversaire")
    }

    //Occasions section / Sympathie et Funérailles / FR VERSION

    getCollectionOccasionsSection_SympathieEtFunérailles_ArrangementsDeFleursDUrne() {
        return cy.get('[class="title"]').contains("Arrangements de Fleurs d'Urne")
    }

    getCollectionOccasionsSection_SympathieEtFunérailles_FleursDeSympathie() {
        return cy.get('[class="title"]').contains('Fleurs de Sympathie')
    }

    getCollectionOccasionsSection_SympathieEtFunérailles_CollectionConcepteurFleursDeSympathie() {
        return cy.get('[class="title"]').contains('Collection Concepteur Fleurs de Sympathie')
    }

    getCollectionOccasionsSection_SympathieEtFunérailles_ForfaitsDeFleursDeSympathie() {
        return cy.get('[class="title"]').contains('Forfaits de Fleurs de Sympathie')
    }

    getCollectionOccasionsSection_SympathieEtFunérailles_CouronnesDeSympathie() {
        return cy.get('[class="title"]').contains('Couronnes de Sympathie')
    }

    getCollectionOccasionsSection_SympathieEtFunérailles_MeilleuresVentesSympathie() {
        return cy.get('[class="title"]').contains('Meilleures Ventes Sympathie')
    }

    getCollectionOccasionsSection_SympathieEtFunérailles_CoeursEtCroix() {
        return cy.get('[class="title"]').contains('Coeurs et Croix')
    }

    getCollectionOccasionsSection_SympathieEtFunérailles_CercueilEtGerbeFunéraire() {
        return cy.get('[class="title"]').contains('Cercueil et Gerbe Funéraire')
    }

    //Occasions section / Cadeaux d'entreprise / FR VERSION

    getCollectionOccasionsSection_CadeauxDentreprise_CadeauxGourmands() {
        return cy.get('[class="title"]').contains('Cadeaux Gourmands')
    }

    getCollectionOccasionsSection_CadeauxDentreprise_PaniersCadeauxDentreprise() {
        return cy.get('[class="title"]').contains("Paniers-cadeaux d'entreprise")
    }

    getCollectionOccasionsSection_CadeauxDentreprise_CadeauxDeFélicitations() {
        return cy.get('[class="title"]').contains('Cadeaux de Félicitations')
    }

    getCollectionOccasionsSection_CadeauxDentreprise_FleursDanniversaire() {
        return cy.get('[class="title"]').contains("Fleurs d'anniversaire")
    }

    getCollectionOccasionsSection_CadeauxDentreprise_FleursDePromptRétablissement() {
        return cy.get('[class="title"]').contains('Fleurs de prompt rétablissement')
    }

    getCollectionOccasionsSection_CadeauxDentreprise_BoîtesDeFruitsDeBureau() {
        return cy.get('[class="title"]').contains('Boîtes de Fruits de Bureau')
    }

    getCollectionOccasionsSection_CadeauxDentreprise_BouquetsDeballons() {
        return cy.get('[class="title"]').contains('Bouquets de ballons')
    }

    getCollectionOccasionsSection_CadeauxDentreprise_FleursDeSympathie() {
        return cy.get('[class="title"]').contains('Fleurs de Sympathie')
    }

    //Fleurs section / FR VERSION

    getCollectionFleursSection_CollectionConcepteur() {
        return cy.get('[class="title"]').contains('Collection Concepteur')
    }

    getCollectionFleursSection_Roses() {
        return cy.get('[class="title"]').contains('Roses')
    }

    getCollectionFleursSection_FleursВelys() {
        return cy.get('[class="title"]').contains('Fleurs de lys')
    }

    getCollectionFleursSection_BouquetsMélangés() {
        return cy.get('[class="title"]').contains('Bouquets Mélangés')
    }

    //Fleurs en Vrac section / FR VERSION

    getCollectionFleursEnVracSection_GerberasEnVrac() {
        return cy.get('[class="title"]').contains('Gerberas En Vrac')
    }

    getCollectionFleursEnVracSection_MufliersEnVrac() {
        return cy.get('[class="title"]').contains('Mufliers En Vrac')
    }

    getCollectionFleursEnVracSection_AlstroemeriaEnVrac() {
        return cy.get('[class="title"]').contains('Alstroemeria En Vrac')
    }

    getCollectionFleursEnVracSection_RosesEnVrac() {
        return cy.get('[class="title"]').contains('Roses En Vrac')
    }

    getCollectionFleursEnVracSection_VerduresEnVrac() {
        return cy.get('[class="title"]').contains('Verdures En Vrac')
    }

    getCollectionFleursEnVracSection_TournesolsEnVrac() {
        return cy.get('[class="title"]').contains('Tournesols En Vrac')
    }

    getCollectionFleursEnVracSection_OeilletsEnVrac() {
        return cy.get('[class="title"]').contains('Oeillets En Vrac')
    }

    getCollectionFleursEnVracSection_LysEnVrac() {
        return cy.get('[class="title"]').contains('Lys En Vrac')
    }

    getCollectionFleursEnVracSection_ChrysanthèmesEnVrac() {
        return cy.get('[class="title"]').contains('Chrysanthèmes En Vrac')
    }

    getCollectionFleursEnVracSection_MiniRosesEnVrac() {
        return cy.get('[class="title"]').contains('Mini Roses En Vrac')
    }

    getCollectionFleursEnVracSection_LysCallaEnVrac() {
        return cy.get('[class="title"]').contains('Lys Calla En Vrac')
    }

    getCollectionFleursSection_DIYFleursEnVrac_HortensiaEnVrac() {
        return cy.get('[class="title"]').contains('Hortensia En Vrac')
    }

    // Paniers Cadeaux section / FR VERSION

    getCollectionPaniersCadeauxSection_CollectiondePaniersCadeauxLindt() {
        return cy.get('[class="title"]').contains('Collection de Paniers Cadeaux Lindt')
    }

    getCollectionPaniersCadeauxSection_PaniersCadeauxVinAndBière() {
        return cy.get('[class="title"]').contains('Paniers Cadeaux Vin & Bière')
    }

    getCollectionPaniersCadeauxSection_PaniersDeFriandises() {
        return cy.get('[class="title"]').contains('Paniers de friandises')
    }

    getCollectionPaniersCadeauxSection_CollectionGourmet() {
        return cy.get('[class="title"]').contains('Collection Gourmet')
    }

    getCollectionPaniersCadeauxSection_PersonnaliséToutBudget() {
        return cy.get('[class="title"]').contains('Personnalisé - Tout Budget')
    }

    getCollectionPaniersCadeauxSection_CombinaisonsGrandes() {
        return cy.get('[class="title"]').contains('Combinaisons Grandes')
    }

    getCollectionPaniersCadeauxSection_PaniersDeFruits() {
        return cy.get('[class="title"]').contains('Paniers de Fruits')
    }

    getCollectionPaniersCadeauxSection_PaniersDeCadeauxDeCollation() {
        return cy.get('[class="title"]').contains('Paniers de cadeaux de collation')
    }

    getCollectionPaniersCadeauxSection_PaniersCadeauxDEntreprise() {
        return cy.get('[class="title"]').contains("Paniers-Cadeaux d'Entreprise")
    }

    getCollectionPaniersCadeauxSection_PaniersCadeauxDeCafés() {
        return cy.get('[class="title"]').contains('Paniers cadeaux de cafés')
    }

    getCollectionPaniersCadeauxSection_CollectionDeCoffretsCadeauxDeLuxe() {
        return cy.get('[class="title"]').contains('Collection de Coffrets Cadeaux de Luxe')
    }

    getCollectionPaniersCadeauxSection_PaniersCadeauxAuFromage() {
        return cy.get('[class="title"]').contains('Paniers-cadeaux au fromage')
    }

    getCollectionPaniersCadeauxSection_PaniersCadeauxThé() {
        return cy.get('[class="title"]').contains('Paniers Cadeaux Thé')
    }

    getCollectionPaniersCadeauxSection_CollectionTraditionDesFêtes() {
        return cy.get('[class="title"]').contains('Collection Tradition des Fêtes')
    }

    getCollectionPaniersCadeauxSection_PaniersCadeauxDeChocolat() {
        return cy.get('[class="title"]').contains('Paniers Cadeaux de Chocolat')
    }

    getCollectionPaniersCadeauxSection_PaniersCadeauxGourmands() {
        return cy.get('[class="title"]').contains('Paniers Cadeaux Gourmands')
    }

    //Corporate collections

    getCollectionCorporateGifts_CorporateGourmetCollection(){
        return cy.get('[class="title"]').contains('Corporate Gourmet Collection')
    }

    getCollectionCorporateGifts_CorporateChristmasFlowers(){
        return cy.get('[class="title"]').contains('Corporate Christmas Flowers')
    }

    getCollectionCorporateGifts_SympathyFlowers(){
        return cy.get('[class="title"]').contains('Sympathy Flowers')
    }

    getCollectionCorporateGifts_CorporateGiftBaskets(){
        return cy.get('[class="title"]').contains('Corporate Gift Baskets')
    }

    getCollectionCorporateGifts_CongratulationGifts(){
        return cy.get('[class="title"]').contains('Congratulation Gifts')
    }

    getCollectionCorporateGifts_BirthdayFlowers(){
        return cy.get('[class="title"]').contains('Birthday Flowers')
    }

    getCollectionCorporateGifts_CorporateChristmasPoinsettias(){
        return cy.get('[class="title"]').contains('Corporate Christmas Poinsettias')
    }

    getCollectionCorporateGifts_CorporateWineAndBeerGiftBaskets(){
        return cy.get('[class="title"]').contains('Corporate Wine and Beer Gift Baskets')
    }






}



export default new Collection;