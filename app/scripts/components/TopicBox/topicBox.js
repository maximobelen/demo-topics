var React = require('react');
var model = require('./topicBox-model');
var ReactDOM = require('react-dom');
var TweenMax = require('gsap');
var Topic = require('../Topic/topic');

var TopicBox = React.createClass({
  
  createSizeRanges: function(){
  	var highest = 0;
  	var lowest = Number.MAX_VALUE;
  	for (var i = 0; i < model.topics.length; i++) {
  		if (model.topics[i].volume < lowest) {
  			lowest = model.topics[i].volume;
  		}
  		if (model.topics[i].volume > highest) {
  			highest = model.topics[i].volume;
  		}
  	}
  	var range = (highest - lowest) / model.topicSizes.length;
  	var ranges = [];
  	var current = lowest;
  	ranges.push(lowest);
  	while (current < highest) {
  		current += range;
  		ranges.push(current);
  	} 
  	return ranges;
  },

  componentDidMount: function() {
    this.container = ReactDOM.findDOMNode(this);
  },

  render: function() {
  	var ranges = this.createSizeRanges();
    return (
        <div id="topic-box">       
		{model.topics.map(function(object, i){
			for (var j = 0; j < model.topicSizes.length; j++) {
			 	if(object.volume >= ranges[j] ){
			 		object.size = model.topicSizes[j];
			 	}
			}

			return <Topic 
				ref={'topic'+i}
				label={object.label}
				size={object.size}
				sentiment={object.sentiment}
				sentimentScore={object.sentimentScore}
				key={i}/>;
			})
		}

        </div>
    );
  }
});

module.exports = TopicBox;