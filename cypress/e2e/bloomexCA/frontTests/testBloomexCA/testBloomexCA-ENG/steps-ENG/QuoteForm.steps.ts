/// <reference types = "Cypress" />
// import { defaults } from 'cypress/types/lodash';
import HomePage_PO from '../../pages/Homepage_PO'
import QuoteForm from "../../pages/QuoteForm";


class QuoteFormApplicationSend {

  sendQuoteFormWithCorrectData_withOnlyRequertFileds() {
    HomePage_PO.getButtonCorporate_QuoteRequestForm().click({ force: true });
    QuoteForm.getFieldName().type("Test Name")
    QuoteForm.getFieldEmail().type('autotestscypress@gmail.com')
    QuoteForm.getFieldPhone().type('1234567891')
    QuoteForm.getFieldState().select('Yukon')
    QuoteForm.getButtonSendQuoteRequest().click();
    cy.pause();
    QuoteForm.getAlertMessage().should('contain', 'Thank you - Your quote request has been successfully submitted. A Corporate Account Manager will get back to you shortly')
  }
  
  sendQuoteFormWithFillingAllFields() {
    HomePage_PO.getButtonCorporate_QuoteRequestForm().click({ force: true });
    QuoteForm.getFieldName().type("Test-Nam'e Check-Max_Char, /@!#$%^&*()+=40")
      .should("have.value", "Test-Nam'e Check-Max_Char, /@!#$%^&*()+=");  //40 character max
    QuoteForm.getFieldEmail().type('autotestscypress12345678901234@gmail.com0') //incorrect
      .should("have.value", "autotestscypress12345678901234@gmail.com"); //max
    QuoteForm.getFieldPhone().type('12345678910')
      .should("have.value", "1234567891"); //max
    QuoteForm.getNumberOfGiftsBaskets().type('Test1Number')
      .should("have.value", "Test1Numbe"); //max
    QuoteForm.getEstimatedBudget().type('Test 123456')
      .should("have.value", "Test 12345"); //max
    QuoteForm.getApproximatelyDeliveryDate().click()
    QuoteForm.getDateApproximatelyDeliveryDate().click();
    QuoteForm.getFieldState().select('Yukon')
      .should("have.value", "Yukon");
    QuoteForm.getProductDescription().type('Auto Testing!!! Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.')
      //370 symbols, but can more... did not noted limit
    .should("have.value", "Auto Testing!!! Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network or may also be sent via satellite or Internet connection.");
    QuoteForm.getButtonSendQuoteRequest().click();
    cy.pause();
    QuoteForm.getAlertMessage().should('contain', 'Thank you - Your quote request has been successfully submitted. A Corporate Account Manager will get back to you shortly')
  }

}

class QuoteFormApplicationEmptyAllFields {

  sendQuoteFormWithEmptyFieldAll() {

    //Empty All Fields
    cy.log('Start Check massege with Empty All Fields')
    HomePage_PO.getButtonCorporate_QuoteRequestForm().click({ force: true });
    QuoteForm.getButtonSendQuoteRequest().click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Please enter your full name.');
    })

    cy.log('END Check Empty All Fields')

  }
}



class QuoteFormApplicationEmptyFieldName {

  //empty Name field
  sendQuoteFormWithEmptyField_Name() {
    HomePage_PO.getButtonCorporate_QuoteRequestForm().click({ force: true });
    cy.log('Start Check message for empty Name field')

    QuoteForm.getFieldName().clear();
    QuoteForm.getFieldEmail().type('autotestscypress@gmail.com');
    QuoteForm.getFieldPhone().type('0000000000');
    QuoteForm.getNumberOfGiftsBaskets().type('Test1Number');
    QuoteForm.getEstimatedBudget().type('Test 50');
    QuoteForm.getApproximatelyDeliveryDate().click();
    QuoteForm.getDateApproximatelyDeliveryDate().click();
    QuoteForm.getFieldState().select('Yukon');
    QuoteForm.getProductDescription().type('Test Quote Form Application');
    QuoteForm.getButtonSendQuoteRequest().click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Please enter your full name.');
    })
   cy.log('ENG Check message for empty Name field');

  }

}

