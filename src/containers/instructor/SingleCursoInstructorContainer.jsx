import React, { Component } from "react";
import SingleCursoInstructor from "../../components/instructor/SingleCursoInstructor";
import { connect } from "react-redux";
import {fetchCursoInstructor, forgetCourse} from "../../action-creators/cursosInstructor"

class SingleCursoInstructorContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.forgetCourse()
    this.props.getCurso(this.props.match.params.cursoId)
  }

  render() {
    return (
      <SingleCursoInstructor
        curso={this.props.curso}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  getCurso:(id)=>dispatch(fetchCursoInstructor(id)),
  forgetCourse:()=>dispatch(forgetCourse())
})

const mapStateToProps = (state)=>({
  curso: state.instructorCursos.course
})

export default 
  connect(mapStateToProps
, mapDispatchToProps)(SingleCursoInstructorContainer);
