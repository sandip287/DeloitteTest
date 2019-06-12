import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Register extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    mobile: ""
  };
  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submit = e => {
    e.preventDefault();
    const action = { type: "REGISTER_USER", payload: this.state };
    this.props.dispatch(action); // sent data to store
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Registration </h1>

        <form name="form" onSubmit={this.submit}>
          <div className="form-group">
            <input
              required
              type="text"
              placeholder="Enter First Name"
              className="form-control"
              name="fname"
              onChange={this.change}
            />
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              placeholder="Enter Last Name"
              className="form-control"
              name="lname"
              onChange={this.change}
            />
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              placeholder="Enter Email"
              className="form-control"
              name="email"
              onChange={this.change}
            />
          </div>
          <div className="form-group">
            <input
              required
              type="text"
              placeholder="Enter Password"
              className="form-control"
              name="password"
              onChange={this.change}
            />
          </div>
          <div className="form-group">
            <input
              required
              type="number"
              min="10"
              placeholder="Enter Mobile No"
              className="form-control"
              name="mobile"
              onChange={this.change}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
            <Link to="/login" className="btn ">
              Login
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  console.log(state); // received store data in state object
  return { data: state };
};
export default connect(mapStateToProps)(Register);
