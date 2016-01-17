// Mocking window and document object:
require('../../dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var React = require('react');
var assert = require('assert');
// TODO - this route should be in a paramenter to avoid coupled component
var Header = require('../../../../app/scripts/components/Header/header');
var headerModel = require('../../../../app/scripts/components/Header/header-model');

describe('Header', function () {
  jsdom({ skipWindowCheck: true });

  it('Show text after ReactDOM rendered', function (){

    // Render a Header in the document
    var header = TestUtils.renderIntoDocument(
      <Header/>
    );

    var headerNode = ReactDOM.findDOMNode(header);
    var title = headerNode.getElementsByClassName('title')[0].innerHTML;
    // Verify that it's equal to the model value
    assert.equal(title, headerModel.title);

  });

});