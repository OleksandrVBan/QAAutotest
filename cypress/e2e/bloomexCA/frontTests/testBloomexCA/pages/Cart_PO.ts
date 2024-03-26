class Cart {
    getButtonProcedToCheckout() {
        return cy.get(".proceed").contains('Proceed to checkout')
    }

    getButtonprocedToCheckout() {
        return cy.get(".proceed").contains('proceed to checkout')
    }

    

    //FR version
    getButtonCOMMANDER() {
        return cy.get(".proceed").contains('COMMANDER')
    }

    getButtonPasserLaCaisse() {
        return cy.get(".proceed").contains('Passer à la caisse')
    }

    getButtonContinuerMagasiner() {
        return cy.get(".continue").contains('Continuer magasiner')
    }

    getButtonRemove() {
        return cy.get(".remove")
    }

    getButtonMinus() {
        return cy.get(".quantity").contains('-')
    }

    getButtonPlus() {
        return cy.get(".quantity").contains('+')
    }

   


}

export default new Cart;