/// <reference types = "Cypress" />

//GOOGLE BLOCK LOGIN BY AUTOMATION

describe('Google', function () {
  beforeEach(function () {
   // cy.task('db:seed')
    cy.loginByGoogleApi();
  })

  it('shows onboarding', function () {
    cy.contains('Get Started').should('be.visible')
  })
})

