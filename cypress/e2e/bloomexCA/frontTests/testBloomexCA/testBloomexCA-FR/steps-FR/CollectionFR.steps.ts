import HomePage_PO from '../../pages/Homepage_PO';
import Collection from '../../pages/Collection';


class CollectionsFR {

  // SpéciauxSection and collections

    checkCollections_SpéciauxSection() {

      cy.allure().startStep('Check Spéciaux Collections');
      cy.log('START Check Spéciaux Collections');

      HomePage_PO.getButtonSpéciaux().click({ force: true });
      Collection.searchAndClickElementByTitleFR('Gourmet Collection Baskets');
      cy.get('.col-lg-12').should('contain', '404 Error Page');
      HomePage_PO.getButtonSpéciaux().click({ force: true });

    
      Collection.searchAndClickElementByTitleFR('Collection Concepteur');
      cy.get('.landing_title').should('contain', 'Collection du Créateur');
      HomePage_PO.getButtonSpéciaux().click({ force: true });

      Collection.searchAndClickElementByTitleFR('Moitié-Prix des Vendredis');
      cy.get('.landing_title').should('contain', 'Moitié Prix des Vendredis');
      HomePage_PO.getButtonSpéciaux().click({ force: true });

      Collection.searchAndClickElementByTitleFR('La collection de fleurs douces');
      cy.get('.landing_title').should('contain', 'Sweet Blossoms Collection');
      HomePage_PO.getButtonSpéciaux().click({ force: true });

      cy.log('END Check Spéciaux Collections');
      cy.allure().endStep();

    }

