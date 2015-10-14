var React = require('react'),
    cx = React.addons.classSet,
    joinClasses = require('classnames');

var Panel = React.createClass({
  render() {
    var classes = {
      'card-panel': true
    };
    return (
      <div className={joinClasses(this.props.className, cx(classes))}
        {...this.props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Panel;
