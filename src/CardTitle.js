var React = require('react');

var CardTitle = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired
  },
  render() {
    var {image, children, ...props} = this.props;
    return (
      <div className='card-image' {...props}>
        <img src={image} />
        <span className='card-title'>{children}</span>
      </div>
    );
  }
});

module.exports = CardTitle;
