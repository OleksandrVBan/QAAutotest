import HomePage_PO from '../../pages/Homepage_PO';


class MenuSectionAndCategoriesFR {

    //Check Spacial section on FR

    checkSpéciauxSection() {
        cy.allure().startStep('Check Spéciaux Section');
        cy.log('START of checking Spéciaux Section')

        cy.allure().startStep('Check Button Spéciaux');

        
        HomePage_PO.getButtonSpéciaux().click();
        cy.get('.landing_title').should('contain', 'Les Spéciaux');

        HomePage_PO.getButtonSpecials_CollectionFeursDouces().click({ force: true });
        cy.get('.landing_title').should('contain', 'Sweet Blossoms Collection');

        HomePage_PO.getButtonSpecials_CâlinsEtBisousMoitiéPrix().click({ force: true });
        cy.get('.landing_title').should('contain', 'Collection Câlins et Bisous');

        HomePage_PO.getButtonSpecials_CollectionChérie1_2Prix().click({ force: true });
        cy.get('.landing_title').should('contain', 'Collection "Chérie"');

        HomePage_PO.getButtonSpecials_CollectionDeCréateursMoitiéPrix().click({ force: true });
        cy.get('.landing_title').should('contain', 'Collection du Créateur');

        HomePage_PO.getButtonSpecials_SPÉCIALESÉTIQUETTEROUGE().click({ force: true });
        cy.get('.landing_title').should('contain', 'SPÉCIAL ÉTIQUETTES ROUGES');

        HomePage_PO.getButtonSpecials_CollectionGourmetMoitiéPrix().click({ force: true });
        cy.get('.landing_title').should('contain', 'Collection Gourmande');

        HomePage_PO.getButtonSpecials_OursEnPelucheVasesEtChocolats().click({ force: true });
        cy.get('.landing_title').should('contain', 'Cartes, vases, ours en peluche, ballons et chocolats');

        HomePage_PO.getButtonSpecials_CollectionDeBocauxMason().click({ force: true });
        cy.get('.landing_title').should('contain', 'Collection Bocal de Maçon');

        HomePage_PO.getButtonSpecials_PaniersCadeauxLindt50Prix().click({ force: true });
        cy.get('.landing_title').should('contain', 'Paniers-Cadeaux de la Collection Lindt');

        HomePage_PO.getButtonSpecials_CollectionPoignéeDeFleursMoitiéPrix().click({ force: true });
        cy.get('.landing_title').should('contain', 'La collection des grappes');

        HomePage_PO.getButtonSpecials_RosesEtVin().click({ force: true });
        cy.get('.landing_title').should('contain', 'Spéciales des Roses & Vin');

        HomePage_PO.getButtonSpecials_MagasinerPourLaBonté().click({ force: true });
        cy.get('.landing_title').should('contain', 'Magasiner pour la bonté');

        // HomePage_PO.getButtonSpecials_RosesDuVendredi_à_MoitiéPrix().click({ force: true });
        // cy.get('.landing_title').should('contain', 'Moitié Prix des Vendredis');

        cy.log('END of checking Spéciaux Section');
        cy.allure().endStep();
    };



    // Check Occasions section FR VERSION