    checkCollections_SpéciauxSection_MagasinerPourLaBonté() {

        cy.allure().startStep('Check Spéciaux/Magasiner Pour La Bonté Collections');
        cy.log('START Check Spéciaux/Magasiner Pour La Bonté Collections');
  
        HomePage_PO.getButtonSpéciaux().click({ force: true });
        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });
        Collection.searchAndClickElementByTitleFR('Collection Make-A-Wish®');
        cy.get('.landing_title').should('contain', 'Collection "Fais un Vœux"');
        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR('Meagans Hug');
        cy.get('.landing_title').should('contain', 'Meagans Hug');
        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('Société Humane de Toronto');
        cy.get('.landing_title').should('contain', 'Société Humane de Toronto');
        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('Cancer de l’ovaire Canada');
        cy.get('.landing_title').should('contain', 'Cancer de l’ovaire Canada');
        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Humane Canada');
        cy.get('.landing_title').should('contain', 'Humane Canada');
        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Fondation Canadienne du Cancer chez l’Enfant');
        cy.get('.landing_title').should('contain', 'Fondation Canadienne du Cancer chez l’Enfant');
        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Collection Heart & Stroke');
        cy.get('.landing_title').should('contain', 'Collection Cœur & AVC');
        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Collection de la Société canadienne de la SP');
        cy.get('.landing_title').should('contain', 'Collection de la Société canadienne de la SP');
        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });
  
        cy.log('END Check Spéciaux/Magasiner Pour La Bonté Collections');
        cy.allure().endStep();
  
      }

      checkCollections_SpéciauxSection_CollectionDeCréateursMoitiéPrix() {

        cy.allure().startStep('Check Spéciaux/De Créateurs Moitié Prix Collections');
        cy.log('START Check Spéciaux/De Créateurs Moitié Prix Collections');
  
        HomePage_PO.getButtonSpéciaux().click({ force: true });
        HomePage_PO.getButtonSpecials_CollectionDeCréateursMoitiéPrix().click({ force: true });
        Collection.searchAndClickElementByTitleFR("Collection d'artisans - Sympathie & Deuil");
        cy.get('.landing_title').should('contain', 'Collection du Créateur pour Sympathie');
        HomePage_PO.getButtonSpecials_CollectionDeCréateursMoitiéPrix().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Collection d'Artisans pour Anniversaire");
        cy.get('.landing_title').should('contain', "Collection de créateurs pour l'anniversaire");
        HomePage_PO.getButtonSpecials_CollectionDeCréateursMoitiéPrix().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Collection de créateurs d'anniversaire");
        cy.get('.landing_title').should('contain', 'Birthday Designer Collection');
        HomePage_PO.getButtonSpecials_CollectionDeCréateursMoitiéPrix().click({ force: true });
  
        
        cy.get('[title="Collection de créateurs"]') 
        .should('have.attr', 'href', '/fr/speciaux/collection-speciale-concepteur/designer-collection-moitie-prix-1/')
        .contains('Collection de créateurs')
        .should('be.visible')
        .should('exist')
        .click({ force: true });
        cy.get('.landing_title').should('contain',"Collection de créateurs");
        HomePage_PO.getButtonSpecials_CollectionDeCréateursMoitiéPrix().click({ force: true });

  
        cy.log('END Check Spéciaux/De Créateurs Moitié Prix Collections');
        cy.allure().endStep();
  
      }

      checkCollections_SpéciauxSection_OursEnPelucheVasesEtChocolats() {

        cy.allure().startStep('Check Spéciaux/Ours en Peluche, Vases et Chocolats Collections ');
        cy.log('START Check Spéciaux/Ours en Peluche, Vases et Chocolats Collections');
  
        HomePage_PO.getButtonSpéciaux().click({ force: true });
        HomePage_PO.getButtonSpecials_OursEnPelucheVasesEtChocolats().click({ force: true });
        Collection.searchAndClickElementByTitleFR("Nounours");
        cy.get('.landing_title').should('contain', 'Ours en peluche');
        HomePage_PO.getButtonSpecials_OursEnPelucheVasesEtChocolats().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Vases");
        cy.get('.landing_title').should('contain', "Vases");
        HomePage_PO.getButtonSpecials_OursEnPelucheVasesEtChocolats().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Chocolats et Friandises");
        cy.get('.landing_title').should('contain', 'Chocolats et friandises');
        HomePage_PO.getButtonSpecials_OursEnPelucheVasesEtChocolats().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('Cartes');
        cy.get('.landing_title').should('contain', 'Cartes');
        HomePage_PO.getButtonSpecials_OursEnPelucheVasesEtChocolats().click({ force: true });

  
        cy.log('END Check Spéciaux/Ours en Peluche, Vases et Chocolats Collections ');
        cy.allure().endStep();
  
      }

      // Par Prix section and collections

      checkCollections_ParPrixSection() {

        cy.allure().startStep('Check Par Prix Section Collections');
        cy.log('START Check Par Prix Section Collections');
  
        HomePage_PO.getButtonParPrix().click({ force: true });
        Collection.searchAndClickElementByTitleFR("Moins de 20 $");
        cy.get('.landing_title').should('contain', 'Moins de 20$');
        HomePage_PO.getButtonParPrix().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("20$ - 30$");
        cy.get('.landing_title').should('contain', "20$ - 30$");
        HomePage_PO.getButtonParPrix().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("30$ - 40$");
        cy.get('.landing_title').should('contain', '30$ - 40$');
        HomePage_PO.getButtonParPrix().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('40$ - 50$');
        cy.get('.landing_title').should('contain', '40$ - 50$');
        HomePage_PO.getButtonParPrix().click({ force: true });

        Collection.searchAndClickElementByTitleFR('50$ ou Plus');
        cy.get('.landing_title').should('contain', '50$ et Plus');
        HomePage_PO.getButtonParPrix().click({ force: true });

        cy.log('END Check Par Prix Section Collections ');
        cy.allure().endStep();
  
      }

       // Occasions Spéciales section and collections

       checkCollections_OccasionsFR() {

        cy.allure().startStep('Check OccasionsFR Section Collections');
        cy.log('START Check OccasionsFR Section Collections');
  
        HomePage_PO.getButtonOccasionsFR().click({ force: true });
        Collection.searchAndClickElementByTitleFR("Fleurs d'anniversaire");
        cy.get('.landing_title').should('contain', 'Anniversary Flowers');
        HomePage_PO.getButtonOccasionsFR().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Fleurs et Cadeaux de Pendaison de Crémaillère");
        cy.get('.landing_title').should('contain', "Fleurs pour une pendaison de crémaillère");
        HomePage_PO.getButtonOccasionsFR().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Nouveau Bébé Fleurs et Cadeaux");
        cy.get('.landing_title').should('contain', 'Fleurs et cadeaux pour les nouveaux bébés');
        HomePage_PO.getButtonOccasionsFR().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Fleurs d'amour");
        cy.get('.landing_title').should('contain', 'Amour & Romance');
        HomePage_PO.getButtonOccasionsFR().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Fleurs et cadeaux de rétablissement');
        cy.get('.landing_title').should('contain', 'Fleurs de voeux de bon rétablissement');
        HomePage_PO.getButtonOccasionsFR().click({ force: true });

        Collection.searchAndClickElementByTitleFR("Fleurs et cadeaux de Remerciement");
        cy.get('.landing_title').should('contain', 'Fleurs & Cadeaux de remerciement');
        HomePage_PO.getButtonOccasionsFR().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('Juste Parce Que');
        cy.get('.landing_title').should('contain', 'Fleurs Juste Parce-que');
        HomePage_PO.getButtonOccasionsFR().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Fleurs & Cadeaux de félicitations');
        cy.get('.landing_title').should('contain', 'Fleurs & Cadeaux de félicitations');
        HomePage_PO.getButtonOccasionsFR().click({ force: true });

        cy.log('END Check OccasionsFR Section');
        cy.allure().endStep();
  
      }

      checkCollections_OccasionsFR_FleursEtCadeauxDanniversaire() {

        cy.allure().startStep('Check FleursEtCadeauxDanniversaire Collection');
        cy.log('START Check FleursEtCadeauxDanniversaire Collection');
  
        HomePage_PO.getButtonOccasionsFR().click({ force: true });
        HomePage_PO.getButtonOccasions_FleursEtCadeauxDanniversaire().click({ force: true });
        Collection.searchAndClickElementByTitleFR("Fleurs d'anniversaire");
        cy.get('.landing_title').should('contain', "Fleurs d'anniversaire");
        HomePage_PO.getButtonOccasions_FleursEtCadeauxDanniversaire().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Collection Chope d'Anniversaire");
        cy.get('.landing_title').should('contain', "Collection Chope d'Anniversaire");
        HomePage_PO.getButtonOccasions_FleursEtCadeauxDanniversaire().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Collection d'artisans pour anniversaire");
        cy.get('.landing_title').should('contain', "Idées de cadeaux d'anniversaire pour elle et lui");
        HomePage_PO.getButtonOccasions_FleursEtCadeauxDanniversaire().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Collection Gourmande Anniversaire");
        cy.get('.landing_title').should('contain', 'Collection Gourmande Anniversaire');
        HomePage_PO.getButtonOccasions_FleursEtCadeauxDanniversaire().click({ force: true });

        cy.log('END Check FleursEtCadeauxDanniversaire Collection');
        cy.allure().endStep();
  
      }

      checkCollections_OccasionsFR_SympathieEtFunérailles() {

        cy.allure().startStep('Check Sympathie et Funérailles Collection');
        cy.log('START Check Sympathie et Funérailles Collection');
  
        HomePage_PO.getButtonOccasionsFR().click({ force: true });
        HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });
        Collection.searchAndClickElementByTitleFR("Arrangements de Fleurs d'Urne");
        cy.get('.landing_title').should('contain', "Arrangements de fleurs en urne");
        HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });

        Collection.searchAndClickElementByTitleFR("Forfaits de Fleurs de Sympathie");
        cy.get('.landing_title').should('contain', 'Paquets de fleurs de sympathie');
        HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });
      
        // Collection.searchAndClickElementByTitleFR("Fleurs de Sympathie ");
        // cy.get('.landing_title').should('contain', "Fleurs de Sympathie");
        // HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Collection Concepteur Fleurs de Sympathie");
        cy.get('.landing_title').should('contain', "Collection du créateur - Fleurs de sympathie");
        HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });

        Collection.searchAndClickElementByTitleFR("Couronnes de Sympathie");
        cy.get('.landing_title').should('contain', "Couronnes de Sympathie");
        HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Meilleures Ventes Sympathie");
        cy.get('.landing_title').should('contain', "Meilleures Ventes - Sympathie");
        HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Coeurs et Croix");
        cy.get('.landing_title').should('contain', 'Cœurs et croix');
        HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Cercueil et Gerbe Funéraire");
        cy.get('.landing_title').should('contain', 'Gerbes de Cercueil');
        HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });


        cy.log('END Check Sympathie et Funérailles Collection');
        cy.allure().endStep();
  
      }

      checkCollections_CadeauxDentreprise() {

        cy.allure().startStep("Check Cadeaux d'entreprise Collection");
        cy.log("START Check Cadeaux d'entreprise Collection");
  
        HomePage_PO.getButtonOccasionsFR().click({ force: true });
        HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });
        // Collection.searchAndClickElementByTitleFR("Cadeaux Gourmands");
        // cy.get('.landing_title').should('contain', "Cadeaux gourmands");
        // HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Paniers-cadeaux d'entreprise");
        cy.get('.landing_title').should('contain', "Corporate Gift Baskets");
        HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Cadeaux de Félicitations");
        cy.get('.landing_title').should('contain', "Cadeaux de félicitations");
        HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Fleurs d'anniversaire");
        cy.get('.landing_title').should('contain', "Fleurs d'anniversaire");
        HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });

    

        Collection.searchAndClickElementByTitleFR("Corporate Wine and Beer Gift Baskets");
        cy.get('.col-lg-12').should('contain', "404 Error Page");
        HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Corporate Christmas Poinsettias ");
        cy.get('.col-lg-12').should('contain', "404 Error Page");
        HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });
  
        // Collection.searchAndClickElementByTitleFR("Bouquets de ballons");
        // cy.get('.landing_title').should('contain', 'Bouquets de ballons');
        // HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Fleurs de Sympathie");
        cy.get('.landing_title').should('contain', 'Fleurs de Sympathie');
        HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });


        cy.log("END Check Cadeaux d'entreprise Collection");
        cy.allure().endStep();
  
      }

      //Fleurs section / FR VERSION

      checkFleursSection() {

        cy.allure().startStep('Check Fleurs section Collections');
        cy.log('START Check Fleurs section Collections');
  
        HomePage_PO.getButtonFleurs().click({ force: true });
        Collection.searchAndClickElementByTitleFR("Collection Concepteur");
        cy.get('.landing_title').should('contain', "Collection du Créateur");
        HomePage_PO.getButtonFleurs().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Roses");
        cy.get('.landing_title').should('contain', "Roses");
        HomePage_PO.getButtonFleurs().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Fleurs de lys");
        cy.get('.landing_title').should('contain', 'Lys');
        HomePage_PO.getButtonFleurs().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Bouquets Mélangés");
        cy.get('.landing_title').should('contain', 'Bouquets mélangés');
        HomePage_PO.getButtonFleurs().click({ force: true });

        cy.log('END Check Fleurs section Collections');
        cy.allure().endStep();
  
      }

      // Fleurs en Vrac section FR VERSION

      checkCollections_FleursEnVrac() {

        cy.allure().startStep('Check  Fleurs en Vrac Collection');
        cy.log('START Check Fleurs en Vrac Collection');
  
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });
        Collection.searchAndClickElementByTitleFR("Gerberas En Vrac");
        cy.get('.landing_title').should('contain', 'Gerberas En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Mufliers En Vrac");
        cy.get('.landing_title').should('contain', "Mufliers En Vrac");
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Alstroemeria En Vrac");
        cy.get('.landing_title').should('contain', 'Alstroemeria En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Roses En Vrac");
        cy.get('.landing_title').should('contain', 'Roses En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Verdures En Vrac');
        cy.get('.landing_title').should('contain', 'Verdures En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });

        Collection.searchAndClickElementByTitleFR("Oeillets En Vrac");
        cy.get('.landing_title').should('contain', 'Oeillets En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('Lys En Vrac');
        cy.get('.landing_title').should('contain', 'Lys En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Chrysanthèmes En Vrac');
        cy.get('.landing_title').should('contain', 'Chrysanthèmes En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Mini Roses En Vrac');
        cy.get('.landing_title').should('contain', 'Mini Roses En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });

        Collection.searchAndClickElementByTitleFR("Lys Calla En Vrac");
        cy.get('.landing_title').should('contain', 'Lys Calla En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('Hortensia En Vrac');
        cy.get('.landing_title').should('contain', 'Hortensia En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Tournesols En Vrac');
        cy.get('.landing_title').should('contain', 'Tournesols En Vrac');
        HomePage_PO.getButton_FleursEnVrac().click({ force: true });

        cy.log('END Check  Fleurs en Vrac Collection');
        cy.allure().endStep();
  
      }

      // Paniers Cadeaux section / FR VERSION

      checkCollections_PaniersCadeauxSection() {

        cy.allure().startStep('Check  Paniers Cadeaux Collection');
        cy.log('START Check Paniers Cadeaux Collection');
  
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });
        Collection.searchAndClickElementByTitleFR("Collection de Paniers Cadeaux Lindt");
        cy.get('.landing_title').should('contain', 'Paniers-Cadeaux de la Collection Lindt');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });
      
        Collection.searchAndClickElementByTitleFR("Paniers Cadeaux Vin & Bière");
        cy.get('.landing_title').should('contain', "Paniers Cadeaux Vin et Bière");
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Paniers de friandises");
        cy.get('.landing_title').should('contain', 'Paniers de friandises');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR("Collection Gourmet");
        cy.get('.landing_title').should('contain', 'Collection Gourmande');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Personnalisé - Tout Budget');
        cy.get('.landing_title').should('contain', 'Pour tout budget');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        Collection.searchAndClickElementByTitleFR("Combinaisons Grandes");
        cy.get('.landing_title').should('contain', 'Great Combinations');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('Paniers de Fruits');
        cy.get('.landing_title').should('contain', 'Paniers de fruits');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Paniers de cadeaux de collation');
        cy.get('.landing_title').should('contain', 'Paniers cadeaux de collations');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        Collection.searchAndClickElementByTitleFR("Paniers-Cadeaux d'Entreprise");
        cy.get('.landing_title').should('contain', "Paniers cadeaux d'entreprise");
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        // Collection.searchAndClickElementByTitleFR("Paniers cadeaux de cafés");
        // cy.get('.landing_title').should('contain', 'Coffee Gift Baskets');
        // HomePage_PO.getButtonPaniersCadeaux().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('Collection de Coffrets Cadeaux de Luxe');
        cy.get('.landing_title').should('contain', 'Boite Cadeaux de la Collection Luxe');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Paniers-cadeaux au fromage');
        cy.get('.landing_title').should('contain', 'Paniers cadeaux de fromage');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        Collection.searchAndClickElementByTitleFR("Paniers Cadeaux Thé");
        cy.get('.landing_title').should('contain', "Tea Gift Baskets");
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        Collection.searchAndClickElementByTitleFR("Collection Tradition des Fêtes");
        cy.get('.landing_title').should('contain', 'Collection Tradition des fêtes');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });
  
        Collection.searchAndClickElementByTitleFR('Paniers Cadeaux de Chocolat');
        cy.get('.landing_title').should('contain', 'Paniers cadeaux chocolats');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        Collection.searchAndClickElementByTitleFR('Paniers Cadeaux Gourmands');
        cy.get('.landing_title').should('contain', 'Paniers cadeaux gourmands');
        HomePage_PO.getButtonPaniersCadeaux().click({ force: true });

        cy.log('END Check Paniers Cadeaux Collection');
        cy.allure().endStep();
  
      }

      









}
export default new CollectionsFR