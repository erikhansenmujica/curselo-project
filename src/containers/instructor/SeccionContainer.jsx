import React from "react";
import Seccion from "../../components/instructor/Seccion";
import { db } from "../../config/app";
export default class SeccionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tema: ""
      // archivo: "",
      // video: ""
    };
    this.handleCrear = this.handleCrear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCrear(e) {
    e.preventDefault();
    this.setState({
      tema: e.target.value
      // archivo: e.target.file,
      // video: e.target.file
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    db.collection('cursos').doc('/2UuACJbbQ04hyKFTCZub').doc('secciones').add({
      tema:this.state.tema
    })

  }
  render() {
    return (
      <Seccion
        handleCrear={this.handleCrear}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
