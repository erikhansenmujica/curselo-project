import React from "react";
import SubirVideo from "../../components/instructor/SubirVideo";
import Axios from "axios";
//import { firebase, db } from "../../config/app";
//import { auth } from "../../config/app";
var Vimeo = require("vimeo").Vimeo;
let client = new Vimeo(
  "79777f858528bbc2fe7dbd2ab433fc43f9ea943f",
  "bFpq8T2/DobNzcZIbqreWHf+vTy+ZkDgD+qkDAR28yK6LIII/w8b554SHIdWniJsUQzko2DtzoIaz/Uw8g4CynEJ+uZuy8R9huXPHu36FD+W2rod5+mqzbENygYt2LFy",
  "1e85be6f08272bd265dba91308faa2e8"
);

export default class SubirVideoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSetFile = this.handleSetFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleSetFile(e) {
    e.preventDefault();
    console.log("SETTING FILE TO STATE");
    let f = e.target.files[0];
    this.setState({
      file: f
    });
  }

  handleUpload(e) {
    e.preventDefault();
    console.log("SEND REQUEST");
    const file = this.state.file;
    let cursoId = this.props.match.params.cursoId;
    let sectionId = this.props.match.params.sectionId;
    client
      .upload(
        file,
        (uri)=> {
          console.log("File upload completed. Your Vimeo URI is:", uri);
          let videoId = uri.slice(7)
          Axios.post(
            "https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourseTopic",
            { sectionId: sectionId, contentURL: `www.vimeo.com/${videoId}` }
          ).then(data2 => {
            //console.log("YO SOY DATA", data2);
            this.props.history.push(`/instructor/cursos/${cursoId}`);
          });
        },

        function(bytesUploaded, bytesTotal) {
          var percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
          console.log(bytesUploaded, bytesTotal, percentage + "%");
        },
        function(error) {
          console.log("Failed because: " + error);
        }
      )
      
      
  }

  render() {
    return (
      <SubirVideo
        courseId={this.props.match.params.cursoId}
        sectionId={this.props.match.params.sectionId}
        handleSetFile={this.handleSetFile}
        handleUpload={this.handleUpload}
      />
    );
  }
}
