import React, { Component } from "react";
import SingleCursoAlumno from "../../components/alumnos/SingleCursoAlumno";
import {fetchCursoAlumno} from "../../action-creators/cursosAlumnos"
import { connect } from "react-redux";

 class SingleCursoAlumnoContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getCurso(this.props.match.params.cursoId)
  }

  render() {
    return <SingleCursoAlumno curso={this.props.curso}/>;
  }
}

const mapDispatchToProps =(dispatch)=> ({
  getCurso:(id)=>dispatch(fetchCursoAlumno(id))
})

const mapStateToProps = state =>({
  curso:state.alumnoCursos.course
})
export default
  
  connect(mapStateToProps, mapDispatchToProps)
(SingleCursoAlumnoContainer)
