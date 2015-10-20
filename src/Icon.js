var React = require('react'),
    cx = require('classnames'),
    constants = require('./constants');

var Icon = React.createClass({
  propTypes: {
    placement: React.PropTypes.oneOf(['left', 'right']),
    mdi: React.PropTypes.oneOf(constants.ICONS).isRequired
  },
  render() {
    var classes = {};
    if (this.props.placement) {
      classes[this.props.placement] = true;
    }
    classes['mdi-' + this.props.mdi] = true;
    return <i className={cx(classes)}></i>;
  }
});

module.exports = Icon;
