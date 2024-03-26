class CheckoutFirstStep_PO {

  getButtonFirstName() {
    return cy.get('#billing_info_first_name')
  }

  getButtonLastName() {
    return cy.get('#billing_info_last_name')
  }

  getButtonPhone() {
    return cy.get('#billing_info_phone_1')
  }

  getButtonEmail() {
    return cy.get('#billing_info_user_email')
  }

  getButtonGoogleAddress() {
    return cy.get('#googleaddressbilling_update')
  }

  getButtonStreetNumber() {
    return cy.get('#billing_info_street_number')
  }

  getButtonStreetName() {
    return cy.get('#billing_info_street_name')
  }

  getButtonCity() {
    return cy.get('#billing_info_city')
  }

  getButtonPostalCode() {
    return cy.get('#billing_info_zip')
  }

  getButtonCountry() {
    return cy.get('#billing_info_country')
  }

  getButtonProvince() {
    return cy.get('#billing_info_state')
  }

  getButtonNextStep() {
    return cy.get('[type="submit"]').contains('Next Step ')
  }

  //Fr version
  
  getFieldPrénom() {
    return cy.get('#billing_info_first_name')
  }

  getFieldNomDeFamille() {
    return cy.get('#billing_info_last_name')
  }

  getFieldTéléphone() {
    return cy.get('#billing_info_phone_1')
  }

  getFieldCourriel() {
    return cy.get('#billing_info_user_email')
  }

  getFieldAddressAutocomplete() {
    return cy.get('#googleaddressbilling_update')
  }

  getFiledNuméroDerue() {
    return cy.get('#billing_info_street_number')
  }

  getFieldNomDeLaRue() {
    return cy.get('#billing_info_street_name')
  }

  getFieldVille() {
    return cy.get('#billing_info_city')
  }

  getFieldCodePostal() {
    return cy.get('#billing_info_zip')
  }

  getFieldPays() {
    return cy.get('#billing_info_country')
  }

  getFiledEtatProvinceRégion() {
    return cy.get('#billing_info_state')
  }

  getButtonL_ÉTAPESUIVANTE() {
    return cy.get('[type="submit"]').contains("L'ÉTAPE SUIVANTE ")
  }


}

export default new CheckoutFirstStep_PO;