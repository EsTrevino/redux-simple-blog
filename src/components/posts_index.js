import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post =>{
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render(){
    return(
      <div className="container">
        <div className="home-addPost-button row">
          <Link to='/post/new' className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <div className="posts-container">
          <h3>Posts</h3>
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

export default withRouter(connect(mapStateToProps, {fetchPosts})(PostsIndex));
