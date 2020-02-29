import React, { Component } from 'react';
import {connect }from 'react-redux';
import Proptypes from 'prop-types';
import {createPost} from '../actions/postActions'

 class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',

    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    //call action
    this.props.createPost(post)


  }
  render() {
   
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label><br/>
            <input type="text" value={this.state.title} onChange={this.onChange} name="title"></input>
          </div>
          <div>
            <label>body:</label><br/>
            <textarea name="body" onChange={this.onChange} value={this.state.body}>
            </textarea>
          </div>
          <br/>
          <button type="submit">submit</button>
        </form>
           
      </div>
    )
  }
}
PostForm.propTypes = {
  createPost: Proptypes.func.isRequired
};

export default connect(null, {createPost})(PostForm);