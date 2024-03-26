import ProductAttributesFR from '../steps-FR/ProductAttributesFR.steps'
import HomePage_PO from '../../pages/Homepage_PO';
import SelectProductStepsFR from '../steps-FR/SelectProduct.stepsFR';
import ProductAttributesPDPFR from '../steps-FR/ProductAttributesPDPFRFull.steps';


describe("Test case №3 Check Product Attributes on PDP -FR", () => {

    it('Check Product Attributes on PDP  - Test case №018', () => {

        cy.log('Start the Check product attributes on PDP');
       

        HomePage_PO.getButtonLanguageChange().click()
        SelectProductStepsFR.openProductPageSingleRoseFR()

        ProductAttributesPDPFR.checkProductsAttributesOnLandingPage()

       

        cy.log('END the Check product attributes on PDP');
    })

})