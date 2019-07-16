import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchSeccionesDeUnCurso} from "../../action-creators/cursosInstructor"
import SectionTopic from "../../components/instructor/Section&Topic";

class SingleCursoInstructorContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
      this.props.getSecciones(this.props.cursoId)
  }

  render() {
    return (
      <SectionTopic
      secciones={this.props.secciones}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  getSecciones:(id)=>dispatch(fetchSeccionesDeUnCurso(id)),
})

const mapStateToProps = (state)=>({
  secciones: state.instructorCursos.secciones
})

export default 
  connect(mapStateToProps
, mapDispatchToProps)(SingleCursoInstructorContainer);