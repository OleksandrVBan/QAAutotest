import CheckoutStepsFR from "../frontTests/testBloomexCA/testBloomexCA-FR/steps-FR/Checkout.stepsFR";
import CheckoutSteps from "../frontTests/testBloomexCA/testBloomexCA-ENG/steps-ENG/Checkout.steps";
class CartData {

  dataFillSecondStepEnterRealCartFR(){
    cy.log('Start filling cart info')
    CheckoutStepsFR.fillSecondStepEnterRealCartFR({
      namecart: 'Test',
      numbercart: '4545454545454545',
      ccscode: '111',
      monthcart: '01',
      yearcart: '2025',

    });
    cy.log('End filling cart info')
  }

  dataFillSecondStepEnterRealCartENG(){
    cy.log('Start filling cart info')
      CheckoutSteps.fillSecondStepEnterRealCart({
        namecart: 'Test',
        numbercart: '4545454545454545',
        ccscode: '111',
        monthcart: '01',
        yearcart: '2025',

      });
      cy.log('End filling cart info') 
    }

    // cart with incorrect data for negative testcase (035-3)

    dataFillSecondStepEnterRealCart_incorrectNumberCart(){
      cy.log('Start error #1 with incorrect numbercart')
      CheckoutSteps.fillSecondStepEnterRealCart({
  
        namecart: 'Test',
        numbercart: '4545454545454540', //incorrect
        ccscode: '111',
        monthcart: '01',
        yearcart: '2025',
  
      });
    }

    dataFillSecondStepEnterRealCart_incorrectCCScode(){
      cy.log('Start error #2 incorrect ccscode')
      CheckoutSteps.fillSecondStepEnterRealCart({
        namecart: 'Test',
        numbercart: '4545454545454545',
        ccscode: '110', //incorrect
        monthcart: '01',
        yearcart: '2025',
  
      });
  
    }

    dataFillSecondStepEnterRealCart_incorrectMonth(){
    cy.log('Start error #3 incorrect monthcart')
    CheckoutSteps.fillSecondStepEnterRealCart({
      namecart: 'Test',
      numbercart: '4545454545454545',
      ccscode: '111',
      monthcart: '08', //incorrect
      yearcart: '2025',

    });

  }

    dataFillSecondStepEnterRealCart_incorrectYear(){
    cy.log('Start error #4 incorrect yearcart')
    CheckoutSteps.fillSecondStepEnterRealCart({
      namecart: 'Test',
      numbercart: '4545454545454545',
      ccscode: '111',
      monthcart: '01',
      yearcart: '2027', //incorrect

    });
    
  }
}

export default new CartData;