import React, { Component } from "react";
import SingleCursoAlumno from "../../components/alumnos/SingleCursoAlumno";
import { fetchCursoAlumno } from "../../action-creators/cursosAlumnos";
import { connect } from "react-redux";
import { firebase, db } from "../../config/app";
import Axios from "axios";

class SingleCursoAlumnoContainer extends Component {
  constructor(props) {
    super(props);
    this.createChat = this.createChat.bind(this);
  }

  createChat() {
    let alumnoId = this.props.alumno;
    let courseId = this.props.curso.id;
    Axios.get(
      `https://curselo-dev.appspot.com/_ah/api/lms/v2/getCourse?courseId=${courseId}`
    ).then(courseData => {this.props.history.push(`/chat/${alumnoId}/${courseId}/${courseData.data.ownerId}`);
    });
  }

  componentDidMount() {
    this.props.getCurso(this.props.match.params.cursoId);
  }

  render() {
    return (
      <SingleCursoAlumno
        createChat={this.createChat}
        curso={this.props.curso}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurso: id => dispatch(fetchCursoAlumno(id))
});

const mapStateToProps = state => ({
  curso: state.alumnoCursos.course,
  alumno: state.creteUser.user.uid
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCursoAlumnoContainer);
