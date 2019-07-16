import React from "react";
import CrearCurso from "../../components/instructor/CrearCurso";
import { firebase, db } from "../../config/app";
import { connect } from "react-redux";
import { auth } from "../../config/app";
import {createCourse} from "../../action-creators/cursosInstructor"

class CrearContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      duracion: 0,
      precio: 0,
      descripcion: "",
      contenido: "",
      anexos: "",
      file: "",
      secciones: {},
      instructorid: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSetFile = this.handleSetFile.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.newCourse({ 
      name: this.state.titulo,
      price: this.state.precio,
      description: this.state.descripcion,
      ownerId: auth.currentUser.uid})
      .then(data => {
        this.props.history.push(`/instructor/cursos/${data.id}`);
      });
  }

  handleSetFile(e) {
    e.preventDefault();
    let f = e.target.files[0];
    this.setState({
      file: f
    });
  }

  handleUpload(e) {
    e.preventDefault();
    const file = this.state.file;
    const storageRef = firebase.storage().ref(`/files/${file.name}`);
    storageRef.put(file).then(file => console.log("FILE?", file));
  }

  render() {
    return (
      <CrearCurso
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleUpload={this.handleUpload}
        handleSetFile={this.handleSetFile}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  newCourse: (obj)=>dispatch(createCourse(obj))
})


export default connect (null, mapDispatchToProps)(CrearContainer)