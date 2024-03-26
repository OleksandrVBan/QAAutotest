/// <reference types = "Cypress" />
import Homepage_PO from '../../pages/Homepage_PO'

class SubscriptionEmail {

  subscriptionForEmail() {
    
    Homepage_PO.getFieldSubscribtion();
    cy.wait(2000);
  //  Homepage_PO.getCloseSubsriptionPopUp().click({ force: true });
    cy.reload()
    Homepage_PO.getFieldSubscribtion().type("qatesting87654@gmail.com");
    Homepage_PO.getButtonSubscribtion().click({ force: true });
    cy.get('[id="success-alert-subscribe"]').should('contain', 'THANK YOU FOR SUBSCRIBING TO SPECIAL OFFERS');
    cy.get('[id="success-alert-subscribe"]').should('be.visible');
  }

}

export default new SubscriptionEmail;

