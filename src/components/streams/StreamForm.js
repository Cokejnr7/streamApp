import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

  renderInput = ({ input, label, meta }) => {
    const checker = meta.error && meta.touched
    return (
      <div className={`field ${checker && 'error'}`}>
        <label>{label}</label>
        <input autoComplete='off' {...input}></input>
        {checker && <div className='ui error message'><div className='header'>{meta.error}</div></div>}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {

    return (
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name='title' component={this.renderInput} label="Enter Title" />
        <Field name='description' component={this.renderInput} label="Enter Description" />
        <button className="ui violet button">Submit</button>
      </form>
    );
  }
};

//validate form inputs
const validate = (formValues) => {

  const errors = {}

  if (!formValues.title) errors.title = 'you must enter a title to create a stream';

  if (!formValues.description) errors.description = 'you must enter a description to create a stream';

  //form is valid if error object remains empty
  //maps each error to its field name
  return errors
}

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
