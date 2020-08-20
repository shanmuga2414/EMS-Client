import React from "react";
import Joi from "joi-browser";
import Heading from "./common/Heading";
import Form from "./common/Form";
import auth from "../services/authService";
import * as userService from "../services/userService";
import { Redirect } from "react-router-dom";

class Signup extends Form {
  state = {
    data: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().required().email().label("Email"),
    phone: Joi.string().required().min(10).label("Phone"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = async () => {
    try {
      // Call the server
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      const errors = { ...this.state.errors };
      errors.name = ex.response.data;
      this.setState({ errors });
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <Heading
          title="Signup Form"
          desc="This is a modified jumbotron that occupies the entire horizontal space of
                its parent."
        />
        <div className="col-md-4 col-md-offset-4">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderInput("email", "Email")}
            {this.renderInput("phone", "Phone")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Signup")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
