var {defineSupportCode} = require('cucumber');
const {promise} = require('selenium-webdriver');

function CustomWorld() {
  // per https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
  // "Advanced Mistake #3"
  this.executeSequentially = function(promiseFactories) {
    var result = Promise.resolve();
    promiseFactories.forEach(function (promiseFactory) {
      result = result.then(promiseFactory);
    });
    return result;
  }

//  promise.USE_PROMISE_MANAGER = false;
//  console.log("Not using Promise Manager, see https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs#step-1-disabling-the-promise-manager");
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
});
