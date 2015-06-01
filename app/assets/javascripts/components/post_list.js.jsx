var PostList = React.createClass({

  render: function () {
    var postNodes = this.props.posts.map(function ( post ) {
      return <Post id= { post.id } title={ post.title } body={ post.body } published={ post.published} published_by={ post.published_by} key={ post.id } />
    });

    return (
      <div className="post-list">
        { postNodes }
        <Pager>
          <PageItem previous href='#'>&larr; Previous Page</PageItem>
          <PageItem next href='#'>Next Page &rarr;</PageItem>
        </Pager>   
      </div>   
    )
  }
});