// for chai, see http://chaijs.com/guide/styles/
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

// per https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
// "Advanced Mistake #3"
function executeSequentially(promiseFactories) {
  var result = Promise.resolve();
  promiseFactories.forEach(function (promiseFactory) {
    result = result.then(promiseFactory);
  });
  return result;
}

class ZipCodePage {
  constructor(browser) {
    this.browser = browser;
  }

  open() {
    // TODO: Why is '/' not sufficient? Why is baseURL being ignored?
    return browser.get('http://localhost:4200/');
  }

  enterZipCode(zipcode) {
    browser.findElement(By.name('zipcode')).then(function(zipcode_field) {
      return executeSequentially(
        [
          zipcode_field.clear(),
          zipcode_field.sendKeys(zipcode)
        ]
      );
    });
  }

  assertZipCodeEquals(zipcode) {
    browser.findElement(By.name('zipcode')).getAttribute('value').then(function(zipcode_value) {
      return Promise.all([
        // Choose one of the three following patterns
        assert.equal(zipcode_value, zipcode),     // chai assert syntax
        expect(zipcode_value).to.equal(zipcode),  // chai expect syntax
        zipcode_value.should.equal(zipcode)       // chai should syntax
      ]);
    });
  }


};

module.exports = ZipCodePage;

