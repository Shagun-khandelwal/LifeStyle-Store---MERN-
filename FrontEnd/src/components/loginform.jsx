import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import {withRouter} from './common/hooks';
import {login} from "./services/authservice";
class LoginForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };
  Schema = {
    email: Joi.string().min(5).required().label("email"),
    password: Joi.string().min(8).required().label("password"),
  };
  doSubmit = async () => {
    try{
        const {data} = this.state;
        await login(data.email,data.password);
        const location = this.props.location;
        if(location.state && location.state.from){
            window.location = location.state.from.pathname;
        }
        else{
            window.location = '/products'
        }
    } catch(ex){
        if(ex.response && ex.response.status === 400){
            const errors = {...this.state.errors};
            errors.username = ex.response.data;
            this.setState({errors});
        }
    }
    console.log("User login successfully!");
  };
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
