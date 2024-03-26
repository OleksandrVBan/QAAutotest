/// <reference types = "Cypress" />
import CheckoutAuthorization_PO from "../../pages/CheckoutAuthorization_PO"
import CheckoutFirstStep_PO from "../../pages/CheckoutFirstStep_PO"
import CheckoutSecondStep_PO from "../../pages/CheckoutSecondStep_PO"
import CheckoutThirdStep_PO from "../../pages/CheckoutThirdStep_PO"
import CartData from "cypress/e2e/bloomexCA/data/CartData"


interface form {
  firstName: string,
  lastName: string,
  phone: string,
  userEmail: string,
  googleAddress: string,
  streetNumber: string,
  streetName: string,
  city: string,
  zip: string,
  country: string,
  province: string
}

interface login {
  loginEmail: string,
  loginPassword: string
}

interface zip {
  zip: string
}

interface register {
  registerEmail: string,
  registerPassword: string,
  registerFirstname: string,
  registerPhone: string

}

interface SecondStepRedeemCredit {
  cityTown: string
}

interface SecondStepEnterCart {
  namecart: string,
  numbercart: string,
  ccscode: string,
  monthcart: string,
  yearcart: string,
}


class CheckoutFR {

  AuthorizationFR(obj: login) {
    CheckoutAuthorization_PO.getButtonEmailLogin().type(obj.loginEmail)
    CheckoutAuthorization_PO.getButtonPasswordLogin().type(obj.loginPassword)
    CheckoutAuthorization_PO.getButtonSeconnecter().click()
  }

  RegisterFR(obj: register) {
    CheckoutAuthorization_PO.getButtonEmailRegister().type(obj.registerEmail)
    CheckoutAuthorization_PO.getButtonPasswordRegister().type(obj.registerPassword)
    CheckoutAuthorization_PO.getButtonFirstNameRegister().type(obj.registerFirstname)
    CheckoutAuthorization_PO.getButtonCountryRegister().select('Canada').should('have.value', 'CAN')
    CheckoutAuthorization_PO.getButtonPhoneRegister().type(obj.registerPhone)
    CheckoutAuthorization_PO.getButtonInscription().click()
  }

  // 1 STEP

  fillFistStepFR(obj: form) {

    CheckoutFirstStep_PO.getFieldPrénom().clear().type(obj.firstName)
    CheckoutFirstStep_PO.getFieldNomDeFamille().clear().type(obj.lastName)
    CheckoutFirstStep_PO.getFieldTéléphone().clear().type(obj.phone)
    CheckoutFirstStep_PO.getFieldCourriel().clear().type(obj.userEmail)
    CheckoutFirstStep_PO.getFieldAddressAutocomplete().clear().type(obj.googleAddress)
    CheckoutFirstStep_PO.getFiledNuméroDerue().clear().type(obj.streetNumber)
    CheckoutFirstStep_PO.getFieldNomDeLaRue().clear().type(obj.streetName)
    CheckoutFirstStep_PO.getFieldVille().clear().type(obj.city)
    CheckoutFirstStep_PO.getFieldCodePostal().clear().type(obj.zip)
    CheckoutFirstStep_PO.getFieldPays().select(obj.country)
    CheckoutFirstStep_PO.getFiledEtatProvinceRégion().select(obj.province)
    CheckoutFirstStep_PO.getButtonL_ÉTAPESUIVANTE().click({ force: true })

  }

  // 2 STEP

  //choose postal code
  fillSecondStepZipFR(obj: zip) {
    CheckoutSecondStep_PO.getFieldCodePostal().type(obj.zip)
  }

  //choose data
  fillSecondStepchooseDataFR() {
    CheckoutSecondStep_PO.getButtonChoisirLaDate().click()
    CheckoutSecondStep_PO.getButtonFirstAccessDate().click()
  }

   //choose data with Morning Delivery
   fillSecondStepchooseDataMorningDeliveryFR(){
    cy.log('Start choosing data with Morning Delivery')
    CheckoutSecondStep_PO.getButtonChoisirLaDate().click({ force: true });
    CheckoutSecondStep_PO.getRadioButtonMorningDelivery().click({ force: true });
    CheckoutSecondStep_PO.getButtonFirstAccessDate().click({ force: true });
    cy.log('End choosing data with Morning Delivery')
  }

  //with choosing by city
  fillSecondStepChooseCityFR(obj: SecondStepRedeemCredit) {
    CheckoutSecondStep_PO.getFiledVilleDeLivraison().type(obj.cityTown)
    cy.wait(1000);
    cy.get('.pac-matched').contains(obj.cityTown).click({ force: true })
  }

  //by Redeem credit 
  fillSecondStepRedeemCredit() {
    CheckoutSecondStep_PO.getCheckboxCreditRemboursé().click()
  }

