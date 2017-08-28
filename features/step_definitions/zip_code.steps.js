const {defineSupportCode} = require('cucumber');
const ZipCodePage = require('../page_objects/zip_code_page');

// for chai, see http://chaijs.com/guide/styles/
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

defineSupportCode(function({Given, When, Then}) {

  Given('that {string} is an invalid zip code', function (zipcode, callback) {
    // TODO: implement me
    callback();
  });

  Given('that {string} is a valid zip code', function (zipcode, callback) {
    // TODO: implement me
    callback();
  });

  When('the user provides a zip code of {string}', function (zipcode, callback) {
    this.page = new ZipCodePage(browser);
    this.page.open()
    .then(this.page.enterZipCode(zipcode))
    .then(this.page.assertZipCodeEquals(zipcode))
    .catch(function(err) {
      logError(err, callback);
    }).finally(function() {
      callback();
    });
  });

  Then('the system prompts the user for a valid zip code', function (callback) {
    this.page.promptsForValidZipCode()
    .catch(function(err) {
      logError(err, callback);
    }).finally(function() {
      callback();
    });
  });

  Then('the system does NOT prompt the user for a valid zip code', function (callback) {
    this.page.doesNotPromptForValidZipCode()
    .catch(function(err) {
      logError(err, callback);
    }).finally(function() {
      callback();
    });
  });


  function logError(err, callback) {
    console.log('err: '+err);
    browser.sleep(2000).then(function() {
      callback(err);
    });
  }
});
