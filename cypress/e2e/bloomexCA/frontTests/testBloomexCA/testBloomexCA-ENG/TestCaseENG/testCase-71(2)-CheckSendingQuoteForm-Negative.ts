// import QuoteFormSteps from "../steps-ENG/QuoteForm.steps";

import { QuoteFormApplicationEmptyAllFields} from "../steps-ENG/QuoteForm.steps";
import { QuoteFormApplicationEmptyFieldName } from "../steps-ENG/QuoteForm.steps";
import { QuoteFormApplicationEmptyFieldEmail } from "../steps-ENG/QuoteForm.steps";
import { QuoteFormApplicationIncorrectData } from "../steps-ENG/QuoteForm.steps";

// import QuoteForm from "../../pages/QuoteForm";
 import * as QuoteForm from "../steps-ENG/QuoteForm.steps";

//import {QuoteFormApplicationSend, QuoteFormApplicationEmptyAllFields, QuoteFormApplicationEmptyFieldName, QuoteFormApplicationEmptyFieldEmail as QuoteForm}  from "../steps-ENG/QuoteForm.steps";

const QuoteFormEmptyAllFields = new QuoteFormApplicationEmptyAllFields();
const QuoteFormEmptyName = new QuoteFormApplicationEmptyFieldName();
const QuoteFormEmptyEmail = new QuoteFormApplicationEmptyFieldEmail();
const QuoteFormIncorrectData = new QuoteFormApplicationIncorrectData();

describe("Test case №71(2) - Check sending quote form-negative scenarios", () => {

    it('Check quote form for empty All fields - Test case №71(2)', () => {

        QuoteFormEmptyAllFields.sendQuoteFormWithEmptyFieldAll();

    })

    it('Check quote form for empty Field_Name - Test case №71(2)', () => {

        QuoteFormEmptyName.sendQuoteFormWithEmptyField_Name();

    })

    it('Check quote form for empty Field_Email - Test case №71(2)', () => {

        QuoteFormEmptyEmail.sendQuoteFormWithEmptyField_Email();

    })


    it('Check quote form for Incorrect  Email - Test case №71(2)', () => {

        QuoteFormIncorrectData.sendQuoteFormWithIncorrect_Email();

    })

    









})