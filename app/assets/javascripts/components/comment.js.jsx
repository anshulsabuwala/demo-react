var Comment = React.createClass({
  propTypes: {
    comment: React.PropTypes.node,
    author: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Comment: {this.props.comment}</div>
        <div>Author: {this.props.author}</div>
      </div>
    );
  }
});


