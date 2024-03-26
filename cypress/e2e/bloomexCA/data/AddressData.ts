import Checkout from '../frontTests/testBloomexCA/testBloomexCA-ENG/steps-ENG/Checkout.steps'
import CheckoutFR from '../frontTests/testBloomexCA/testBloomexCA-FR/steps-FR/Checkout.stepsFR'

class Address {
    //////////////////////////////////////////////// 1 step

    //real address of Vancouver warehouse
    FistStepAddress_Test1() {
        cy.log('Start First step address');
            Checkout.fillFistStep({
            firstName: "Test_Name_Auto_Client_Canada", lastName: "Test_Last_Name_Auto_Client_Canada",
            phone: "12345678", userEmail: "autotestscypress@gmail.com",
            googleAddress: "108", streetNumber: "108", streetName: "366 KENT St", city: "Vancouver", zip: "V5X4N6",
            country: "Canada", province: "British Columbia"
        });
        cy.log('End First step address');
    }


    /////FRRRRRRR
    FistStepAddress_Canada_Billing() {
        cy.log('Start First step address');
        CheckoutFR.fillFistStepFR({
            firstName: "Test_Name_Auto_Client", lastName: "Test_Last_Name_Auto_Client",
            phone: "12345678", userEmail: "autotestscypress@gmail.com",
            googleAddress: "59", streetNumber: "6700", streetName: "23rd Ave", city: "Vancouver", zip: "V5Y 2G8",
            country: "Canada", province: "British Columbia"
        });
        cy.log('End First step address');
    }

    FistStepAddress_Australia_Billing() {
        cy.log('Start First step address');
        CheckoutFR.fillFistStepFR({
            firstName: "Test_Name_Auto_Client", lastName: "Test_Last_Name_Auto_Client",
            phone: "12345678", userEmail: "autotestscypress@gmail.com",
            googleAddress: "33", streetNumber: "33", streetName: "Mearns St", city: "Fairfield", zip: "4103",
            country: "Australia", province: "Queensland"
        });
        cy.log('End First step address');
    }

    
    FistStepAddress_USA_Billing() {
        cy.log('Start First step address');
        CheckoutFR.fillFistStepFR({
            firstName: "Test_Name_Auto_Client", lastName: "Test_Last_Name_Auto_Client",
            phone: "12345678", userEmail: "autotestscypress@gmail.com",
            googleAddress: "1061", streetNumber: "1061", streetName: "Hazard Ave", city: "Los Angeles", zip: "90063",
            country: "USA", province: "California"
        });
        cy.log('End First step address');
    }

  
    FistStepAddress_UA_Billing() {
        cy.log('Start First step address');
        CheckoutFR.fillFistStepFR({
            firstName: "Test_Name_Auto_Client", lastName: "Test_Last_Name_Auto_Client",
            phone: "12345678", userEmail: "autotestscypress@gmail.com",
            googleAddress: "6", streetNumber: "6", streetName: "Nikolay Vasilenko", city: "Kyiv", zip: "02000",
            country: "Ukrain", province: "Kyivska"
        });
        cy.log('End First step address');
    }

    

    //real adress from google...
    FistStepAddress_Test_USA_Billing() {
        cy.log('Start First step address');
        Checkout.fillFistStep({
            firstName: "Test_Name_Auto_Client_USA", lastName: "Test_Last_Name_Auto_Client_USA",
            phone: "12345678", userEmail: "autotestscypress@gmail.com",
            googleAddress: "21 E", streetNumber: "21 E", streetName: "Marine View Dr", city: "Everett", zip: "98201",
            country: "USA", province: "WA"
        });
        cy.log('End First step address');

    }

    //real address of Australia/Sydney warehouse
    FistStepAddress_Test_Australia_Billing() {
        cy.log('Start First step address');
        Checkout.fillFistStep({
            firstName: "Test_Name_Auto_Client_AUD", lastName: "Test_Last_Name_Auto_Client_AUD",
            phone: "12345678", userEmail: "autotestscypress@gmail.com",
            googleAddress: "12", streetNumber: "12", streetName: "Raglan Rd", city: "Auburn", zip: "2144",
            country: "Australia", province: "NW"
        });
        cy.log('End First step address');
    }


