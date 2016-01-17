var React = require('react');
var model = require('./infoBox-model');
var ReactDOM = require('react-dom');
var TweenMax = require('gsap');
var Info = require('../Info/info');

var InfoBox = React.createClass({
  
  getInitialState: function() {
    return {content: 'empty'};
  },

  componentDidMount: function() {
    this.container = ReactDOM.findDOMNode(this);
    this.firstContainer = this.container.getElementsByClassName('first-container')[0];
    this.postContainer = this.container.getElementsByClassName('post-container')[0];
    this.titleNode = this.container.getElementsByClassName('title')[0];
  },

  update: function(info) {
    this.updateInfo(info)
  },
  
  updateInfo: function(info) {
    TweenMax.to(this.titleNode, 0.4, {opacity:0, onComplete: function(){
      this.title = "'" + info.label + "'";
      TweenMax.set(this.postContainer, {display:'block'});
      TweenMax.set(this.firstContainer, {display:'none'});
    }.bind(this)});
    TweenMax.to(this.titleNode, 0.4, {delay:0.4, opacity:1, onComplete: function(){
      this.setState({content: 'full'});
    }.bind(this)});
    for (var key in this.refs) {
      this.refs[key].updateValue(info[key]);
    }
  },

  render: function() {
    return (
      <div id="info-box">
        <div className="first-container">
          <h2>{model.fistMessage}</h2>
        </div>
        <div className="post-container">
          <div className="title">
            <span className='fixed-title'>{model.title}</span>
            <span className='variable-title'>{this.title}</span>
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
      </div>
    );
  }
});

module.exports = InfoBox;