import React, { Component } from "react";
import Cursos from "../../components/instructor/VerCursos";
import { connect } from "react-redux";
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class instructor extends Component {
    
  constructor(props) {
    super(props);
  }

  
  render() {
    return <Cursos cursos={this.props.cursos} />;
  }
}

export default compose(
  firestoreConnect([
  'cursos'
  ]),
  connect(
    (state) => ({
      cursos:state.firestore.ordered.cursos
    })
  )
)(instructor)