class QuoteFormApplicationEmptyFieldEmail {

  sendQuoteFormWithEmptyField_Email() {
    HomePage_PO.getButtonCorporate_QuoteRequestForm().click({ force: true });
    //empty Email field
    cy.log('Start Check message for empty Email field')

    QuoteForm.getFieldName().type('Test Name');
    QuoteForm.getFieldEmail().clear().type('autotestscypress@gmail.com');
    QuoteForm.getFieldPhone().type('0000000000');
    QuoteForm.getNumberOfGiftsBaskets().type('Test1Number');
    QuoteForm.getEstimatedBudget().type('Test 50');
    QuoteForm.getApproximatelyDeliveryDate().click();
    QuoteForm.getDateApproximatelyDeliveryDate().click();
    QuoteForm.getFieldState().select('Yukon');
    QuoteForm.getProductDescription().type('Test Quote Form Application');
    QuoteForm.getButtonSendQuoteRequest().click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Please enter your email address.');
    })

    //  it('Confirm', function() {
    //     cy.contains('Please enter your email address.').click()
    //  }) 
    //   cy.on('window:confirm', () => true) 
    cy.log('ENG Check message for empty Email field');

  }

}

// BUG 15463 - waiting fix
// class QuoteFormApplicationEmptyFieldPhone{
//   sendQuoteFormWithEmptyField_Phone() {

//   HomePage_PO.getButtonCorporate_QuoteRequestForm().click({force: true});
//   //empty Email field
//   cy.log('Start Check message for empty Phone field')

//   QuoteForm.getFieldName().type('Test Phone');
//   QuoteForm.getFieldEmail().type('autotestscypress@gmail.com');

//   QuoteForm.getNumberOfGiftsBaskets().type('Test1Number');
//   QuoteForm.getEstimatedBudget().type('Test 50');
//   QuoteForm.getApproximatelyDeliveryDate().click();
//   QuoteForm.getDateApproximatelyDeliveryDate().click();
//   QuoteForm.getFieldState().select('Yukon');
//   QuoteForm.getProductDescription().type('Test Quote Form Application');
//   QuoteForm.getButtonSendQuoteRequest().click();

//   cy.on ('window:alert', (text) => {       
//       expect(text).to.equal('Please enter your  ....');
//     })

//   cy.log('ENG Check message for empty Phone field');

// }


class QuoteFormApplicationIncorrectData {

  sendQuoteFormWithIncorrect_Email() {
    HomePage_PO.getButtonCorporate_QuoteRequestForm().click({ force: true });
    cy.log('Start checking incorrect email message and max email characters')
    QuoteForm.getFieldName().type('Test Name');
    QuoteForm.getFieldEmail().type('autotestscypressgmail.com0')
    QuoteForm.getFieldPhone().type('0000000000');
    QuoteForm.getNumberOfGiftsBaskets().type('Test1Number');
    QuoteForm.getEstimatedBudget().type('Test 50');
    QuoteForm.getApproximatelyDeliveryDate().click();
    QuoteForm.getDateApproximatelyDeliveryDate().click();
    QuoteForm.getFieldState().select('Yukon');
    QuoteForm.getProductDescription().type('Test Quote Form Application');
    QuoteForm.getButtonSendQuoteRequest().click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Your email address is incorrect.');
    })

    QuoteForm.getFieldEmail().clear().type('autotestscypress@gmailcom'); //incorrect
    QuoteForm.getButtonSendQuoteRequest().click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Your email address is incorrect.');
    })

    QuoteForm.getFieldEmail().clear().type('autotestscypress @gmail.com'); //incorrect 
    QuoteForm.getButtonSendQuoteRequest().click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Your email address is incorrect.');
    })

    cy.log('END checking incorrect email message and max email characters')
  }



}



export { QuoteFormApplicationSend, QuoteFormApplicationEmptyAllFields, QuoteFormApplicationEmptyFieldName, QuoteFormApplicationEmptyFieldEmail, QuoteFormApplicationIncorrectData };