    FistStepAddress_Test_Ukraine_Billing() {
        cy.log('Start First step address');
        Checkout.fillFistStep({
            firstName: "Test_Name_Auto_Client_UAH", lastName: "Test_Last_Name_Auto_Client_UAH",
            phone: "12345678", userEmail: "autotestscypress@gmail.com",
            googleAddress: "81", streetNumber: "81", streetName: "Shevchenka Blvd", city: "Cherkasy", zip: "18031",
            country: "Ukraine", province: "none"
        });
        cy.log('End First step address');

      
    }


 
    
    /////////////////////////////////////////////////// 2 and 3 step
    //2  step 
    SecondStep_PostalCode(){
        cy.log('Start 2 step postal code');
        Checkout.fillSecondStepZip({
            zip: 'R1R1R1'})
        cy.log('End 2 step postal code');    
    }

    SecondStep_PostalCode_FR(){
        cy.log('Start 2 step postal code');
        CheckoutFR.fillSecondStepZipFR({
            zip: 'R1R1R1'})
            cy.log('End 2 step postal code');       
    }

    //2  step Vancouver 

    SecondStep_CityTown_Vancouver() {
        Checkout.fillSecondStepCity({
            cityTown: 'Vancouver'
        })
    }

    // //2 step RedeemCredit PostCode Test
    // fillSecondStep_RedeemCredit_And_TestPostCode(){
    //     Checkout.fillSecondStepCity_PostCode({
    //         zip: 'R1R1R1'})
    // }

    // fillSecondStep_RedeemCredit_And_TestPostCodeFR(){
    //     CheckoutFR.fillSecondStepCity_PostCodeFR({
    //         zip: 'R1R1R1'})
    // }

    ThirdStepAddress_Vancouver1() {
        cy.log('Start 3 step adress filling');   
        Checkout.fillThirdStep({
            firstName: "VancouverTest_Name_Auto_Reciver", lastName: "VancouverTest_Last_Name_Auto_Reciver_Test",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "10135", streetNumber: "10135", streetName: "144a St", city: "Surrey", zip: "R1R1R1",
            country: "Canada", province: "British Columbia"
        });
        cy.log('End 3 step adress filling'); 
    }

    ThirdStepAddress_Vancouver2() {
        cy.log('Start 3 step adress filling'); 
        Checkout.fillThirdStep({
            firstName: "VancouverTest_Name_Auto_Reciver", lastName: "VancouverTest_Last_Name_Auto_Reciver",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "4258", streetNumber: "4258", streetName: "Price Crescent", city: "Burnaby", zip: "R1R1R1",
            country: "Canada", province: "British Columbia"
        });
        cy.log('End 3 step adress filling'); 
    }

    ThirdStepAddress_Vancouver3() {
        cy.log('Start 3 step adress filling'); 
        Checkout.fillThirdStep({
            firstName: "VancouverTest_Name_Auto_Reciver", lastName: "VancouverTest_Last_Name_Auto_Reciver",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "12560", streetNumber: "12560", streetName: "98 Ave", city: "Surrey", zip: "R1R1R1",
            country: "Canada", province: "British Columbia"
        });
        cy.log('End 3 step adress filling'); 
    }


    ThirdStepAddress_Vancouver4() {
        cy.log('Start 3 step adress filling'); 
        Checkout.fillThirdStep({
            firstName: "VancouverTest_Name_Auto_Reciver", lastName: "VancouverTest_Last_Name_Auto_Reciver",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "8940", streetNumber: "8940", streetName: "Spires Rd", city: "Richmond", zip: "R1R1R1",
            country: "Canada", province: "British Columbia"
        });
        cy.log('End 3 step adress filling'); 

    }

    ThirdStepAddress_Vancouver4FR() {
        cy.log('Start 3 step adress filling'); 
        CheckoutFR.fillThirdStepFR({
            firstName: "VancouverTest_Name_Auto_Reciver", lastName: "VancouverTest_Last_Name_Auto_Reciver",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "8940", streetNumber: "8940", streetName: "Spires Rd", city: "Richmond", zip: "R1R1R1",
            country: "Canada", province: "British Columbia"
        });
        cy.log('End 3 step adress filling');

    }

    

    //2 and 3 step Toronto

