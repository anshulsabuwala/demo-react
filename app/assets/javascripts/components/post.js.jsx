var Post = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    published: React.PropTypes.bool,
    published_by: React.PropTypes.string
  },

  render: function() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>  
            <th>Published By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.id}</td>
            <td>{this.props.title}</td>
            <td>{this.props.body}</td>
            <td>{this.props.published_by}</td>    
            <td>
              <ModalTrigger modal={<TestModal posts={this.props} onCommentSubmit={this.handleCommentSubmit}/>} >
                <Button bsStyle="primary" bsSize="small">Edit Post</Button>
              </ModalTrigger>
              &nbsp; &nbsp;
                <Button bsStyle="danger" bsSize="small" onClick={this.handleDelete} >Delete Post</Button>
            </td>     
          </tr>
        </tbody>
      </Table>     
    );
  },

  handleDelete: function () {
    $.ajax({
      url: '/posts/'+ this.props.id,
      type: "DELETE",
      dataType: "json",
      success: function(data) {
        $.ajax({
          url: '/posts' ,
          type: "GET",
          dataType: "json",
          data: this.state,
          success: function(data) {
            this.setState({ posts: data });
          }.bind(this)
        });
      }.bind(this)
    });
  },
});

// <th>Published</th>
// <td>{this.props.published}</td>
// <td><a href={'/posts/' + this.props.id + '/edit'}>Rails Edit</a></td>

// <td><a href="" onClick={this.handleDelete}>Delete</a></td> 

 // <td><a href="javascript:void(0);" onClick={this.handledata}>Edit</a></td>
 // <td><a href="" onClick={this.handleDelete}>Delete</a></td> 





  // handledata: function () {
  //   console.log("Hello");
  //   //React.render(<PostEdit posts={this.props} onSubmit={this.handleUpdate} />, document.getElementById('mypost'));
  //  React.render(<PostEdit posts={this.props} onSubmit={this.handleUpdate} />,document.body);
  //  //React.render(<Trigger />, document.body);
  // }


  // <%= will_paginate @posts, :previous_label => 'Previous', :next_label => 'Next' %>