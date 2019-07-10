import React from "react";
import Seccion from "../../components/instructor/Seccion";
import { db } from "../../config/app";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class SeccionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tema: ""
      // archivo: "",
      // video: ""
    };
    this.handleCrear = this.handleCrear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSection = this.handleSection.bind(this);
  }
  handleCrear(e) {
    e.preventDefault();
    this.setState({
      tema: e.target.value
      // archivo: e.target.file,
      // video: e.target.file
    });
  }
  // handleSection() {
  //   this.props.secciones
  //     ?
  //    this.props.secciones[0].id

  //     // db.child('/cursos').on('child_added', snap =>{
  //     //   let seccionRef =  db.child('cursos' + snap.key);
  //     //   seccionRef.once('value').then(userSnap=>{
  //     //     console.log(userSnap, 'sndcjsndcnsd')
  //     //   })
  //     // })
  //     : "nsdkn"
  // }
  // handleSubmit(e) {
  //   e.preventDefault();
  // }
  render() {
    return (
      <Seccion
        handleCrear={this.handleCrear}
        handleSubmit={this.handleSubmit}
        handleSection={this.handleSection}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.firestore.ordered.cursos)
  return {
    secciones: state.firestore.ordered.cursos
  };
};

export default compose(
  firestoreConnect(["cursos"]),
  connect(mapStateToProps)
)(SeccionContainer);
