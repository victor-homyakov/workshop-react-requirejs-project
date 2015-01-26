define(function(require) {
  var React = require('react');
  var $ = require('jquery');

  return React.createClass({
    //componentDidMount: function() {},
    //componentWillUnmount: function() {},
    //componentDidUpdate: function() {},

    render: function() {
      return (
        <div>jQuery {$.fn.jquery}, React {React.version}</div>
      );
    }
  });
});
