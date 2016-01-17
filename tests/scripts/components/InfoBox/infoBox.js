// Mocking window and document object:
require('../../dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var React = require('react');
var assert = require('assert');
// TODO - this route should be in a paramenter to avoid coupled component
var InfoBox = require('../../../../app/scripts/components/InfoBox/infoBox');

describe('InfoBox', function () {
  jsdom({ skipWindowCheck: true });

  it('Set a new value', function (){

    // Render InfoBox in the document
    var infoBox = TestUtils.renderIntoDocument(
      <InfoBox/>
    );
    var myLabel = 'This is a label';
    var evalFunc =  function() {
      assert.equal(infoBox.postContainer.style.display, 'block');
      assert.equal(infoBox.firstContainer.style.display, 'none');
      assert.equal(infoBox.title, myLabel);
    };
    infoBox.update({label:myLabel}, evalFunc);
  });
});