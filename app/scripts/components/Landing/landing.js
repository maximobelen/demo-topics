var React = require('react');
var model = require('./landing-model');
var Header = require('../Header/header');
var TopicBox = require('../TopicBox/topicBox');
var InfoBox = require('../InfoBox/infoBox');

var Landing = React.createClass({
  
  topicChanged: function(info){
  	this.refs.infoBox.update(info);
  },

  render: function() {  
    var topicChanged = this.topicChanged;
  
  	return (
        <div id="landing">
          <Header ref={'header'}></Header>
          <TopicBox ref={'topicBox'} emitChange={topicChanged}></TopicBox>
          <InfoBox ref={'infoBox'}></InfoBox>
        </div>
      );
    }
});

module.exports = Landing;