/// <reference types = "Cypress" />
import selectProduct from '../steps-ENG/SelectProduct.steps'
import Checkout from '../steps-ENG/Checkout.steps'
import addressData from '../../../../data/AddressData'
import AuthorizationCreds from '../../../../data/AuthorizationCreds'
import CheckoutSecondStep_PO from '../../pages/CheckoutSecondStep_PO'

// describe("Test orders on all warehouses", () => {

    /* Warehouse List
      - BC province:
      Vancouver +
    
      - Ontario province:
      Toronto
      Ottawa
      Cambridge
      Carleton Place
      Thunder Bay
      Trenton
      Fort Frances
      Sault Ste Marie
    
      - Québec province:
      Montreal
      Quebec-WH
      FleurConcept
    
      - Manitoba province:
      Winnipeg
    
      -Saskatchewan province:
      Prince Albert
      North Battleford
    
      - Alberta province:
      Edmonton
      Calgary
      RedDeer
    
      -Nova Scotia province:
      Halifax
    
      -New Brunswick province:
      Saint John
    
        */



//     it("Placing an order with Logged in user successfully-Vancouver", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Vancouver();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();


//         cy.pause();
//         cy.wait(2000);
//         addressData.ThirdStepAddress_Vancouver4();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-Toronto", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Toronto1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();
//         cy.wait(2000);
//         addressData.ThirdStepAddress_Toronto1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })


//     it("Placing an order with Logged in user successfully-Ottawa", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Ottawa1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();
//         cy.wait(2000);
//         addressData.ThirdStepAddress_Ottawa1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-Cambridge", () => {
//         cy.visit("/")
//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Cambridge1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_Cambridge1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-CarletonPlace", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_CarletonPlace1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_CarletonPlace1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-ThunderBay", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_ThunderBay1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_ThunderBay1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-Trenton", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Trenton1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_Trenton1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })


//     it("Placing an order with Logged in user successfully-FortFrances", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_FortFrances1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_FortFrances1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-Sault Ste Marie", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_SaultSteMarie1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_SaultSteMarie1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-Montreal", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Montreal1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();
//         cy.wait(2000);
//         addressData.ThirdStepAddress_Montreal1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     /* it("Placing an order with Logged in user successfully-Québec", () => {
      
//        selectProduct.chooseProduct();
//        AuthorizationCreds.login_autotestscypress();
//        cy.wait(100);
//        cy.pause();
//        addressData.FistStepAddress_Test1();
//        cy.wait(2000);

//        addressData.SecondStep_CityTown_Québec1();
//        Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//        cy.pause();

//        addressData.ThirdStepAddress_Québec1();
//        Checkout.fillThirdStepOccasionAnd3fiels();
//        Checkout.CompleteOrder();
//        cy.wait(2000);
//        cy.get('.image').should('contain', 'Order');
//      })



//      it.only("Placing an order with Logged in user successfully-FleurConcept", () => {
      
//        selectProduct.chooseProduct();
//        AuthorizationCreds.login_autotestscypress();
//        cy.wait(100);
//        cy.pause();
//        addressData.FistStepAddress_Test1();
//        cy.wait(2000);

//        addressData.SecondStep_FleurConcept1();
//        Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//        cy.pause();

//        addressData.ThirdStepAddress_FleurConcept1();
//        Checkout.fillThirdStepOccasionAnd3fiels();
//        Checkout.CompleteOrder();
//        cy.wait(2000);
//        cy.get('.image').should('contain', 'Order');
//      })
//   */

//     it("Placing an order with Logged in user successfully-Winnipeg", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreeds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Winnipeg1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_Winnipeg1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-Prince Albert", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_PrinceAlbert1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_PrinceAlbert1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-North Battleford", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_NorthBattleford1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_NorthBattleford1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-Edmonton", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Edmonton1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_Edmonton1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-Calgary", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Calgary1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_Calgary1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-RedDeer", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_RedDeer1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_RedDeer1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })

//     it("Placing an order with Logged in user successfully-Halifax", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_Halifax1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();

//         cy.pause();

//         addressData.ThirdStepAddress_Halifax1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })


//     it("Placing an order with Logged in user successfully-SaintJohn", () => {

//         selectProduct.chooseProduct();
//         AuthorizationCreds.login_autotestscypress();
//         cy.wait(100);
//         cy.pause();
//         addressData.FistStepAddress_Test1();
//         cy.wait(2000);

//         addressData.SecondStep_CityTown_SaintJohn1();
//         Checkout.fillSecondStepchooseData();
//         Checkout.fillSecondStepPayFromRealCart();
//         CheckoutSecondStep_PO.getButtonPay().click();g

//         cy.pause();

//         addressData.ThirdStepAddress_SaintJohn1();
//         Checkout.fillThirdStepOccasionAnd3fiels();
//         Checkout.CompleteOrder();
//         cy.wait(2000);
//         cy.get('.image').should('contain', 'Order');
//     })


// })

