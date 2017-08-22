const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    Given('that {string} is an invalid zip code', function (string, callback) {
     // Write code here that turns the phrase above into concrete actions
     callback(null, 'pending');
    });


    When('the user provides a zip code of {string}', function (string, callback) {
     // Write code here that turns the phrase above into concrete actions
     callback(null, 'pending');
    });


    Then('the system prompts the user for a valid zip code', function (callback) {
     // Write code here that turns the phrase above into concrete actions
     callback(null, 'pending');
    });

});
