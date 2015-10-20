jest.dontMock('../Panel');

describe('Panel', function() {
  var React = require('react'),
      TestUtils = React.addons.TestUtils,
      Panel = require('../Panel'),
      instance = null;

  it('has card-panel class', function() {
    instance = TestUtils.renderIntoDocument(<Panel />);
    expect(instance.getDOMNode().className).toContain('card-panel');
  });
});
