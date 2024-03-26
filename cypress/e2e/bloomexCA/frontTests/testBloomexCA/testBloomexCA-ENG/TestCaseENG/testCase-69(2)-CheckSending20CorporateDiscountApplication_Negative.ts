import CorporateAccountSteps from '../steps-ENG/CorporateAccount.steps';


describe("Test case №69(2)-Check sending 20 corporate discount application-Negative", () => {

    it('Check sending 20 corporate discount application - Test case №69(2_-Negative__withEmptyFields_EmptyFirstName', () => {
        CorporateAccountSteps.checkSendingApplicationFor20CorporateDiscount_withEmptyFields_EmptyFirstName();

    })

    it('Check sending 20 corporate discount application - Test case №69(2)-Negative_withEmpty_LastName', () => {

        CorporateAccountSteps.checkSendingApplicationFor20CorporateDiscount_withEmptyLastName();
    })

    it('Check sending 20 corporate discount application - Test case №69(2)-Negative_withEmpty_Company', () => {

        CorporateAccountSteps.checkSendingApplicationFor20CorporateDiscount_withEmpty_FieldCompany();
    })

    it('Check sending 20 corporate discount application - Test case №69(2)-Negative_withEmpty_Phone', () => {

        CorporateAccountSteps.checkSendingApplicationFor20CorporateDiscount_withEmpty_FieldPhone();

    })

    it('Check sending 20 corporate discount application - Test case №69(2)-Negative_withEmpty_City', () => {

        CorporateAccountSteps.checkSendingApplicationFor20CorporateDiscount_withEmpty_FieldCity();
    })

    it('Check sending 20 corporate discount application - Test case №69(2)-Negative_withEmpty_Email', () => {

        CorporateAccountSteps.checkSendingApplicationFor20CorporateDiscount_withEmpty_FieldEmail();
    })

    it('Check sending 20 corporate discount application - Test case №69(2)-Negative_withEmpty_Password', () => {

        CorporateAccountSteps.checkSendingApplicationFor20CorporateDiscount_withEmpty_FieldPassword();
    })



})