    checkOccasionsSection() {
        cy.allure().startStep('Check Occasions Section');
        cy.log('START of checking Occasions Section')

        cy.allure().startStep('Check Button Occasions');

        HomePage_PO.getButtonOccasionsFR().click();
        cy.get('.landing_title').should('contain', 'Occasions Spéciales');
        
        HomePage_PO.getButtonOccasions_FleursEtCadeauxDanniversaire().click({ force: true });
        cy.get('.landing_title').should('contain', "Fleurs et cadeaux d'anniversaire");

        HomePage_PO.getButtonOccasions_SympathieEtFunérailles().click({ force: true });
        cy.get('.landing_title').should('contain', "Fleurs de sympathie et funéraires");

        HomePage_PO.getButtonOccasions_Anniversaire().click({ force: true });
        cy.get('.landing_title').should('contain', "Anniversary Flowers");

        HomePage_PO.getButtonOccasions_JusteParceQue().click({ force: true });
        cy.get('.landing_title').should('contain', "Fleurs Juste Parce-que");

        HomePage_PO.getButtonOccasions_AmourEtRomance().click({ force: true });
        cy.get('.landing_title').should('contain', "Amour & Romance");

        HomePage_PO.getButtonOccasions_NouveauBébé().click({ force: true });
        cy.get('.landing_title').should('contain', "Fleurs et cadeaux pour les nouveaux bébés");

        HomePage_PO.getButtonOccasions_PendrelaCrémaillère().click({ force: true });
        cy.get('.landing_title').should('contain', "Fleurs pour une pendaison de crémaillère");

        HomePage_PO.getButtonOccasions_BonRétablissement().click({ force: true });
        cy.get('.landing_title').should('contain', "Fleurs de voeux de bon rétablissement");

        HomePage_PO.getButtonOccasions_CadeauxPourLui().click({ force: true });
        cy.get('.landing_title').should('contain', "Cadeaux pour lui");

        HomePage_PO.getButtonOccasions_CadeauxDentreprise().click({ force: true });
        cy.get('.landing_title').should('contain', "Cadeaux d'entreprise");

        HomePage_PO.getButtonOccasions_ToutesNosFélicitations().click({ force: true });
        cy.get('.landing_title').should('contain', "Fleurs & Cadeaux de félicitations");

        HomePage_PO.getButtonOccasions_Remerciements().click({ force: true });
        cy.get('.landing_title').should('contain', "Fleurs & Cadeaux de remerciement");

        cy.log('END of checking Occasions Section');
        cy.allure().endStep();
    };


    //Fleurs section FR VERSION

    checkFleursSection() {
        cy.allure().startStep('Check Fleurs Section');
        cy.log('START of checking Fleurs Section')

        cy.allure().startStep('Check Button Fleurs');

        HomePage_PO.getButtonFleurs().click();
        cy.get('.landing_title').should('contain', 'Fleurs fraîchement coupées');

        HomePage_PO.getButtonFleurs_Marguerites().click({ force: true });
        cy.get('.landing_title').should('contain', "Bouquets de marguerites");

        HomePage_PO.getButtonFleurs_DIYFleursEnVrac().click({ force: true });
        cy.get('.landing_title').should('contain', "Fleurs en Vrac DIY");

        HomePage_PO.getButtonFleurs_Tournesols().click({ force: true });
        cy.get('.landing_title').should('contain', "Tournesols");

        HomePage_PO.getButtonFleurs_TropicalPlants().click({ force: true });
        cy.get('.landing_title').should('contain', "Baskets plantes tropicales et jardinière");

        HomePage_PO.getButtonFleurs_BouquetsMélangés().click({ force: true });
        cy.get('.landing_title').should('contain', "Bouquets mélangés");

        HomePage_PO.getButtonFleurs_DesRoses().click({ force: true });
        cy.get('.landing_title').should('contain', "Roses");

        HomePage_PO.getButtonFleurs_PaniersDesFleursEtPlantes().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers de fleurs et de plantes");

        HomePage_PO.getButtonFleurs_Lys().click({ force: true });
        cy.get('.landing_title').should('contain', "Lys");

        cy.log('END of checking Fleurs Section');
        cy.allure().endStep();
    };

    // Paniers Cadeaux section FR VERSION

