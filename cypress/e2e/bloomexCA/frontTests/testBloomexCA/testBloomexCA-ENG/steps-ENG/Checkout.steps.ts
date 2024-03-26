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


class Checkout {

  Authorization(obj: login) {
    CheckoutAuthorization_PO.getButtonEmailLogin().type(obj.loginEmail)
    CheckoutAuthorization_PO.getButtonPasswordLogin().type(obj.loginPassword)
    CheckoutAuthorization_PO.getButtonSubmitLogin().click()
  }

  Register(obj: register) {
    CheckoutAuthorization_PO.getButtonEmailRegister().type(obj.registerEmail)
    CheckoutAuthorization_PO.getButtonPasswordRegister().type(obj.registerPassword)
    CheckoutAuthorization_PO.getButtonFirstNameRegister().type(obj.registerFirstname)
    CheckoutAuthorization_PO.getButtonCountryRegister().select('Canada').should('have.value', 'CAN')
    CheckoutAuthorization_PO.getButtonPhoneRegister().type(obj.registerPhone)
    CheckoutAuthorization_PO.getButtonSubmitRegister().click()
  }

  fillFistStep(obj: form) {

    CheckoutFirstStep_PO.getButtonFirstName().clear().type(obj.firstName)
    CheckoutFirstStep_PO.getButtonLastName().clear().type(obj.lastName)
    CheckoutFirstStep_PO.getButtonPhone().clear().type(obj.phone)
    CheckoutFirstStep_PO.getButtonEmail().clear().type(obj.userEmail)
    CheckoutFirstStep_PO.getButtonGoogleAddress().clear().type(obj.googleAddress)
    CheckoutFirstStep_PO.getButtonStreetNumber().clear().type(obj.streetNumber)
    CheckoutFirstStep_PO.getButtonStreetName().clear().type(obj.streetName)
    CheckoutFirstStep_PO.getButtonCity().clear().type(obj.city)
    CheckoutFirstStep_PO.getButtonPostalCode().clear().type(obj.zip)
    CheckoutFirstStep_PO.getButtonCountry().select(obj.country)
    CheckoutFirstStep_PO.getButtonProvince().select(obj.province)
    CheckoutFirstStep_PO.getButtonNextStep().click({ force: true })

  }

  // 2 STEP

  //choose postal code
  fillSecondStepZip(obj: zip) {
    CheckoutSecondStep_PO.getButtonPostalCode().type(obj.zip).click()
  }

  //choose data
  fillSecondStepchooseData(){
    cy.log('Start choosing data')
    CheckoutSecondStep_PO.getButtonSelectDeliveryDate().click({ force: true });
    CheckoutSecondStep_PO.getButtonChooseDate().click({ force: true });
    cy.log('End choosing data')
  }

   //choose data with Morning Delivery
   fillSecondStepchooseDataMorningDelivery(){
    cy.log('Start choosing data with Morning Delivery')
    CheckoutSecondStep_PO.getButtonSelectDeliveryDate().click({ force: true });
    CheckoutSecondStep_PO.getRadioButtonMorningDelivery().click({ force: true });
    CheckoutSecondStep_PO.getButtonFirstAccessDate().click({ force: true });
    cy.log('End choosing data with Morning Delivery')
  }

  //with choosing by city
  fillSecondStepCity(obj: SecondStepRedeemCredit) {
    CheckoutSecondStep_PO.getButtonDeliveryCityTown().type(obj.cityTown)
    cy.wait(1000);
    cy.get('.pac-matched').contains(obj.cityTown).click({ force: true })
  }

  //by Redeem credit 
  fillSecondStepRedeemCredit() {
    CheckoutSecondStep_PO.getButtonRedeemCredit().click()
}

   //template for cart data
   fillSecondStepEnterRealCart(obj: SecondStepEnterCart) {
    CheckoutSecondStep_PO.getButtonNameOnCard().clear().type(obj.namecart)
    CheckoutSecondStep_PO.getButtonCreditCardNumber().clear().type(obj.numbercart)
    CheckoutSecondStep_PO.getButtonCreditCardExpiryMonth().select(obj.monthcart).should('have.value', obj.monthcart)
    CheckoutSecondStep_PO.getButtonCreditCardExpiryYear().select(obj.yearcart).should('have.value', obj.yearcart)
    CheckoutSecondStep_PO.getButtonCreditCardSecurityCode().clear().type(obj.ccscode)
  }
 
  fillSecondStepPayFromRealCart() {
        CartData.dataFillSecondStepEnterRealCartENG();
    //  CheckoutSecondStep_PO.getButtonPay().click()
  }
 

