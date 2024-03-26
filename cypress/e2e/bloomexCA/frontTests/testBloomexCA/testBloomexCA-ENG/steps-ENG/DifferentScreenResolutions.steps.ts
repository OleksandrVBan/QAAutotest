class Resolution {



    static checkResolution() {

      cy.log('START Check Resolutions');

      cy.log('Check iPhone X')
      cy.viewport(375, 812);
      cy.get('.mobile_menu_toggle').should('be.visible').should('exist').click();
      cy.window().then((win) => {
        const screenWidth = win.innerWidth;
        const screenHeight = win.innerHeight;
        const expectedWidth = 375;
        const expectedHeight = 812;
      
        expect(screenWidth).to.equal(expectedWidth);
        expect(screenHeight).to.equal(expectedHeight);
      })
      cy.get('.remove').click();


      cy.log('Check Samsung Galaxy S21 Ultra')
      cy.viewport(412, 869);
      cy.get('.mobile_menu_toggle').should('be.visible').should('exist').click();
      cy.window().then((win) => {
        const screenWidth = win.innerWidth;
        const screenHeight = win.innerHeight;
        const expectedWidth = 412;
        const expectedHeight = 869;
      
        expect(screenWidth).to.equal(expectedWidth);
        expect(screenHeight).to.equal(expectedHeight);
      })
      cy.get('.remove').click();

      cy.log('Check Samsung Galaxy S10/S10+')
      cy.viewport(414, 896);
      cy.get('.mobile_menu_toggle').should('be.visible').should('exist').click();
      cy.window().then((win) => {
        const screenWidth = win.innerWidth;
        const screenHeight = win.innerHeight;
        const expectedWidth = 414;
        const expectedHeight = 896;
      
        expect(screenWidth).to.equal(expectedWidth);
        expect(screenHeight).to.equal(expectedHeight);
      })
      cy.get('.remove').click();

      cy.log('Check Google Pixel 3a')
      cy.viewport(360, 760);
      cy.get('.mobile_menu_toggle').should('be.visible').should('exist').click();
      cy.window().then((win) => {
        const screenWidth = win.innerWidth;
        const screenHeight = win.innerHeight;
        const expectedWidth = 360;
        const expectedHeight = 760;
        expect(screenWidth).to.equal(expectedWidth);
        expect(screenHeight).to.equal(expectedHeight);
      })
      cy.get('.remove').click();

      cy.log('Check iPhone 12/12 Pro')
      cy.viewport(390, 844);
      cy.get('.mobile_menu_toggle').should('be.visible').should('exist').click();
      cy.window().then((win) => {
        const screenWidth = win.innerWidth;
        const screenHeight = win.innerHeight;
        const expectedWidth = 390;
        const expectedHeight = 844;
        expect(screenWidth).to.equal(expectedWidth);
        expect(screenHeight).to.equal(expectedHeight);
      })
      cy.get('.remove').click();


      cy.log('Check iPhone 14 Pro Max')
      cy.viewport(428, 926);
      cy.get('.mobile_menu_toggle').should('be.visible').should('exist').click();
      cy.window().then((win) => {
        const screenWidth = win.innerWidth;
        const screenHeight = win.innerHeight;
        const expectedWidth = 428;
        const expectedHeight = 926;
        expect(screenWidth).to.equal(expectedWidth);
        expect(screenHeight).to.equal(expectedHeight);
      })
      cy.get('.remove').click();

      cy.log('Check iPad Pro');
      cy.viewport(1024, 1366);
      cy.get('.logo').should('be.visible').should('exist')
      cy.window().then((win) => {
      const screenWidthTablet = win.innerWidth;
      const screenHeightTablet = win.innerHeight;
      const expectedWidthTablet = 1024;
      const expectedHeightTablet = 1366;
      expect(screenWidthTablet).to.equal(expectedWidthTablet);
      expect(screenHeightTablet).to.equal(expectedHeightTablet);
      });

      cy.log('Check Samsung Galaxy Tab');
      cy.viewport(1200, 1920);
      cy.get('.logo').should('be.visible').should('exist')
      cy.window().then((win) => {
      const screenWidthTablet = win.innerWidth;
      const screenHeightTablet = win.innerHeight;
      const expectedWidthTablet = 1200;
      const expectedHeightTablet = 1920;
      expect(screenWidthTablet).to.equal(expectedWidthTablet);
      expect(screenHeightTablet).to.equal(expectedHeightTablet);
      });

      cy.log('Check MacBook Air');
      cy.viewport(1440, 900);
      cy.get('.logo').should('be.visible').should('exist')
      cy.window().then((win) => {
      const screenWidthTablet = win.innerWidth;
      const screenHeightTablet = win.innerHeight;
      const expectedWidthTablet = 1440;
      const expectedHeightTablet = 900;
      expect(screenWidthTablet).to.equal(expectedWidthTablet);
      expect(screenHeightTablet).to.equal(expectedHeightTablet);
      });

      cy.log('Check Windows Laptop');
      cy.viewport(1366, 768);
      cy.get('.logo').should('be.visible').should('exist')
      cy.window().then((win) => {
      const screenWidthTablet = win.innerWidth;
      const screenHeightTablet = win.innerHeight;
      const expectedWidthTablet = 1366;
      const expectedHeightTablet = 768;
      expect(screenWidthTablet).to.equal(expectedWidthTablet);
      expect(screenHeightTablet).to.equal(expectedHeightTablet);
      });

      cy.log('Check MacBook Pro 13');
      cy.viewport(1260, 1600);
      cy.get('.logo').should('be.visible').should('exist')
      cy.window().then((win) => {
      const screenWidthTablet = win.innerWidth;
      const screenHeightTablet = win.innerHeight;
      const expectedWidthTablet = 1260;
      const expectedHeightTablet = 1600;
      expect(screenWidthTablet).to.equal(expectedWidthTablet);
      expect(screenHeightTablet).to.equal(expectedHeightTablet);
      });

      cy.log('Check MacBook Pro 16');
      cy.viewport(3072, 1920);
      cy.get('.logo').should('be.visible').should('exist')
      cy.window().then((win) => {
      const screenWidthTablet = win.innerWidth;
      const screenHeightTablet = win.innerHeight;
      const expectedWidthTablet = 3072;
      const expectedHeightTablet = 1920;
      expect(screenWidthTablet).to.equal(expectedWidthTablet);
      expect(screenHeightTablet).to.equal(expectedHeightTablet);
      });

      cy.log('Check Windows Laptop 14-inch');
      cy.viewport(1920, 1080);
      cy.get('.logo').should('be.visible').should('exist')
      cy.window().then((win) => {
      const screenWidthTablet = win.innerWidth;
      const screenHeightTablet = win.innerHeight;
      const expectedWidthTablet = 1920;
      const expectedHeightTablet = 1080;
      expect(screenWidthTablet).to.equal(expectedWidthTablet);
      expect(screenHeightTablet).to.equal(expectedHeightTablet);
      });

      cy.log('END Check Resolutions');
      cy.allure().endStep();

    }
  }
  export default Resolution;
