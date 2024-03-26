import ProductAttributesPDPFullSteps from "../steps-ENG/ProductAttributesPDP.steps";
import { SearchAnyProduct } from "../steps-ENG/SearchAnyProduct.steps";
import SelectProductSteps from "../steps-ENG/SelectProduct.steps";

const search = new SearchAnyProduct

describe("Test case №3 Check Product Attributes on PDP ", () => {

    it('Check Product Attributes on PDP  - Test case №018', () => {

        cy.log('Start the Check product attributes on PDP');
       

        SelectProductSteps
        .openProduct20xBulkSunflowers();
        //.openProductSuperSnapdragons() 
        //openProductPageSingleRose();
        

        ProductAttributesPDPFullSteps.checkProductsAttributesOnLandingPage();
        

        cy.log('END the Check product attributes on PDP');
    })

})