import React, { Component } from "react";
import Joi  from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    // for all input fields when clicking on submit
    const { data } = this.state;
    // console.log(data);
    const options = { abortEarly: false };
    const { error } = Joi.validate(data, this.Schema, options);
    if (!error) return null;

    //if there is an error execute next line of code
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({ name, value }) => {
    // for change at runtime to valid single input
    const obj = { [name]: value };
    const subschema = { [name]: this.Schema[name] };
    console.log(obj);
    const { error } = Joi.validate(obj, subschema);

    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    //next wale use hoga
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // if no error then execute next lines of code
    this.doSubmit(); // doSubmit har next wale me banana hai
    // Schema bhi next wale mei banana hai
  };
  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };
  renderButton = (label) => {
    return (
      <button
        className="btn btn-primary"
        disabled={this.validate() ? true : false}
      >
        {label}
      </button>
    );
  };
  renderInput = (name, label, type="text") => {
    return (
      <Input
        name={name}
        label={label}
        value={this.state.data[name]}
        type={type}
        onChange={this.handleChange}
        error={this.state.errors[name]}
      />
    );
  };
  renderSelect = (name, label, options) =>{
    return (
      <Select
        name={name}
        value={this.state.data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={this.state.errors[name]}
      />
    );
  }
}

export default Form;
