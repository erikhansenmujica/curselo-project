import React from "react";
import Navbar from "../components/NavBar";
import { connect } from "react-redux";
import { firebase, auth } from "../config/app";
import { createUser } from "../action-creators/createUser";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  handleLogOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.createUser({});
      })
      .catch(function(error) {
        alert(error);
      });
  }

  render() {
    return <Navbar user={this.props.user} handleLogOut={this.handleLogOut} />;
  }
}

const mapStateToProps = state => {
  return {
    user: firebase.auth().currentUser
  };
};
const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarContainer);
