import React from "react";
import SubirTexto from "../../components/instructor/SubirTexto";
//import { firebase, db } from "../../config/app";
//import { auth } from "../../config/app";
import Axios from "axios";

export default class SubirTextoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      name:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
    
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    Axios.post(
      "https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourseTopic",
      { sectionId: this.props.sectionId, content: this.state.text, name:this.state.name }
    ).then(data2 => {
      console.log("YO SOY DATA", data2);
      this.props.history.push(
        `/instructor/cursos/${this.props.courseId}`
      );
    });
  }

  render() {
    console.log(this.state.text);
    return (
      <SubirTexto
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        courseId={this.props.cursoId}
        sectionId={this.props.sectionId}
      />
    );
  }
}
