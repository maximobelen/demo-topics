// Mocking window and document object:
require('../../dom-mock')('<html><body></body></html>');

var jsdom = require('mocha-jsdom');
var TestUtils = require('react-addons-test-utils');
var ReactDOM = require('react-dom');
var React = require('react');
var assert = require('assert');
// TODO - this route should be in a paramenter to avoid coupled component
var TopicBox = require('../../../../app/scripts/components/TopicBox/topicBox');
var TopicBoxModel = require('../../../../app/scripts/components/TopicBox/topicBox-model');

describe('TopicBox', function () {
  jsdom({ skipWindowCheck: true });

  it('Has all the topics', function (){

    // Render TopicBox in the document
    var topicBox = TestUtils.renderIntoDocument(
      <TopicBox/>
    );
    
    var count = 0;
    for (var key in topicBox.refs) {
      count = count + 1;
    }

    // Verify that all the topics where loaded
    assert.equal(count, TopicBoxModel.topics.length);
  });

  it('Check size ranges', function (){

    // Render TopicBox in the document
    var topicBox = TestUtils.renderIntoDocument(
      <TopicBox/>
    );

    var a1 = 30;
    var a2 = 60;
    var a3 = 90;
    var mockModel = {
      "topicSizes": ['20px','30px','40px'],
      "topics": [
        {
          volume:a1
        },
        {
          volume:a2
        },
        {
          volume:a3
        }
      ]
    };

    var ranges = topicBox.createSizeRanges(mockModel);
    // Verify that the ranges are okey
    assert.equal(ranges[0], a1);
    assert.equal(ranges[ranges.length-1], a3);
    assert.equal(a2 - a1 , a3 - a2);
  });
});