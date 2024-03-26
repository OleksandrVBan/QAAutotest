class CheckoutSecondStep_PO {
    // Coupon code
    getLinkCoupon(){
        return cy.get('[href="#coupon"]')
    }

    getFieldCouponCode(){
        return cy.get('#coupon_code')
    }

    getButtonApplyCoupon(){
        return cy.get('#coupon_btn') 
    }



    getButtonRedeemCredit() {
        return cy.contains('Redeem Credit').find('[class="checkmark"]')
    }

    getButtonDeliveryCityTown() {
        return cy.get('[id ="googleaddressupdate_shipping"]')
    }

    getButtonPostalCode() {
        return cy.get('[id="zip"]')
    }

    
    getButtonSelectDeliveryDate() {
        return cy.get('[onclick="selectDeliveryDateLight()"]')
        
        
  
    }

    getRadioButtonMorningDelivery(){
        return cy.get('.radio_container').eq(1)
    }

    getButtonChooseDate() {
        return cy.get('.delivery_calendar')     
        .find(".ready").eq(0)
    }

    getButtonNameOnCard() {
        return cy.get('#name_on_card')
    }

    getButtonCreditCardNumber() {
        return cy.get('#card_number')
    }

    getButtonCreditCardSecurityCode() {
        return cy.get('#card_cvv')
    }

    getButtonCreditCardExpiryMonth() {
        return cy.get('#expire_month')
    }

    getButtonCreditCardExpiryYear() {
        return cy.get('#expire_year')
    }

    getButtonPay() {
        return cy.get('button[id="confirm"]').contains("Pay")
    }



    

    //Fr Version
    
    //Coupone code
    getButtonIci() {
        return cy.get('.hide_field').contains("ici")
    }

    getFieldCouponCodeFR(){
        return cy.get('#coupon_code')
    }

    getButtonAPPLIQUER() {
        return cy.get('#coupon_btn').contains("APPLIQUER")
    }

    // Checkboxses
    getCheckboxJeSuisIntéressé() {
        return cy.contains('Je suis intéressé à recevoir les promotions spéciales de Bloomex:').find('[class="checkmark"]')
    }

    getCheckboxÉchangezDesDollarsBloomex() {
        return cy.contains('Échangez des dollars Bloomex').find('[class="checkmark"]')
    }

    getCheckboxCreditRemboursé() {
        return cy.contains('Credit remboursé').find('[class="checkmark"]')
    }

    getCheckboxJeVoudrais() {
        return cy.contains('Je voudrais faire un don de').find('[class="checkmark"]')
    }

    //Postal cod block

    getFiledVilleDeLivraison() {
        return cy.get('#googleaddressupdate_shipping')
    }

    getFieldCodePostal() {
        return cy.get('#zip')
    }

    getFiledVille() {
        return cy.get('#city')
    }

    getFiledProvince() {
        return cy.get('#shipping_info_state')
    }

    getButtonChoisirLaDate() {
        return cy.get('[onclick="selectDeliveryDateLight()"]')
    }

    //Calendar block

    getButtonNext_month() {
        return cy.get('#next_month')
    }

    getButtonPre_month() {
        return cy.get('#pre_month')
    }

    getRadioButtonRégulier() {
        return cy.get('radio_container').contains(' - Résidentiel 9h - 20h | Affaires 9h - 17h')
    }

    getRadioButtonMorning() {
        return cy.get('radio_container').contains(' - Livraison le matin (9h - 12h)')
    }

    getButtonFirstAccessDate() {
        return cy.get('.delivery_calendar')
        .find(".ready").eq(0)
    }


    //Card Block

    getFieldNomSurLaCarte() {
        return cy.get('#name_on_card')
    }

    getFieldNuméroDeCarte() {
        return cy.get('#card_number')
    }

    getFieldCodeDeSécurite() {
        return cy.get('#card_cvv')
    }

    getDropDownMonth() {
        return cy.get('#expire_month')
    }

    getDropDownYear() {
        return cy.get('#expire_year')
    }

    getButtonPAY_GoToDelivery() {
        return cy.get('#confirm').contains("PAYER ET ALLER A LA LIVRAISON")
    }



}

export default new CheckoutSecondStep_PO;