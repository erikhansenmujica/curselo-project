import React from "react";
import CrearCurso from "../../components/instructor/CrearCurso";
import {db} from "../../config/app"

export default class CrearContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      duracion: 0,
      precio: 0,
      descripcion: "",
      contenido:"",
      anexos:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault()
    db.collection("cursos").add({
      titulo: this.state.titulo,
      duracion: this.state.duracion,
      precio: this.state.precio,
      descripcion: this.state.descripcion,
      contenido:this.state.contenido,
      anexos:this.state.anexos
    })
  }

  render() {
    return (
      <CrearCurso
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
