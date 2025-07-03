const { defineConfig } = require("cypress");
const cucumber= require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern:"**/*.feature",
    baseUrl:"https://fnbqas.calidda.com.pe/WebFNB_QA/login",
    setupNodeEvents(on, config) {
      on("file:preprocessor",cucumber());
    },
  },
});
