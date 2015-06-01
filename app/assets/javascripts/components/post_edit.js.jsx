var PostEdit = React.createClass({
  getInitialState: function() {
    return {
      shown: false, modalShown: false,
      title: this.props.posts.title, 
      body: this.props.posts.body, 
      published_by: this.props.posts.published_by
    };
  },
  handleChangetitle: function(event) {
    this.setState(
      {title: event.target.value}
    );
  },
   handleChangebody: function(event) {
    this.setState(
      {body: event.target.value}
    );
  },
   handleChangepublishedby: function(event) {
    this.setState(
      {published_by: event.target.value}
    );
  },

  // start Modal Popup
 
  handleClick: function() {
      this.setState({shown: !this.state.shown});
  },
  // end modal popup

  handleUpdate: function () {
    $.ajax({
      url: '/posts/'+ this.props.posts.id,
      type: "PUT",
      dataType: "json",
      data: this.state,
      success: function(data) {
        this.setState({ posts: data });
      }.bind(this)
    });
  },
 
  render: function() {
    var title=  this.state.title;
    var body=  this.state.body;
    var published_by=  this.state.published_by;
    return (       
      <PostModal onRequestClose={this.handleClick}>
        <form ref="form" className="post-edit"  onSubmit={this.handleUpdate}  >
          <h2 class="pull-right"> Edit Post</h2>
            <hr />
            <Label>Title : </Label>
            <p><input type="text" value={title}  onChange={this.handleChangetitle}/></p>  
            <Label>Body : </Label>
            <p><input type="text" value={body} onChange={this.handleChangebody} /></p>
            <Label>Published By : </Label>
            <p><input type="text" value={published_by} onChange={this.handleChangepublishedby} /></p>
            <p><button  type="submit" class="btn btn-primary">Update</button>
               <button type="submit" class="btn btn-primary">Close</button>           
            </p>
          </form>
      </PostModal>
    );
  }
});
//<p><input type="checkbox" placeholder="Published" ref="published" name="post[published]"/>Published or Not?</p>



// <Modal {...this.props} bsStyle='primary' title='Modal heading' animation={false}>
//   <div className='modal-body'>
//    <form ref="form" className="post-edit"  onSubmit={this.handleUpdate}  >
//     <h2 class="pull-right"> Edit Post</h2>
//       <hr />
//       <label>Title : </label>
//       <p><input type="text" value={title}  onChange={this.handleChangetitle}/></p>  
//       <label>Body : </label>
//       <p><input type="text" value={body} onChange={this.handleChangebody} /></p>
//       <label>Published By : </label>
//       <p><input type="text" value={published_by} onChange={this.handleChangepublishedby} /></p>
//       <p><button  type="submit" class="btn btn-primary">Update</button>
//          <button type="submit" class="btn btn-primary">Close</button>
//       </p>
//     </form>            
//   </div>
//   <div className='modal-footer'>
//     <Button onClick={this.props.onRequestHide}>Close</Button>
//   </div>
// </Modal>
