import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  submit = e => {
    e.preventDefault();
    //this.props.history.push("/Home");
    const login_data = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(login_data);
    console.log(this.props);

    if (
      this.props.user.email === login_data.username &&
      this.props.user.password === login_data.password
    ) {
      //alert("Login success..");
      localStorage.setItem("userInfo",this.state.username);
      this.props.history.push("/home");
    } else {
      alert("Login fail..");
    }
  };
  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Login</h1>
        <form name="form" onSubmit={this.submit}>
          <div className="form-group">
            <input
              required
              type="email"
              className="form-control"
              placeholder="Enter email address"
              onChange={this.change}
              name="username"
            />
          </div>

          <div className="form-group">
            <input
              placeholder="Enter password"
              required
              type="text"
              className="form-control"
              onChange={this.change}
              name="password"
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <Link to="/registration" className="btn ">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return { user: state };
};

export default connect(mapStateToProps)(Login);
