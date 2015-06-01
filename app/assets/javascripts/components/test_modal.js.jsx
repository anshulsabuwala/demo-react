var TestModal = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      test: '',   
      title: this.props.posts.title, 
      body: this.props.posts.body, 
      published_by: this.props.posts.published_by
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var test = this.refs.test.getValue().trim().toUpperCase();
    var adressjson= JSON.stringify({test: test});
    this.props.onCommentSubmit(adressjson);
    console.log(this.props)
    this.props.onRequestHide();
    console.log("Hmmm?");
    return;
  },

  validationTest: function() {
    var length = this.state.test.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) {
      return 'error';
    }
  },

  handleUpdate: function () {
    $.ajax({
      url: '/posts/'+ this.props.posts.id,
      type: "PUT",
      dataType: "json",
      data: this.state,
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

  render: function() {
    return (
      <Modal {...this.props}  bsStyle="primary" title='Edit Post' animation>
        <form onSubmit={this.handleUpdate}  >
          <div className='modal-body'>
            <p>
              <Input type="text" label='Title :' placeholder="Enter Title" valueLink={this.linkState('title')} bsStyle={this.validationTest()} className="form-control" required/>
            </p>              
            <p>
              <Input type="textarea" label='Body :' placeholder="Enter Body" valueLink={this.linkState('body')} bsStyle={this.validationTest()} className="form-control" required/>
            </p>
            <p>
              <Input type="text" label='Published By :' placeholder="Enter Published By" valueLink={this.linkState('published_by')} bsStyle={this.validationTest()} className="form-control" required/>
            </p>
          </div>
          <div className='modal-footer'>
            <Button bsStyle="danger" type="submit"  onClick={this.props.onRequestHide}  data-dismiss="modal" active>Close</Button>
            <Button bsStyle="primary" className="btn btn-default" type="submit" disabled={this.state.isSubmitting} >Update</Button>
          </div>
        </form>
      </Modal>
    );
  }
});

// <Input type='submit' value='Submit button' disabled={this.state.isSubmitting} />