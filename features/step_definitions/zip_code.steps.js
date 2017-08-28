const {defineSupportCode} = require('cucumber');
const ZipCodePage = require('../page_objects/zip_code_page');

// for chai, see http://chaijs.com/guide/styles/
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

defineSupportCode(function({Given, When, Then}) {
  Given('that {string} is an invalid zip code', function (string) {
    // TODO: tell backend that this is an invalid zip code
//    return Promise.reject("Just to see it fail");
    return Promise.resolve();
  });

  Given('that {string} is a valid zip code', function (string) {
    // TODO: tell backend that this is a valid zip code
    return Promise.resolve();
  });

  When('the user provides a zip code of {string}', function (zipcode) {
    this.page = new ZipCodePage(browser);
    return this.page.open()
    .then(this.page.enterZipCode(zipcode))
    .then(this.page.assertZipCodeEquals(zipcode))
    ;
  });

  Then('the system prompts the user for a valid zip code', function () {
    return this.page.promptsForValidZipCode()
  });

  Then('the system does NOT prompt the user for a valid zip code', function () {
    return this.page.doesNotPromptForValidZipCode()
  });

});
