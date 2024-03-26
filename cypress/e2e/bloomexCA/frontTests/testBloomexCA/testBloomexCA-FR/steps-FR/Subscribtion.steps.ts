import Homepage_PO from '../../pages/Homepage_PO'

class SubscriptionEmail {

  subscriptionForEmail() {
    Homepage_PO.getFieldSOUSCRIRE().type("artletuchy@yahoo.com");
    Homepage_PO.getButtonSOUSCRIRE().click();
    cy.get('[id="success-alert-subscribe"]').should('contain', 'MERCI DE VOUS ABONNER AUX OFFRES SPÉCIALES');
    cy.get('[id="success-alert-subscribe"]').should('be.visible');
  }

}

//при подписке вылазит сообщение на английском

export default new SubscriptionEmail;