
const {defineConfig} = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const path = require('path')
const fs = require('fs-extra')

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);
  
    if (!fs.existsSync(pathToConfigFile)) {
      console.log("No custom config file found")
      return {};
    }
    return fs.readJson(pathToConfigFile)
  }
  

module.exports = defineConfig({
  projectId: 's9su3n',
    e2e: {
        
        setupNodeEvents(on, config) {
            // implement node event listeners here
            allureWriter(on, config);

            const file = config.env.configFile || ''
            return getConfigurationByFile(file),
           
            on('task', {
                // deconstruct the individual properties
                hello({ greeting, name }) {
                  console.log('%s, %s', greeting, name)
        
                  return null
                },
              })

        },
        
        hideXHRInCommandLog: true,

       //to avoid error out of memory
       
      numTestsKeptInMemory: 0,
       experimentalMemoryManagement: true,

        redirectionLimit: 10000,
        
        specPattern: [
            'cypress/e2e/**/*.ts',
            'cypress/e2e/**/*/*.ts',
            'cypress/e2e/**/*/*/*.ts',
            'cypress/e2e/**/*.js',
            'cypress/e2e/**/*/*.js',
            'cypress/e2e/**/*/*/*.js'
        ],

       //  baseUrl: "https://stage2.bloomex.ca",

         baseUrl: "https://bloomex.ca",


  //   baseUrl: "https://qa.dev4.bloomex.ca/",

        testIsolation: true,
        chromeWebSecurity: false,
        modifyObstructiveCode: false,
        defaultCommandTimeout: 60000,
        waitAfterEachCommand: 1000,
        video: true,


        env: {
            allureSkipAutomaticScreenshots: false,
            allureAttachRequests: false,
            allureAddVideoOnPass: true,
            allureResultsPath: "results",
            allure: true,
            ENVIRONMENT: "stage",
            FIRST_NAME: "Test_Name_Auto",
            LAST_NAME: "Test_Last_Name_Auto",
            PHONE: "123456789",
            EMAIL: "qatesting87654@gmail.com",

            googleRefreshToken: '',
            googleClientId: '',
            googleClientSecret: ""

        }
      
    }

    

});
