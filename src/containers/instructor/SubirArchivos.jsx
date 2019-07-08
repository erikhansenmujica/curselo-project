import React from "react";
import CrearCurso from "../../components/instructor/CrearCurso";
import firebase from '../../config/app'

export default class CrearContainer extends React.Component {
    constructor(props) {
      super(props);
    }
}


// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }