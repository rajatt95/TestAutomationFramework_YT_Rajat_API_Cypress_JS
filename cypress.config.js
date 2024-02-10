const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/api-tests-report',
    charts: true,
    reportPageTitle: 'API Tests Report',
    embeddedScreenshots: true,
    inlineAssets: true,    
    overwrite: true,
    autoOpen: false,
    code: true,
    timestamp: 'longDate',
    showPassed: true,
    saveAllAttempts: false,
  },

  e2e: {

    baseUrl: process.env.BASE_URL || 'https://reqres.in/api/',

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
