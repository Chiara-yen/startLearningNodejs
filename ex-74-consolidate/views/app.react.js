var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', null,
        React.createElement('h1', null, this.props.title),
        React.createElement('div', {id: 'app'}, this.props.text)
      )
    );
  }
})

module.exports = App;
