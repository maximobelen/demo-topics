var React = require('react');
var model = require('./info-model');
var ReactDOM = require('react-dom');
var TweenMax = require('gsap');

var Info = React.createClass({

  componentDidMount: function() {
    this.container = ReactDOM.findDOMNode(this);
  },

  updateValue: function(value, callback) {
  	TweenMax.to(this.container, 0.4, {opacity:0, onComplete: function(){
    	this.value = value;
    	this.setState({currentState: value});
	}.bind(this)});
  	TweenMax.to(this.container, 0.4, {delay: 0.4, opacity:1, onComplete: function(){
      if(callback){
        callback();
      }
    }});
  },

  render: function() {
    return (
      <div className="info">
        <span className='fixed'>{this.props.title}: </span>
        <span className='variable'>{this.value}</span>
      </div>
    );
  }
});

module.exports = Info;