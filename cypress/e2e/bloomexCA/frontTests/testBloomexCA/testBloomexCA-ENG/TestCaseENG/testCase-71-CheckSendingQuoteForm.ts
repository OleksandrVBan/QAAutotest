import { QuoteFormApplicationSend } from "../steps-ENG/QuoteForm.steps";

describe("Test case №71 - Check sending quote form", () => {

    const QuoteFormApplicationSendCorrectData = new QuoteFormApplicationSend(); 
    it('Check sending 71 Check sending quote form - Test case №71', () => {
      
        QuoteFormApplicationSendCorrectData.sendQuoteFormWithCorrectData_withOnlyRequertFileds();
        QuoteFormApplicationSendCorrectData.sendQuoteFormWithFillingAllFields();

    })

})