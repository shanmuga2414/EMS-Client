import React from "react";
import Joi from "joi-browser";
import Heading from "./common/Heading";
import Form from "./common/Form";
import auth from "../services/authService";
import { Redirect } from "react-router-dom";

class Signin extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      // Call the server
      const { data } = this.state;
      await auth.login(data.username, data.password);
      window.location = "/";
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.username = ex.response.data;
      this.setState({ errors });
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <Heading
          title="Login Form"
          desc=" This is a modified jumbotron that occupies the entire horizontal space of
                its parent."
        />
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin;
