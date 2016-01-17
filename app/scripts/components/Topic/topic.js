var React = require('react');
var model = require('./topic-model');
var ReactDOM = require('react-dom');
var TweenMax = require('gsap');

var Topic = React.createClass({
  getInitialState: function() {
    return {status: 'idle'};
  },

  handleMouseEnter: function() {
    this.setState({status: 'hover'});
    TweenMax.to(this.container, 0.2, { opacity: 0.4, scale: 1.1, ease: Expo.easeOut});
  },
  
  handleMouseLeave: function() {
    this.setState({status: 'idle'});
    TweenMax.to(this.container, 0.2, { opacity: 1,  scale: 1, ease: Expo.easeOut});
  },

  handleMouseDown: function(){
    var object =  {
      'totalMentions': this.props.volume,
      'positiveMentions': this.props.sentiment.positive,
      'neutralMentions': this.props.sentiment.neutral,
      'negativeMentions': this.props.sentiment.negative,
      'label': this.props.label
    };
    this.props.clickUpdate(object);
  },

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

  setSize: function(size){
    this.container.style.fontSize = size;
  },

  componentDidMount: function() {
    this.container = ReactDOM.findDOMNode(this);
    this.setStyle();
  },

  render: function() {
    return (
      <div className="topic-container">
        <span className="topic" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onMouseDown={this.handleMouseDown}>
          {this.props.label}
        </span>
        <div className="underline"></div>
      </div>
    );
  }
});

module.exports = Topic;