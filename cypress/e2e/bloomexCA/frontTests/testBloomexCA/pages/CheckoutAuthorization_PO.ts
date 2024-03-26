class CheckoutAuthorization_PO {

  getButtonEmailLogin() {
    return cy.get('#username_login')
  }


  getButtonPasswordLogin() {
    return cy.get('#password_login')
  }

  getButtonSubmitLogin() {
    return cy.get('[type="submit"]').contains('Login')
  }

  //buttons for Сreating account

  getButtonEmailRegister() {
    return cy.get('#email')
  }

  getButtonPasswordRegister() {
    return cy.get('#password')
  }

  getButtonFirstNameRegister() {
    return cy.get('#first_name')
  }

  getButtonCountryRegister() {
    return cy.get('#country_billing')
  }

  getButtonPhoneRegister() {
    return cy.get('#phone_1')
  }

  getButtonSubmitRegister() {
    return cy.get('[type="button"]').contains('Register')
  }

 //Ниже указаны те кнопки который имеют отличие от канадской версии , в остальном все совпадает 

  getButtonSeconnecter() {
    return cy.get('[type="submit"]').contains('Se connecter')
  }

  getButtonInscription() {
    return cy.get('[type="button"]').contains('Inscription')
  }

  getButtonResetPassword() {
    return cy.get('#login').contains("Reset Password?")

  }
}



export default new CheckoutAuthorization_PO;
