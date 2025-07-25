import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reporterPageTitle: 'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    },
  },
  chromeWebSecurity: false,
  e2e: {
    async setupNodeEvents(on, config) {
      const mochawesome = await import('cypress-mochawesome-reporter/plugin.js');
      mochawesome.default(on);
      return config;
    },
  },
});















// import cypress, { defineConfig } from "cypress";

// export default defineConfig({
//   reporter: 'cypress-multi-reporters',
//   reporterOptions:{
//     reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
//     mochaJunitReporterReporterOptions: {
//       mochaFile: 'cypress/reports/junit/results-[hash].xml'
//     },
//     cypressMochawesomeReporterReporterOptions:{
//       charts: true,
//       reporterPageTitle: 'Relatório de testes',
//       embeddedScreenshots: true,
//       inlineAssets: true,
//       saveAllAttempts:false
//     },
//   },
//   chromeWebSecurity: false,
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       require('cypress-mochawesome-reporter/plugin')(on)
//     },
//   },
// });