    checkPaniersCadeauxSection() {
        cy.allure().startStep('Check Paniers Cadeaux');
        cy.log('START of checking Paniers Cadeaux')

        cy.allure().startStep('Check Button Paniers Cadeaux');

        HomePage_PO.getButtonPaniersCadeaux().click();
        cy.get('.landing_title').should('contain', 'Paniers Cadeaux');

        HomePage_PO.getButtonPaniersCadeaux_CollectionGourmetMoitiéPrix().click({ force: true });
        cy.get('.landing_title').should('contain', "Collection Gourmande");

        HomePage_PO.getButtonPaniersCadeaux_PaniersDeBièreEtVin().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers Cadeaux Vin et Bière");

        HomePage_PO.getButtonPaniersCadeaux_PaniersCadeauxDentreprise().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers cadeaux d'entreprise");

        HomePage_PO.getButtonPaniersCadeaux_PaniersDeFruits().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers de fruits");

        HomePage_PO.getButtonPaniersCadeaux_CollectionDePaniersCadeauxLindt().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers-Cadeaux de la Collection Lindt");

        HomePage_PO.getButtonPaniersCadeaux_CollectionTraditionDesFêtes().click({ force: true });
        cy.get('.landing_title').should('contain', "Collection Tradition des fêtes");

        HomePage_PO.getButtonPaniersCadeaux_PaniersCadeauxGourmands().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers cadeaux gourmands");

        HomePage_PO.getButtonPaniersCadeaux_CollectionEleganceDePaniersCadeaux().click({ force: true });
        cy.get('.landing_title').should('contain', "Collection Elegance de paniers-cadeaux");

        HomePage_PO.getButtonPaniersCadeaux_CoffretsCadeauxDeLuxe().click({ force: true });
        cy.get('.landing_title').should('contain', "Boite Cadeaux de la Collection Luxe");

        HomePage_PO.getButtonPaniersCadeaux_PaniersCadeauxBonbons().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers de friandises");

        HomePage_PO.getButtonPaniersCadeaux_PaniersCadeauxFromage().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers cadeaux de fromage");

        HomePage_PO.getButtonPaniersCadeaux_PaniersCadeauxChocolat().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers cadeaux chocolats");

        HomePage_PO.getButtonPaniersCadeaux_PaniersCadeauxCollation().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers cadeaux de collations");

        HomePage_PO.getButtonPaniersCadeaux_PaniersCadeauxPourHommes().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers Cadeaux pour Hommes");

        HomePage_PO.getButtonPaniersCadeaux_PaniersàCaféetThé().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers de café et de thé");

        // HomePage_PO.getButtonPaniersCadeaux_CollectionMakeAWish().click({ force: true });
        // cy.get('.landing_title').should("contain", 'Collection "Fais un Vœux"');

        cy.log('END of checking Paniers Cadeaux');
        cy.allure().endStep();
    };

     // Fleurs en Vrac section FR VERSION

     checkFleursEnVracSection() {
        cy.allure().startStep('Check Fleurs En Vrac');
        cy.log('START of checking Fleurs EnVrac')

        cy.allure().startStep('Check Button Fleurs En Vrac');

        HomePage_PO.getButton_FleursEnVrac().click();
        cy.get('.landing_title').should('contain', 'Fleurs en Vrac DIY');

        HomePage_PO.getButtonFleursEnVrac_ChrysanthèmesEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Chrysanthèmes En Vrac');

        HomePage_PO.getButtonFleursEnVrac_HortensiaEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Hortensia En Vrac');

        HomePage_PO.getButtonFleursEnVrac_LysEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Lys En Vrac');

        HomePage_PO.getButtonFleursEnVrac_TulipesEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Tulipes En Vrac');

        HomePage_PO.getButtonFleursEnVrac_VerduresEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Verdures En Vrac');

        HomePage_PO.getButtonFleursEnVrac_RosesEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Roses En Vrac');

        HomePage_PO.getButtonFleursEnVrac_MufliersEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Mufliers En Vrac');

        HomePage_PO.getButtonFleursEnVrac_OeilletsEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Oeillets En Vrac');

        HomePage_PO.getButtonFleursEnVrac_AlstroemeriaEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Alstroemeria En Vrac');

        HomePage_PO.getButtonFleursEnVrac_TournesolsEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Tournesols En Vrac');

        HomePage_PO.getButtonFleursEnVrac_LysCallaEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Lys Calla En Vrac');

        HomePage_PO.getButtonFleursEnVrac_GerberasEnVrac().click({ force: true });
        cy.get('.landing_title').should("contain", 'Gerberas En Vrac');

        cy.log('END of checking Fleurs EnV rac');
        cy.allure().endStep();
    };

     // Entreprise section FR VERSION

