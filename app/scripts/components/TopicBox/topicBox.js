var React = require('react');
var model = require('./topicBox-model');
var ReactDOM = require('react-dom');
var Topic = require('../Topic/topic');

var TopicBox = React.createClass({
  
  createSizeRanges: function(modelTopics){
  	var highest = 0;
  	var lowest = Number.MAX_VALUE;
  	for (var i = 0; i < modelTopics.topics.length; i++) {
  		if (modelTopics.topics[i].volume < lowest) {
  			lowest = modelTopics.topics[i].volume;
  		}
  		if (modelTopics.topics[i].volume > highest) {
  			highest = modelTopics.topics[i].volume;
  		}
  	}
  	var range = (highest - lowest) / modelTopics.topicSizes.length;
  	var ranges = [];
  	var current = lowest;
  	ranges.push(lowest);
  	while (current < highest) {
  		current += range;
  		ranges.push(current);
  	} 
  	return ranges;
  },

  handleMouseDown: function(topic) {
    this.props.emitChange(topic);
  },

  componentDidMount: function() {
    this.container = ReactDOM.findDOMNode(this);
  },

  render: function() {
  	var ranges = this.createSizeRanges(model);
    var handleMouseDown =  this.handleMouseDown;
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
            clickUpdate={handleMouseDown}
    				label={object.label}
    				size={object.size}
            volume={object.volume}
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