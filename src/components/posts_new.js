import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostNew extends Component {

  renderField(field){
    return(
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }
  
  render(){
    return(
      <div className="container">
        <form>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Tags"
            name="tags"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);
