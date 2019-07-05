import React, { Component } from "react";
import Home from "../components/Home";

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumno: false
    };

    this.googleLogin = this.googleLogin.bind(this);
    this.setAlumno = this.setAlumno.bind(this);
  }

  setAlumno() {
    console.log("estoy entrando a setAlumno");
    this.setState({
      alumno: true
    });
    this.googleLogin()
  }

  googleLogin() {
    console.log("estoy entrando a glogin");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;

        this.state.alumno
          ? this.props.history.push("/aprender")
          : this.props.history.push("/crear");
      })
      .catch(console.log);
  }

  render() {
    return <Home googleLogin={this.googleLogin} setAlumno={this.setAlumno} />;
  }
}
