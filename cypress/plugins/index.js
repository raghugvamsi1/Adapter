/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    // console.log(config, browser, launchOptions);
    if (browser.name === 'chrome') {
      launchOptions.args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
      launchOptions.args.push("--disable-site-isolation-trials"); //This code has been added due to CORS issue at local for payment information
      launchOptions.args.push("--disable-web-security");
    }
    return launchOptions;
  });
};
