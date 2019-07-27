import React, { Component } from "react";
import Main from "../components/Main";
import { firebase } from "../config/app";
import { auth } from "../config/app";
export default class MainConTainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.logear = this.logear.bind(this);
  }
  logear() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loading: true
        });
      } else {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(user => {
            this.setState({
              loading: true
            });
            return user;
          });
      }
    });
  }
  render() {
    return (
      <Main
        loading={this.state.loading}
        logear={this.logear}
        history={this.props.history}
      />
    );
  }
}