    checkEntrepriseSection() {
        cy.allure().startStep('Check Entreprise');
        cy.log('START of checking Entreprise')

        cy.allure().startStep('Check Button Entreprise');

        HomePage_PO.getButtonEntreprise().click();
        cy.get('.content_title_inner').should('contain', "Compte d'entreprise Bloomex");

        HomePage_PO.getButtonEntreprise_DemanderUnRabaisCorporatifDe20().click({ force: true });
        cy.get('.content_title_inner').should('contain', "Compte d'entreprise Bloomex");

        HomePage_PO.getButtonEntreprise_FormulaireDeDemandeDeDevis().click({ force: true });
        cy.get('.text-center').should("contain", 'Quote Form');

        HomePage_PO.getButtonEntreprise_PaniersCadeauxDentreprise().click({ force: true });
        cy.get('.landing_title').should('contain', "Paniers cadeaux d'entreprise");

        // HomePage_PO.getButtonEntreprise_ProgrammeDeBienêtreDentreprise().click({ force: true });
        // cy.get('.landing_title').should("contain", 'Office Fruit Boxes');

        cy.log('END of checking Entreprise');
        cy.allure().endStep();
    };

    checkParPrixSection() {

        cy.allure().startStep('Check page ParPrix Section');
        cy.log('START checking ParPrix Section')

        HomePage_PO.getButtonParPrix().click({ force: true })
        cy.get('.landing_title').should('contain', 'Par Prix')

        HomePage_PO.getButtonParPrix_MoinsDe20$().click({ force: true })
        cy.get('.landing_title').should('contain', 'Moins de 20$')

        HomePage_PO.getButtonParPrix_20$_30$().click({ force: true })
        cy.get('.landing_title').should('contain', '20$ - 30$')

        HomePage_PO.getButtonParPrix_30$_40$().click({ force: true })
        cy.get('.landing_title').should('contain', '30$ - 40$')

        HomePage_PO.getButtonParPrix_40$_50$().click({ force: true })
        cy.get('.landing_title').should('contain', '40$ - 50$')

        HomePage_PO.getButtonParPrix_50$plus().click({ force: true })
        cy.get('.landing_title').should('contain', '50$ et Plus')

        cy.log('END checking ParPrix Section')
        cy.allure().endStep();
    }

     // Aide / Compte section FR VERSION

     checkAide_CompteSection() {

        cy.allure().startStep('Check page Aide / Compte section');
        cy.log('START checking Aide / Compte section')

        HomePage_PO.getButtonAideCompte().click({ force: true })
        cy.get('.col-lg-12').should('contain', "Utilisez le formulaire d'identification ci-contre pour obtenir un acces complet")

        HomePage_PO.getButtonAideCompte_MotDePassePerdu().click({ force: true })
        cy.get('.new_checkout_header').should('contain', 'Créer un mot de passe')

        HomePage_PO.getButtonAideCompte_SoinDesFleurs().click({ force: true })
        cy.get('.content_title_inner').should('contain', 'Soin des fleurs')

        HomePage_PO.getButtonAideCompte_VotrePanier().click({ force: true })
        cy.get('.col-lg-12').should('contain', ' RÉSUMÉ DU PANIER')

        HomePage_PO.getButtonAideCompte_VotreCompteBloomex().click({ force: true })
        cy.get('.col-lg-12').should('contain', "Utilisez le formulaire d'identification ci-contre pour obtenir un acces comple")

        HomePage_PO.getButtonAideCompte_EspaceFidélitéBloomex().click({ force: true })
        cy.get('.col-lg-12').should('contain', "Utilisez le formulaire d'identification ci-contre pour obtenir un acces comple")

        cy.log('END checking Aide / Compte section')
        cy.allure().endStep();
    }

    // Check Aide Comptre for registred user

    checkAideCompte1() {
        cy.log('START Check AideCompte Section')

        HomePage_PO.getButtonAideCompte().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'compte')

        HomePage_PO.getButtonAideCompte_MotDePassePerdu().click({ force: true })
        cy.get('.new_checkout_header').should('contain', "Créer un mot de passe")

        HomePage_PO.getButtonAideCompte_SoinDesFleurs().click({ force: true })
        cy.get('.content_title_inner').should('contain', 'Soin des fleurs')