  //check Coupone
  checkSecondStep_ApplyingCouponePercent(){
    cy.log('Start fill in Coupone');
    CheckoutSecondStep_PO.getLinkCoupon().click();
    CheckoutSecondStep_PO.getFieldCouponCode().type('Test20%')//20%
    CheckoutSecondStep_PO.getButtonApplyCoupon().click();
    cy.get('.result').should('contain',"Your coupon is applied. Discount is 20.00%.");
    cy.get('.basket_coupon').find('[class="title"]').should('have.text', "Coupon discount:");
    cy.log('End fill in Coupone');
  }

  checkSecondStep_OrderPriceDetailCouponePercent(){
    cy.log('Start check Coupone in order details');
    cy.get('[class="coupon_discount"]').find('[class="price"]').should('contain',"$2").should('be.visible');
    cy.get('[class="coupon_discount"]').find('[class="title"]').should('contain', 'Coupon discount').should('be.visible');
    cy.log('END check Coupone in order details');
  }

  checkSecondStep_ApplyingCouponeTotalValue(){
    cy.log('Start fill in Coupone');
    CheckoutSecondStep_PO.getLinkCoupon().click();
    CheckoutSecondStep_PO.getFieldCouponCode().type('Test20$')//20$
    CheckoutSecondStep_PO.getButtonApplyCoupon().click();
    cy.get('.result').should('contain',"Your coupon is applied. Discount is 20.00$.");
    cy.get('.basket_coupon').find('[class="title"]').should('have.text', "Coupon discount:");
    cy.log('End fill in Coupone');
  }

  checkSecondStep_OrderPriceDetailCouponeTotalValue(){
    cy.log('Start check Coupone in order details');
    cy.get('[class="coupon_discount"]').find('[class="price"]').should('contain',"-$14,99").should('be.visible');
    cy.get('[class="coupon_discount"]').find('[class="title"]').should('contain', 'Coupon discount').should('be.visible');
    cy.log('END check Coupone in order details');
  }

  //negative check coupon
  checkfillSecond_Coupone_negative(){
    cy.log('Start fill in Coupone (negative checks)');
    CheckoutSecondStep_PO.getLinkCoupon().click();
    CheckoutSecondStep_PO.getFieldCouponCode().type(' ');
    CheckoutSecondStep_PO.getButtonApplyCoupon().click();
   // cy.get('.result').should('contain', "Coupon does not exist or has already been used.");
    cy.get('.result').should('contain', "Sorry Coupon has expired");

    CheckoutSecondStep_PO.getFieldCouponCode().clear().type('123').should('have.value', "123");
    CheckoutSecondStep_PO.getButtonApplyCoupon().click();
    cy.get('.result').should('contain', "Coupon does not exist or has already been used.");

    cy.log('End fill in Coupone(negative checks)');
  }



  // 3 STEP

  fillThirdStep(obj: form) {
    CheckoutThirdStep_PO.getButtonFirstName().clear().type(obj.firstName)
    CheckoutThirdStep_PO.getButtonLastName().clear().type(obj.firstName)
    CheckoutThirdStep_PO.getButtonPhone().clear().type(obj.phone)
    CheckoutThirdStep_PO.getButtonEmail().clear().type(obj.userEmail)
    CheckoutThirdStep_PO.getButtonGoogleAddress().clear().type(obj.googleAddress)
    CheckoutThirdStep_PO.getButtonStreetNumber().clear().type(obj.streetNumber)
    CheckoutThirdStep_PO.getButtonStreetName().clear().type(obj.streetName)
    CheckoutThirdStep_PO.getButtonCity().clear().type(obj.city)
    CheckoutThirdStep_PO.getButtonPostalCode().clear().type(obj.zip)
    // CheckoutThirdStep_PO.getButtonProvince().clear().type(obj.province)
    // CheckoutThirdStep_PO.getButtonCountry().select(obj.country)

  }

  fillThirdStepOccasionAnd3fiels() {
    cy.log('Starting fillling Occason, PersonalGreeting, Signature, DeliveryInformation')
    CheckoutThirdStep_PO.getButtonOccason().select('Just Because').should('have.value', 'JB')
    CheckoutThirdStep_PO.getButtonPersonalGreeting().type('TestingPersonalGreeting')
    CheckoutThirdStep_PO.getButtonSignature().type('TestSignature')
    CheckoutThirdStep_PO.getButtonDeliveryInformation().type('TEST!!! This order was made for testing purposes. Please ignore this order.')
    cy.log('End fillling Occason, PersonalGreeting, Signature, DeliveryInformation')
  }

  CompleteOrder() {
    CheckoutThirdStep_PO.getButtonCompleteOrder().click({ force: true })
  }

}

export default new Checkout;
