import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
import CollectionsSteps from '../steps-ENG/Collections.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2-Occasions Section", () => {

    it("Checking menu main entries - Test case №2- Occasions Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries- Occasions Section');
        cy.allure().description('Checking menu main entries-Occasions Section: Section page, Category pages and Collection pages');
        
        MenuSectionAndCategories.checkOccasionsSection();
        CollectionsSteps.checkOccasionsCollectionsSection();

        MenuSectionAndCategories.checkOccasions_BirthdayFlowersAndGifts();
        CollectionsSteps.checkOccasionsCollectionsSection_BirthdayFlowersAndGifts();
     
        MenuSectionAndCategories.checkOccasions_SympathyAndFuneral();
        CollectionsSteps.checkOccasionsCollectionsSection_SympathyAndFuneral();

        MenuSectionAndCategories.checkOccasions_Anniversary();
           
        MenuSectionAndCategories.checkOccasions_JustBecause();
     
        MenuSectionAndCategories.checkOccasions_LoveAndRomance();

        MenuSectionAndCategories.checkOccasions_NewBaby();

        MenuSectionAndCategories.checkOccasions_Housewarming();

        MenuSectionAndCategories.checkOccasions_GetWell();

        MenuSectionAndCategories.checkOccasions_GiftsForHim();
        
        MenuSectionAndCategories.checkOccasions_CorporateGifts();
        CollectionsSteps.checkOccasionsCollectionsSection_CorporateGifts();

        MenuSectionAndCategories.checkOccasions_Congratulations();

        MenuSectionAndCategories.checkOccasions_ThankYou();

      
        //not actual
        //  MenuSectionAndCategories.checkOccasions_MothersDay();
        //  CollectionsSteps.checkOccasionsCollectionsSection_MothersDay();

    })

})