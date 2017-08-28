
class Page {
  constructor(browser) {
    this.browser = browser
  }

  // per https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
  // "Advanced Mistake #3"
  static executeSequentially(promiseFactories) {
    var result = Promise.resolve();
    promiseFactories.forEach(function (promiseFactory) {
      result = result.then(promiseFactory);
    });
    return result;
  }

};

module.exports = Page;
