import React from "react";
import store from "../store/index";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
// import { logOutUser } from "../Store/Actions/users";
import Axios from "axios";

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.Logout = this.Logout.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  Logout() {
    store.dispatch(logOutUser());
  }

  render() {
    return <Navbar props={this.state} Logout={this.Logout} />;
  }
}
