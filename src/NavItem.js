var React = require('react');

var NavItem = React.createClass({
  propTypes: {
    href: React.PropTypes.string
  },
  render() {
    var {href, children, ...props} = this.props;
    return (
      <li {...props}>
        <a href={href}>{children}</a>
      </li>
    );
  }
});

module.exports = NavItem;
