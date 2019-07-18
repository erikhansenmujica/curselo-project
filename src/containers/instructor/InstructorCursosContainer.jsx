import React, { Component } from "react";
import InstructorCursos from "../../components/instructor/InstructorCursos";
import { connect } from "react-redux";
import { fetchCursosInstructor } from "../../action-creators/cursosInstructor";

import { auth } from "../../config/app";

class InstructorCursosContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCursos(auth.currentUser.uid);
  }

  render() {
    {console.log("ENTRE XDDDDDDDD")}
    return <InstructorCursos cursos={this.props.cursos} />;
  }
}

const mapDispatchToProps = dispatch => ({
  getCursos: id => dispatch(fetchCursosInstructor(id))
});

const mapStateToProps = state => ({
  cursos: state.instructorCursos.all.items
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstructorCursosContainer);
