var PostBox = React.createClass({

  getInitialState: function () {
    return JSON.parse(this.props.presenter);
  },

  handlePostSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ posts: data });
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="post-box">
        <h2>Add a post:</h2>
        <hr />
        <PostForm form={ this.state.form } onPostSubmit={ this.handlePostSubmit } />
        <hr />
        <PostList posts={ this.state.posts } />
      </div>
    );
  }
});
// <PostEdit form={ this.state.form } onPostSubmit={ this.handleEdit } />