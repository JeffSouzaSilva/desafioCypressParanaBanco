const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");


// https://github.com/badeball/cypress-cucumber-preprocessor/tree/master
// https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md
// https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/examples/esbuild-cjs/cypress.config.js

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    baseApiUrl: "https://jsonplaceholder.typicode.com",
    specPattern: "cypress/e2e/**/*.feature",
    hideXhr: true,
    setupNodeEvents
  }
})
