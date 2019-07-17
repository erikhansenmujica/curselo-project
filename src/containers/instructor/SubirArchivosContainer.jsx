import React from "react";
import SubirArchivos from "../../components/instructor/SubirArchivos";
import { firebase, db } from "../../config/app";
import { auth } from "../../config/app";
import Axios from "axios";

export default class SubirArchivosContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpload = this.handleUpload.bind(this);
    this.handleSetFile = this.handleSetFile.bind(this);
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
    const storageRef = firebase.storage().ref(`/files/${this.props.match.params.sectionId}/${file.name}`);
    storageRef.put(file).then(file => {
      storageRef.getDownloadURL().then(data => {
        Axios.post(
          "https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourseTopic",
          { sectionId: this.props.match.params.sectionId, contentURL: data }
        ).then(data2 => {
          console.log("YO SOY DATA", data2);
          this.props.history.push(`/instructor/cursos/${this.props.match.params.cursoId}`);
        });
      });
    });
  }

  // ES NECESARIO QUE ESTEN TODAS LAS RUTAS (CURSO, SECCION) PARA PODER ALMACENAR CORRECTAMENTE EL ARCHIVO EN FB STORAGE

  render() {
    return (
      <SubirArchivos
        handleUpload={this.handleUpload}
        handleSetFile={this.handleSetFile}
        courseId={this.props.match.params.cursoId}
        sectionId={this.props.match.params.sectionId}
      />
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         courseId : ownProps.match.params.
//     }

//};

// import React from "react";
// import CrearCurso from "../../components/instructor/CrearCurso";
// import firebase from '../../config/app'

// export default class CrearContainer extends React.Component {
//     constructor(props) {
//       super(props);
//     }
// }

// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }
