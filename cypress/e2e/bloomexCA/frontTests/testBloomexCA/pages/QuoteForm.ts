class QuoteForm {

getFieldName() {
    return cy.get('[id="full_name"]')
}

getFieldEmail(){
    return cy.get('[id="email"]')
}

getFieldPhone(){
    return cy.get('[id="phone"]')
}

getNumberOfGiftsBaskets(){
    return cy.get('[id="number_of_gift_basket"]')
}

getEstimatedBudget(){
    return cy.get('[id="estimated_budget"]')
}

getApproximatelyDeliveryDate(){
    return cy.get('[id="delivery_date"]')
}

getDateApproximatelyDeliveryDate(){
    return cy.get('.ui-state-default').contains('28')
}

getFieldState(){
    return cy.get('[id="state"]')
}

getProductDescription(){
    return cy.get('[id="product_desc"]')
}

getButtonSendQuoteRequest(){
    return cy.get('.btn-success').contains('Send quote request')
}

getAlertMessage(){
    return cy.get('.alert')
}


}

export default new QuoteForm;