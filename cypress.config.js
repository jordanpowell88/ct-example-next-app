const { defineConfig } = require("cypress");
const { devServer } = require("@cypress/react/plugins/next");

module.exports = defineConfig({
  component: {
    supportFile: "cypress/support/component.js",
    specPattern: "components/**/*.cy.{js,jsx,ts,tsx}",
    devServer,
    devServerConfig: {},
  },
  e2e: {
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
