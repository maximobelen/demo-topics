var React = require('react');
var Landing = require('./components/Landing/landing');

var App = React.createClass({

  render: function() {
    /*jshint ignore:start */
    return (
      <app>
        <Landing ref={'landing'}></Landing>
      </app>

    );
    /*jshint ignore:end */
  }
});

module.exports = App;