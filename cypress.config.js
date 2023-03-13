const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8888',
    supportFile: false,
    defaultCommandTimeout: 10000,
  },
});
