import Resolution from '../steps-FR/DifferentScreenResolutions.steps'
import HomePage_PO from '../../pages/Homepage_PO';

describe("Test case №12- Resolution Checker", () => {

    it("Checking Resolutions - Test case №12- Resolution Checker", () => {
        HomePage_PO.getButtonLanguageChange().click()
        Resolution.checkResolution();
    });

});



