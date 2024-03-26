import MenuSectionAndCategories from '../steps-FR/MenuSectionAndCategories.steps-FR'
import HomePage_PO from '../../pages/Homepage_PO';

describe ("Test case №5", () => {

    it('Check Left Menu', () => {
        HomePage_PO.getButtonLanguageChange().click()

        MenuSectionAndCategories.checkLeftMenuByNameAndClickFR('Collection poignée de fleurs');
       
    })
})