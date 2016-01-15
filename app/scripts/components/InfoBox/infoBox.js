var React = require('react');
var model = require('./infoBox-model');
var ReactDOM = require('react-dom');
var TweenMax = require('gsap');
var Info = require('../Info/info');

var InfoBox = React.createClass({
  

  componentDidMount: function() {
    this.container = ReactDOM.findDOMNode(this);
  },

  render: function() {
    return (
      <div id="info-box">
        <div className="title">
          <span className='fixed-title'>{model.title}</span>
          <span className='variable-title'>"Aca va un titulo"</span>
        </div>
        <div className="info-container">
          {model.info.map(function(object, i){

            return <Info 
              ref={object.ref}
              title={object.title}
              key={i}/>;
          })}
        </div>
      </div>
    );
  }
});

module.exports = InfoBox;