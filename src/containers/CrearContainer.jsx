<<<<<<< HEAD
import React from "react";
import db from "../../public/app"
import CrearCurso from "../components/CrearCurso";
=======
import React from 'react'
import CrearCurso from '../components/instructor/CrearCurso'
>>>>>>> 700054dd0dcca4e7041b9591e9505722ccdfa1d9

export default class CrearContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      duracion: 0,
      precio: 0,
      descripcion: ""
    };
    this.handleCharge=this.handleCharge.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

  }
  handleCharge(){
    const myCourses = db.collection('cursos').add(
      this.setState({
        titulo:this.state.titulo,
        duracion:this.state.duracion,
        precio:this.state.precio,
        descripcion:this.state.descripcion
      })
    )

  }
  handleSubmit(e) {
    [e.target.name] = e.target.value;
  }

  render() {
    console.log(handleCharge, 'hasnksjndcksjndcn')
    return <CrearCurso handleCharge={this.handleCharge} handleSubmit={this.handleSubmit}/>;
  }
}