        HomePage_PO.getButtonAideCompte_VotrePanier().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'panier')

        HomePage_PO.getButtonAideCompte_VotreCompteBloomex().click({ force: true })
        cy.get('.col-lg-12').should('contain', 'Vérifiez votre histoire de Bloomex Bucks')

        HomePage_PO.getButtonAideCompte_EspaceFidélitéBloomex().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'your bloomex buck history')

        cy.log('END Check AideCompte Section')

    }

    

     // Politiques section FR VERSION

     checkPolitiquesSection() {

        cy.allure().startStep('Check page Aide / Compte section');
        cy.log('START checking Aide / Compte section')

        HomePage_PO.getButtonPolitiques().click({ force: true })
        cy.get('.content_title_inner').should('contain', "Commande et politique de retour")

        HomePage_PO. getButtonPolitiques_CommandeEtPolitiqueDeRetour().click({ force: true })
        cy.get('.content_title_inner').should('contain', 'Commande et politique de retour')

        HomePage_PO. getButtonPolitiques_PolitiqueDeSubstitution().click({ force: true })
        cy.get('.content_title_inner').should('contain', 'Politique de substitution')

        HomePage_PO.getButtonPolitiques_PolitiqueDelivraison().click({ force: true })
        cy.get('.content_title_inner').should('contain', 'Politique de livraison')

        HomePage_PO.getButtonPolitiques_PolitiqueDePromotion().click({ force: true })
        cy.get('.content_title_inner').should('contain', "Politique de promotion et rebais ")

        HomePage_PO.getButtonPolitiques_PolitiqueDeConfidentialité().click({ force: true })
        cy.get('.content_title_inner').should('contain', "Politique d'intimité")

        HomePage_PO.getButtonPolitiques_LivraisonSansContact().click({ force: true })
        cy.get('.content_title_inner').should('contain', "livraison sans-contact")

        cy.log('END checking Aide / Compte section')
        cy.allure().endStep();
    }

    checkLeftMenuFR() {
        cy.allure().startStep('Check page LeftMenu');
        cy.log('START checking LeftMenu')


        HomePage_PO.getLeft_menu().should('contain', 'Collection poignée de fleurs')
        HomePage_PO.getLeft_menu().should('contain', 'Fleurs de Sympathie')
        HomePage_PO.getLeft_menu().should('contain', 'Collection Feurs Douces')
        HomePage_PO.getLeft_menu().should('contain', 'SPÉCIAUX ÉTIQUETTE ROUGE')
        HomePage_PO.getLeft_menu().should('contain', 'Collection du Concepteur')
        HomePage_PO.getLeft_menu().should('contain', 'DIY Fleurs En Vrac')
    }

    checkLeftMenuByNameAndClickFR(name: string, counter: number = 0) {

        HomePage_PO.getLeft_menu().contains(name).then(el => {
            el.is('exist')

        })

        if (HomePage_PO.getLeft_menu().should('contain', name)) {
            HomePage_PO.getLeft_menu().contains('li', name)
        } else {
            cy.reload();
            counter = counter + 1
            if (counter < 10) {
                this.checkLeftMenuByNameAndClickFR(name, counter);
            } else {
                throw new Error("Element not found: " + name)
            }
        }

    }

    checkPolitiques() {
        cy.log('START Check Politiques Section')

        HomePage_PO.getButtonPolitiques().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'commande et politique de retour')
        cy.get('h1').should('contain', 'Commande et politique de retour')

        HomePage_PO.getButtonPolitiques_CommandeEtPolitiqueDeRetour().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'commande et politique de retour')
        cy.get('h1').should('contain', 'Commande et politique de retour')

        HomePage_PO.getButtonPolitiques_PolitiqueDeSubstitution().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'politique de substitution')
        cy.get('h1').should('contain', 'Politique de substitution')

        HomePage_PO.getButtonPolitiques_PolitiqueDelivraison().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'politique de livraison')
        cy.get('h1').should('contain', 'Politique de livraison')

        HomePage_PO.getButtonPolitiques_PolitiqueDePromotion().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'politique de promotion')
        cy.get('h1').should('contain', 'Politique de promotion et rebais ')

        HomePage_PO.getButtonPolitiques_PolitiqueDeConfidentialité().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'politique de confidentialite')
        cy.get('h1').should('contain', "Politique d'intimité")

        HomePage_PO.getButtonPolitiques_LivraisonSansContact().click({ force: true })
        cy.get('.breadcrumb_active').should('contain', 'livraison sans contact')
        cy.get('h1').should('contain', 'livraison sans-contact')


        cy.log('END Check Politiques Section')
    }

    

}
    export default new MenuSectionAndCategoriesFR;