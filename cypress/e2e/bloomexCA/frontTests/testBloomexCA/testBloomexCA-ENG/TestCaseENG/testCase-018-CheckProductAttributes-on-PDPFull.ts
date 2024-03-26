import ProductAttributesPDPFullSteps from "../steps-ENG/ProductAttributesPDPFull.steps";
import SelectProductSteps from "../steps-ENG/SelectProduct.steps";



describe("Test case №3 Check Product Attributes on PDP ", () => {

    it('Check Product Attributes on PDP  - Test case №018', () => {

        cy.log('Start the Check product attributes on PDP');
       

        SelectProductSteps.openProductPageSingleRose();
        

        ProductAttributesPDPFullSteps.checkProductsAttributesOnLandingPage();
        ProductAttributesPDPFullSteps.CheckNewExtraTouch();
       

        cy.log('END the Check product attributes on PDP');
    })

})

//div[@class='wrapper']//span[@class='checkmark']