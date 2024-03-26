class CheckoutThirdStep_PO {
    getButtonFirstName() {
        return cy.get('#shipping_info_first_name')
    }

    getButtonLastName() {
        return cy.get('#shipping_info_last_name')
    }

    getButtonPhone() {
        return cy.get('#shipping_info_phone_1')
    }

    getButtonEmail() {
        return cy.get('#shipping_info_user_email')
    }

    getButtonGoogleAddress() {
        return cy.get('#googleaddressupdate_shipping')
    }

    getButtonCompany() {
        return cy.get('#shipping_info_company')
    }

    getButtonSuite() {
        return cy.get('#shipping_info_suite')
    }

    getButtonStreetNumber() {
        return cy.get('#shipping_info_street_number')
    }

    getButtonStreetName() {
        return cy.get('#shipping_info_street_name')
    }

    getButtonCity() {
        return cy.get('#shipping_info_city')
    }

    getButtonPostalCode() {
        return cy.get('#shipping_info_zip')
    }

    getButtonProvince() {
        return cy.get('.form-group').contains('Province').find('input[name="shipping_info_state"]')
    }

    getButtonCountry() {
        return cy.get('.form-group').contains('Country').find('input[name="shipping_info_country"]')
    }

    getButtonOccason() {
        return cy.get('#customer_occasion')
    }

    getButtonPersonalGreeting() {
        return cy.get('#card_msg')
    }

    getButtonSignature() {
        return cy.get('#signature')
    }

    getButtonDeliveryInformation() {
        return cy.get('#card_comment')
    }

    getButtonCompleteOrder() {
        return cy.get('button[type="submit"]').contains('COMPLETE ORDER')
    }

    // 3 Step: Informations de livraison / FR VERSION

    getFieldPrénom() {
        return cy.get('#shipping_info_first_name')
    }

    getFieldNomDeFamille() {
        return cy.get('#shipping_info_last_name')
    }

    getFieldTéléphone() {
        return cy.get('#shipping_info_phone_1')
    }

    getFieldCourriel() {
        return cy.get('#shipping_info_user_email')
    }

    getRadioButtonSearchAddress() {
        return cy.get('#autocomplete_address_button')
    }

    getRadioButtonSearchOrganization() {
        return cy.get('#autocomplete_company_button')
    }

    getFieldAddressAutocomplete() {
        return cy.get('#googleaddressupdate_shipping')
    }

    getFieldSociété() {
        return cy.get('#shipping_info_company')
    }

    getFieldSuiteApt() {
        return cy.get('#shipping_info_suite')
    }

    getFieldNuméroDeRue() {
        return cy.get('#shipping_info_street_number')
    }

    getFieldNomDelaRue() {
        return cy.get('#shipping_info_street_name')
    }

    getFieldVille() {
        return cy.get('#shipping_info_city')
    }

    getFieldCodePostal() {
        return cy.get('#shipping_info_zip')
    }

    getDropDownlistEtatProvinceRégion() {
        return cy.get('.form-group').contains('Province').find('input[name="shipping_info_state"]')
    }

    getFieldPays() {
        return cy.get('.form-group').contains('Country').find('input[name="shipping_info_country"]')
    }

    getDropDownlistOccasion() {
        return cy.get('#customer_occasion')
    }

    getFieldMessagePersonnel() {
        return cy.get('#card_msg')
    }

    getFieldSignature() {
        return cy.get('#signature')
    }

    getFieldInformationsDelivraison() {
        return cy.get('#card_comment')
    }

    getButtonCOMPLÉTEZLACOMMANDE() {
        return cy.get('button[type="submit"]').contains('COMPLÉTEZ LA COMMANDE')
    }

}

export default new CheckoutThirdStep_PO;
