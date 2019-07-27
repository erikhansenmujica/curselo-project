import React, { Component } from "react";
import Home from "../components/Home";
import { firebase } from "../config/app";

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
    this.setState({
      alumno: true
    });
    this.props.history.push("/alumnos/cursos");
  }

  googleLogin() {
    this.props.history.push("/instructor");
  }
  render() {
    return <Home googleLogin={this.googleLogin} setAlumno={this.setAlumno} />;
  }
}
