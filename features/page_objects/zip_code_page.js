// for chai, see http://chaijs.com/guide/styles/
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

class ZipCodePage {
  constructor(browser) {
    this.browser = browser;
  }

  open() {
    // TODO: Why is '/' not sufficient? Why is baseURL being ignored?
    return browser.get('http://localhost:4200/');
  }

  enterZipCode(zipcode) {
    // TODO extract executeSequentially()
    // per https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
    // "Advanced Mistake #3"
    browser.findElement(By.name('zipcode')).then(function(zipcode_field) {
      var result = Promise.resolve();
      [
        zipcode_field.clear(),
        zipcode_field.sendKeys(zipcode)
      ].forEach(function (promiseFactory) {
        result = result.then(promiseFactory);
      });
      return result;
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


};

module.exports = ZipCodePage;