  //template for cart data
  fillSecondStepEnterRealCartFR(obj: SecondStepEnterCart) {
    CheckoutSecondStep_PO.getFieldNomSurLaCarte().type(obj.namecart)
    CheckoutSecondStep_PO.getFieldNuméroDeCarte().type(obj.numbercart)
    CheckoutSecondStep_PO.getDropDownMonth().select(obj.monthcart).should('have.value', obj.monthcart)
    CheckoutSecondStep_PO.getDropDownYear().select(obj.yearcart).should('have.value', obj.yearcart)
    CheckoutSecondStep_PO.getFieldCodeDeSécurite().type(obj.ccscode)
  }

  //by Cart
  fillSecondStepPayFromRealCartFR() {
    CartData.dataFillSecondStepEnterRealCartFR();
  }

  //check coupon
  checkSecondStep_ApplyingCouponeFR() {
    cy.log('Start fill in Coupone FR')
    CheckoutSecondStep_PO.getButtonIci().click()
    CheckoutSecondStep_PO.getFieldCouponCodeFR().type('TTV')//10%
    CheckoutSecondStep_PO.getButtonAPPLIQUER().click();
    cy.get('.result').should('contain',"Votre coupon a été appliqué. La remise est 10.00%.");
    cy.get('.basket_coupon').find('[class="title"]').should('have.text', "Remise de coupon:");
    cy.log('End fill in Coupone FR')

  }

  checkSecondStep_OrderPriceDetailCouponeFR() {
    cy.log('Start check Coupone in order details FR');
    cy.get('[class="coupon_discount"]').find('[class="price"]').should('contain',"-$1.00").should('be.visible');
    cy.get('[class="coupon_discount"]').find('[class="title"]').should('contain', 'Remise de coupon').should('be.visible');
    cy.log('Start check Coupone in order details FR');
  }


 /////////////////////////////////////need rewew below


   fillSecond_Coupone_negativeFR() {
    cy.log('Start fill in Coupone (negative checks) FR')
    CheckoutSecondStep_PO.getButtonIci().click()

    CheckoutSecondStep_PO.getFieldCouponCode().type(' ').should('have.value', " ")
    CheckoutSecondStep_PO.getButtonAPPLIQUER().click()
    cy.get('.result').should('contain', "Désolé le coupon a expiré");

    CheckoutSecondStep_PO.getFieldCouponCode().clear().type('123').should('have.value', "123")
    CheckoutSecondStep_PO.getButtonAPPLIQUER().click()
    cy.get('.result').should('contain', "Le coupon n'existe pas ou a déjà été utilisé.");

    cy.log('End fill in Coupone (negative checks) FR')

  }
 /////////////////////////////////////


  // 3 Step: Informations de livraison / FR Version

  fillThirdStepFR(obj: form) {
    CheckoutThirdStep_PO.getFieldPrénom().clear().type(obj.firstName)
    CheckoutThirdStep_PO.getFieldNomDeFamille().clear().type(obj.lastName)
    CheckoutThirdStep_PO.getFieldTéléphone().clear().type(obj.phone)
    CheckoutThirdStep_PO.getFieldCourriel().clear().type(obj.userEmail)
    CheckoutThirdStep_PO.getFieldAddressAutocomplete().clear().type(obj.googleAddress)

    // CheckoutThirdStep_PO.getRadioButtonSearchAddress().clear().type(obj.)
    // CheckoutThirdStep_PO.getRadioButtonSearchOrganization().clear().type(obj.)

    CheckoutThirdStep_PO.getFieldNuméroDeRue().clear().type(obj.streetNumber)
    CheckoutThirdStep_PO.getFieldNomDelaRue().clear().type(obj.streetName)
    CheckoutThirdStep_PO.getFieldVille().clear().type(obj.city)
    CheckoutThirdStep_PO.getFieldCodePostal().clear().type(obj.zip)
    // CheckoutThirdStep_PO.getDropDownlistEtatProvinceRégion().clear().type(obj.province)
    // CheckoutThirdStep_PO.getFieldPays().select(obj.country)
  }

  fillThirdStepOccasionAnd3fielsFR() {
    CheckoutThirdStep_PO.getDropDownlistOccasion().select('Juste parce que')
    CheckoutThirdStep_PO.getFieldMessagePersonnel().type('TestingPersonalGreeting')
    CheckoutThirdStep_PO.getFieldSignature().type('TestSignature')
    CheckoutThirdStep_PO.getFieldInformationsDelivraison().type('TEST!!! This order was made for testing purposes. Please ignore this order.')
  }

  CompleteOrderFR() {
    CheckoutThirdStep_PO.getButtonCOMPLÉTEZLACOMMANDE().click({ force: true })
  }



}

export default new CheckoutFR;