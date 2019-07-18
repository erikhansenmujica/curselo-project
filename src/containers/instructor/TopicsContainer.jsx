import React, { Component } from "react";
import { fetchTopicsDeUnaSeccion } from "../../action-creators/cursosInstructor";
import Topics from "../../components/instructor/Topics";

export default class SingleCursoInstructorContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      topics:[]
    }
  }

  componentDidMount() {
    fetchTopicsDeUnaSeccion(this.props.secId)
    .then((topics)=>{
      topics?this.setState({
        topics:topics
      })
      :
      this.setState({
        topics:[]
      })
    })
  }

  render() {
    return <Topics topics={this.state.topics} />;
  }
}

