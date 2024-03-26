import HomePage_PO from '../../pages/Homepage_PO';
import '@shelex/cypress-allure-plugin';

class ContactUsFR {
    checkAttributesContactUs(selector:string, attributeName:string) {
        HomePage_PO.getButtonContactezNous().click()

        HomePage_PO.getContainerContactezNous().eq(4).each(element => {
            cy.wrap(element).within(() => {
                cy.get(selector).should('be.visible').as(attributeName);
                
                if (selector === '[class="subtitle"]') {
                    cy.get(selector).should('have.css', 'font-family').and('eq', 'roboto, sans-serif');
                    cy.get(selector).should('have.css', 'font-size').and('eq', '16px');
                    cy.get(selector).should('have.css', 'color').and('eq', 'rgb(153, 0, 0)');
                }

                //неактуальный пока что модуль
                //  else if (selector === '[class="contact_google_map"]') {
                //     cy.get(selector).should('have.css', 'background-image').and('eq', ' url(https://maps.googleapis.com/maps/api/staticmap?center=4235+17th+Street+SE%2C+T2G+3W7%2C+Canada&markers=color:purple|label:B|4235+17th+Street+SE%2C+T2G+3W7%2C+Canada&zoom=12&size=250x250&key=AIzaSyCI7r8q7Bh_rm-P_qQ2a2u_Kd8ivTtEet0&signature=AxQ5K3zi7LsswZDux6ykuRP0ggY=);');;
                    
                // }
                
                
            
                
            });
        });
    }

    checkContactUsPage() {
        cy.allure().step('Check Contact Us Page', true);

        this.checkAttributesContactUs('[class="subtitle"]', 'subtitle');
        this.checkAttributesContactUs('[class="contact_google_map"]', 'title');
        HomePage_PO.getContainerContactezNous().eq(3).within(() => {
            cy.get('[class="breadcrumb_active"]').should('contain', "contactez nous").should('be.visible');
        });
        
        cy.allure().endStep();
    }

    
}



export default new ContactUsFR;