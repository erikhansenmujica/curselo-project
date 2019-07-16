import React from "react";
import SubirTexto from "../../components/instructor/SubirTexto";
//import { firebase, db } from "../../config/app";
//import { auth } from "../../config/app";
import Axios from 'axios'

export default class SubirTextoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e){
    this.setState({
      text: e.target.value
    }) 
  }

  handleSubmit(e){
    e.preventDefault()
    Axios.post(
      "https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourseTopic",
      { sectionId: "4862263592747008", content: this.state.text }
    ).then(data2 => {
      console.log("YO SOY DATA", data2);
      this.props.history.push("/instructor");
    });
  }

  render() {
    console.log(this.state.text)
    return <SubirTexto handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
  }
};