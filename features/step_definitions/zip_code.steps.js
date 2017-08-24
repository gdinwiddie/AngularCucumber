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
    let page = new ZipCodePage(browser);
    page.open()
    .then(page.enterZipCode(zipcode))
    .then(page.assertZipCodeEquals(zipcode))
    .catch(function(err) {
      logError(err, callback);
    }).finally(function() {
      callback();
    });
  });

class ZipCodePage {
  constructor(browser) {
    this.browser = browser;
  }

  open() {
    // TODO: Why is '/' not sufficient? Why is baseURL being ignored?
    return browser.get('http://localhost:4200/').then(function() {
      console.log('opened page');
    });
  }

  enterZipCode(zipcode) {
    return browser.findElement(By.name('zipcode')).then(function(zipcode_field) {
      zipcode_field.clear();
      zipcode_field.sendKeys(zipcode);
    });
  }

  assertZipCodeEquals(zipcode) {
    return browser.findElement(By.name('zipcode')).getAttribute('value').then(function(zipcode_value) {
      // Choose one of the three following patterns
      assert.equal(zipcode_value, zipcode);     // chai assert syntax
      expect(zipcode_value).to.equal(zipcode);  // chai expect syntax
      zipcode_value.should.equal(zipcode);      // chai should syntax
    });
  }

}

  Then('the system prompts the user for a valid zip code', function (callback) {
    browser.findElement(By.name('errors')).getText().then(function(errorText) {
        expect(errorText).to.contain("invalid ZIP Code");
//        throw("pause");
    }).catch(function(err) {
      logError(err, callback);
    }).finally(function() {
      callback();
    });
  });

  Then('the system does NOT prompt the user for a valid zip code', function (callback) {
    browser.isElementPresent(By.name('errors')).then(function(present){
      if (present) {
        browser.findElement(By.name('errors')).getText().then(function(errorText) {
          expect(errorText).to.not.contain("invalid ZIP Code");
//        throw("pause");
        })
      }
    }).catch(function(err) {
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
