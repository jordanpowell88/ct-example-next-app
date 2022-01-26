const { defineConfig } = require("cypress");
const { devServer } = require("@cypress/react/plugins/next");
// const browserify = require("@cypress/browserify-preprocessor");

module.exports = defineConfig({
  component: {
    supportFile: "cypress/support/component.js",
    specPattern: "components/**/*.cy.{js,jsx,ts,tsx}",
    devServer,
    devServerConfig: {},
  },
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
