// Mocking window and document object:
require('../../dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var React = require('react');
var assert = require('assert');
// TODO - this route should be in a paramenter to avoid coupled component
var Info = require('../../../../app/scripts/components/Info/info');

describe('Info', function () {
  jsdom({ skipWindowCheck: true });

  it('Update value', function (){

    // Render Info in the document
    var info = TestUtils.renderIntoDocument(
      <Info/>
    );
    var newValue = 'this is a new value';

    var evalFunc =  function() {
      // Verify that the new value is correctly set
      assert.equal(info.value, newValue);
      // Verify that the new value is displayed to the user
      assert.equal(info.container.getElementsByClassName('variable')[0].innerHTML, newValue);
    };

    info.updateValue(newValue, evalFunc);
 
  });
});