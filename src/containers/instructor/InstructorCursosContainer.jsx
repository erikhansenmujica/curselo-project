import React, { Component } from "react";
import InstructorCursos from "../../components/instructor/InstructorCursos";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import {auth} from "../../config/app"

class InstructorCursosContainer extends Component {
    
  constructor(props) {
    super(props);
  }

  render() {
      console.log("cursos en container", this.props.instructorCursos)
    return <InstructorCursos cursos = {this.props.instructorCursos}/>;
  }
}


export default compose(
    firestoreConnect(props =>[
        {
          collection: 'cursos',
          where: [
            ['instructorid', '==', auth.currentUser.uid]
          ],
        }
    ]),
    connect((state) => ({
      instructorCursos: state.firestore.ordered.cursos
    }))
   )(InstructorCursosContainer)