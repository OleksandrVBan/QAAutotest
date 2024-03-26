class ProductListingUnder20 {

    //get any product
    getProduct(stringTitle: string) {

        return cy.get('.product-title').contains(stringTitle).should('exist').should('be.visible');

    };
    
    getproductTeddy() {
        return cy.get('.product-title').wait(1000).contains('Teddy Bear');
    }


    getproductSingleRose() {
        return cy.get('.product-title').wait(1000).contains('Single Rose');
    }

    //FR Version

    //Without Size
    getProductOursonEnPeluche() {
        return cy.get('.product-title').wait(1000).contains('Ourson en peluche');
    }

    // With Size
    getproductUneSeuleRoseFR() {
        return cy.get('.product-title').wait(1000).contains('Une seule rose');
    }


     // Sold_out (товар меняется от сезона к сезону , нужно выбирать актуальный на момент теста )

     getproductLesOmbresDeRoseFR() {
        return cy.get('.product-title').wait(1000).contains('Les ombres de rose');
    }

    


}

export default new ProductListingUnder20;