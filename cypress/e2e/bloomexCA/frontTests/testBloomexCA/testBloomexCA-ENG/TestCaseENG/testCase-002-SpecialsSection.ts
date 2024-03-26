import MenuSectionAndCategories from '../steps-ENG/MenuSectionAndCategories.steps'
import CollectionsSteps from '../steps-ENG/Collections.steps'
import '@shelex/cypress-allure-plugin';

describe("Test case №2-Specials Section", () => {

    it("Checking menu main entries - Test case №2- Specials Section", () => {
        cy.allure().suite('Test case №2 - Check menu main entries- Specials Section');
        cy.allure().description('Check menu main entries- Specials Section: Section page, Categoriy pages and Collection pages');

        MenuSectionAndCategories.checkSpecialSection();
        CollectionsSteps.checkCollections_SpecialsSection();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_SweetBlossom();

        MenuSectionAndCategories.checkCategorySpecialsSection_ShopForGood();
        CollectionsSteps.checkCollections_SpecialsSection_ShopForGood();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_MasonJar();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_LindtGiftBaskets();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_Gourmet();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_HugsAndKisses();

        MenuSectionAndCategories.checkCategorySpecialsSection_DesignerCollection();
        CollectionsSteps.checkCollections_SpecialsSection_DesignerCollection();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_TeddyBearsVasesChocolates();
        CollectionsSteps.checkCollections_SpecialsSection_TeddyBearsVasesAndChocolates();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_RosesAndWine();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_Bunches();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_RedTagSpecials();

        MenuSectionAndCategories.checkCategorySpecialsSection_getButtonSpecials_FridayOnlyRoses();

        MenuSectionAndCategories.checkCategorySpecialsSection_DesignerCollection();

    })

})