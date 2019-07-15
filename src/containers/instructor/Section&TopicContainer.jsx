import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchCursoInstructor} from "../../action-creators/cursosInstructor"
import SectionTopic from "../../components/instructor/Section&Topic";

class SingleCursoInstructorContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.getCurso(this.props.match.params.cursoId)
  }

  render() {
    return (
      <SectionTopic
        curso={this.props.curso}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  getCurso:(id)=>dispatch(fetchCursoInstructor(id))
})

const mapStateToProps = (state)=>({
  curso: state.instructorCursos.course
})

export default 
  connect(mapStateToProps
, mapDispatchToProps)(SingleCursoInstructorContainer);