    SecondStep_CityTown_Toronto1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Toronto'
        })
    }
    ThirdStepAddress_Toronto1() {
        Checkout.fillThirdStep({
            firstName: "TorontoAutoTest_FirstName", lastName: "TorontoAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "46", streetNumber: "46", streetName: "Cecil St", city: "Toronto", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });
       
    }

 //228 Helen Ave, Unionville, ON L3R 1J8
    SecondStep_CityTown_Toronto2() {
        Checkout.fillSecondStepCity({
            cityTown: 'Toronto'
        })
    }
    ThirdStepAddress_Toronto2() {
        Checkout.fillThirdStep({
            firstName: "TorontoAutoTest_FirstName", lastName: "TorontoAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "228", streetNumber: "228", streetName: "Helen Ave", city: "Toronto", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });
       
    }

   //810 Rodick Rd, Markham, ON L6G 1E4
   SecondStep_CityTown_Toronto3() {
    Checkout.fillSecondStepCity({
        cityTown: 'Toronto'
    })
}
   ThirdStepAddress_Toronto3() {
    Checkout.fillThirdStep({
        firstName: "TorontoAutoTest_FirstName", lastName: "TorontoAutoTest_LastName",
        phone: "6474494173", userEmail: "autotestscypress@gmail.com",
        googleAddress: "810", streetNumber: "810", streetName: "Rodick Rd", city: "Toronto", zip: "R1R1R1",
        country: "Canada", province: "ON"
    });

   }

   //39 Minglehaze Dr, Etobicoke, ON M9V 4W6
   SecondStep_CityTown_Toronto4() {
    Checkout.fillSecondStepCity({
        cityTown: 'Toronto'
    })
}
   ThirdStepAddress_Toronto4() {
    Checkout.fillThirdStep({
        firstName: "TorontoAutoTest_FirstName", lastName: "TorontoAutoTest_LastName",
        phone: "6474494173", userEmail: "autotestscypress@gmail.com",
        googleAddress: "39", streetNumber: "39", streetName: "Minglehaze Dr", city: "Toronto", zip: "R1R1R1",
        country: "Canada", province: "ON"
    });

   }

   //300 Lake Promenade, Etobicoke, ON M8W 1B4
   SecondStep_CityTown_Toronto5() {
    Checkout.fillSecondStepCity({
        cityTown: 'Toronto'
    })
}
   ThirdStepAddress_Toronto5() {
    Checkout.fillThirdStep({
        firstName: "TorontoAutoTest_FirstName", lastName: "TorontoAutoTest_LastName",
        phone: "6474494173", userEmail: "autotestscypress@gmail.com",
        googleAddress: "300", streetNumber: "300", streetName: "Lake Promenade", city: "Toronto", zip: "R1R1R1",
        country: "Canada", province: "ON"
    });

   }

   //196 Rouge Hills Dr, Scarborough, ON M1C 2Z1
   SecondStep_CityTown_Toronto6() {
    Checkout.fillSecondStepCity({
        cityTown: 'Toronto'
    })
}
   ThirdStepAddress_Toronto6() {
    Checkout.fillThirdStep({
        firstName: "TorontoAutoTest_FirstName", lastName: "TorontoAutoTest_LastName",
        phone: "6474494173", userEmail: "autotestscypress@gmail.com",
        googleAddress: "196", streetNumber: "196", streetName: "Rouge Hills Dr", city: "Toronto", zip: "R1R1R1",
        country: "Canada", province: "ON"
    });

   }

   //19 Tait Ct, Scarborough, ON M1X 0B1
   SecondStep_CityTown_Toronto7() {
    Checkout.fillSecondStepCity({
        cityTown: 'Toronto'
    })
}
   ThirdStepAddress_Toronto7() {
    Checkout.fillThirdStep({
        firstName: "TorontoAutoTest_FirstName", lastName: "TorontoAutoTest_LastName",
        phone: "6474494173", userEmail: "autotestscypress@gmail.com",
        googleAddress: "19", streetNumber: "19", streetName: "Tait Ct", city: "Toronto", zip: "R1R1R1",
        country: "Canada", province: "ON"
    });

   }

    //2 and 3 step Ottawa

    SecondStep_CityTown_Ottawa1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Ottawa'
        })
    }
    ThirdStepAddress_Ottawa1() {
        Checkout.fillThirdStep({
            firstName: "OttawaAutoTest_FirstName", lastName: "OttawaAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "46", streetNumber: "232", streetName: "Lisgar St", city: "Ottawa", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });

    }

    //2 and 3 step Montréal

    SecondStep_CityTown_Montreal1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Montreal'
        })
    }
    ThirdStepAddress_Montreal1() {
        Checkout.fillThirdStep({
            firstName: "MontréalAutoTest_FirstName", lastName: "MontréalAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "6640", streetNumber: "6640", streetName: "29e Avenue", city: "Montréal", zip: "R1R1R1",
            country: "Canada", province: "QC"
        });
    }
    //2 and 3 step Cambridge

    SecondStep_CityTown_Cambridge1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Cambridge'
        })
    }
    ThirdStepAddress_Cambridge1() {
        Checkout.fillThirdStep({
            firstName: "CambridgeAutoTest_FirstName", lastName: "CambridgeAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "52", streetNumber: "52", streetName: "Christopher Dr", city: "Cambridge", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });

    }

    //2 and 3 step Winnipeg


    SecondStep_CityTown_Winnipeg1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Winnipeg'
        })
    }
    ThirdStepAddress_Winnipeg1() {
        Checkout.fillThirdStep({
            firstName: "WinnipegAutoTest_FirstName", lastName: "WinnipegAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "402", streetNumber: "402", streetName: "Victor St", city: "Winnipeg", zip: "R1R1R1",
            country: "Canada", province: "MB"
        });
    }




    //2 and 3 step Saint John

    //165 Carmarthen St, Saint John, NB E2L 2P4
    SecondStep_CityTown_SaintJohn1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Saint John'
        })
    }
    ThirdStepAddress_SaintJohn1() {
        Checkout.fillThirdStep({
            firstName: "SaintJohnAutoTest_FirstName", lastName: "SaintJohnAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "165", streetNumber: "165", streetName: "Carmarthen St", city: "Saint John", zip: "R1R1R1",
            country: "Canada", province: "NB"
        });
    }

    // 2 and 3 step Halifax

    // 1670 Henry St, Halifax, NS B3H 3K3
    SecondStep_CityTown_Halifax1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Halifax'
        })
    }
    ThirdStepAddress_Halifax1() {
        Checkout.fillThirdStep({
            firstName: "HalifaxAutoTest_FirstName", lastName: "HalifaxAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "1670", streetNumber: "1670", streetName: "Henry St", city: "Halifax", zip: "R1R1R1",
            country: "Canada", province: "NS"
        });
    }

    // 2 and 3 step Calgary
    //2122 15 St SW, Calgary, AB T2T 3Y8

    SecondStep_CityTown_Calgary1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Calgary'
        })
    }
    ThirdStepAddress_Calgary1() {
        Checkout.fillThirdStep({
            firstName: "CalgaryAutoTest_FirstName", lastName: "CalgaryAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "2122", streetNumber: "2122", streetName: "15 St SW", city: "Calgary", zip: "R1R1R1",
            country: "Canada", province: "AB"
        });
    }

    //3041 30a St SE, Calgary, AB T2B 0S6
    SecondStep_CityTown_Calgary2() {
        Checkout.fillSecondStepCity({
            cityTown: 'Calgary'
        })
    }
    ThirdStepAddress_Calgary2() {
        Checkout.fillThirdStep({
            firstName: "CalgaryAutoTest_FirstName", lastName: "CalgaryAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "3041", streetNumber: "3041", streetName: "30a St SE", city: "Calgary", zip: "R1R1R1",
            country: "Canada", province: "AB"
        });
    }

    //127 Applemont Close SE, Calgary, AB T2A 7S2
    SecondStep_CityTown_Calgary3() {
        Checkout.fillSecondStepCity({
            cityTown: 'Calgary'
        })
    }
    ThirdStepAddress_Calgary3() {
        Checkout.fillThirdStep({
            firstName: "CalgaryAutoTest_FirstName", lastName: "CalgaryAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "127", streetNumber: "127", streetName: "Applemont Close SE", city: "Calgary", zip: "R1R1R1",
            country: "Canada", province: "AB"
        });
    }

    //956 Madeira Way NE, Calgary, AB T2A 5T2
    SecondStep_CityTown_Calgary4() {
        Checkout.fillSecondStepCity({
            cityTown: 'Calgary'
        })
    }

    ThirdStepAddress_Calgary4() {
        Checkout.fillThirdStep({
            firstName: "CalgaryAutoTest_FirstName", lastName: "CalgaryAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "956", streetNumber: "956", streetName: "Madeira Way NE", city: "Calgary", zip: "R1R1R1",
            country: "Canada", province: "AB"
        });
    }

    //92 Eldorado Close NE, Calgary, AB T1Y 6T3
    SecondStep_CityTown_Calgary5() {
        Checkout.fillSecondStepCity({
            cityTown: 'Calgary'
        })
    }

    ThirdStepAddress_Calgary5() {
        Checkout.fillThirdStep({
            firstName: "CalgaryAutoTest_FirstName", lastName: "CalgaryAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "92", streetNumber: "92", streetName: "Eldorado Close NE", city: "Calgary", zip: "R1R1R1",
            country: "Canada", province: "AB"
        });
    }

    // 3507 60 St NE, Calgary, AB T1Y 3L2
    SecondStep_CityTown_Calgary6() {
        Checkout.fillSecondStepCity({
            cityTown: 'Calgary'
        })
    }

    ThirdStepAddress_Calgary6() {
        Checkout.fillThirdStep({
            firstName: "CalgaryAutoTest_FirstName", lastName: "CalgaryAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "3507", streetNumber: "3507", streetName: "60 St NE", city: "Calgary", zip: "R1R1R1",
            country: "Canada", province: "AB"
        });
    }


    // 2 and 3 step Edmonton
    //11644 93 St NW, Edmonton, AB T5G 1C9
    SecondStep_CityTown_Edmonton1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Edmonton'
        })
    }
    ThirdStepAddress_Edmonton1() {
        Checkout.fillThirdStep({
            firstName: "EdmontonAutoTest_FirstName", lastName: "EdmontonAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "11644", streetNumber: "11644", streetName: "93 St NW", city: "Edmonton", zip: "R1R1R1",
            country: "Canada", province: "AB"
        });
    }

    // 2 and 3 step Carleton Place
    // 68 Queen St S, Carleton Place, ON K7C 2L2

    SecondStep_CityTown_CarletonPlace1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Carleton Place'
        })
    }
    ThirdStepAddress_CarletonPlace1() {
        Checkout.fillThirdStep({
            firstName: "CarletonPlaceAutoTest_FirstName", lastName: "CarletonPlaceAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "68", streetNumber: "68", streetName: "Queen St S", city: "Carleton Place", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });
    }

    // 2 and 3 step Thunder Bay
    // 439 Marks St S, Thunder Bay, ON P7E 1M4

    SecondStep_CityTown_ThunderBay1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Thunder Bay'
        })
    }
    ThirdStepAddress_ThunderBay1() {
        Checkout.fillThirdStep({
            firstName: "ThunderBayAutoTest_FirstName", lastName: "ThunderBayAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "439", streetNumber: "68", streetName: "Marks St S", city: "Thunder Bay", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });
    }

    // 2 and 3 step Trenton
    // 60 Queen St, Trenton, ON K8V 4X8

    SecondStep_CityTown_Trenton1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Trenton'
        })
    }
    ThirdStepAddress_Trenton1() {
        Checkout.fillThirdStep({
            firstName: "TrentonAutoTest_FirstName", lastName: "TrentonAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "60", streetNumber: "60", streetName: "Queen St", city: "Trenton", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });
    }

    //2 and 3 step Fort Frances
    // 624 Third St E, Fort Frances, ON P9A 1R6

    SecondStep_CityTown_FortFrances1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Fort Frances'
        })
    }
    ThirdStepAddress_FortFrances1() {
        Checkout.fillThirdStep({
            firstName: "FortFrancesAutoTest_FirstName", lastName: "FortFrancesAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "60", streetNumber: "60", streetName: "Third St E", city: "Fort Frances", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });
    }

    //2 and 3 step Sault Ste Marie
    // 9 Labelle Ave, Sault Ste. Marie, ON P6B 3C1

    SecondStep_CityTown_SaultSteMarie1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Sault Ste. Marie'
        })
    }
    ThirdStepAddress_SaultSteMarie1() {
        Checkout.fillThirdStep({
            firstName: "SaultSteMarieAutoTest_FirstName", lastName: "SaultSteMarieAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "9", streetNumber: "9", streetName: "Labelle Ave", city: "Sault Ste Marie", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });
    }
    //2 and 3 step Québec

    SecondStep_CityTown_Québec1() {
        Checkout.fillSecondStepZip({
            zip: 'G1K2A3'
        })
    }
    ThirdStepAddress_Québec1() {
        Checkout.fillThirdStep({
            firstName: "QuébecAutoTest_FirstName", lastName: "QuébecAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "240", streetNumber: "240", streetName: "Kirouac St", city: "Québec", zip: "R1R1R1",
            country: "Canada", province: "ON"
        });
    }

    //2 and FleurConcept
    // 277 QC-136, Québec, QC G1K 3W6

    SecondStep_FleurConcept1() {
        Checkout.fillSecondStepZip({
            zip: 'G1K3W6'
        })
    }
    ThirdStepAddress_FleurConcept1() {
        Checkout.fillThirdStep({
            firstName: "SaultSteMarieAutoTest_FirstName", lastName: "SaultSteMarieAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "277", streetNumber: "277", streetName: "QC-136", city: "Québec", zip: "R1R1R1",
            country: "Canada", province: "QC"
        });
    }

    //2 and 3 step Prince Albert
    //508 11 St E, Prince Albert, SK S6V 1A9

    SecondStep_CityTown_PrinceAlbert1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Prince Albert'
        })
    }
    ThirdStepAddress_PrinceAlbert1() {
        Checkout.fillThirdStep({
            firstName: "PrinceAlbert1oTest_FirstName", lastName: "PrinceAlbert1AutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "508", streetNumber: "508", streetName: "11 St E", city: "Prince Albert", zip: "R1R1R1",
            country: "Canada", province: "SK"
        });
    }

    // 2 and 3 step
    //1412 104 St, North Battleford, SK S9A 1P3

    SecondStep_CityTown_NorthBattleford1() {
        Checkout.fillSecondStepCity({
            cityTown: 'North Battleford'
        })
    }
    ThirdStepAddress_NorthBattleford1() {
        Checkout.fillThirdStep({
            firstName: "NorthBattlefordoTest_FirstName", lastName: "NorthBattlefordAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "1412", streetNumber: "1412", streetName: "104 St", city: "North Battleford", zip: "R1R1R1",
            country: "Canada", province: "SK"
        });
    }

    //2 and 3 step RedDeer
    //4106 50a St, Red Deer, AB T4N 1Y9

    SecondStep_CityTown_RedDeer1() {
        Checkout.fillSecondStepCity({
            cityTown: 'Red Deer'
        })
    }
    ThirdStepAddress_RedDeer1() {
        Checkout.fillThirdStep({
            firstName: "RedDeerAutoTest_FirstName", lastName: "RedDeerAutoTest_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "4106", streetNumber: "4106", streetName: "50a St", city: "Red Deer", zip: "R1R1R1",
            country: "Canada", province: "AB"
        });
    }


    //ADRESS DATA FOR ARTEM
    FistStepAddress_BBBTEST() {
        Checkout.fillFistStep({
            firstName: "BBB_TEST_Firstname", lastName: "BBB_TEST_lastname",
            phone: "1234567890", userEmail: "artletuchy@yahoo.com",
            googleAddress: "67", streetNumber: "6700", streetName: "Test_Street", city: "Test_City", zip: "R1R1R1",
            country: "Canada", province: "British Columbia"
        });
    }
    SecondStep_CityTown_Halifax() {
        Checkout.fillSecondStepCity({
            cityTown: 'Halifax'
        })
    }
    ThirdStepAddress_Halifax() {
        Checkout.fillThirdStep({
            firstName: "BBB_TEST_HALIFAX", lastName: "BBB_TEST_HALIFAX_LastName",
            phone: "6474494173", userEmail: "autotestscypress@gmail.com",
            googleAddress: "6155", streetNumber: "6155", streetName: "Duncan St", city: "Halifax", zip: "R1R1R1",
            country: "Canada", province: "NS"
        });
    }



    


}
export default new Address;