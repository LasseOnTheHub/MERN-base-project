import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import config from "../configs/config.json";
import { toast } from "react-toastify";
import httpService from "../services/httpService";

const apiEndpoint = config.apibaseurl;

class RegisterUserForm extends Form {
  state = {
    data: { firstname: "", lastname: "", password: "", email: "" },
    errors: {}
  };

  schema = {
    firstname: Joi.string()
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .required()
      .label("Lastname"),
    email: Joi.string()
      .email()
      .required()
      .label("E-mail"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    const URL = apiEndpoint + "users";
    httpService
      .post(URL, this.state.data)
      .then(result => {
        toast.success(
          result.data.user.firstname + " created with ID: " + result.data.id
        );
        const clearState = {
          data: {
            firstname: "",
            lastname: "",
            password: "",
            email: ""
          },
          errors: {}
        };
        this.setState(clearState);
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          toast.error(err.response.data);
        }
      });
  };

  render() {
    return (
      <div>
        <h1>Register new user</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstname", "Firstname", "text")}
          {this.renderInput("lastname", "Lastname", "text")}
          {this.renderInput("email", "E-mail", "text")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterUserForm;
