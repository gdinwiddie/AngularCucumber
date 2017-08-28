// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
//  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  baseURL: 'http://localhost:4200/',

  // See https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md for options available
  cucumberOpts: {
    require: [
      'features/**/*.js'
    ],
//    tags: false,
//    name: false,
//    format: 'summary',
    format: 'progress',
//    format: 'progress-bar',
//    format: 'json:cuke_output.json',
// not ready    format: 'node_modules/cucumber-pretty',   // see https://www.npmjs.com/package/cucumber-pretty
// errors    format: 'node_modules/cucumber-html-report',// see https://www.npmjs.com/package/cucumber-html-report
// errors    format: 'node_modules/cucumber-html-reporter',  // https://www.npmjs.com/package/cucumber-html-reporter
    profile: false,
    'no-source': true
  }
};
