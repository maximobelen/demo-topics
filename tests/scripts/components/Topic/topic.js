// Mocking window and document object:
require('../../dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var React = require('react');
var assert = require('assert');
// TODO - this route should be in a paramenter to avoid coupled component
var Topic = require('../../../../app/scripts/components/Topic/topic');

describe('Topic', function () {
  jsdom({ skipWindowCheck: true });

  it('Set size is okey', function (){

    // Render Topic in the document
    var topic = TestUtils.renderIntoDocument(
      <Topic/>
    );
    topic.setSize('15px');
    // Verify that exist a Header
    assert.equal(topic.container.style.fontSize, '15px');
  });
});