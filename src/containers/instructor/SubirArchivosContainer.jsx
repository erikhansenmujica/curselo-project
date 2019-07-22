import React from "react";
import SubirArchivos from "../../components/instructor/SubirArchivos";
import { firebase, db } from "../../config/app";
import Axios from "axios";

export default class SubirArchivosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      file:"",
      load:true
    }
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSetFile = this.handleSetFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
    const storageRef = firebase.storage().ref(`/files/${this.props.sectionId}/${file.name}`);
    this.setState({
      load:false
    })
    storageRef.put(file).then(file => {
      storageRef.getDownloadURL().then(data => {
        Axios.post(
          "https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourseTopic",
          { sectionId: this.props.sectionId, contentURL: data, name:this.state.name }
        ).then(data2 => {
          console.log("YO SOY DATA", data2);
          this.setState({
            load:true
          })
          if(document.getElementById("modalContactForm1").classList.contains("show"))document.getElementById("buttonToggler").click()
          this.props.history.push(`/instructor/cursos/${this.props.courseId}`);
        });
      });
    });
  }

  // ES NECESARIO QUE ESTEN TODAS LAS RUTAS (CURSO, SECCION) PARA PODER ALMACENAR CORRECTAMENTE EL ARCHIVO EN FB STORAGE

  render() {
    return (
      <SubirArchivos
      load={this.state.load}
        handleUpload={this.handleUpload}
        handleChange={this.handleChange}
        handleSetFile={this.handleSetFile}
        courseId={this.props.cursoId}
        sectionId={this.props.sectionId}
      />
    );
  }
}

