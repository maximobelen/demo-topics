var React = require('react');
var model = require('./info-model');
var ReactDOM = require('react-dom');
var TweenMax = require('gsap');

var Info = React.createClass({

  render: function() {
    return (
      <div className="info">
        <span className='fixed'>{this.props.title}: </span>
        <span className='variable'></span>
      </div>
    );
  }
});

module.exports = Info;