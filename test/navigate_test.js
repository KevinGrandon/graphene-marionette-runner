var expect = require('chai').expect;

marionette('basic', function() {
  var client = marionette.client({
    prefs: {
      'browser.shell.checkDefaultBrowser': false
    }
  });

  setup(function() {
    client.goUrl('http://mozilla.org');
  });

  test('can read file on localhost', function() {
    console.log('Navigated!');
  });
});
