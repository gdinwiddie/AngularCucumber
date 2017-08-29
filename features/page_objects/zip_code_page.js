const Page = require('./page');
// for chai, see http://chaijs.com/guide/styles/
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

class ZipCodePage extends Page {
  constructor(browser) {
    super(browser);
  }

  open() {
    // TODO: Why is '/' not sufficient? Why is baseURL being ignored?
    return browser.get('http://localhost:4200/');
  }

  enterZipCode(zipcode) {
    browser.findElement(By.name('zipcode')).then(function(zipcode_field) {
      return Page.executeSequentially(
        [
          zipcode_field.clear(),
          zipcode_field.sendKeys(zipcode)
        ]
      );
    });
  }

  assertZipCodeEquals1(zipcode) {
    browser.findElement(By.name('zipcode')).getAttribute('value').then(function(zipcode_value) {
      return Promise.all([
        // Choose one of the three following patterns
        assert.equal(zipcode_value, zipcode),     // chai assert syntax
        expect(zipcode_value).to.equal(zipcode),  // chai expect syntax
        zipcode_value.should.equal(zipcode)       // chai should syntax
      ]);
    });
  }

  assertZipCodeEquals(zipcode) {
    return browser.findElement(By.name('zipcode')).getAttribute('value').then(function(zipcode_value) {
       assert.equal(zipcode_value, zipcode);
    });
  }


  promptsForValidZipCode() {
    return browser.findElement(By.name('errors')).getText().then(function(errorText) {
      expect(errorText).to.contain("invalid ZIP Code");
    });
  }

  doesNotPromptForValidZipCode() {
    // TODO: This may be returning the wrong promise.
    return browser.isElementPresent(By.name('errors')).then(function(present){
      if (present) {
        browser.findElement(By.name('errors')).getText().then(function(errorText) {
          expect(errorText).to.not.contain("invalid ZIP Code");
        });
      }
    });
  }
};

module.exports = ZipCodePage;

