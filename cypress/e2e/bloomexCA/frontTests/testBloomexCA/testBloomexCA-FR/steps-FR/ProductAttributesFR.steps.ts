import HomePage_PO from '../../pages/Homepage_PO';


class ProductAttributesFR {
    checkAttributes(selector:string, attributeName:string) {
        HomePage_PO.getContainerProducts().each((element,index) => {
            cy.wrap(element).within(() => {
                cy.get(selector).should('be.visible').as(attributeName);
                
                if (selector === '[class="product-title"]') {
                    // const equivalentValue = index + 1;
                    
                    cy.get(selector).should('have.css', 'font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '14px');
                }
                else if (selector === '[class="old_price_list"]') {
                    cy.get(selector).should('have.css','font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '16px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(214, 13, 30)');
                }
                else if (selector === '[class="real_price_list"]') {
                    cy.get(selector).should('have.css','font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '18px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(0, 0, 0)');
                }
                else if (selector === '[class="old_product_list"]') {
                    cy.get(selector).should('contain','Comparer à:')
                    cy.get(selector).should('have.css','font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '16px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(0, 0, 0)');
                }
                else if (selector === '[class="old_product_list"]') {
                    cy.get(selector).should('contain','Prix Bloomex:')
                    cy.get(selector).should('have.css','font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '16px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(0, 0, 0)');
                }
                
            });
        });
    }

    checkProductsAttributesOnLandingPage() {
        
        this.checkAttributes('a', 'images');
        this.checkAttributes('[class="product-title"]', 'title');
        this.checkAttributes('[class="old_price_list"]', 'old price');
        this.checkAttributes('[class="real_price_list"]', 'price');
        this.checkAttributes('[class="old_product_list"]', 'old price title');
        this.checkAttributes('[class="old_product_list"]', 'price tile');
        this.checkAttributes('[class="add"]', 'button');
        this.checkAttributes('[class="stars"]', 'review');
        
        
    }
}

export default new ProductAttributesFR;