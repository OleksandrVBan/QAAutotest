import HomePage_PO from '../../pages/Homepage_PO';



export class SearchAnyProduct {


    // Example (.selectProductBySKU('Classic Collection III Gift Basket','GBB72-71'))
    selectProductBySKU(productName: string, sku: string) {
        HomePage_PO.getSearchField().type(sku)
        HomePage_PO.getSearchButton().click();
        cy.contains(productName)
        .should('exist')
        .should('be.visible')
        .click();
        cy.get('[itemprop="sku"]').contains(sku)
        .should('exist')
        .should('be.visible')
        

        return this
    }

    // Example (.selectProductBySKU('Classic Collection III Gift Basket'))
    selectProductByName(productName: string) {
        HomePage_PO.getSearchField().type(productName)
        HomePage_PO.getSearchButton().click();
        cy.contains(productName)
        .should('exist')
        .should('be.visible')
        .click();

        return this
    }

    



}