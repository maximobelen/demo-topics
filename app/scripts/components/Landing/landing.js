var React = require('react');
var model = require('./landing-model');
var ReactDOM = require('react-dom');
var TweenMax = require('gsap');
var Header = require('../Header/header');
var TopicBox = require('../TopicBox/topicBox');
var InfoBox = require('../InfoBox/infoBox');

var Landing = React.createClass({

    render: function() {
        
        return (
            <div id="landing">
              <Header ref={'header'}></Header>
              <TopicBox ref={'topicBox'}></TopicBox>
              <InfoBox ref={'infoBox'}></InfoBox>
            </div>
        );

    }
});

module.exports = Landing;