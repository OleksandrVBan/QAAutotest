class ProductPage {

    getButtonAddToCart() {
        return cy.get('.add').wait(1000).contains('Add to cart')
    }

    getButtonAjouterAuPanier() {
        return cy.get('#div_567').wait(5000).contains('Ajouter au panier')
    }

    getButtonOutOfSeason(){
        return cy.get('.add').contains('Out Of Season')
    }


    // Size 

    getCheckboxSelectRegular(){
        return cy.get(':nth-child(1) > .inner > .container > .checkmark')
       .click({ force: true })
   }

    getCheckboxSelectSizeDeluxe(){
        return cy.get('.tooltripHoverBox').find('.checkmark').eq(0)
        .click({ force: true })
    }

    getCheckboxSelectSizeSupersize(){
         return cy.get('.tooltripHoverBox').find('.checkmark').eq(1)
        .click({ force: true })
    }

    // Info Icon
    getButtonInfoIcon(){
        return cy.get('#bouquet_info_icon')
   }

   // Extra touch

   //new Extra touch FR
   searchAndClickExtraTouchGreetingCards() {

    cy.get('.fa-chevron-right').eq(0).click()
    cy.get('.product-title-extra')
    .siblings('.form-add-cart-extra')
    .find('.checkmark').eq(0)
    .click({ force: true })
    .click({ force: true })
    cy.get('.fa-chevron-down').eq(0).click()
   
    };

    searchAndClickExtraTouchGlassVases() {

        cy.get('.fa-chevron-right').eq(1).click()
        cy.get('.product-title-extra')
        .siblings('.form-add-cart-extra')
        .find('.checkmark').eq(5)
        .click({ force: true })
        .click({ force: true })
        cy.get('.fa-chevron-down').eq(0).click()
    };

    searchAndClickExtraTouchTeddyBeer() {

        cy.get('.fa-chevron-right').eq(2).click()
        cy.get('.product-title-extra')
        .siblings('.form-add-cart-extra')
        .find('.checkmark').eq(10)
        .click({ force: true })
        .click({ force: true })
        cy.get('.fa-chevron-down').eq(0).click()
    };

    searchAndClickExtraTouchGourmetTreats () {

        cy.get('.fa-chevron-right').eq(3).click()
        cy.get('.product-title-extra')
        .siblings('.form-add-cart-extra')
        .find('.checkmark').eq(15)
        .click({ force: true })
        .click({ force: true })
        cy.get('.fa-chevron-down').eq(0).click()
    };

    searchAndClickExtraTouchBalloons () {

        cy.get('.fa-chevron-right').eq(4).click()
        cy.get('.product-title-extra')
        .siblings('.form-add-cart-extra')
        .find('.checkmark').eq(20)
        .click({ force: true })
        .click({ force: true })
        cy.get('.fa-chevron-down').eq(0).click()
    };

    searchAndClickExtraTouchWinesAndBeers () {

        cy.get('.fa-chevron-right').eq(5).click()
        cy.get('.product-title-extra')
        .siblings('.form-add-cart-extra')
        .find('.checkmark').eq(23)
        .click({ force: true })
        .click({ force: true })
        cy.get('.fa-chevron-down').eq(0).click()
    };

    searchAndClickExtraTouchSpecialTouch () {

        cy.get('.fa-chevron-right').eq(6).click()
        cy.get('.product-title-extra')
        .siblings('.form-add-cart-extra')
        .find('.checkmark').eq(28)
        .click({ force: true })
        .click({ force: true })
        cy.get('.fa-chevron-down').eq(0).click()
    };


    //old Extra touch
    searchAndClickExtraTouchByTitle(stringTitle: string) {

        cy.get('.product-title-extra')
        .contains(stringTitle)
        .parent()
        .siblings('.form-add-cart-extra')
        .find('.checkmark')
        .click({ force: true })
       

    };

  
}

export default new ProductPage;

