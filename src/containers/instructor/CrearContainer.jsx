import React from "react";
import CrearCurso from "../../components/instructor/CrearCurso";

export default class CrearContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      duracion: 0,
      precio: 0,
      descripcion: "",
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
      descripcion: this.state.descripcion
    }).then(res=>res.status(200));
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
