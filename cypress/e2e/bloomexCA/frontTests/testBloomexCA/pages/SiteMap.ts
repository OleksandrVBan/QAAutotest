class SiteMap {


    //Top Menu

    getLinkPolicies(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('Policies').should('be.visible')
 
       })
        
    }

    getLinkContacFreeDelivery(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Contact-Free Delivery').should('be.visible')
 
       })
        
    }

    getLinkOrderAndReturnPolicy(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Order and Return Policy').should('be.visible')
 
       })
        
    }

    getLinkSubstitutionPolicy(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Substitution Policy').should('be.visible')
 
       })
        
    }

    getLinkDeliveryPolicy(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Delivery Policy').should('be.visible')
 
       })
        
    }

    getLinkPromotionPolicy(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Promotion Policy').should('be.visible')
 
       })
        
    }

    getLinkPrivacyPolicy(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Privacy Policy').should('be.visible')
 
       })
        
    }

    getLinkTermsOfUse(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Terms of Use').should('be.visible')
 
       })
        
    }

    getLinkHelpAccount(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains(' Help/Account').should('be.visible')
 
       })
        
    }


    getLinkYourBloomexAccount(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Your Bloomex Account').should('be.visible')
 
       })
        
    }

    getLinkLostPassword(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Lost Password?').should('be.visible')
 
       })
        
    }

    getLinkYourShoppingCart(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Your Shopping Cart').should('be.visible')
 
       })
        
    }

    getLinkFlowerCare(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Flower Care').should('be.visible')
 
       })
        
    }

    getLinkBloomexLoyaltyProgram(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Bloomex Loyalty Program').should('be.visible')
 
       })
        
    }

    getLinkYourBloomexBucks(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Your Bloomex Bucks').should('be.visible')
 
       })
        
    }

    getLinkCanadasOfficialFlorist(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Canadas Official Florist').should('be.visible')
 
       })
        
    }

    getLinkAboutUs(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains(' About Us').should('be.visible')
 
       })
        
    }

    getLinkCanadaOfficialFlorist(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains("- Canada's Official Florist").should('be.visible')
 
       })
        
    }

    getLinkBloomexF3(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Bloomex F3').should('be.visible')
 
       })
        
    }

    getLinkCommunityPartners(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Community Partners').should('be.visible')
 
       })
        
    }

    getLinkLoyaltyProgram(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Loyalty Program').should('be.visible')
 
       })
        
    }

    getLinkCorporate(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains(' Corporate').should('be.visible')
 
       })
        
    }


    getLinkApplyForCorporateDiscount(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Apply for 20% Corporate Discount').should('be.visible')
 
       })
        
    }

    getLinkQuoteRequestForm(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Quote Request Form').should('be.visible')
 
       })
        
    }
    getLinkJobs(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains(' Jobs').should('be.visible')
 
       })
        
    }

    
    getLinkIT(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- IT').should('be.visible')
        })
        
    } 

    //Categories

    getLinkSpecialOccasions(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('Special Occasions').should('be.visible')
 
       })
        
    }

    getLinkAnniversaryFlowers(){
      return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
        cy.wrap($topMenu).find('a').contains('- Anniversary Flowers').should('be.visible')
      
      })

    }
    
    getLinkCongratulationsFlowersGifts(){
        return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
         cy.wrap($topMenu).find('a').contains('- Congratulations Flowers & Gifts').should('be.visible')
 
       })
        
    }

    getLinkGetWellFlowersGifts(){
      return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
       cy.wrap($topMenu).find('a').contains('- Get Well Flowers & Gifts').should('be.visible')

     })
      
  }


  getLinkHousewarmingFlowersGifts(){
    return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
     cy.wrap($topMenu).find('a').contains('- Housewarming Flowers & Gifts').should('be.visible')

   })
    
}


getLinkJustBecause(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Just Because').should('be.visible')

 })
  
}

getLinkLoveRomance(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Love & Romance').should('be.visible')

 })
  
}

getLinkNewBabyFlowersGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- New Baby Flowers & Gifts').should('be.visible')

 })
  
}

getLinkThankYouFlowersGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Thank You Flowers & Gifts').should('be.visible')

 })
  
}

getLinkWeddingFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Wedding Flowers').should('be.visible')

 })
  
}

getLinkCenterpieces(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Centerpieces').should('be.visible')

 })
  
}

getLinkBalloonBouquets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Balloon Bouquets').should('be.visible')

 })
  
}

getLinkSympathyFuneralFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Sympathy & Funeral Flowers').should('be.visible')

 })
  
}

getLinkUnder40(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Under $40').should('be.visible')

 })
  
}

getLink40_60(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- $40 - $60').should('be.visible')

 })
  
}

getLink60_100(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- $60 - $100').should('be.visible')

 })
  
}

getLinkSympathyFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Sympathy Flowers').should('be.visible')

 })
  
}

getLinkSympathyWreaths(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Sympathy Wreaths').should('be.visible')

 })
  
}

getLinkHeartsAndCrosses(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Hearts and Crosses').should('be.visible')

 })
  
}

getLinkCasketSprays(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Casket Sprays').should('be.visible')

 })
  
}

getLinkSympathyFlowerPackages(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Sympathy Flower Packages').should('be.visible')

 })
  
}

getLinkUrnFlowerArrangements(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Urn Flower Arrangements').should('be.visible')

 })
  
}

getLinkSympathyFlowerBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Sympathy Flower Baskets').should('be.visible')

 })
  
}

getLinkSympathyGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Sympathy Gift Baskets').should('be.visible')

 })
  
}

getLinkFreshCutFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Fresh Cut Flowers').should('be.visible')

 })
  
}

getLinkMixedBouquets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Mixed Bouquets').should('be.visible')

 })
  
}

getLinkDaisies(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Daisies').should('be.visible')

 })
  
}


getLinkRoses(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Roses').should('be.visible')

 })
  
}

getLinkSunflowers_(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Sunflowers').should('be.visible')

 })
  
}

getLinkFlowerPlanterBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Flower & Planter Baskets').should('be.visible')

 })
  
}

getLinkAutumnCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Autumn Collection').should('be.visible')

 })
  
}

getLinkHalloween(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Halloween').should('be.visible')

 })
  
}

getLinkThanksgivingFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Thanksgiving Flowers').should('be.visible')

 })
  
}

getLinkBusinessGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Business Gifts').should('be.visible')

 })
  
}

getLinkGourmetGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gourmet Gift Baskets').should('be.visible')

 })
  
}

getLinkGiftsForHim_(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gifts For Him').should('be.visible')

 })
  
}

getLinkKidsGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kids Gift Baskets').should('be.visible')

 })
  
}

getLinkWeddingGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Wedding Gifts').should('be.visible')

 })
  
}

getLinkTreatsGourmetSnacks(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Treats & Gourmet Snacks').should('be.visible')

 })
  
}

getLinkGourmetChocolates(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Gourmet Chocolates').should('be.visible')

 })
  
}

getLinkByPrice(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('By Price').should('be.visible')

 })
  
}

getLink40_50(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- $40 - $50').should('be.visible')

 })
  
}

getLinkUnder20(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- under $20').should('be.visible')

 })
  
}

getLinkValentinesDay(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Valentine's Day").should('be.visible')

 })
  
}

getLinkValentinesDesignersCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("- Valentines Designer's Collection").should('be.visible')

 })
  
}

getLinkValentineBouquets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Valentine Bouquets').should('be.visible')

 })
  
}

getLinkValentineGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Valentine Gift Baskets').should('be.visible')

 })
  
}

getLinkValentineChocolates(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Valentine Chocolates').should('be.visible')

 })
  
}

getLinkValentineComboSavings(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Valentine Combo Savings').should('be.visible')

 })
  
}

getLinkValentineTulips(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Valentine Tulips').should('be.visible')

 })
  
}

getLinkRadiantOrchidCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Radiant Orchid Collection').should('be.visible')

 })
  
}

getLinkBeMyValentineTulips(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Be My Valentine Tulips').should('be.visible')

 })
  
}

getLinkHotLadyRoses(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Hot Lady Roses').should('be.visible')

 })
  
}

getLinkValentinesSweetheartCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Valentines Sweetheart Collection').should('be.visible')

 })
  
}

getLinkValentineHotLadySprayRoses(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Valentine Hot Lady Spray Roses').should('be.visible')

 })
  
}

getLinkValentinesDayAlstroemeriaCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Valentine's Day Alstroemeria Collection").should('be.visible')

 })
  
}

getLinkValentineAssortedRoseSpecials(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Valentine Assorted Rose Specials').should('be.visible')

 })
  
}

getLinkEasterFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Easter Flowers').should('be.visible')

 })
  
}

getLinkAdministrativeAssistantDay(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Administrative Assistant Day').should('be.visible')

 })
  
}

getLinkMothersDayFlowersGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mothers Day Flowers & Gifts').should('be.visible')

 })
  
}

getLinkMothersDayDesignersCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Mothers Day Designers Collection').should('be.visible')

 })
  
}

getLinkMothersDaySpecials(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Mothers Day Specials').should('be.visible')

 })
  
}

getLinkMothersDayGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Mothers Day Gift Baskets').should('be.visible')

 })
  
}

getLinkMothersDayOrchids(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("- Mother's Day Orchids").should('be.visible')

 })
  
}

getLinkMothersDayAssortedRoses(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Mothers Day Assorted Roses').should('be.visible')

 })
  
}

getLinkFathersDay(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(" Father's Day").should('be.visible')

 })
  
}

getLinkGourmetGiftBasketsForFather(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Gourmet Gift Baskets for Father').should('be.visible')

 })
  
}

getLinkFathersDayGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Fathers Day Gifts').should('be.visible')

 })
  
}

getLinkWineAndBeerGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Wine and Beer Gift Baskets').should('be.visible')

 })
  
}

getLinkHanukkahFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Hanukkah Flowers').should('be.visible')

 })
  
}

getLinkGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gift Baskets').should('be.visible')

 })
  
}

getLinkFruitBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Fruit Baskets').should('be.visible')

 })
  
}

getLinkSweetsBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Sweets Baskets').should('be.visible')

 })
  
}

getLinkGourmetGiftBaskets2(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Gourmet Gift Baskets').should('be.visible')

 })
  
}

getLinkTeaGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Tea Gift Baskets').should('be.visible')

 })
  
}

getLinkCoffeeGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Coffee Gift Baskets').should('be.visible')

 })
  
}

getLinkSnackGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Snack Gift Baskets').should('be.visible')

 })
  
}

getLinkCheeseGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Cheese Gift Baskets').should('be.visible')

 })
  
}

getLinkGourmetCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Gourmet Collection').should('be.visible')

 })
  
}

getLinkCorporateGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Corporate Gift Baskets').should('be.visible')

 })
  
}

getLinkChocolateGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Chocolate Gift Baskets').should('be.visible')

 })
  
}

getLinkGourmetCollection2(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Gourmet Collection').should('be.visible')

 })
  
}

getLinkGiftBasketsForMen(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Gift Baskets for Men').should('be.visible')

 })
  
}

getLinkWineBeerGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Wine & Beer Gift Baskets').should('be.visible')

 })
  
}


getLinkHolidayTraditionCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Holiday Tradition Collection').should('be.visible')

 })
  
}

getLinkLindtGiftBasketCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Lindt Gift Basket Collection').should('be.visible')

 })
  
}

getLinkLuxuryGiftBoxCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Luxury Gift Box Collection').should('be.visible')

 })
  
}

getLinkSpecials(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Specials').should('be.visible')

 })
  
}

getLinkFridayRoses65off(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Friday Roses - 65% off').should('be.visible')

 })
  
}

getLinkAutumnBouquets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Autumn Bouquets').should('be.visible')

 })
  
}

getLinkHolidayCentrepieces(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Holiday Centrepieces').should('be.visible')

 })
  
}

getLinkValentineSpecials(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Valentine Specials').should('be.visible')

 })
  
}

getLinkBirthdayFlowersGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Birthday Flowers & Gifts').should('be.visible')

 })
  
}

getLinkBirthdayFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Birthday Flowers').should('be.visible')

 })
  
}

getLinkBirthdayGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Birthday Gift Baskets').should('be.visible')

 })
  
}

getLinkBirthdayBalloonBouquets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Birthday Balloon Bouquets').should('be.visible')

 })
  
}

getLinkBirthdayDesignerCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Birthday Designer Collection').should('be.visible')

 })
  
}

getLinkBirthdayGourmetCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Birthday Gourmet Collection').should('be.visible')

 })
  
}
getLinkNationalSorryDay(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('National Sorry Day').should('be.visible')

 })
  
}

getLinkCorporateGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Corporate Gifts').should('be.visible')

 })
  
}

getLinkOfficeFruitBoxes(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Office Fruit Boxes').should('be.visible')

 })
  
}

getLinkGourmetGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Gourmet Gifts').should('be.visible')

 })
  
}

getLinkGetWellFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Get Well Flowers').should('be.visible')

 })
  
}

getLinkSympathyFlowers2(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Sympathy Flowers').should('be.visible')

 })
  
}

getLinkirthdayFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Birthday Flowers').should('be.visible')

 })
  
}

getLinkCongratulationGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Congratulation Gifts').should('be.visible')

 })
  
}

getLinkPoinsettias(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Poinsettias').should('be.visible')

 })
  
}

getLinkGiftPack3(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Gift Pack 3').should('be.visible')

 })
  
}

getLinkRoshHashanah(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Rosh Hashanah').should('be.visible')

 })
  
}

getLinkChristmasGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Christmas Gifts').should('be.visible')

 })
  
}

getLinkEleganceGiftBasketCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Elegance Gift Basket Collection').should('be.visible')

 })
  
}

getLinkChristmasFlowersAndGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Christmas Flowers and Gifts').should('be.visible')

 })
  
}

getLinkChristmasFlowers(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Christmas Flowers').should('be.visible')

 })
  
}

getLinkHolidayGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Holiday Gift Baskets').should('be.visible')

 })
  
}

getLinkChristmasPoinsettias(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Christmas Poinsettias').should('be.visible')

 })
  
}


getLinkChristmasCentrepieces(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Christmas Centrepieces').should('be.visible')

 })
  
}

getLinkChristmasBellsCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Christmas Bells Collection').should('be.visible')

 })
  
}

getLinkChristmasDesignerCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Christmas Designer Collection').should('be.visible')

 })
  
}

getLinkChristmasGourmetCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Christmas Gourmet Collection').should('be.visible')

 })
  
}

getLinkChristmasLindtGiftBasketCollection_(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Christmas Lindt Gift Basket Collection').should('be.visible')

 })
  
}

getLinkChristmasWineAndBeerGiftBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Christmas Wine and Beer Gift Baskets').should('be.visible')

 })
  
}

getLinkLiveMiniChristmasTrees(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Live Mini Christmas Trees').should('be.visible')

 })
  
}

getLinkChristmasLuxuryGiftBoxCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Christmas Luxury Gift Box Collection').should('be.visible')

 })
  
}

getLinkTheMasonJarCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('The Mason Jar Collection').should('be.visible')

 })
  
}

getLink2022McDonaldsCanadaCoast(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("2022 McDonald’s® Canada Coast to Coast MONOPOLY® REWARDS").should('be.visible')

 })
  
}

getLinkDHL(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('DHL').should('be.visible')

 })
  
}

getLinkAutumnBlooms(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Autumn Blooms').should('be.visible')

 })
  
}

getLinkRWBBalletBloomHolidayCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' RWB Ballet in Bloom Holiday Collection').should('be.visible')

 })
  
}

getLinkRealtorProgram(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Realtor Program').should('be.visible')

 })
  
}

getLinkCanadianTulipFestivalCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Canadian Tulip Festival Collection').should('be.visible')

 })
  
}

getLinkTheInspirationCollectionREWARDS(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('The Inspiration Collection').should('be.visible')

 })
  
}

getLink2022McDonaldsCanadaCoastPRIZES(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("2022 McDonald’s® Canada Coast to Coast MONOPOLY® PRIZES").should('be.visible')

 })
  
}

getLinkHugsAndKissesCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hugs and Kisses Collection').should('be.visible')

 })
  
}

getLinkABetterFLORIST(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' A BETTER FLORIST').should('be.visible')

 })
  
}

getLinkREDTAGSPECIALS(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('RED TAG SPECIALS').should('be.visible')

 })
  
}

getLinkInternationalWomensDay(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('International Womens Day').should('be.visible')

 })
  
}

getLinkHeirloomGifts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Heirloom Gifts').should('be.visible')

 })
  
}

getLinkGourmetGiftClubs(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gourmet Gift Clubs').should('be.visible')

 })
  
}

getLinkEdwardJonesCustomProducts(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Edward Jones Custom Products').should('be.visible')

 })
  
}

getLinkRosesWineCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Roses & Wine Collection').should('be.visible')

 })
  
}

getLinkTropicalPlantsPlanterBaskets(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Tropical Plants & Planter Baskets').should('be.visible')

 })
  
}

getLinkShopForGood(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains(' Shop for Good').should('be.visible')

 })
  
}

getLinkMakeAWishCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Make-A-Wish® Collection').should('be.visible')

 })
  
}

getLinkSeasonOfHopeCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Season of Hope Collection').should('be.visible')

 })
  
}

getLinkHeartStrokeCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Heart & Stroke Collection').should('be.visible')

 })
  
}

getLinkHumaneCanada(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Humane Canada').should('be.visible')

 })
  
}

getLinkMultipleSclerosisSocietyOfCanadaCollection(){
  return cy.get('.sitemap_column').eq(0).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('- Multiple Sclerosis Society of Canada Collection').should('be.visible')

 })
  
}

//Flowers Category


getLinkCalgaryFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Calgary Flowers').should('be.visible')

 })
  
}


getLinkEdmontonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Edmonton Flowers').should('be.visible')

 })
  
}


getLinkTorontoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Toronto Flowers').should('be.visible')

 })
  
}


getLinkOttawaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ottawa Flowers').should('be.visible')

 })
  
}


getLinkElliotLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Elliot Lake Flowers').should('be.visible')

 })
  
}


getLinkVancouverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Vancouver Flowers').should('be.visible')

 })
  
}


getLinkVictoriaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Victoria Flowers').should('be.visible')

 })
  
}


getLinkMississaugaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mississauga Flowers').should('be.visible')

 })
  
}


getLinkOntarioFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ontario Flowers').should('be.visible')

 })
  
}


getLinkBramptonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brampton Flowers').should('be.visible')

 })
  
}


getLinkHalifaxFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Halifax Flowers').should('be.visible')

 })
  
}


getLinkKelownaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kelowna Flowers').should('be.visible')

 })
  
}


getLinkOakvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Oakville Flowers').should('be.visible')

 })
  
}


getLinkScarboroughFlowers_(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Scarborough Flowers').should('be.visible')

 })
  
}


getLinkMarkhamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Markham Flowers').should('be.visible')

 })
  
}


getLinkBurlingtonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Burlington Flowers').should('be.visible')

 })
  
}


getLinkEtobicokeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Etobicoke Flowers').should('be.visible')

 })
  
}


getLinkNorthYorkFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('North York Flowers').should('be.visible')

 })
  
}


getLinkNanaimoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Nanaimo Flowers').should('be.visible')

 })
  
}


getLinkOshawaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Oshawa Flowers').should('be.visible')

 })
  
}


getLinkWaterlooFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Waterloo Flowers').should('be.visible')

 })
  
}


getLinkAbbotsfordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Abbotsford Flowers').should('be.visible')

 })
  
}


getLinkSaskatchewanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saskatchewan Flowers').should('be.visible')

 })
  
}


getLinkAjaxFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ajax Flowers').should('be.visible')

 })
  
}


getLinkLondonFlowers_(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('London Flowers').should('be.visible')

 })
  
}


getLinkDartmouthFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dartmouth Flowers').should('be.visible')

 })
  
}


getLinkManitobaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Manitoba Flowers').should('be.visible')

 })
  
}


getLinkOrleansFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Orleans Flowers').should('be.visible')

 })
  
}


getLinkChilliwackFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chilliwack Flowers').should('be.visible')

 })
  
}


getLinkThornhillFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Thornhill Flowers').should('be.visible')

 })
  
}


getLinkMonctonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Moncton Flowers').should('be.visible')

 })
  
}


getLinkWoodbridgeFlowers_(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Woodbridge Flowers').should('be.visible')

 })
  
}


getLinkKanataFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kanata Flowers').should('be.visible')

 })
  
}


getLinkNewmarketFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Newmarket Flowers').should('be.visible')

 })
  
}


getLinkFrederictonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fredericton Flowers').should('be.visible')

 })
  
}


getLinkAirdrieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Airdrie Flowers').should('be.visible')

 })
  
}


getLinkSherwoodParkFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sherwood Park Flowers').should('be.visible')

 })
  
}


getLinkPentictonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Penticton Flowers').should('be.visible')

 })
  
}


getLinkBeaumontFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beaumont Flowers').should('be.visible')

 })
  
}


getLinkKitsilanoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kitsilano Flowers').should('be.visible')

 })
  
}


getLinkKingstonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kingston Flowers').should('be.visible')

 })
  
}


getLinkKitchenerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kitchener Flowers').should('be.visible')

 })
  
}


getLinkWhistlerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Whistler Flowers').should('be.visible')

 })
  
}


getLinkAuroraFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Aurora Flowers').should('be.visible')

 })
  
}


getLinkPrinceEdwardIslandFlowers_(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Prince Edward Island Flowers').should('be.visible')

 })
  
}


getLinkLethbridgeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lethbridge Flowers').should('be.visible')

 })
  
}


getLinkNepeanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Nepean Flowers').should('be.visible')

 })
  
}


getLinkUxbridgeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Uxbridge Flowers').should('be.visible')

 })
  
}


getLinkComoxFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Comox Flowers').should('be.visible')

 })
  
}


getLinkPointeClaireFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pointe-Claire Flowers').should('be.visible')

 })
  
}


getLinkGrandePrairieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grande Prairie Flowers').should('be.visible')

 })
  
}


getLinkLangleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Langley Flowers').should('be.visible')

 })
  
}


getLinkBanffFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Banff Flowers').should('be.visible')

 })
  
}


getLinkMedicineHatFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Medicine Hat Flowers').should('be.visible')

 })
  
}


getLinkBarrhavenFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Barrhaven Flowers').should('be.visible')

 })
  
}


getLinkOkotoksFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Okotoks Flowers').should('be.visible')

 })
  
}


getLinkSurreyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Surrey Flowers').should('be.visible')

 })
  
}


getLinkMissionFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mission Flowers').should('be.visible')

 })
  
}


getLinkCourtenayFlowers__(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Courtenay Flowers').should('be.visible')

 })
  
}


getLinkAlbertaFlowers_(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Alberta Flowers').should('be.visible')

 })
  
}


getLinkManotickFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Manotick Flowers').should('be.visible')

 })
  
}


getLinkBurnabyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Burnaby Flowers').should('be.visible')

 })
  
}


getLinkHamiltonFlowers_(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hamilton Flowers').should('be.visible')

 })
  
}


getLinkKamloopsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kamloops Flowers').should('be.visible')

 })
  
}


getLinkLeducFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Leduc Flowers').should('be.visible')

 })
  
}


getLinkSpruceGroveFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Spruce Grove Flowers').should('be.visible')

 })
  
}


getLinkDonMillsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Don Mills Flowers').should('be.visible')

 })
  
}


getLinkCanmoreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Canmore Flowers').should('be.visible')

 })
  
}


getLinkCranbrookFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cranbrook Flowers').should('be.visible')

 })
  
}


getLinkWestmountFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Westmount Flowers').should('be.visible')

 })
  
}


getLinkBarrieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Barrie Flowers').should('be.visible')

 })
  
}


getLinkBrantFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brant Flowers').should('be.visible')

 })
  
}


getLinkRiverviewFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riverview Flowers').should('be.visible')

 })
  
}


getLinkGuelphFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Guelph Flowers').should('be.visible')

 })
  
}


getLinkHighRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('High River Flowers').should('be.visible')

 })
  
}


getLinkRichmondFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Richmond Flowers').should('be.visible')

 })
  
}


getLinkWindsorFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Windsor Flowers').should('be.visible')

 })
  
}


getLinkYarmouthFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Yarmouth Flowers').should('be.visible')

 })
  
}


getLinkBlackDiamondFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Black Diamond Flowers').should('be.visible')

 })
  
}


getLinkAntigonishFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Antigonish Flowers').should('be.visible')

 })
  
}


getLinkLangfordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Langford Flowers').should('be.visible')

 })
  
}


getLinkSydneyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sydney Flowers').should('be.visible')

 })
  
}


getLinkPortAlberniFlowers_(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Port Alberni Flowers').should('be.visible')

 })
  
}


getLinkSquamishFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Squamish Flowers').should('be.visible')

 })
  
}


getLinkMordenFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Morden Flowers').should('be.visible')

 })
  
}


getLinkTruroFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Truro Flowers').should('be.visible')

 })
  
}


getLinkVaughanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Vaughan Flowers').should('be.visible')

 })
  
}


getLinkGlaceBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Glace Bay Flowers').should('be.visible')

 })
  
}


getLinkIndianHeadFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Indian Head Flowers').should('be.visible')

 })
  
}


getLinkCamroseFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Camrose Flowers').should('be.visible')

 })
  
}


getLinkStittsvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Stittsville Flowers').should('be.visible')

 })
  
}


getLinkStrathmoreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Strathmore Flowers').should('be.visible')

 })
  
}


getLinkFoothillsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Foothills Flowers').should('be.visible')

 })
  
}


getLinkGatineauFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gatineau Flowers').should('be.visible')

 })
  
}


getLinkMiramichiFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Miramichi Flowers').should('be.visible')

 })
  
}


getLinkLacombeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lacombe Flowers').should('be.visible')

 })
  
}


getLinkChestermereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chestermere Flowers').should('be.visible')

 })
  
}


getLinkCoquitlamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Coquitlam Flowers').should('be.visible')

 })
  
}


getLinkGloucesterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gloucester Flowers').should('be.visible')

 })
  
}


getLinkInnisfailFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Innisfail Flowers').should('be.visible')

 })
  
}


getLinkDevonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Devon Flowers').should('be.visible')

 })
  
}


getLinkBrockvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brockville Flowers').should('be.visible')

 })
  
}


getLinkCambridgeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cambridge Flowers').should('be.visible')

 })
  
}


getLinkOldsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Olds Flowers').should('be.visible')

 })
  
}


getLinkRocklandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rockland Flowers').should('be.visible')

 })
  
}


getLinkSarniaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sarnia Flowers').should('be.visible')

 })
  
}


getLinkHudsonBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hudson Bay Flowers').should('be.visible')

 })
  
}


getLinkNewGlasgowFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('New Glasgow Flowers').should('be.visible')

 })
  
}


getLinkOakBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Oak Bay Flowers').should('be.visible')

 })
  
}


getLinkKentvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kentville Flowers').should('be.visible')

 })
  
}


getLinkSudburyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sudbury Flowers').should('be.visible')

 })
  
}


getLinkPeterboroughFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Peterborough Flowers').should('be.visible')

 })
  
}


getLinkHintonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hinton Flowers').should('be.visible')

 })
  
}


getLinkBrooksFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brooks Flowers').should('be.visible')

 })
  
}


getLinkWolfvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Wolfville Flowers').should('be.visible')

 })
  
}


getLinkBarrheadFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Barrhead Flowers').should('be.visible')

 })
  
}


getLinkBridgewaterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bridgewater Flowers').should('be.visible')

 })
  
}


getLinkSylvanLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sylvan Lake Flowers').should('be.visible')

 })
  
}


getLinkWetaskiwinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Wetaskiwin Flowers').should('be.visible')

 })
  
}


getLinkPeaceRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Peace River Flowers').should('be.visible')

 })
  
}


getLinkWinklerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Winkler Flowers').should('be.visible')

 })
  
}


getLinkTransconaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Transcona Flowers').should('be.visible')

 })
  
}


getLinkCornwallFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cornwall Flowers').should('be.visible')

 })
  
}


getLinkOrilliaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Orillia Flowers').should('be.visible')

 })
  
}


getLinkRothesayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rothesay Flowers').should('be.visible')

 })
  
}


getLinkBrantfordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brantford Flowers').should('be.visible')

 })
  
}


getLinkCumberlandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cumberland Flowers').should('be.visible')

 })
  
}



getLinkLowerSackvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lower Sackville Flowers').should('be.visible')

 })
  
}


getLinkWinnipegFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Winnipeg Flowers').should('be.visible')

 })
  
}


getLinkHudsonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hudson Flowers').should('be.visible')

 })
  
}


getLinkNorthSydneyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('North Sydney Flowers').should('be.visible')

 })
  
}


getLinkBellevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Belleville Flowers').should('be.visible')

 })
  
}


getLinkDieppeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dieppe Flowers').should('be.visible')

 })
  
}


getLinkEdsonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Edson Flowers').should('be.visible')

 })
  
}


getLinkDeltaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Delta Flowers').should('be.visible')

 })
  
}


getLinkEastYorkFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('East York Flowers').should('be.visible')

 })
  
}


getLinkCloverdaleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cloverdale Flowers').should('be.visible')

 })
  
}


getLinkCharleswoodFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Charleswood Flowers').should('be.visible')

 })
  
}


getLinkLegalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Legal Flowers').should('be.visible')

 })
  
}


getLinkMelvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Melville Flowers').should('be.visible')

 })
  
}


getLinkChathamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chatham Flowers').should('be.visible')

 })
  
}


getLinkCampbelltonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Campbellton Flowers').should('be.visible')

 })
  
}


getLinkTaberFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Taber Flowers').should('be.visible')

 })
  
}


getLinkDraytonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Drayton Flowers').should('be.visible')

 })
  
}


getLinkSaintLazareFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Lazare Flowers').should('be.visible')

 })
  
}


getLinkMelfortFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Melfort Flowers').should('be.visible')

 })
  
}


getLinkTisdaleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Tisdale Flowers').should('be.visible')

 })
  
}


getLinkActonValeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Acton Vale Flowers').should('be.visible')

 })
  
}


getLinkWestlockFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Westlock Flowers').should('be.visible')

 })
  
}


getLinkGimliFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gimli Flowers').should('be.visible')

 })
  
}


getLinkMinnedosaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Minnedosa Flowers').should('be.visible')

 })
  
}


getLinkPonokaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ponoka Flowers').should('be.visible')

 })
  
}


getLinkSaanichFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saanich Flowers').should('be.visible')

 })
  
}


getLinkBedfordFlowers_(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bedford Flowers').should('be.visible')

 })
  
}


getLinkSussexFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sussex Flowers').should('be.visible')

 })
  
}


getLinkAltonaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Altona Flowers').should('be.visible')

 })
  
}


getLinkRussellFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Russell Flowers').should('be.visible')

 })
  
}


getLinkColeHarbourFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cole Harbour Flowers').should('be.visible')

 })
  
}


getLinkInvernessFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Inverness Flowers').should('be.visible')

 })
  
}


getLinkPictouFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pictou Flowers').should('be.visible')

 })
  
}


getLinkSteinbachFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Steinbach Flowers').should('be.visible')

 })
  
}


getLinkThompsonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Thompson Flowers').should('be.visible')

 })
  
}


getLinkLachuteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lachute Flowers').should('be.visible')

 })
  
}


getLinkCarmanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Carman Flowers').should('be.visible')

 })
  
}


getLinkGibbonsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gibbons Flowers').should('be.visible')

 })
  
}


getLinkQuispamsisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Quispamsis Flowers').should('be.visible')

 })
  
}


getLinkWeyburnFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Weyburn Flowers').should('be.visible')

 })
  
}


getLinkKindersleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kindersley Flowers').should('be.visible')

 })
  
}


getLinkLunenburgFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lunenburg Flowers').should('be.visible')

 })
  
}


getLinkDigbyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Digby Flowers').should('be.visible')

 })
  
}


getLinkLadnerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ladner Flowers').should('be.visible')

 })
  
}


getLinkStonewallFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Stonewall Flowers').should('be.visible')

 })
  
}


getLinkEdmundstonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Edmundston Flowers').should('be.visible')

 })
  
}


getLinkVirdenFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Virden Flowers').should('be.visible')

 })
  
}


getLinkNeepawaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Neepawa Flowers').should('be.visible')

 })
  
}


getLinkThoroldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Thorold Flowers').should('be.visible')

 })
  
}


getLinkNipawinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Nipawin Flowers').should('be.visible')

 })
  
}


getLinkSwanRiverFlowers2(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Swan River Flowers').eq(2).should('be.visible')

 })
  
}


getLinkClaytonParkFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Clayton Park Flowers').should('be.visible')

 })
  
}


getLinkPembrokeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pembroke Flowers').should('be.visible')

 })
  
}


getLinkNivervilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Niverville Flowers').should('be.visible')

 })
  
}


getLinkPortColborneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Port Colborne Flowers').should('be.visible')

 })
  
}


getLinkBeamsvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beamsville Flowers').should('be.visible')

 })
  
}


getLinkStratfordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Stratford Flowers').should('be.visible')

 })
  
}


getLinkTantallonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Tantallon Flowers').should('be.visible')

 })
  
}


getLinkmMorinvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Morinville Flowers').should('be.visible')

 })
  
}


getLinkOutlookFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Outlook Flowers').should('be.visible')

 })
  
}


getLinkSourisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Souris Flowers').should('be.visible')

 })
  
}


getLinkKiplingFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kipling Flowers').should('be.visible')

 })
  
}


getLinkBathurstFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bathurst Flowers').should('be.visible')

 })
  
}


getLinkBerwickFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Berwick Flowers').should('be.visible')

 })
  
}


getLinkDalhousieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dalhousie Flowers').should('be.visible')

 })
  
}


getLinkEsterhazyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Esterhazy Flowers').should('be.visible')

 })
  
}


getLinkMontRoyalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mont-Royal Flowers').should('be.visible')

 })
  
}


getLinkRedwaterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Redwater Flowers').should('be.visible')

 })
  
}


getLinkSaintLambertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Lambert Flowers').should('be.visible')

 })
  
}


getLinkSainteCatherineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sainte-catherine Flowers').should('be.visible')

 })
  
}


getLinkTroisRivieresFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Trois-Rivieres Flowers').should('be.visible')

 })
  
}

getLinkMccrearyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mccreary Flowers').should('be.visible')

 })
  
}

getLinkUnityFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Unity Flowers').should('be.visible')

 })
  
}

getLinkCoaldaleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Coaldale Flowers').should('be.visible')

 })
  
}

getLinkDollardDesOrmeauxFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dollard-Des-Ormeaux Flowers').should('be.visible')

 })
  
}

getLinkGreelyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Greely Flowers').should('be.visible')

 })
  
}

getLinkMorrisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Morris Flowers').should('be.visible')

 })
  
}

getLinkSaintEustacheFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Eustache Flowers').should('be.visible')

 })
  
}

getLinkAmherstFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Amherst Flowers').should('be.visible')

 })
  
}

getLinkCrossfieldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Crossfield Flowers').should('be.visible')

 })
  
}

getLinkPinawaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pinawa Flowers').should('be.visible')

 })
  
}

getLinkBiggarFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Biggar Flowers').should('be.visible')

 })
  
}

getLinkMeadowLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Meadow Lake Flowers').should('be.visible')

 })
  
}

getLinkAllanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Allan Flowers').should('be.visible')

 })
  
}

getLinkEnfieldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Enfield Flowers').should('be.visible')

 })
  
}

getLinkKamsackFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kamsack Flowers').should('be.visible')

 })
  
}

getLinkRoblinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Roblin Flowers').should('be.visible')

 })
  
}

getLinkTuxedoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Tuxedo Flowers').should('be.visible')

 })
  
}

getLinkFortGarryFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fort Garry Flowers').should('be.visible')

 })
  
}

getLinkAssiniboiaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Assiniboia Flowers').should('be.visible')

 })
  
}

getLinkCandiacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Candiac Flowers').should('be.visible')

 })
  
}

getLinkGrenfellFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grenfell Flowers').should('be.visible')

 })
  
}

getLinkMaidstoneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Maidstone Flowers').should('be.visible')

 })
  
}

getLinkCoteSaintLucFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cote-Saint-Luc Flowers').should('be.visible')

 })
  
}

getLinkFairviewFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fairview Flowers').should('be.visible')

 })
  
}

getLinkKillarneyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Killarney Flowers').should('be.visible')

 })
  
}

getLinkHampsteadFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hampstead Flowers').should('be.visible')

 })
  
}

getLinkOxbowFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Oxbow Flowers').should('be.visible')

 })
  
}

getLinkRiversideFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riverside Flowers').should('be.visible')

 })
  
}

getLinkTurnerValleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Turner Valley Flowers').should('be.visible')

 })
  
}

getLinkBridgetownFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bridgetown Flowers').should('be.visible')

 })
  
}

getLinkMacklinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Macklin Flowers').should('be.visible')

 })
  
}

getLinkMelitaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Melita Flowers').should('be.visible')

 })
  
}

getLinkSainteFoyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sainte-Foy Flowers').should('be.visible')

 })
  
}

getLinkSpryfieldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Spryfield Flowers').should('be.visible')

 })
  
}

getLinkStevestonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Steveston Flowers').should('be.visible')

 })
  
}

getLinkGlenboroFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Glenboro Flowers').should('be.visible')

 })
  
}

getLinkHantsportFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hantsport Flowers').should('be.visible')

 })
  
}

getLinkPreecevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Preeceville Flowers').should('be.visible')

 })
  
}

getLinkSaintGeorgesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Georges Flowers').should('be.visible')

 })
  
}

getLinkShellbrookFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Shellbrook Flowers').should('be.visible')

 })
  
}

getLinkSpiritwoodFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Spiritwood Flowers').should('be.visible')

 })
  
}

getLinkBeresfordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beresford Flowers').should('be.visible')

 })
  
}

getLinkGravelbourgFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gravelbourg Flowers').should('be.visible')

 })
  
}

getLinkParrsboroFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Parrsboro Flowers').should('be.visible')

 })
  
}

getLinkSpringfieldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Springfield Flowers').should('be.visible')

 })
  
}

getLinkVaudreuilDorionFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Vaudreuil-Dorion Flowers').should('be.visible')

 })
  
}

getLinkBowenIslandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bowen Island Flowers').should('be.visible')

 })
  
}

getLinkBurnsideFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Burnside Flowers').should('be.visible')

 })
  
}

getLinkCalmarFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Calmar Flowers').should('be.visible')

 })
  
}

getLinkDavidsonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Davidson Flowers').should('be.visible')

 })
  
}

getLinkElieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Elie Flowers').should('be.visible')

 })
  
}

getLinkFallRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fall River Flowers').should('be.visible')

 })
  
}

getLinkGuysboroughFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Guysborough Flowers').should('be.visible')

 })
  
}

getLinkLacDuBonnetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac Du Bonnet Flowers').should('be.visible')

 })
  
}

getLinkPineRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pine River Flowers').should('be.visible')

 })
  
}

getLinkSaintHyacintheFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Hyacinthe Flowers').should('be.visible')

 })
  
}

getLinkMapleCreekFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Maple Creek Flowers').should('be.visible')

 })
  
}

getLinkSainteJulieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sainte-Julie Flowers').should('be.visible')

 })
  
}

getLinkDeepCoveFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Deep Cove Flowers').should('be.visible')

 })
  
}

getLinkHorseshoeBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Horseshoe Bay Flowers').should('be.visible')

 })
  
}

getLinkMuensterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Muenster Flowers').should('be.visible')

 })
  
}

getLinkNaicamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Naicam Flowers').should('be.visible')

 })
  
}

getLinkRosthernFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rosthern Flowers').should('be.visible')

 })
  
}

getLinkFortLangleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fort Langley Flowers').should('be.visible')

 })
  
}

getLinkBoissevainFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Boissevain Flowers').should('be.visible')

 })
  
}

getLinkDrydenFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dryden Flowers').should('be.visible')

 })
  
}

getLinkEastendFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Eastend Flowers').should('be.visible')

 })
  
}

getLinkKerrobertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kerrobert Flowers').should('be.visible')

 })
  
}

getLinkMiddleSackvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Middle Sackville Flowers').should('be.visible')

 })
  
}

getLinkSorelTracyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sorel-Tracy Flowers').should('be.visible')

 })
  
}

getLinkBigRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Big River Flowers').should('be.visible')

 })
  
}

getLinkEasternPassageFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Eastern Passage Flowers').should('be.visible')

 })
  
}

getLinkLaRongeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Ronge Flowers').should('be.visible')

 })
  
}

getLinkManiwakiFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Maniwaki Flowers').should('be.visible')

 })
  
}

getLinkSaltcoatsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saltcoats Flowers').should('be.visible')

 })
  
}

getLinkShoalLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Shoal Lake Flowers').should('be.visible')

 })
  
}

getLinkBenitoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Benito Flowers').should('be.visible')

 })
  
}

getLinkCarrotRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Carrot River Flowers').should('be.visible')

 })
  
}

getLinkSeptIlesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sept-Iles Flowers').should('be.visible')

 })
  
}

getLinkTreherneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Treherne Flowers').should('be.visible')

 })
  
}

getLinkThorsbyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Thorsby Flowers').should('be.visible')

 })
  
}

getLinkBonAccordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bon Accord Flowers').should('be.visible')

 })
  
}

getLinkChurchillFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Churchill Flowers').should('be.visible')

 })
  
}

getLinkEastKildonanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('East Kildonan Flowers').should('be.visible')

 })
  
}

getLinkHeadingleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Headingley Flowers').should('be.visible')

 })
  
}

getLinkRouynNorandaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rouyn-Noranda Flowers').should('be.visible')

 })
  
}

getLinkSnowLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Snow Lake Flowers').should('be.visible')

 })
  
}

getLinkStellartonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Stellarton Flowers').should('be.visible')

 })
  
}

getLinkCansoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Canso Flowers').should('be.visible')

 })
  
}

getLinkDalmenyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dalmeny Flowers').should('be.visible')

 })
  
}

getLinkFortCoulongeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fort-Coulonge Flowers').should('be.visible')

 })
  
}

getLinkGullLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gull Lake Flowers').should('be.visible')

 })
  
}

getLinkNewSareptaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('New Sarepta Flowers').should('be.visible')

 })
  
}

getLinkRiverHeightsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('River Heights Flowers').should('be.visible')

 })
  
}

getLinkSpringhillFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Springhill Flowers').should('be.visible')

 })
  
}

getLinkStewiackeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Stewiacke Flowers').should('be.visible')

 })
  
}

getLinkWoodlawnFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Woodlawn Flowers').should('be.visible')

 })
  
}

getLinkTilburyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Tilbury Flowers').should('be.visible')

 })
  
}

getLinkSaintAmableFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Amable Flowers').should('be.visible')

 })
  
}

getLinkSaintLucFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Luc Flowers').should('be.visible')

 })
  
}

getLinkSoutheyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Southey Flowers').should('be.visible')

 })
  
}

getLinkTacheFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Tache Flowers').should('be.visible')

 })
  
}

getLinkUpperSackvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Upper Sackville Flowers').should('be.visible')

 })
  
}

getLinkViscountFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Viscount Flowers').should('be.visible')

 })
  
}

getLinkWestKildonanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('West Kildonan Flowers').should('be.visible')

 })
  
}

getLinkWhitemouthFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Whitemouth Flowers').should('be.visible')

 })
  
}

getLinkWoodsideFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Woodside Flowers').should('be.visible')

 })
  
}

getLinkAnmoreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Anmore Flowers').should('be.visible')

 })
  
}

getLinkLionsBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lions Bay Flowers').should('be.visible')

 })
  
}

getLinkWarburgFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Warburg Flowers').should('be.visible')

 })
  
}

getLinkMcmastervilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mcmasterville Flowers').should('be.visible')

 })
  
}

getLinkBelcarraFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Belcarra Flowers').should('be.visible')

 })
  
}

getLinkSaskatoonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saskatoon Flowers').should('be.visible')

 })
  
}

getLinkReginaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Regina Flowers').should('be.visible')

 })
  
}

getLinkRichmondHillFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Richmond Hill Flowers').should('be.visible')

 })
  
}

getLinkWhitbyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Whitby Flowers').should('be.visible')

 })
  
}

getLinkThunderBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Thunder Bay Flowers').should('be.visible')

 })
  
}

getLinkChathamKentFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chatham-Kent Flowers').should('be.visible')

 })
  
}

getLinkCapeBretonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cape Breton Flowers').should('be.visible')

 })
  
}

getLinkPickeringFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pickering Flowers').should('be.visible')

 })
  
}

getLinkRedDeerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Red Deer Flowers').should('be.visible')

 })
  
}

getLinkNorthVancouverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('North Vancouver Flowers').should('be.visible')

 })
  
}

getLinkStrathconaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Strathcona Flowers').should('be.visible')

 })
  
}

getLinkNiagaraFallsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Niagara Falls Flowers').should('be.visible')

 })
  
}

getLinkClaringtonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Clarington Flowers').should('be.visible')

 })
  
}

getLinkKawarthaLakesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kawartha Lakes Flowers').should('be.visible')

 })
  
}

getLinkPrinceGeorgeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Prince George Flowers').should('be.visible')

 })
  
}

getLinkMapleRidgeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Maple Ridge Flowers').should('be.visible')

 })
  
}

getLinkSaintJohnFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint John Flowers').should('be.visible')

 })
  
}

getLinkNorfolkCountyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Norfolk County Flowers').should('be.visible')

 })
  
}

getLinkNewWestminsterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('New Westminster Flowers').should('be.visible')

 })
  
}


getLinkStAlbertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('St. Albert Flowers').should('be.visible')

 })
  
}

getLinkCaledonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Caledon Flowers').should('be.visible')

 })
  
}

getLinkHaltonHillsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Halton Hills Flowers').should('be.visible')

 })
  
}

getLinkNorthBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('North Bay Flowers').should('be.visible')

 })
  
}

getLinkMiltonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Milton Flowers').should('be.visible')

 })
  
}

getLinkPortCoquitlamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Port Coquitlam Flowers').should('be.visible')

 })
  
}

getLinkWellandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Welland Flowers').should('be.visible')

 })
  
}

getLinkTimminsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Timmins Flowers').should('be.visible')

 })
  
}

getLinkQuinteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Quinte Flowers').should('be.visible')

 })
  
}


getLinkGeorginaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Georgina Flowers').should('be.visible')

 })
  
}

getLinkWestVancouverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('West Vancouver Flowers').should('be.visible')

 })
  
}

getLinkWoodstockFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Woodstock Flowers').should('be.visible')

 })
  
}

getLinkRockyViewFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rocky View Flowers').should('be.visible')

 })
  
}

getLinkPrinceAlbertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Prince Albert Flowers').should('be.visible')

 })
  
}

getLinkLakeshoreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lakeshore Flowers').should('be.visible')

 })
  
}

getLinkCharlottetownFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Charlottetown Flowers').should('be.visible')

 })
  
}

getLinkMooseJawFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Moose Jaw Flowers').should('be.visible')

 })
  
}

getLinkInnisfilFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Innisfil Flowers').should('be.visible')

 })
  
}


getLinkFortErieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fort Erie Flowers').should('be.visible')

 })
  
}

getLinkCampbellRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Campbell River Flowers').should('be.visible')

 })
  
}

getLinkParklandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Parkland Flowers').should('be.visible')

 })
  
}

getLinkLeamingtonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Leamington Flowers').should('be.visible')

 })
  
}

getLinkNewTecumsethFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('New Tecumseth Flowers').should('be.visible')

 })
  
}

getLinkNorthCowichanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('North Cowichan Flowers').should('be.visible')

 })
  
}

getLinkPortMoodyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Port Moody Flowers').should('be.visible')

 })
  
}

getLinkOrangevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Orangeville Flowers').should('be.visible')

 })
  
}

getLinkWellingtonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Wellington Flowers').should('be.visible')

 })
  
}


getLinkPrinceEdwardFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Prince Edward Flowers').should('be.visible')

 })
  
}

getLinkMountPearlFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mount Pearl Flowers').should('be.visible')

 })
  
}

getLinkStouffvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Stouffville Flowers').should('be.visible')

 })
  
}

getLinkTecumsehFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Tecumseh Flowers').should('be.visible')

 })
  
}

getLinkGrimsbyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grimsby Flowers').should('be.visible')

 })
  
}

getLinkOwenSoundFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Owen Sound Flowers').should('be.visible')

 })
  
}

getLinkAmherstburgFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Amherstburg Flowers').should('be.visible')

 })
  
}

getLinkLincolnFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lincoln Flowers').should('be.visible')

 })
  
}

getLinkScugogFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Scugog Flowers').should('be.visible')

 })
  
}


getLinkEastGwillimburyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('East Gwillimbury Flowers').should('be.visible')

 })
  
}

getLinkBrandonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brandon Flowers').should('be.visible')

 })
  
}

getLinkPortagelaPrairieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Portage la Prairie Flowers').should('be.visible')

 })
  
}

getLinkSelkirkFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Selkirk Flowers').should('be.visible')

 })
  
}

getLinkFlinFlonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Flin Flon Flowers').should('be.visible')

 })
  
}

getLinkThePasFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('The Pas Flowers').should('be.visible')

 })
  
}

getLinkSwanRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Swan River Flowers').should('be.visible')

 })
  
}

getLinkBeausejourFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beausejour Flowers').should('be.visible')

 })
  
}

getLinkSandyBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sandy Bay Flowers').should('be.visible')

 })
  
}


getLinkYorkMillsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('York Mills Flowers').should('be.visible')

 })
  
}

getLinkPortHopeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Port Hope Flowers').should('be.visible')

 })
  
}

getLinkCobourgFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cobourg Flowers').should('be.visible')

 })
  
}

getLinkLindsayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lindsay Flowers').should('be.visible')

 })
  
}

getLinkFergusFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fergus Flowers').should('be.visible')

 })
  
}

getLinkCollingwoodFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Collingwood Flowers').should('be.visible')

 })
  
}

getLinkStrathroyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Strathroy Flowers').should('be.visible')

 })
  
}

getLinkSimcoeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Simcoe Flowers').should('be.visible')

 })
  
}

getLinkHawkesburyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hawkesbury Flowers').should('be.visible')

 })
  
}


getLinkNapaneeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Napanee Flowers').should('be.visible')

 })
  
}

getLinkMontrealFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Montréal Flowers').should('be.visible')

 })
  
}

getLinkAmquiFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Amqui Flowers').should('be.visible')

 })
  
}

getLinkArcolaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Arcola Flowers').should('be.visible')

 })
  
}

getLinkAsquithFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Asquith Flowers').should('be.visible')

 })
  
}

getLinkBaieSaintPaulFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Baie-Saint-Paul Flowers').should('be.visible')

 })
  
}

getLinkBalcarresFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Balcarres Flowers').should('be.visible')

 })
  
}

getLinkBeisekerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beiseker Flowers').should('be.visible')

 })
  
}

getLinkBirtleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Birtle Flowers').should('be.visible')

 })
  
}


getLinkBoisDesFilionFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bois-Des-Filion Flowers').should('be.visible')

 })
  
}

getLinkBredenburyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bredenbury Flowers').should('be.visible')

 })
  
}

getLinkBrokenheadFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brokenhead Flowers').should('be.visible')

 })
  
}

getLinkBrooklandsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brooklands Flowers').should('be.visible')

 })
  
}

getLinkCabriFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cabri Flowers').should('be.visible')

 })
  
}

getLinkCarignanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Carignan Flowers').should('be.visible')

 })
  
}

getLinkCaronportFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Caronport Flowers').should('be.visible')

 })
  
}

getLinkCartierFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cartier Flowers').should('be.visible')

 })
  
}

getLinkChurchbridgeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Churchbridge Flowers').should('be.visible')

 })
  
}


getLinkColchesterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Colchester Flowers').should('be.visible')

 })
  
}

getLinkColdbrookFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Coldbrook Flowers').should('be.visible')

 })
  
}

getLinkConsulFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Consul Flowers').should('be.visible')

 })
  
}

getLinkContrecoeurFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Contrecoeur Flowers').should('be.visible')

 })
  
}

getLinkCraikFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Craik Flowers').should('be.visible')

 })
  
}

getLinkDelsonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Delson Flowers').should('be.visible')

 })
  
}

getLinkDugaldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dugald Flowers').should('be.visible')

 })
  
}

getLinkDundurnFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dundurn Flowers').should('be.visible')

 })
  
}

getLinkElkhornFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Elkhorn Flowers').should('be.visible')

 })
  
}


getLinkElmwoodFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Elmwood Flowers').should('be.visible')

 })
  
}

getLinkEriksdaleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Eriksdale Flowers').should('be.visible')

 })
  
}

getLinkEstevanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Estevan Flowers').should('be.visible')

 })
  
}

getLinkEstonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Eston Flowers').should('be.visible')

 })
  
}

getLinkEthelbertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ethelbert Flowers').should('be.visible')

 })
  
}

getLinkFillmoreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fillmore Flowers').should('be.visible')

 })
  
}

getLinkGlentworthFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Glentworth Flowers').should('be.visible')

 })
  
}

getLinkGreenwichFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Greenwich Flowers').should('be.visible')

 })
  
}

getLinkGronlidFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gronlid Flowers').should('be.visible')

 })
  
}


getLinkGrunthalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grunthal Flowers').should('be.visible')

 })
  
}

getLinkHaffordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hafford Flowers').should('be.visible')

 })
  
}

getLinkHubleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hubley Flowers').should('be.visible')

 })
  
}

getLinkHuntleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Huntley Flowers').should('be.visible')

 })
  
}

getLinkIrricanaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Irricana Flowers').should('be.visible')

 })
  
}

getLinkItunaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ituna Flowers').should('be.visible')

 })
  
}

getLinkLakesideFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lakeside Flowers').should('be.visible')

 })
  
}

getLinkLangruthFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Langruth Flowers').should('be.visible')

 })
  
}

getLinkLAssomptionFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}


getLinkLawrencetownFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkLockeportFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkMacgregorFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkMarcelinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkMicmacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkMulgraveFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkNeudorfFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkNovaScotiaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkOnanoleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}


getLinkOtterburneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkOungreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkPaddockwoodFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkPointeCalumetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkPonteixFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkPoplarfieldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkRestonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkRitchotFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkRockinghamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}


getLinkRosserFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkSaintIsidoreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Isidore Flowers').should('be.visible')

 })
  
}

getLinkSaintMathieuFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Mathieu Flowers').should('be.visible')

 })
  
}

getLinkSaintPhilippeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Philippe Flowers').should('be.visible')

 })
  
}

getLinkSennevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Senneville Flowers').should('be.visible')

 })
  
}

getLinkShearwaterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Shearwater Flowers').should('be.visible')

 })
  
}

getLinkSouthportFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Southport Flowers').should('be.visible')

 })
  
}

getLinkSpaldingFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Spalding Flowers').should('be.visible')

 })
  
}

getLinkSpeersFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Speers Flowers').should('be.visible')

 })
  
}


getLinkSpragueFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sprague Flowers').should('be.visible')

 })
  
}

getLinkStCharlesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('St Charles Flowers').should('be.visible')

 })
  
}

getLinkSwiftCurrentFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Swift Current Flowers').should('be.visible')

 })
  
}

getLinkTheodoreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Theodore Flowers').should('be.visible')

 })
  
}

getLinkTurtlefordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Turtleford Flowers').should('be.visible')

 })
  
}

getLinkWabowdenFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Wabowden Flowers').should('be.visible')

 })
  
}

getLinkWaywayseecappoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Waywayseecappo Flowers').should('be.visible')

 })
  
}

getLinkWestphalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Westphal Flowers').should('be.visible')

 })
  
}

getLinkYorktonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Yorkton Flowers').should('be.visible')

 })
  
}

getLinkQuebecCityFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Quebec City Flowers').should('be.visible')

 })
  
}

getLinkSackvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sackville Flowers').should('be.visible')

 })
  
}

getLinkVerdunFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Verdun Flowers').should('be.visible')

 })
  
}

getLinkBritishColumbiaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('British Columbia Flowers').should('be.visible')

 })
  
}

getLinkBrossardFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brossard Flowers').should('be.visible')

 })
  
}

getLinkRepentignyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Repentigny Flowers').should('be.visible')

 })
  
}

getLinkLevisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Levis Flowers').should('be.visible')

 })
  
}

getLinkBlainvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Blainville Flowers').should('be.visible')

 })
  
}

getLinkLasalleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lasalle Flowers').should('be.visible')

 })
  
}

getLinkLavalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Laval Flowers').should('be.visible')

 })
  
}

getLinkMercierFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mercier Flowers').should('be.visible')

 })
  
}

getLinkKingsclearFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kingsclear Flowers').should('be.visible')

 })
  
}

getLinkBattlefordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Battleford Flowers').should('be.visible')

 })
  
}

getLinkAlmaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Alma Flowers').should('be.visible')

 })
  
}

getLinkLongueuilFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Longueuil Flowers').should('be.visible')

 })
  
}

getLinkSherbrookeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sherbrooke Flowers').should('be.visible')

 })
  
}

getLinkSaintlaurentFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-laurent Flowers').should('be.visible')

 })
  
}

getLinkTerrebonneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Terrebonne Flowers').should('be.visible')

 })
  
}

getLinkSaintJeromeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Jérome Flowers').should('be.visible')

 })
  
}

getLinkChicoutimiFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chicoutimi Flowers').should('be.visible')

 })
  
}

getLinkRimouskiFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rimouski Flowers').should('be.visible')

 })
  
}

getLinkRichelieuFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Richelieu Flowers').should('be.visible')

 })
  
}

getLinkSaintbrunoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-bruno Flowers').should('be.visible')

 })
  
}

getLinkGranbyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Granby Flowers').should('be.visible')

 })
  
}

getLinkDrummondvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Drummondville Flowers').should('be.visible')

 })
  
}

getLinkChamblyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chambly Flowers').should('be.visible')

 })
  
}

getLinkBeauportFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beauport Flowers').should('be.visible')

 })
  
}


getLinkLorraineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lorraine Flowers').should('be.visible')

 })
  
}

getLinkSaintsauveurFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-sauveur Flowers').should('be.visible')

 })
  
}

getLinkLachineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lachine Flowers').should('be.visible')

 })
  
}

getLinkVictoriavilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Victoriaville Flowers').should('be.visible')

 })
  
}

getLinkJolietteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Joliette Flowers').should('be.visible')

 })
  
}

getLinkMascoucheFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mascouche Flowers').should('be.visible')

 })
  
}

getLinkCharlesbourgFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Charlesbourg Flowers').should('be.visible')

 })
  
}

getLinkBeloeilFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beloeil Flowers').should('be.visible')

 })
  
}

getLinkAnjouFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Anjou Flowers').should('be.visible')

 })
  
}

getLinkSaguenayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saguenay Flowers').should('be.visible')

 })
  
}

getLinkShawiniganFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Shawinigan Flowers').should('be.visible')

 })
  
}

getLinkRosemereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rosemere Flowers').should('be.visible')

 })
  
}

getLinkSainthilaireFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-hilaire Flowers').should('be.visible')

 })
  
}

getLinkVilleneuveFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Villeneuve Flowers').should('be.visible')

 })
  
}

getLinkHullFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hull Flowers').should('be.visible')

 })
  
}

getLinkBoisbriandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Boisbriand Flowers').should('be.visible')

 })
  
}

getLinkMagogFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Magog Flowers').should('be.visible')

 })
  
}

getLinkVarennesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Varennes Flowers').should('be.visible')

 })
  
}

getLinkMontLaurierFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mont-Laurier Flowers').should('be.visible')

 })
  
}

getLinkBaieComeauFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Baie-Comeau Flowers').should('be.visible')

 })
  
}

getLinkVillemarieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ville-marie Flowers').should('be.visible')

 })
  
}

getLinkMirabelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mirabel Flowers').should('be.visible')

 })
  
}

getLinkSaintrochFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-roch Flowers').should('be.visible')

 })
  
}

getLinkCowansvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cowansville Flowers').should('be.visible')

 })
  
}

getLinkLaBaieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Baie Flowers').should('be.visible')

 })
  
}

getLinkSaintlouisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-louis Flowers').should('be.visible')

 })
  
}

getLinkAmosFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Amos Flowers').should('be.visible')

 })
  
}

getLinkPincourtFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pincourt Flowers').should('be.visible')

 })
  
}

getLinkDorvalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dorval Flowers').should('be.visible')

 })
  
}

getLinkMataneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Matane Flowers').should('be.visible')

 })
  
}

getLinkLaSarreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Sarre Flowers').should('be.visible')

 })
  
}

getLinkMontmagnyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Montmagny Flowers').should('be.visible')

 })
  
}

getLinkMontcalmFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Montcalm Flowers').should('be.visible')

 })
  
}

getLinkBuckinghamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Buckingham Flowers').should('be.visible')

 })
  
}

getLinkChateauguayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chateauguay Flowers').should('be.visible')

 })
  
}

getLinkLachenaieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lachenaie Flowers').should('be.visible')

 })
  
}

getLinkSaintmaloFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-malo Flowers').should('be.visible')

 })
  
}

getLinkSaintsulpiceFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-sulpice Flowers').should('be.visible')

 })
  
}

getLinkOkaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Oka Flowers').should('be.visible')

 })
  
}

getLinkCapRougeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cap-Rouge Flowers').should('be.visible')

 })
  
}

getLinkOutremontFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Outremont Flowers').should('be.visible')

 })
  
}

getLinkDolbeaumistassiniFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dolbeau-mistassini Flowers').should('be.visible')

 })
  
}

getLinkVanierFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Vanier Flowers').should('be.visible')

 })
  
}

getLinkBonaventureFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bonaventure Flowers').should('be.visible')

 })
  
}

getLinkLaTuqueFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Tuque Flowers').should('be.visible')

 })
  
}

getLinkBerthiervilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Berthierville Flowers').should('be.visible')

 })
  
}

getLinkBouchervilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Boucherville Flowers').should('be.visible')

 })
  
}

getLinkLorettevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Loretteville Flowers').should('be.visible')

 })
  
}

getLinkDeuxmontagnesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Deux-montagnes Flowers').should('be.visible')

 })
  
}

getLinkBeauharnoisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beauharnois Flowers').should('be.visible')

 })
  
}

getLinkLebourgneufFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lebourgneuf Flowers').should('be.visible')

 })
  
}

getLinkRiviereDuLoupFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-Du-Loup Flowers').should('be.visible')

 })
  
}

getLinkNeufchatelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Neufchâtel Flowers').should('be.visible')

 })
  
}

getLinkLesCoteauxFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Les Coteaux Flowers').should('be.visible')

 })
  
}

getLinkBecancourFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bécancour Flowers').should('be.visible')

 })
  
}

getLinkCharlemagneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Charlemagne Flowers').should('be.visible')

 })
  
}

getLinkSaintconstantFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-constant Flowers').should('be.visible')

 })
  
}

getLinkSaintjeanbaptisteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-jean-baptiste Flowers').should('be.visible')

 })
  
}

getLinkValleyfieldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Valleyfield Flowers').should('be.visible')

 })
  
}

getLinkStGeorgesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('St. Georges Flowers').should('be.visible')

 })
  
}

getLinkThetfordMinesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Thetford Mines Flowers').should('be.visible')

 })
  
}

getLinkSainteThereseFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sainte-Therese Flowers').should('be.visible')

 })
  
}

getLinkLaPrairieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Prairie Flowers').should('be.visible')

 })
  
}

getLinkDubergerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Duberger Flowers').should('be.visible')

 })
  
}

getLinkGreenfieldParkFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Greenfield Park Flowers').should('be.visible')

 })
  
}

getLinkKingsvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kingsville Flowers').should('be.visible')

 })
  
}

getLinkEssexFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Essex Flowers').should('be.visible')

 })
  
}

getLinkSmithsFallsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Smiths Falls Flowers').should('be.visible')

 })
  
}

getLinkCarletonPlaceFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Carleton Place Flowers').should('be.visible')

 })
  
}

getLinkAlmonteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Almonte Flowers').should('be.visible')

 })
  
}

getLinkArnpriorFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Arnprior Flowers').should('be.visible')

 })
  
}

getLinkRenfrewFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Renfrew Flowers').should('be.visible')

 })
  
}

getLinkCobdenFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cobden Flowers').should('be.visible')

 })
  
}

getLinkHuntsvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Huntsville Flowers').should('be.visible')

 })
  
}

getLinkPerthFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Perth Flowers').should('be.visible')

 })
  
}

getLinkBradfordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bradford Flowers').should('be.visible')

 })
  
}

getLinkPetawawaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Petawawa Flowers').should('be.visible')

 })
  
}

getLinkIngersollFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ingersoll Flowers').should('be.visible')

 })
  
}

getLinkGravenhurstFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gravenhurst Flowers').should('be.visible')

 })
  
}

getLinkGananoqueFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gananoque Flowers').should('be.visible')

 })
  
}

getLinkNewBrunswickFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('New Brunswick Flowers').should('be.visible')

 })
  
}

getLinkAlexandriaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Alexandria Flowers').should('be.visible')

 })
  
}

getLinkDeepRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Deep River Flowers').should('be.visible')

 })
  
}

getLinkWasagaBeachFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Wasaga Beach Flowers').should('be.visible')

 })
  
}

getLinkFortFrancesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fort Frances Flowers').should('be.visible')

 })
  
}

getLinkBlindRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Blind River Flowers').should('be.visible')

 })
  
}

getLinkBracebridgeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bracebridge Flowers').should('be.visible')

 })
  
}
getLinkPelhamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pelham Flowers').should('be.visible')

 })
  
}

getLinkTillsonburgFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Tillsonburg Flowers').should('be.visible')

 })
  
}

getLinkErinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Erin Flowers').should('be.visible')

 })
  
}

getLinkKapuskasingFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kapuskasing Flowers').should('be.visible')

 })
  
}

getLinkGoderichFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Goderich Flowers').should('be.visible')

 })
  
}

getLinkHanoverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hanover Flowers').should('be.visible')

 })
  
}

getLinkEspanolaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Espanola Flowers').should('be.visible')

 })
  
}

getLinkCochraneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cochrane Flowers').should('be.visible')

 })
  
}

getLinkHearstFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hearst Flowers').should('be.visible')

 })
  
}

getLinkDeserontoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Deseronto Flowers').should('be.visible')

 })
  
}

getLinkCobaltFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cobalt Flowers').should('be.visible')

 })
  
}

getLinkIroquoisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Iroquois Flowers').should('be.visible')

 })
  
}

getLinkBancroftFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bancroft Flowers').should('be.visible')

 })
  
}

getLinkMoosoneeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Moosonee Flowers').should('be.visible')

 })
  
}

getLinkParrySoundFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Parry Sound Flowers').should('be.visible')

 })
  
}

getLinkNiagaraontheLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Niagara on the Lake Flowers').should('be.visible')

 })
  
}

getLinkParksvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Parksville Flowers').should('be.visible')

 })
  
}

getLinkGreenwoodFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Greenwood Flowers').should('be.visible')

 })
  
}

getLinkPittMeadowsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pitt Meadows Flowers').should('be.visible')

 })
  
}

getLinkDawsonCreekFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dawson Creek Flowers').should('be.visible')

 })
  
}

getLinkWilliamsLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Williams Lake Flowers').should('be.visible')

 })
  
}

getLinkGrandForksFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grand Forks Flowers').should('be.visible')

 })
  
}

getLinkLadysmithFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ladysmith Flowers').should('be.visible')

 })
  
}

getLinkWhiteRockFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('White Rock Flowers').should('be.visible')

 })
  
}

getLinkSalmonArmFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Salmon Arm Flowers').should('be.visible')

 })
  
}

getLinkPowellRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Powell River Flowers').should('be.visible')

 })
  
}

getLinkPrinceRupertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Prince Rupert Flowers').should('be.visible')

 })
  
}

getLinkFortNelsonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fort Nelson Flowers').should('be.visible')

 })
  
}

getLinkColwoodFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Colwood Flowers').should('be.visible')

 })
  
}

getLinkTrailFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Trail Flowers').should('be.visible')

 })
  
}

getLinkRevelstokeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Revelstoke Flowers').should('be.visible')

 })
  
}

getLinkMerrittFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Merritt Flowers').should('be.visible')

 })
  
}

getLinkKimberleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kimberley Flowers').should('be.visible')

 })
  
}

getLinkDuncanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Duncan Flowers').should('be.visible')

 })
  
}

getLinkArmstrongFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Armstrong Flowers').should('be.visible')

 })
  
}

getLinkRosslandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rossland Flowers').should('be.visible')

 })
  
}

getLinkSidneyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sidney Flowers').should('be.visible')

 })
  
}

getLinkOsoyoosFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Osoyoos Flowers').should('be.visible')

 })
  
}

getLinkOliverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Oliver Flowers').should('be.visible')

 })
  
}

getLinkGibsonsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gibsons Flowers').should('be.visible')

 })
  
}

getLinkPrincetonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Princeton Flowers').should('be.visible')

 })
  
}

getLinkTerraceFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Terrace Flowers').should('be.visible')

 })
  
}

getLinkQuesnelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Quesnel Flowers').should('be.visible')

 })
  
}

getLinkCastlegarFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Castlegar Flowers').should('be.visible')

 })
  
}

getLinkFernieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fernie Flowers').should('be.visible')

 })
  
}

getLinkEnderbyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Enderby Flowers').should('be.visible')

 })
  
}

getLinkSmithersFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Smithers Flowers').should('be.visible')

 })
  
}

getLinkColdLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cold Lake Flowers').should('be.visible')

 })
  
}

getLinkDeWintonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('De Winton Flowers').should('be.visible')

 })
  
}

getLinkDrumhellerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Drumheller Flowers').should('be.visible')

 })
  
}

getLinkWhitecourtFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Whitecourt Flowers').should('be.visible')

 })
  
}

getLinkFortSaskatchewanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fort Saskatchewan Flowers').should('be.visible')

 })
  
}

getLinkLaurentianHillsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Laurentian Hills Flowers').should('be.visible')

 })
  
}

getLinkClarenceCreekFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Clarence Creek Flowers').should('be.visible')

 })
  
}

getLinkPenetanguisheneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Penetanguishene Flowers').should('be.visible')

 })
  
}

getLinkVankleekHillFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Vankleek Hill Flowers').should('be.visible')

 })
  
}

getLinkRainyRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rainy River Flowers').should('be.visible')

 })
  
}

getLinkMintoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Minto Flowers').should('be.visible')

 })
  
}

getLinkPetroliaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Petrolia Flowers').should('be.visible')

 })
  
}

getLinkMattawaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mattawa Flowers').should('be.visible')

 })
  
}

getLinkGrandValleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grand Valley Flowers').should('be.visible')

 })
  
}

getLinkGoreBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gore Bay Flowers').should('be.visible')

 })
  
}

getLinkBruceMinesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bruce Mines Flowers').should('be.visible')

 })
  
}

getLinkMidlandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Midland Flowers').should('be.visible')

 })
  
}

getLinkMonoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mono Flowers').should('be.visible')

 })
  
}

getLinkShelburneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Shelburne Flowers').should('be.visible')

 })
  
}

getLinkMarathonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Marathon Flowers').should('be.visible')

 })
  
}

getLinkAtikokanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Atikokan Flowers').should('be.visible')

 })
  
}

getLinkEnglehartFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Englehart Flowers').should('be.visible')

 })
  
}

getLinkThessalonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Thessalon Flowers').should('be.visible')

 })
  
}

getLinkKearneyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kearney Flowers').should('be.visible')

 })
  
}

getLinkSpanishFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Spanish Flowers').should('be.visible')

 })
  
}

getLinkLatchfordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Latchford Flowers').should('be.visible')

 })
  
}

getLinkPortHawkesburyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Port Hawkesbury Flowers').should('be.visible')

 })
  
}

getLinkWestvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Westville Flowers').should('be.visible')

 })
  
}

getLinkRobervalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Roberval Flowers').should('be.visible')

 })
  
}

getLinkMarievilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Marieville Flowers').should('be.visible')

 })
  
}

getLinkCoaticookFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Coaticook Flowers').should('be.visible')

 })
  
}

getLinkFarnhamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Farnham Flowers').should('be.visible')

 })
  
}

getLinkChandlerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chandler Flowers').should('be.visible')

 })
  
}

getLinkChibougamauFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chibougamau Flowers').should('be.visible')

 })
  
}

getLinkLouisevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Louiseville Flowers').should('be.visible')

 })
  
}

getLinkPlessisvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Plessisville Flowers').should('be.visible')

 })
  
}

getLinkBeaucevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beauceville Flowers').should('be.visible')

 })
  
}

getLinkSuttonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sutton Flowers').should('be.visible')

 })
  
}

getLinkPortCartierFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Port Cartier Flowers').should('be.visible')

 })
  
}

getLinkMontJoliFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mont Joli Flowers').should('be.visible')

 })
  
}

getLinkLacMeganticFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac Megantic Flowers').should('be.visible')

 })
  
}

getLinkMontTremblantFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mont Tremblant Flowers').should('be.visible')

 })
  
}

getLinkKirklandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kirkland Flowers').should('be.visible')

 })
  
}

getLinkGaspeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gaspe Flowers').should('be.visible')

 })
  
}

getLinkLavaltrieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lavaltrie Flowers').should('be.visible')

 })
  
}

getLinkPrevostFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Prevost Flowers').should('be.visible')

 })
  
}

getLinkNicoletFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Nicolet Flowers').should('be.visible')

 })
  
}

getLinkBromontFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bromont Flowers').should('be.visible')

 })
  
}

getLinkAsbestosFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Asbestos Flowers').should('be.visible')

 })
  
}

getLinkDonnaconaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Donnacona Flowers').should('be.visible')

 })
  
}

getLinkPrincevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Princeville Flowers').should('be.visible')

 })
  
}

getLinkSaintRemiFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint Remi Flowers').should('be.visible')

 })
  
}

getLinkLaMalbaieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Malbaie Flowers').should('be.visible')

 })
  
}

getLinkPontRougeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pont Rouge Flowers').should('be.visible')

 })
  
}

getLinkMapleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Maple Flowers').should('be.visible')

 })
  
}

getLinkPrescottFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Prescott Flowers').should('be.visible')

 })
  
}

getLinkHopeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hope Flowers').should('be.visible')

 })
  
}

getLinkAdstockFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Adstock Flowers').should('be.visible')

 })
  
}

getLinkAguanishFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Aguanish Flowers').should('be.visible')

 })
  
}

getLinkAlbanelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Albanel Flowers').should('be.visible')

 })
  
}

getLinkAlbertvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Albertville Flowers').should('be.visible')

 })
  
}

getLinkAlleynetCawoodFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Alleyn-et-Cawood Flowers').should('be.visible')

 })
  
}

getLinkAngliersFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Angliers Flowers').should('be.visible')

 })
  
}

getLinkAngeGardienFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ange-Gardien Flowers').should('be.visible')

 })
  
}

getLinkArmaghFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Armagh Flowers').should('be.visible')

 })
  
}

getLinkArundelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Arundel Flowers').should('be.visible')

 })
  
}

getLinkAscotCornerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ascot Corner Flowers').should('be.visible')

 })
  
}

getLinkAstoJonctionFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Aston-Jonction Flowers').should('be.visible')

 })
  
}

getLinkAuclairFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Auclair Flowers').should('be.visible')

 })
  
}

getLinkAudetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Audet Flowers').should('be.visible')

 })
  
}

getLinkAumondFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Aumond Flowers').should('be.visible')

 })
  
}

getLinkAustinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Austin Flowers').should('be.visible')

 })
  
}

getLinkAuthierFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Authier Flowers').should('be.visible')

 })
  
}

getLinkAuthierNordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Authier-Nord Flowers').should('be.visible')

 })
  
}

getLinkAyersCliffFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Ayer's Cliff Flowers").should('be.visible')

 })
  
}

getLinkBaiedesSablesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Baie-des-Sables Flowers').should('be.visible')

 })
  
}

getLinkBaieduFebvreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Baie-du-Febvre Flowers').should('be.visible')

 })
  
}

getLinkBaieJohanBeetzFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Baie-Johan-Beetz Flowers').should('be.visible')

 })
  
}

getLinkBaieSainteCatherineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Baie-Sainte-Catherine Flowers').should('be.visible')

 })
  
}

getLinkBaieTriniteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Baie-Trinite Flowers').should('be.visible')

 })
  
}

getLinkBarkmereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Barkmere Flowers').should('be.visible')

 })
  
}

getLinkBarnstonOuestFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Barnston-Ouest Flowers').should('be.visible')

 })
  
}

getLinkBarrauteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Barraute Flowers').should('be.visible')

 })
  
}

getLinkBatiscanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Batiscan Flowers').should('be.visible')

 })
  
}

getLinkBearnFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bearn Flowers').should('be.visible')

 })
  
}

getLinkBeaulacGarthbyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beaulac-Garthby Flowers').should('be.visible')

 })
  
}

getLinkBeaupreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Beaupre Flowers').should('be.visible')

 })
  
}

getLinkBeginFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Begin Flowers').should('be.visible')

 })
  
}

getLinkBelcourtFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Belcourt Flowers').should('be.visible')

 })
  
}

getLinkBellefeuilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bellefeuille Flowers').should('be.visible')

 })
  
}

getLinkBelleterreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Belleterre Flowers').should('be.visible')

 })
  
}

getLinkBerryFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Berry Flowers').should('be.visible')

 })
  
}


getLinkBerthiersurMerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Berthier-sur-Mer Flowers').should('be.visible')

 })
  
}

getLinkBethanieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bethanie Flowers').should('be.visible')

 })
  
}

getLinkBiencourtFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Biencourt Flowers').should('be.visible')

 })
  
}

getLinkBlackLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Black Lake Flowers').should('be.visible')

 })
  
}

getLinkBlancSablonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Blanc-Sablon Flowers').should('be.visible')

 })
  
}

getLinkBlueSeaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Blue Sea Flowers').should('be.visible')

 })
  
}

getLinkBoileauFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Boileau Flowers').should('be.visible')

 })
  
}

getLinkBoisFrancFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bois-Franc Flowers').should('be.visible')

 })
  
}

getLinkBoischatelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Boischatel Flowers').should('be.visible')

 })
  
}

getLinkBoltonEstFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bolton-Est Flowers').should('be.visible')

 })
  
}

getLinkBoltonOuestFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bolton-Ouest Flowers').should('be.visible')

 })
  
}

getLinkBonneEsperanceFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bonne-Esperance Flowers').should('be.visible')

 })
  
}

getLinkBonsecoursFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bonsecours Flowers').should('be.visible')

 })
  
}

getLinkBouchetteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bouchette Flowers').should('be.visible')

 })
  
}

getLinkBowmanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bowman Flowers').should('be.visible')

 })
  
}

getLinkBrebeufFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brebeuf Flowers').should('be.visible')

 })
  
}

getLinkBrighamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brigham Flowers').should('be.visible')

 })
  
}

getLinkBristolFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bristol Flowers').should('be.visible')

 })
  
}

getLinkBromeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brome Flowers').should('be.visible')

 })
  
}

getLinkBromptonvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bromptonville Flowers').should('be.visible')

 })
  
}

getLinkBrownsburgChathamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Brownsburg-Chatham Flowers').should('be.visible')

 })
  
}


getLinkBrysonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bryson Flowers').should('be.visible')

 })
  
}

getLinkBuryFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Bury Flowers').should('be.visible')

 })
  
}

getLinkCabanoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cabano Flowers').should('be.visible')

 })
  
}

getLinkCacounaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cacouna Flowers').should('be.visible')

 })
  
}

getLinkCadillacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cadillac Flowers').should('be.visible')

 })
  
}

getLinkCalixaLavalleeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Calixa-Lavallee Flowers').should('be.visible')

 })
  
}

getLinkCalumetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Calumet Flowers').should('be.visible')

 })
  
}

getLinkCampbellsBayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Campbell's Bay Flowers").should('be.visible')

 })
  
}

getLinkCantleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cantley Flowers').should('be.visible')

 })
  
}

getLinkCapauxMeulesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cap-aux-Meules Flowers').should('be.visible')

 })
  
}

getLinkCapChatFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cap-Chat Flowers').should('be.visible')

 })
  
}

getLinkCapdelaMadeleineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cap-de-la-Madeleine Flowers').should('be.visible')

 })
  
}

getLinkCapSaintIgnaceFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cap-Saint-Ignace Flowers').should('be.visible')

 })
  
}

getLinkCaplanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Caplan Flowers').should('be.visible')

 })
  
}

getLinkCarletonsurMerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Carleton-sur-Mer Flowers').should('be.visible')

 })
  
}

getLinkCausapscalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Causapscal Flowers').should('be.visible')

 })
  
}

getLinkCayamantFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cayamant Flowers').should('be.visible')

 })
  
}

getLinkChambordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chambord Flowers').should('be.visible')

 })
  
}

getLinkChamplainFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Champlain Flowers').should('be.visible')

 })
  
}

getLinkChampneufFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Champneuf Flowers').should('be.visible')

 })
  
}

getLinkChapaisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chapais Flowers').should('be.visible')

 })
  
}


getLinkCharetteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Charette Flowers').should('be.visible')

 })
  
}

getLinkCharnyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Charny Flowers').should('be.visible')

 })
  
}

getLinkChartiervilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chartierville Flowers').should('be.visible')

 })
  
}

getLinkChateauRicherFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chateau-Richer Flowers').should('be.visible')

 })
  
}

getLinkChazelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chazel Flowers').should('be.visible')

 })
  
}


getLinkChelseaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chelsea Flowers').should('be.visible')

 })
  
}

getLinkChenevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cheneville Flowers').should('be.visible')

 })
  
}

getLinkChertseyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chertsey Flowers').should('be.visible')

 })
  
}

getLinkChestervilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chesterville Flowers').should('be.visible')

 })
  
}

getLinkChichesterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chichester Flowers').should('be.visible')

 })
  
}


getLinkChuteauxOutardesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chute-aux-Outardes Flowers').should('be.visible')

 })
  
}

getLinkChuteSaintPhilippeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Chute-Saint-Philippe Flowers').should('be.visible')

 })
  
}

getLinkClarendonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Clarendon Flowers').should('be.visible')

 })
  
}

getLinkClermontFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Clermont Flowers').should('be.visible')

 })
  
}

getLinkClervalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Clerval Flowers').should('be.visible')

 })
  
}


getLinkClevelandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cleveland Flowers').should('be.visible')

 })
  
}

getLinkCloridormeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cloridorme Flowers').should('be.visible')

 })
  
}

getLinkColombierFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Colombier Flowers').should('be.visible')

 })
  
}

getLinkComptonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Compton Flowers').should('be.visible')

 })
  
}

getLinkCookshireFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cookshire Flowers').should('be.visible')

 })
  
}


getLinkCookshireEatonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Cookshire-Eaton Flowers').should('be.visible')

 })
  
}

getLinkCoteauduLacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Coteau-du-Lac Flowers').should('be.visible')

 })
  
}

getLinkCourcellesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Courcelles Flowers').should('be.visible')

 })
  
}

getLinkCrabtreeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Crabtree Flowers').should('be.visible')

 })
  
}

getLinkDanvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Danville Flowers').should('be.visible')

 })
  
}


getLinkDaveluyvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Daveluyville Flowers').should('be.visible')

 })
  
}

getLinkDegelisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Degelis Flowers').should('be.visible')

 })
  
}

getLinkDeleageFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Deleage Flowers').should('be.visible')

 })
  
}

getLinkDenholmFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Denholm Flowers').should('be.visible')

 })
  
}

getLinkDesbiensFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Desbiens Flowers').should('be.visible')

 })
  
}

getLinkDeschaillonssurSaintLaurentFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Deschaillons-sur-Saint-Laurent Flowers').should('be.visible')

 })
  
}

getLink(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('').should('be.visible')

 })
  
}

getLinkDeschambaultGrondinesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Deschambault-Grondines Flowers').should('be.visible')

 })
  
}

getLinkDisraeliFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Disraeli Flowers').should('be.visible')

 })
  
}

getLinkDixvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dixville Flowers').should('be.visible')

 })
  
}


getLinkDosquetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dosquet Flowers').should('be.visible')

 })
  
}

getLinkDudswellFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dudswell Flowers').should('be.visible')

 })
  
}

getLinkDuhamelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Duhamel Flowers').should('be.visible')

 })
  
}

getLinkDundeeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dundee Flowers').should('be.visible')

 })
  
}

getLinkDunhamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dunham Flowers').should('be.visible')

 })
  
}


getLinkDuparquetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Duparquet Flowers').should('be.visible')

 })
  
}

getLinkDupuyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Dupuy Flowers').should('be.visible')

 })
  
}

getLinkDurhamSudFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Durham-Sud Flowers').should('be.visible')

 })
  
}

getLinkEastAngusFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('East Angus Flowers').should('be.visible')

 })
  
}

getLinkEastBroughtonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('East Broughton Flowers').should('be.visible')

 })
  
}


getLinkEastFarnhamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('East Farnham Flowers').should('be.visible')

 })
  
}

getLinkEastHerefordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('East Hereford Flowers').should('be.visible')

 })
  
}

getLinkEastmanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Eastman Flowers').should('be.visible')

 })
  
}

getLinkEganSudFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Egan-Sud Flowers').should('be.visible')

 })
  
}

getLinkElginFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Elgin Flowers').should('be.visible')

 })
  
}


getLinkEntrelacsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Entrelacs Flowers').should('be.visible')

 })
  
}

getLinkEscuminacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Escuminac Flowers').should('be.visible')

 })
  
}

getLinkEspritSaintFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Esprit-Saint Flowers').should('be.visible')

 })
  
}

getLinkEsterelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Esterel Flowers').should('be.visible')

 })
  
}

getLinkFassettFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fassett Flowers').should('be.visible')

 })
  
}


getLinkFerlandetBoilleauFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ferland-et-Boilleau Flowers').should('be.visible')

 })
  
}

getLinkFermeNeuveFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ferme-Neuve Flowers').should('be.visible')

 })
  
}

getLinkFermontFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fermont Flowers').should('be.visible')

 })
  
}

getLinkFleurimontFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fleurimont Flowers').should('be.visible')

 })
  
}

getLinkForestvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Forestville Flowers').should('be.visible')

 })
  
}


getLinkFossambaultsurleLacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fossambault-sur-le-Lac Flowers').should('be.visible')

 })
  
}

getLinkFranklinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Franklin Flowers').should('be.visible')

 })
  
}

getLinkFranquelinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Franquelin Flowers').should('be.visible')

 })
  
}

getLinkFrelighsburgFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Frelighsburg Flowers').should('be.visible')

 })
  
}

getLinkFrontenacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Frontenac Flowers').should('be.visible')

 })
  
}


getLinkFugerevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Fugereville Flowers').should('be.visible')

 })
  
}

getLinkGallichanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gallichan Flowers').should('be.visible')

 })
  
}

getLinkGirardvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Girardville Flowers').should('be.visible')

 })
  
}

getLinkGodboutFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Godbout Flowers').should('be.visible')

 })
  
}

getLinkGodmanchesterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Godmanchester Flowers').should('be.visible')

 })
  
}


getLinkGoreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gore Flowers').should('be.visible')

 })
  
}

getLinkGracefieldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gracefield Flowers').should('be.visible')

 })
  
}

getLinkGrandMereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grand-Mere Flowers').should('be.visible')

 })
  
}

getLinkGrandMetisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grand-Metis Flowers').should('be.visible')

 })
  
}

getLinkGrandRemousFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grand-Remous Flowers').should('be.visible')

 })
  
}


getLinkGrandSaintEspritFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grand-Saint-Esprit Flowers').should('be.visible')

 })
  
}

getLinkGrandeRiviereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grande-Riviere Flowers').should('be.visible')

 })
  
}

getLinkGrandeValleeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grande-Vallee Flowers').should('be.visible')

 })
  
}

getLinkGrandesPilesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grandes-Piles Flowers').should('be.visible')

 })
  
}

getLinkGrenvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grenville Flowers').should('be.visible')

 })
  
}


getLinkGrenvillesurlaRougeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grenville-sur-la-Rouge Flowers').should('be.visible')

 })
  
}

getLinkGrosMecatinaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Gros-Mecatina Flowers').should('be.visible')

 })
  
}

getLinkGrosseIleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grosse-Ile Flowers').should('be.visible')

 })
  
}

getLinkGrossesRochesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Grosses-Roches Flowers').should('be.visible')

 })
  
}

getLinkGuerinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Guerin Flowers').should('be.visible')

 })
  
}


getLinkHamNordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ham-Nord Flowers').should('be.visible')

 })
  
}

getLinkHamSudFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ham-Sud Flowers').should('be.visible')

 })
  
}

getLinkHampdenFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hampden Flowers').should('be.visible')

 })
  
}

getLinkHarringtonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Harrington Flowers').should('be.visible')

 })
  
}

getLinkHatleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hatley Flowers').should('be.visible')

 })
  
}


getLinkHavelockFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Havelock Flowers').should('be.visible')

 })
  
}

getLinkHavreSaintPierreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Havre-Saint-Pierre Flowers').should('be.visible')

 })
  
}

getLinkHebertvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hebertville Flowers').should('be.visible')

 })
  
}

getLinkHebertvilleStationFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hebertville-Station Flowers').should('be.visible')

 })
  
}

getLinkHemmingfordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hemmingford Flowers').should('be.visible')

 })
  
}


getLinkHenryvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Henryville Flowers').should('be.visible')

 })
  
}

getLinkHerouxvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Herouxville Flowers').should('be.visible')

 })
  
}

getLinkHinchinbrookeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hinchinbrooke Flowers').should('be.visible')

 })
  
}

getLinkHonfleurFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Honfleur Flowers').should('be.visible')

 })
  
}

getLinkHopeTownFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Hope Town Flowers').should('be.visible')

 })
  
}


getLinkHowickFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Howick Flowers').should('be.visible')

 })
  
}

getLinkHuberdeauFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Huberdeau Flowers').should('be.visible')

 })
  
}

getLinkHuntingdonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Huntingdon Flowers').should('be.visible')

 })
  
}

getLinkIbervilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Iberville Flowers').should('be.visible')

 })
  
}

getLinkIrlandeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Irlande Flowers').should('be.visible')

 })
  
}


getLinkIvrysurleLacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ivry-sur-le-Lac Flowers').should('be.visible')

 })
  
}

getLinkJonquiereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Jonquiere Flowers').should('be.visible')

 })
  
}

getLinkKamouraskaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kamouraska Flowers').should('be.visible')

 })
  
}

getLinkKazabazuaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kazabazua Flowers').should('be.visible')

 })
  
}

getLinkKiamikaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kiamika Flowers').should('be.visible')

 })
  
}


getLinkKingsburyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kingsbury Flowers').should('be.visible')

 })
  
}

getLinkKingseyFallsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kingsey Falls Flowers').should('be.visible')

 })
  
}

getLinkKinnearsMillsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Kinnear's Mills Flowers").should('be.visible')

 })
  
}

getLinkKipawaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Kipawa Flowers').should('be.visible')

 })
  
}

getLinkLAncienneLoretteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ancienne-Lorette Flowers").should('be.visible')

 })
  
}


getLinkLAngeGardienFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ange-Gardien Flowers").should('be.visible')

 })
  
}

getLinkLAnnonciationFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Annonciation Flowers").should('be.visible')

 })
  
}

getLinkLAnseSaintJeanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Anse-Saint-Jean Flowers").should('be.visible')

 })
  
}

getLinkLAscensionFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ascension Flowers").should('be.visible')

 })
  
}

getLinkLAscensiondePatapediaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ascension-de-Patapedia Flowers").should('be.visible')

 })
  
}


getLinkLepiphanieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'epiphanie Flowers").should('be.visible')

 })
  
}

getLinkLIleBizardFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ile-Bizard Flowers").should('be.visible')

 })
  
}

getLinkLIleCadieuxFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ile-Cadieux Flowers").should('be.visible')

 })
  
}

getLinkLIledAnticostiFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ile-d'Anticosti Flowers").should('be.visible')

 })
  
}

getLinkLIleDorvalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ile-Dorval Flowers").should('be.visible')

 })
  
}


getLinkLIleduGrandCalumetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ile-du-Grand-Calumet Flowers").should('be.visible')

 })
  
}

getLinkLIlePerrotFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Ile-Perrot Flowers").should('be.visible')

 })
  
}

getLinkLIsleauxAllumettesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Isle-aux-Allumettes Flowers").should('be.visible')

 })
  
}

getLinkLIsleauxCoudresFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Isle-aux-Coudres Flowers").should('be.visible')

 })
  
}

getLinkLIsleVerteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Isle-Verte Flowers").should('be.visible')

 })
  
}


getLinkLIsletFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("L'Islet Flowers").should('be.visible')

 })
  
}

getLinkLaBostonnaisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Bostonnais Flowers').should('be.visible')

 })
  
}

getLinkLaConceptionFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Conception Flowers').should('be.visible')

 })
  
}

getLinkLaCorneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Corne Flowers').should('be.visible')

 })
  
}

getLinkLaDoreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Dore Flowers').should('be.visible')

 })
  
}

getLinkLaDurantayeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Durantaye Flowers').should('be.visible')

 })
  
}

getLinkLaGuadeloupeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Guadeloupe Flowers').should('be.visible')

 })
  
}

getLinkLaMacazaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Macaza Flowers').should('be.visible')

 })
  
}

getLinkLaMartreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Martre Flowers').should('be.visible')

 })
  
}

getLinkLaMinerveFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Minerve Flowers').should('be.visible')

 })
  
}


getLinkLaMorandiereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Morandiere Flowers').should('be.visible')

 })
  
}

getLinkLaMotteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Motte Flowers').should('be.visible')

 })
  
}

getLinkLaPatrieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Patrie Flowers').should('be.visible')

 })
  
}

getLinkLaPecheFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Peche Flowers').should('be.visible')

 })
  
}

getLinkLaPlaineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Plaine Flowers').should('be.visible')

 })
  
}


getLinkLaPocatiereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Pocatiere Flowers').should('be.visible')

 })
  
}

getLinkLaPresentationFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Presentation Flowers').should('be.visible')

 })
  
}

getLinkLaRedemptionFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Redemption Flowers').should('be.visible')

 })
  
}

getLinkLaReineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Reine Flowers').should('be.visible')

 })
  
}

getLinkLaTrinitedesMontsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Trinite-des-Monts Flowers').should('be.visible')

 })
  
}


getLinkLaVisitationdelIleDupasFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("La Visitation-de-l'Ile-Dupas Flowers").should('be.visible')

 })
  
}

getLinkLaVisitationdeYamaskaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('La Visitation-de-Yamaska Flowers').should('be.visible')

 })
  
}

getLinkLabelleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Labelle Flowers').should('be.visible')

 })
  
}

getLinkLabrecqueFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Labrecque Flowers').should('be.visible')

 })
  
}

getLinkLacauSaumonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-au-Saumon Flowers').should('be.visible')

 })
  
}


getLinkLacauxSablesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-aux-Sables Flowers').should('be.visible')

 })
  
}

getLinkLacBeauportFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Beauport Flowers').should('be.visible')

 })
  
}

getLinkLacBouchetteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Bouchette Flowers').should('be.visible')

 })
  
}

getLinkLacBromeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Brome Flowers').should('be.visible')

 })
  
}

getLinkLacDelageFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Delage Flowers').should('be.visible')

 })
  
}


getLinkLacdesAiglesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-des-Aigles Flowers').should('be.visible')

 })
  
}

getLinkLacdesecorcesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-des-ecorces Flowers').should('be.visible')

 })
  
}

getLinkLacdesPlagesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-des-Plages Flowers').should('be.visible')

 })
  
}

getLinkLacdesSeizeIlesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-des-Seize-Iles Flowers').should('be.visible')

 })
  
}

getLinkLacDroletFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Drolet Flowers').should('be.visible')

 })
  
}


getLinkLacduCerfFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-du-Cerf Flowers').should('be.visible')

 })
  
}

getLinkLacedouardFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-edouard Flowers').should('be.visible')

 })
  
}

getLinkLacEtcheminFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Etchemin Flowers').should('be.visible')

 })
  
}

getLinkLacFrontiereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Frontiere Flowers').should('be.visible')

 })
  
}

getLinkLacPoulinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Poulin Flowers').should('be.visible')

 })
  
}


getLinkLacSaguayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Saguay Flowers').should('be.visible')

 })
  
}

getLinkLacSaintCharlesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Saint-Charles Flowers').should('be.visible')

 })
  
}

getLinkLacSaintJosephFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Saint-Joseph Flowers').should('be.visible')

 })
  
}

getLinkLacSaintPaulFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Saint-Paul Flowers').should('be.visible')

 })
  
}

getLinkLacSainteMarieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Sainte-Marie Flowers').should('be.visible')

 })
  
}


getLinkLacSergentFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Sergent Flowers').should('be.visible')

 })
  
}

getLinkLacSimonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Simon Flowers').should('be.visible')

 })
  
}

getLinkLacSuperieurFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Superieur Flowers').should('be.visible')

 })
  
}

getLinkLacTremblantNordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lac-Tremblant-Nord Flowers').should('be.visible')

 })
  
}

getLinkLacolleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lacolle Flowers').should('be.visible')

 })
  
}


getLinkLafontaineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lafontaine Flowers').should('be.visible')

 })
  
}

getLinkLaforceFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Laforce Flowers').should('be.visible')

 })
  
}

getLinkLamarcheFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lamarche Flowers').should('be.visible')

 })
  
}

getLinkLambtonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lambton Flowers').should('be.visible')

 })
  
}

getLinkLandrienneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Landrienne Flowers').should('be.visible')

 })
  
}


getLinkLanoraieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lanoraie Flowers').should('be.visible')

 })
  
}

getLinkLantierFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lantier Flowers').should('be.visible')

 })
  
}

getLinkLaroucheFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Larouche Flowers').should('be.visible')

 })
  
}

getLinkLaterriereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Laterriere Flowers').should('be.visible')

 })
  
}

getLinkLatulipeetGabouryFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Latulipe-et-Gaboury Flowers').should('be.visible')

 })
  
}


getLinkLaunayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Launay Flowers').should('be.visible')

 })
  
}

getLinkLaurierStationFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Laurier-Station Flowers').should('be.visible')

 })
  
}

getLinkLaverlochereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Laverlochere Flowers').should('be.visible')

 })
  

}

getLinkLawrencevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lawrenceville Flowers').should('be.visible')

 })
  
}

getLinkLeGardeurFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Le Gardeur Flowers').should('be.visible')

 })
  
}

getLinkLebelsurQuevillonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lebel-sur-Quevillon Flowers').should('be.visible')

 })
  
}

getLinkLeclercvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Leclercville Flowers').should('be.visible')

 })
  
}


getLinkLefebvreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lefebvre Flowers').should('be.visible')

 })
  
}

getLinkLejeuneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lejeune Flowers').should('be.visible')

 })
  
}

getLinkLemieuxFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lemieux Flowers').should('be.visible')

 })
  
}

getLinkLennoxvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lennoxville Flowers').should('be.visible')

 })
  
}

getLinkLeryFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lery Flowers').should('be.visible')

 })
  
}


getLinkLesBergeronnesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Les Bergeronnes Flowers').should('be.visible')

 })
  
}

getLinkLesCedresFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Les Cedres Flowers').should('be.visible')

 })
  
}

getLinkLeseboulementsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Les eboulements Flowers').should('be.visible')

 })
  
}

getLinkLesHauteursFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Les Hauteurs Flowers').should('be.visible')

 })
  
}

getLinkLesIlesdelaMadeleineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Les Iles-de-la-Madeleine Flowers').should('be.visible')

 })
  
}


getLinkLesMechinsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Les Mechins Flowers').should('be.visible')

 })
  
}

getLinkLingwickFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lingwick Flowers').should('be.visible')

 })
  
}

getLinkLitchfieldFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Litchfield Flowers').should('be.visible')

 })
  
}

getLinkLochaberFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lochaber Flowers').should('be.visible')

 })
  
}

getLinkLochaberPartieOuestFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lochaber-Partie-Ouest Flowers').should('be.visible')

 })
  
}


getLinkLonguePointedeMinganFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Longue-Pointe-de-Mingan Flowers').should('be.visible')

 })
  
}

getLinkLongueRiveFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Longue-Rive Flowers').should('be.visible')

 })
  
}

getLinkLorrainvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lorrainville Flowers').should('be.visible')

 })
  
}

getLinkLotbiniereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lotbiniere Flowers').should('be.visible')

 })
  
}

getLinkLowFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Low Flowers').should('be.visible')

 })
  
}


getLinkLucevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Luceville Flowers').should('be.visible')

 })
  
}

getLinkLysterFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Lyster Flowers').should('be.visible')

 })
  
}

getLinkMacamicFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Macamic Flowers').should('be.visible')

 })
  
}

getLinkMalarticFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Malartic Flowers').should('be.visible')

 })
  
}


getLinkMandevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mandeville Flowers').should('be.visible')

 })
  
}

getLinkManseauFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Manseau Flowers').should('be.visible')

 })
  
}

getLinkMansfieldetPontefractFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mansfield-et-Pontefract Flowers').should('be.visible')

 })
  
}

getLinkMapleGroveFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Maple Grove Flowers').should('be.visible')

 })
  
}

getLinkMariaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Maria Flowers').should('be.visible')

 })
  
}


getLinkMaricourtFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Maricourt Flowers').should('be.visible')

 })
  
}

getLinkMarsouiFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Marsoui Flowers').should('be.visible')

 })
  
}

getLinkMarstonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Marston Flowers').should('be.visible')

 })
  
}

getLinkMartinvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Martinville Flowers').should('be.visible')

 })
  
}

getLinkMaskinongeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Maskinonge Flowers').should('be.visible')

 })
  
}


getLinkMassonAngersFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Masson-Angers Flowers').should('be.visible')

 })
  
}

getLinkMassuevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Massueville Flowers').should('be.visible')

 })
  
}

getLinkMatagamiFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Matagami Flowers').should('be.visible')

 })
  
}

getLinkMatapediaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Matapedia Flowers').should('be.visible')

 })
  
}


getLinkMayoFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mayo Flowers').should('be.visible')

 })
  
}

getLinkMelbourneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Melbourne Flowers').should('be.visible')

 })
  
}

getLinkMelochevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Melocheville Flowers').should('be.visible')

 })
  
}

getLinkMessinesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Messines Flowers').should('be.visible')

 })
  
}

getLinkMetissurMerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Metis-sur-Mer Flowers').should('be.visible')

 })
  
}


getLinkMilanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Milan Flowers').should('be.visible')

 })
  
}

getLinkMilleIslesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mille-Isles Flowers').should('be.visible')

 })
  
}

getLinkMoffetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Moffet Flowers').should('be.visible')

 })
  
}

getLinkMoisieFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Moisie Flowers').should('be.visible')

 })
  
}

getLinkMontCarmelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mont-Carmel Flowers').should('be.visible')

 })
  
}


getLinkMontSaintGregoireFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mont-Saint-Gregoire Flowers').should('be.visible')

 })
  
}

getLinkMontSaintHilaireFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mont-Saint-Hilaire Flowers').should('be.visible')

 })
  
}

getLinkMontSaintMichelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mont-Saint-Michel Flowers').should('be.visible')

 })
  
}

getLinkMontSaintPierreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mont-Saint-Pierre Flowers').should('be.visible')

 })
  
}

getLinkMontcerfLyttonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Montcerf-Lytton Flowers').should('be.visible')

 })
  
}


getLinkMontebelloFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Montebello Flowers').should('be.visible')

 })
  
}

getLinkMontpellierFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Montpellier Flowers').should('be.visible')

 })
  
}

getLinkMontrealOuestFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Montreal-Ouest Flowers').should('be.visible')

 })
  
}

getLinkMorinHeightsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Morin-Heights Flowers').should('be.visible')

 })
  
}

getLinkMulgraveetDerryFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Mulgrave-et-Derry Flowers').should('be.visible')

 })
  
}


getLinkMurdochvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Murdochville Flowers').should('be.visible')

 })
  
}

getLinkNamurFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Namur Flowers').should('be.visible')

 })
  
}

getLinkNantesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Nantes Flowers').should('be.visible')

 })
  
}

getLinkNapiervilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Napierville Flowers').should('be.visible')

 })
  
}

getLinkNatashquanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Natashquan Flowers').should('be.visible')

 })
  
}


getLinkNedelecFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Nedelec Flowers').should('be.visible')

 })
  
}

getLinkNeuvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Neuville Flowers').should('be.visible')

 })
  
}

getLinkNewCarlisleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('New Carlisle Flowers').should('be.visible')

 })
  
}

getLinkNewRichmondFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('New Richmond Flowers').should('be.visible')

 })
  
}

getLinkNewportFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Newport Flowers').should('be.visible')

 })
  
}


getLinkNominingueFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Nominingue Flowers').should('be.visible')

 })
  
}

getLinkNorbertvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Norbertville Flowers').should('be.visible')

 })
  
}

getLinkNormandinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Normandin Flowers').should('be.visible')

 })
  
}

getLinkNormetalFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Normetal Flowers').should('be.visible')

 })
  
}

getLinkNorthHatleyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('North Hatley Flowers').should('be.visible')

 })
  
}


getLinkNotreDameAuxiliatricedeBucklandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-Auxiliatrice-de-Buckland Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedeBonsecoursFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-de-Bonsecours Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedeHamFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-de-Ham Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedelIlePerrotFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Notre-Dame-de-l'Ile-Perrot Flowers").should('be.visible')

 })
  
}

getLinkNotreDamedelaMerciFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-de-la-Merci Flowers').should('be.visible')

 })
  
}


getLinkNotreDamedelaPaixFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-de-la-Paix Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedelaSaletteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-de-la-Salette Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedeLoretteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-de-Lorette Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedeLourdesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-de-Lourdes Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedeMontaubanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-de-Montauban Flowers').should('be.visible')

 })
  
}


getLinkNotreDamedeStanbridgeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-de-Stanbridge Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedesBoisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-des-Bois Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedesMontsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-des-Monts Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedesNeigesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-des-Neiges Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedesPinsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-des-Pins Flowers').should('be.visible')

 })
  
}


getLinkNotreDamedesPrairiesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-des-Prairies Flowers').should('be.visible')

 })
  
}

getLinkNotreDamedesSeptDouleursFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-des-Sept-Douleurs Flowers').should('be.visible')

 })
  
}

getLinkNotreDameduBonConseilFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-du-Bon-Conseil Flowers').should('be.visible')

 })
  
}

getLinkNotreDameduLacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-du-Lac Flowers').should('be.visible')

 })
  
}

getLinkNotreDameduLausFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-du-Laus Flowers').should('be.visible')

 })
  
}


getLinkNotreDameduMontCarmelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-du-Mont-Carmel Flowers').should('be.visible')

 })
  
}

getLinkNotreDameduNordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-du-Nord Flowers').should('be.visible')

 })
  
}

getLinkNotreDameduPortageFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-du-Portage Flowers').should('be.visible')

 })
  
}

getLinkNotreDameduRosaireFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Notre-Dame-du-Rosaire Flowers').should('be.visible')

 })
  
}

getLinkNotreDameduSacreCoeurdIssoudunFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Notre-Dame-du-Sacre-Coeur-d'Issoudun Flowers").should('be.visible')

 })
  
}


getLinkNouvelleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Nouvelle Flowers').should('be.visible')

 })
  
}

getLinkNoyanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Noyan Flowers').should('be.visible')

 })
  
}

getLinkOgdenFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ogden Flowers').should('be.visible')

 })
  
}

getLinkOmervilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Omerville Flowers').should('be.visible')

 })
  
}

getLinkOrfordFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Orford Flowers').should('be.visible')

 })
  
}


getLinkOrmstownFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ormstown Flowers').should('be.visible')

 })
  
}

getLinkOtterLakeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Otter Lake Flowers').should('be.visible')

 })
  
}

getLinkOtterburnParkFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Otterburn Park Flowers').should('be.visible')

 })
  
}

getLinkPackingtonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Packington Flowers').should('be.visible')

 })
  
}

getLinkPadoueFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Padoue Flowers').should('be.visible')

 })
  
}


getLinkPalmarolleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Palmarolle Flowers').should('be.visible')

 })
  
}

getLinkPapineauvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Papineauville Flowers').should('be.visible')

 })
  
}

getLinkParisvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Parisville Flowers').should('be.visible')

 })
  
}

getLinkPaspebiacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Paspebiac Flowers').should('be.visible')

 })
  
}

getLinkPerceFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Perce Flowers').should('be.visible')

 })
  
}


getLinkPeribonkaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Peribonka Flowers').should('be.visible')

 })
  
}


getLinkPetitSaguenayFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Petit-Saguenay Flowers').should('be.visible')

 })
  
}

getLinkPetiteRiviereSaintFrancoisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Petite-Riviere-Saint-Francois Flowers').should('be.visible')

 })
  
}

getLinkPetiteValleeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Petite-Vallee Flowers').should('be.visible')

 })
  
}


getLinkPiedmontFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Piedmont Flowers').should('be.visible')

 })
  
}

getLinkPierrefondsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pierrefonds Flowers').should('be.visible')

 })
  
}

getLinkPierrevilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pierreville Flowers').should('be.visible')

 })
  
}

getLinkPikeRiverFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pike River Flowers').should('be.visible')

 })
  
}

getLinkPiopolisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Piopolis Flowers').should('be.visible')

 })
  
}


getLinkPlaisanceFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Plaisance Flowers').should('be.visible')

 })
  
}

getLinkPointealaCroixFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pointe-a-la-Croix Flowers').should('be.visible')

 })
  
}

getLinkPointeauPereFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pointe-au-Pere Flowers').should('be.visible')

 })
  
}

getLinkPointeauxOutardesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pointe-aux-Outardes Flowers').should('be.visible')

 })
  
}

getLinkPointedesCascadesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pointe-des-Cascades Flowers').should('be.visible')

 })
  
}


getLinkPointeFortuneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pointe-Fortune Flowers').should('be.visible')

 })
  
}

getLinkPointeLebelFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pointe-Lebel Flowers').should('be.visible')

 })
  
}

getLinkPontiacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Pontiac Flowers').should('be.visible')

 })
  
}

getLinkPortageduFortFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Portage-du-Fort Flowers').should('be.visible')

 })
  
}

getLinkPortneufFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Portneuf Flowers').should('be.visible')

 })
  
}


getLinkPortneufsurMerFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Portneuf-sur-Mer Flowers').should('be.visible')

 })
  
}

getLinkPoulariesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Poularies Flowers').should('be.visible')

 })
  
}

getLinkPreissacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Preissac Flowers').should('be.visible')

 })
  
}

getLinkRacineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Racine Flowers').should('be.visible')

 })
  
}

getLinkRagueneauFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ragueneau Flowers').should('be.visible')

 })
  
}


getLinkRapideDanseurFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rapide-Danseur Flowers').should('be.visible')

 })
  
}

getLinkRapidesdesJoachimsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rapides-des-Joachims Flowers').should('be.visible')

 })
  
}

getLinkRawdonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rawdon Flowers').should('be.visible')

 })
  
}

getLinkRemignyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Remigny Flowers').should('be.visible')

 })
  
}

getLinkRigaudFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rigaud Flowers').should('be.visible')

 })
  
}


getLinkRimouskiEstFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rimouski-Est Flowers').should('be.visible')

 })
  
}

getLinkRiponFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ripon Flowers').should('be.visible')

 })
  
}

getLinkRistigouchePartieSudEstFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Ristigouche-Partie-Sud-Est Flowers').should('be.visible')

 })
  
}

getLinkRiviereaClaudeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-a-Claude Flowers').should('be.visible')

 })
  
}

getLinkRiviereauTonnerreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-au-Tonnerre Flowers').should('be.visible')

 })
  
}

getLinkRiviereBeaudetteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-Beaudette Flowers').should('be.visible')

 })
  
}

getLinkRiviereBleueFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-Bleue Flowers').should('be.visible')

 })
  
}

getLinkRiviereeterniteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-eternite Flowers').should('be.visible')

 })
  
}

getLinkRiviereHevaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-Heva Flowers').should('be.visible')

 })
  
}


getLinkRiviereOuelleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-Ouelle Flowers').should('be.visible')

 })
  
}

getLinkRiviereRougeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-Rouge Flowers').should('be.visible')

 })
  
}

getLinkRiviereSaintJeanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Riviere-Saint-Jean Flowers').should('be.visible')

 })
  
}

getLinkRobertsonvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Robertsonville Flowers').should('be.visible')

 })
  
}

getLinkRochebaucourtFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rochebaucourt Flowers').should('be.visible')

 })
  
}


getLinkRockForestFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rock Forest Flowers').should('be.visible')

 })
  
}

getLinkRoquemaureFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Roquemaure Flowers').should('be.visible')

 })
  
}

getLinkRougemontFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Rougemont Flowers').should('be.visible')

 })
  
}

getLinkRoxboroFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Roxboro Flowers').should('be.visible')

 })
  
}

getLinkRoxtonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Roxton Flowers').should('be.visible')

 })
  
}


getLinkRoxtonFallsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Roxton Falls Flowers').should('be.visible')

 })
  
}

getLinkRoxtonPondFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Roxton Pond Flowers').should('be.visible')

 })
  
}

getLinkSacreCoeurFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sacre-Coeur Flowers').should('be.visible')

 })
  
}

getLinkSacreCoeurdeJesusFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Sacre-Coeur-de-Jesus Flowers').should('be.visible')

 })
  
}

getLinkSaintAdalbertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Adalbert Flowers').should('be.visible')

 })
  
}


getLinkSaintAdelmeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Adelme Flowers').should('be.visible')

 })
  
}

getLinkSaintAdelpheFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Adelphe Flowers').should('be.visible')

 })
  
}

getLinkSaintAdolphedHowardFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Saint-Adolphe-d'Howard Flowers").should('be.visible')

 })
  
}

getLinkSaintAdrienFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Adrien Flowers').should('be.visible')

 })
  
}

getLinkSaintAdriendIrlandeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Saint-Adrien-d'Irlande Flowers").should('be.visible')

 })
  
}


getLinkSaintAgapitFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Agapit Flowers').should('be.visible')

 })
  
}

getLinkSaintAimeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Aime Flowers').should('be.visible')

 })
  
}

getLinkSaintAimedesLacsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Aime-des-Lacs Flowers').should('be.visible')

 })
  
}

getLinkSaintAimeduLacdesIlesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Aime-du-Lac-des-Iles Flowers').should('be.visible')

 })
  
}

getLinkSaintAlbanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alban Flowers').should('be.visible')

 })
  
}


getLinkSaintAlbertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Albert Flowers').should('be.visible')

 })
  
}

getLinkSaintAlexandreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alexandre Flowers').should('be.visible')

 })
  
}

getLinkSaintAlexandredeKamouraskaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alexandre-de-Kamouraska Flowers').should('be.visible')

 })
  
}

getLinkSaintAlexisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alexis Flowers').should('be.visible')

 })
  
}

getLinkSaintAlexisdeMatapediaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alexis-de-Matapedia Flowers').should('be.visible')

 })
  
}


getLinkSaintAlexisdesMontsFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alexis-des-Monts Flowers').should('be.visible')

 })
  
}

getLinkSaintAlfredFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alfred Flowers').should('be.visible')

 })
  
}

getLinkSaintAlphonseFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alphonse Flowers').should('be.visible')

 })
  
}

getLinkSaintAlphonsedeGranbyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alphonse-de-Granby Flowers').should('be.visible')

 })
  
}

getLinkSaintAlphonseRodriguezFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Alphonse-Rodriguez Flowers').should('be.visible')

 })
  
}


getLinkSaintAmbroiseFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Ambroise Flowers').should('be.visible')

 })
  
}

getLinkSaintAmbroisedeKildareFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Ambroise-de-Kildare Flowers').should('be.visible')

 })
  
}

getLinkSaintAnacletdeLessardFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Anaclet-de-Lessard Flowers').should('be.visible')

 })
  
}

getLinkSaintAndreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Andre Flowers').should('be.visible')

 })
  
}

getLinkSaintAndreAvellinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Andre-Avellin Flowers').should('be.visible')

 })
  
}


getLinkSaintAndredArgenteuilFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Saint-Andre-d'Argenteuil Flowers").should('be.visible')

 })
  
}

getLinkSaintAndredeRestigoucheFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Andre-de-Restigouche Flowers').should('be.visible')

 })
  
}

getLinkSaintAndreduLacSaintJeanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Andre-du-Lac-Saint-Jean Flowers').should('be.visible')

 })
  
}

getLinkSaintAnicetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Anicet Flowers').should('be.visible')

 })
  
}

getLinkSaintAnselmeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Anselme Flowers').should('be.visible')

 })
  
}


getLinkSaintAntoineFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Antoine Flowers').should('be.visible')

 })
  
}

getLinkSaintAntoinedelIsleauxGruesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Saint-Antoine-de-l'Isle-aux-Grues Flowers").should('be.visible')

 })
  
}

getLinkSaintAntoinedeTillyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Antoine-de-Tilly Flowers').should('be.visible')

 })
  
}

getLinkSaintAntoinesurRichelieuFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Antoine-sur-Richelieu Flowers').should('be.visible')

 })
  
}

getLinkSaintAntoninFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Antonin Flowers').should('be.visible')

 })
  
}


getLinkSaintApollinaireFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Apollinaire Flowers').should('be.visible')

 })
  
}

getLinkSaintArmandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Armand Flowers').should('be.visible')

 })
  
}

getLinkSaintArseneFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Arsene Flowers').should('be.visible')

 })
  
}

getLinkSaintAthanaseFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Athanase Flowers').should('be.visible')

 })
  
}

getLinkSaintAubertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Aubert Flowers').should('be.visible')

 })
  
}


getLinkSaintAugustinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Augustin Flowers').should('be.visible')

 })
  
}

getLinkSaintAugustindeDesmauresFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Augustin-de-Desmaures Flowers').should('be.visible')

 })
  
}

getLinkSaintAugustindeWoburnFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Augustin-de-Woburn Flowers').should('be.visible')

 })
  
}

getLinkSaintBarnabeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Barnabe Flowers').should('be.visible')

 })
  
}

getLinkSaintBarnabeSudFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Barnabe-Sud Flowers').should('be.visible')

 })
  
}


getLinkSaintBarthelemyFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Barthelemy Flowers').should('be.visible')

 })
  
}

getLinkSaintBasileFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Basile Flowers').should('be.visible')

 })
  
}

getLinkSaintBasileleGrandFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Basile-le-Grand Flowers').should('be.visible')

 })
  
}

getLinkSaintBenjaminFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Benjamin Flowers').should('be.visible')

 })
  
}

getLinkSaintBenoitduLacFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Benoit-du-Lac Flowers').should('be.visible')

 })
  
}


getLinkSaintBenoitLabreFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Benoit-Labre Flowers').should('be.visible')

 })
  
}

getLinkSaintBernardFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Bernard Flowers').should('be.visible')

 })
  
}

getLinkSaintBernarddeLacolleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Bernard-de-Lacolle Flowers').should('be.visible')

 })
  
}

getLinkSaintBernarddeMichaudvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Bernard-de-Michaudville Flowers').should('be.visible')

 })
  
}

getLinkSaintBlaisesurRichelieuFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Blaise-sur-Richelieu Flowers').should('be.visible')

 })
  
}


getLinkSaintBonaventureFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Bonaventure Flowers').should('be.visible')

 })
  
}

getLinkSaintBonifaceFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Boniface Flowers').should('be.visible')

 })
  
}

getLinkSaintBrunodeGuiguesFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Bruno-de-Guigues Flowers').should('be.visible')

 })
  
}

getLinkSaintBrunodeKamouraskaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Bruno-de-Kamouraska Flowers').should('be.visible')

 })
  
}

getLinkSaintBrunodeMontarvilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Bruno-de-Montarville Flowers').should('be.visible')

 })
  
}


getLinkSaintCalixteFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Calixte Flowers').should('be.visible')

 })
  
}

getLinkSaintCamilleFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Camille Flowers').should('be.visible')

 })
  
}

getLinkSaintCamilledeLellisFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Camille-de-Lellis Flowers').should('be.visible')

 })
  
}

getLinkSaintCelestinFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Celestin Flowers').should('be.visible')

 })
  
}

getLinkSaintCesaireFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Cesaire Flowers').should('be.visible')

 })
  
}


getLinkSaintCharlesBorromeeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Charles-Borromee Flowers').should('be.visible')

 })
  
}

getLinkSaintCharlesdeBellechasseFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Charles-de-Bellechasse Flowers').should('be.visible')

 })
  
}

getLinkSaintCharlesdeBourgetFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Charles-de-Bourget Flowers').should('be.visible')

 })
  
}

getLinkSaintCharlessurRichelieuFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Charles-sur-Richelieu Flowers').should('be.visible')

 })
  
}

getLinkSaintChristophedArthabaskaFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains("Saint-Christophe-d'Arthabaska Flowers").should('be.visible')

 })
  
}


getLinkSaintChrysostomeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Chrysostome Flowers').should('be.visible')

 })
  
}

getLinkSaintClaudeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Claude Flowers').should('be.visible')

 })
  
}

getLinkSaintClementFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Clement Flowers').should('be.visible')

 })
  
}

getLinkSaintCleophasFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Cleophas Flowers').should('be.visible')

 })
  
}

getLinkSaintCleophasdeBrandonFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Cleophas-de-Brandon Flowers').should('be.visible')

 })
  
}


getLinkSaintCletFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Clet Flowers').should('be.visible')

 })
  
}

getLinkSaintColombanFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Colomban Flowers').should('be.visible')

 })
  
}

getLinkSaintComeFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Come Flowers').should('be.visible')

 })
  
}

getLinkSaintCuthbertFlowers(){
  return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Saint-Cuthbert Flowers').should('be.visible')

 })
  
}

///////////////////////////////////////////////////Gift Baskets
 
getLinkCalgaryGiftBaskets(){
  return cy.get('.sitemap_column').eq(2).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Calgary Gift Baskets').should('be.visible')

 })
  
}

getLinkEdmontonGiftBaskets(){
  return cy.get('.sitemap_column').eq(2).then(($topMenu) => {
   cy.wrap($topMenu).find('a').contains('Edmonton Gift Baskets').should('be.visible')

   
 })

}

////
getLinkMataneGiftBaskets(){
  return cy.get('.sitemap_column').eq(2).then(($topMenu) => {
    cy.wrap($topMenu).find('a').contains('Matane Gift Baskets').should('be.visible')
 }) 
}

 /////

 getLinkPortWadeGiftBaskets(){
  return cy.get('.sitemap_column').eq(2).then(($topMenu) => {
    cy.wrap($topMenu).find('a').contains('Port Wade Gift Baskets').should('be.visible')
 })
  
}


/////////////////////////////////////////////Sympathy Flowers

  getLinkCalgarySympathyFlowers() {
    return cy.get('.sitemap_column').eq(3).then(($topMenu) => {
      cy.wrap($topMenu).find('a').contains('Calgary Sympathy Flowers').should('be.visible')

    })

  }

  getLinkEdmontonSympathyFlowers() {
    return cy.get('.sitemap_column').eq(3).then(($topMenu) => {
      cy.wrap($topMenu).find('a').contains('Edmonton Sympathy Flowers').should('be.visible')
    })

  }

  ///

  getLinkPetitMetisSympathyFlowers(){
    return cy.get('.sitemap_column').eq(3).then(($topMenu) => {
      cy.wrap($topMenu).find('a').contains('Petit-Metis Sympathy Flowers').should('be.visible')
    })
  }

  ////

  getLinkPortWadeSympathyFlowers(){
    return cy.get('.sitemap_column').eq(3).then(($topMenu) => {
      cy.wrap($topMenu).find('a').contains('Port Wade Sympathy Flowers').should('be.visible')
    })
  }

  



// getLink(){
//   return cy.get('.sitemap_column').eq(1).then(($topMenu) => {
//    cy.wrap($topMenu).find('a').contains('').should('be.visible')

//  })
  
// }



}

export default new SiteMap;