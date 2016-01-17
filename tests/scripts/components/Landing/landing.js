// Mocking window and document object:
require('../../dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var React = require('react');
var assert = require('assert');
// TODO - this route should be in a paramenter to avoid coupled component
var Landing = require('../../../../app/scripts/components/Landing/landing');

describe('Landing', function () {
  jsdom({ skipWindowCheck: true });

  it('Has a Header', function (){

    // Render Landing in the document
    var landing = TestUtils.renderIntoDocument(
      <Landing/>
    );

    // Verify that exist a Header
    assert.notEqual(typeof landing.refs.header, 'undefined');
  });

  it('Has a TopicBox', function (){

    // Render Landing in the document
    var landing = TestUtils.renderIntoDocument(
      <Landing/>
    );

    // Verify that exist a Header
    assert.notEqual(typeof landing.refs.topicBox, 'undefined');
  });

  it('Has a InfoBox', function (){

    // Render Landing in the document
    var landing = TestUtils.renderIntoDocument(
      <Landing/>
    );

    // Verify that exist a Header
    assert.notEqual(typeof landing.refs.infoBox, 'undefined'); 
  });
});