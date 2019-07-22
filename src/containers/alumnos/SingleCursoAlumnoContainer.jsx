import React, { Component } from "react";
import SingleCursoAlumno from "../../components/alumnos/SingleCursoAlumno";
import { getMyPurchaseCourse } from "../../action-creators/getMyPurchaseCourse";
import { fetchCursoAlumno } from "../../action-creators/cursosAlumnos";
import { connect } from "react-redux";

class SingleCursoAlumnoContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    //this.handlePurchase = this.handlePurchase.bind(this);
  }
  componentDidMount() {
    this.props.getCurso(this.props.match.params.cursoId);
    let myCourses = this.props
      .getMyPurchaseCourse(this.props.isLoggedIn.uid)
      .then(id => id && id.data.items.forEach(course => {
        if(course.id === this.props.courseId){
          console.log('kajbsckjanscnaksnclkansclkansclkanslcknal')
        }
      }));
  }
  handleClick(e) {
    e.preventDefault();
    if (this.props.isLoggedIn.uid) {
      this.props.history.push(`/alumnos/cursos/${this.props.courseId}/comprar`);
    } else {
      alert("Registrate");
    }
  }


  render() {
    return (
      <SingleCursoAlumno
        curso={this.props.curso}
        purchaseCourse={this.props.purchaseCourse}
        handleClick={this.handleClick}
        isLoggedIn={this.props.isLoggedIn}
        //handlePurchase={this.handlePurchase}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurso: id => dispatch(fetchCursoAlumno(id)),
  getMyPurchaseCourse: id => dispatch(getMyPurchaseCourse(id))
});

const mapStateToProps = (state, ownProps) => {
  return {
    curso: state.alumnoCursos.course,
    purchaseCourse: state.purchaseCourse,
    isLoggedIn: state.creteUser.user,
    courseId: ownProps.match.params.cursoId
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCursoAlumnoContainer);
