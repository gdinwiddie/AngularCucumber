const {defineSupportCode} = require('cucumber');
// for chai, see http://chaijs.com/guide/styles/
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

defineSupportCode(function({Given, When, Then}) {

  Given('that {string} is an invalid zip code', function (string, callback) {
    // TODO: implement me
    callback();
  });


  When('the user provides a zip code of {string}', function (zipcode, callback) {
    // TODO: Why is '/' not sufficient? Why is baseURL being ignored?
    browser.get('http://localhost:4200/').then(function() {
      // TODO: Do we need a .then here?
      console.log('opened page');
      browser.findElement(By.name('zipcode')).then(function(zipcode_field) {
        console.log('found zipcode field');
        zipcode_field.sendKeys(zipcode);
      });
      browser.findElement(By.name('zipcode')).getAttribute('value').then(function(zipcode_value) {
        console.log('found zipcode value:' + zipcode_value);
        assert.equal(zipcode_value, zipcode);     // chai assert syntax
        expect(zipcode_value).to.equal(zipcode);  // chai expect syntax
        zipcode_value.should.equal(zipcode);      // chai should syntax
      });
    }).catch(function(err) {
      console.log('err: '+err);
      callback(err);
    }).finally(function() {
      callback();
    });
  });


  Then('the system prompts the user for a valid zip code', function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
});
