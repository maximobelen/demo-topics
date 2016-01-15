var React = require('react');
var model = require('./topic-model');
var ReactDOM = require('react-dom');
var TweenMax = require('gsap');

var Topic = React.createClass({

  setStyle: function(){
    this.setColor(model.style);
    this.setSize(this.props.size);
  },

  setColor: function(model) {
    var color = '';
    if (this.props.sentimentScore < model.lower.value) {
      color = model.lower.color;
    } else {
      if (this.props.sentimentScore > model.higher.value) {
        color = model.higher.color;
      } else {
        color = model.default.color;
      }
    }

    this.container.style.color = color;

  },
  handleMouseDown: function(){
    console.log('mouse down!!');

  },
  setSize: function(size){
    this.container.style.fontSize = size;

  },

  componentDidMount: function() {
    this.container = ReactDOM.findDOMNode(this);
    this.setStyle();
  },

  render: function() {
    return (
      <span className="topic" onMouseDown={this.handleMouseDown}>
      {this.props.label}
      </span>
    );
  }
});

module.exports = Topic;