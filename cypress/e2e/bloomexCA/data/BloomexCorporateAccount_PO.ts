class BloomexCorporateAccount_PO{

    getLinkReadClientTestimonials(){
        return cy.get('[align="left"]').contains('Read client testimonials');
    }

    getFieldFirstName() {
        return cy.get('[id="first_name"]')
    }

    getFieldLastName() {
        return cy.get('[id="last_name"]')
    }

    getFieldTitleName() {
        return cy.get('[id="title"]')
    }

    getFieldCompany(){
        return cy.get('[id="company"]')
    }

    getFieldPhone(){
        return cy.get('[id="phone"]')
    }

    getFieldCity(){
        return cy.get('[id="city"]')
    }

    getFieldState(){
        return cy.get('[name="state"]')
    }

    getFieldEmail(){
        return cy.get('[id="username"]')
    }

    getFieldPassword(){
        return cy.get('[id="password"]')
    }

    getButtonSendApplication(){
        return cy.get('[class="btn-success"]')
    }

    
}

export default new BloomexCorporateAccount_PO;