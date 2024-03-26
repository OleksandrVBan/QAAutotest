import QuoteFormStepsFR from "../steps-FR/QuoteForm.stepsFR"
import HomePage_PO from '../../pages/Homepage_PO';

describe("Test case №71 - Check sending quote form", () => {

    it('Check sending 71 Check sending quote form - Test case №71', () => {
      
        HomePage_PO.getButtonLanguageChange().click()
        QuoteFormStepsFR.sendQuoteFormWithCorrectData();

    })

})