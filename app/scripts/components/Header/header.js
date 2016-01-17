var React = require('react');
var model = require('./header-model');

var Header = React.createClass({
    
  render: function() {
    return (
      <div id="header">
        <h1 className="title">{model.title}</h1>
      </div>
    );
  }
});

module.exports = Header;