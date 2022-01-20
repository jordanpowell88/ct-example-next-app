const { defineConfig } = require("cypress");
const { devServer } = require("@cypress/react/plugins/next");

module.exports = defineConfig({
  component: {
    supportFile: "cypress/support/component.js",
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
    devServer,
    devServerConfig: {},
  },
});
