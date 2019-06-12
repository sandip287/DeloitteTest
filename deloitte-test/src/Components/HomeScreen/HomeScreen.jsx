import React, { Component } from "react";
import { connect } from "react-redux";

class HomeScreen extends Component {
  componentDidMount() {
    const User = localStorage.getItem("userInfo");
    if (!User) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div>
        Welcome ,<p>First Name:{this.props.user.fname} </p>
        <p>Last Name: {this.props.user.lname}</p>
        <p>Email Address: {this.props.user.email}</p>
        <p>Mobile Number: {this.props.user.mobile}</p>
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return { user: state };
};

export default connect(mapStateToProps)(HomeScreen);
