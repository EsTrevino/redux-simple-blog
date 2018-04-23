import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from '../actions';
import {Link} from 'react-router-dom';
import '../style/style.css';

class PostNew extends Component {

  renderField(field){
    return(
      <div className="form-group add-post-page">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="invalid">
          {field.meta.touched ? field.meta.error: ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    this.props.createPost(values, () =>{
      this.props.history.push('/');
    });
  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <div className="container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button
            type="submit"
            className="btn btn-primary">
              Submit
            </button>
            <Link to="/" className="btn btn-danger post-cancel-button" >Cancel</Link>
        </form>
      </div>
    )
  }
}

function validate(values){
  console.log(values);
  //this function will be called for us
  //values is an object that has values user has entered into form
  const errors = {};
  //if errors has any properties, redux forms assumes
  //it is invalid
  if(!values.title){
    errors.title="Enter a title";
  }
  if(!values.categories){
    errors.categories="Enter a category";
  }
  if(!values.content){
    errors.content="Enter some content";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { createPost })(PostNew)
);
