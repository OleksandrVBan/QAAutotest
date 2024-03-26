import HomePage_PO from '../../pages/Homepage_PO';
import ProductPage_PO from '../../pages/ProductPage_PO';


class ProductAttributesPDP {
    checkAttributes(selector:string, attributeName:string) {
        HomePage_PO.getContainerPDPProducts().each((element,index) => {
            cy.wrap(element).within(() => {
                cy.get(selector).should('be.visible').as(attributeName);
                
                if (selector === 'h1') {
                    // const equivalentValue = index + 1;
                
                    
                    cy.get(selector).should('have.css', 'font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '25px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(164, 0, 1)');
                }
                else if (selector === '[class="scu"]') {
                    cy.get(selector).should('exist')
                    
                }
                else if (selector === '[class="old_price"]') {
                    
                    cy.get(selector).invoke('text').then(text => {
                        expect(text).to.match(/\d+/); 
                    });
                    cy.get(selector).should('have.css','font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '16px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(214, 13, 30)');
                }
                else if (selector === '[class="save_price"]') {
                    cy.get(selector).invoke('text').then(text => {
                        expect(text).to.match(/\d+/); 
                    });
                    cy.get(selector).should('have.css','font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '18px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(0, 0, 0)');
                }
                else if (selector === '[class="new_price"]') {
                    cy.get(selector).invoke('text').then(text => {
                        expect(text).to.match(/\d+/); 
                    });
                    cy.get(selector).should('have.css','font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '16px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(214, 13, 30)');
                }
          
                else if (selector === '[class="description"]') {
                    cy.get(selector).should('exist')
                    cy.get(selector).should('have.css','font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '14px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(0, 0, 0)');
                }

                else if (selector === '#bouquet_info_icon') {
                   
                    ProductPage_PO.getButtonInfoIcon().click();

                    cy.get('#bouquet-info-alert').should('be.visible');
                    cy.get('.close').click();

                }

                
                
            });
        });
    }

    checkProductsAttributesOnLandingPage() {
        
        // Title, scu, price, stars
        this.checkAttributes('h1', 'title');
        this.checkAttributes('[class="stars"]', 'review');
        this.checkAttributes('[class="sku"]', 'review');
        this.checkAttributes('[class="old_price"]', 'old price');
        this.checkAttributes('[class="save_price"]', 'save price');
        this.checkAttributes('[class="new_price"]', 'new price title');
        this.checkAttributes('[class="description"]', 'text');

    

        //Glitch, Product size
        this.checkAttributes('#bouquet_info_icon', 'info icon');

        cy.log('Start Deluxe')
        ProductPage_PO.getCheckboxSelectSizeDeluxe();
        cy.log('End Deluxe')

        cy.log('Start Supersize')
        ProductPage_PO.getCheckboxSelectSizeSupersize();
        cy.log('End Supersize')

        cy.log('Start Regular')
        ProductPage_PO.getCheckboxSelectRegular();
        cy.log('End Regular')

        
        // Extra touch


        cy.log('Start Check Extra Touch')
        cy.log('Start GreetingCards')
        ProductPage_PO.searchAndClickExtraTouchGreetingCards();
        cy.log('End GreetingCards')

        cy.log('Start GlassVases')
        ProductPage_PO.searchAndClickExtraTouchGlassVases();
        cy.log('End GlassVases')

        cy.log('Start TeddyBeer')
        ProductPage_PO.searchAndClickExtraTouchTeddyBeer();
        cy.log('End TeddyBeer')

        cy.log('Start GourmetTreats')
        ProductPage_PO.searchAndClickExtraTouchGourmetTreats();
        cy.log('End GourmetTreats')

        cy.log('Start TouchBalloons')
        ProductPage_PO.searchAndClickExtraTouchBalloons();
        cy.log('End TouchBalloons')

        cy.log('Start WinesAndBeers')
        ProductPage_PO.searchAndClickExtraTouchWinesAndBeers();
        cy.log('End WinesAndBeers')

        cy.log('Start SpecialTouch')
        ProductPage_PO.searchAndClickExtraTouchSpecialTouch();
        cy.log('Start SpecialTouch')

        cy.log('End Check Extra Touch')


        //Check Button Add to card

        cy.log('Start Check Add to cart button')
        ProductPage_PO.getButtonAjouterAuPanier().should('be.visible').should('not.have.attr', 'disabled')
        cy.log('End Check Add to cart button')


       

        
        
        
        
    }
}

export default new ProductAttributesPDP;
