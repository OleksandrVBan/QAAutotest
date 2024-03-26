/// <reference types = "Cypress" />
import HomePage_PO from '../../pages/Homepage_PO'
import QuoteForm from "../../pages/QuoteForm";


class QuoteFormApplication {

sendQuoteFormWithCorrectData(){
    HomePage_PO.getButtonEntreprise_FormulaireDeDemandeDeDevis().click({force: true});
    QuoteForm.getFieldName().type('Test Name');
    QuoteForm.getFieldEmail().type('autotestscypress@gmail.com');
    QuoteForm.getFieldPhone().type('0000000000');
    QuoteForm.getNumberOfGiftsBaskets().type('Test1Number');
    QuoteForm.getEstimatedBudget().type('Test 50');
    QuoteForm.getApproximatelyDeliveryDate().click();
    QuoteForm.getDateApproximatelyDeliveryDate().click();
    QuoteForm.getFieldState().select('Yukon').should('contain', 'Yukon');
    QuoteForm.getProductDescription().type('Test Quote Form Application');
    QuoteForm.getButtonSendQuoteRequest().click();
    cy.pause();
    QuoteForm.getAlertMessage().should('contain','Thank you - Your quote request has been successfully submitted. A Corporate Account Manager will get back to you shortly')
  
}

endQuoteFormWithEmptyFields(){

    //Empty All Fields
    HomePage_PO.getButtonEntreprise_FormulaireDeDemandeDeDevis().click({force: true});

    //empty Name
   
    QuoteForm.getFieldName().type('Test Name');
    QuoteForm.getFieldEmail().type('autotestscypress@gmail.com');
    QuoteForm.getFieldPhone().type('0000000000');
    QuoteForm.getNumberOfGiftsBaskets().type('Test1Number');
    QuoteForm.getEstimatedBudget().type('Test 50');
    QuoteForm.getApproximatelyDeliveryDate().click();
    QuoteForm.getDateApproximatelyDeliveryDate().click();
    QuoteForm.getFieldState().select('Yukon').should('contain', 'Yukon');
    QuoteForm.getProductDescription().type('Test Quote Form Application');
    QuoteForm.getButtonSendQuoteRequest().click();
    cy.pause();

}

}

export default new QuoteFormApplication;