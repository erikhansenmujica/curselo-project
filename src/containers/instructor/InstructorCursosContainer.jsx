import React, { Component } from "react";
import InstructorCursos from "../../components/instructor/InstructorCursos";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

export default class InstructorCursosContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <InstructorCursos  />;
  }
}
//


// const mapStateToProps = (state, ownProps) => {
//     console.log(state, 'skdjncsjdc')
//   return {
//     cursos :state.firestore.ordered.cursos
//   }
// }

// export default compose(
//   firestoreConnect(["cursos"]),
//   connect(mapStateToProps)(InstructorCursosContainer))