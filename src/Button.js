
var React = require('react'),
    classNames = require('classnames'),
    constants = require('./constants'),
    BaseMixin = require('./BaseMixin');

var Button = React.createClass({
  propTypes: {
    node: React.PropTypes.node,
    waves: React.PropTypes.oneOf(['effect', 'light']),
    large: React.PropTypes.bool,
    floating: React.PropTypes.bool,
    disabled: React.PropTypes.bool
  },
  render() {
    var C = this.props.node || 'button';
    var classes = {
      btn: true,
      disabled: this.props.disabled,
      'waves-effect': !!this.props.waves
    };

    if (constants.WAVES.indexOf(this.props.waves) > -1) {
      classes['waves-' + this.props.waves] = true;
    }

    constants.STYLES.forEach(style => {
      classes['btn-' + style] = this.props[style];
    });

    return (
      <C {...this.props} className={classNames(classes)}>
        {this.props.children}
      </C>
    );
  },
  renderAnchor: function(classes) {
    var C = this.props.node || 'a';
    var href = this.props.href || '#';
    return (
      <C {...this.props}
        href={href}
        className={classNames(classes)}>
        {this.props.children}
      </C>
    );
  }
});

module.exports = Button;
