const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
})