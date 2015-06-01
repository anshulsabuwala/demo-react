var PostForm = React.createClass({

  handleSubmit: function(event) {
    event.preventDefault();
    var title = this.refs.title.getDOMNode().value.trim();
    var body = this.refs.body.getDOMNode().value.trim();
    var published = this.refs.published.getDOMNode().value.trim();
    var published_by = this.refs.published_by.getDOMNode().value.trim();

    var formData = $(this.refs.form.getDOMNode()).serialize();

    this.props.onPostSubmit(formData, this.props.form.action);

    this.refs.title.getDOMNode().value = '';
    this.refs.body.getDOMNode().value = '';
    this.refs.published.getDOMNode().value = '';
    this.refs.published_by.getDOMNode().value = '';
  },

  render: function() {
    return (
      <form ref="form" className="post-form" onSubmit={this.handleSubmit} action={this.props.form.action} method="post">
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <label>Title: </label>
        <p><input type="text" placeholder="Title" ref="title" name="post[title]"/></p>
        <label>Body: </label>
        <p><input type="text" placeholder="Boby" ref="body" name="post[body]"/></p>
        <label>Published By: </label>
        <p><input type="checkbox" placeholder="Published" ref="published" name="post[published]"/>Published or Not?</p>
        <p><input type="text" placeholder="Published By" ref="published_by" name="post[published_by]"/></p>
        <p><button type="submit">Create Post</button></p>
      </form>
    );
  }
});
