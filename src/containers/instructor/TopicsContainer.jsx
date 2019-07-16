import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTopicsDeUnaSeccion} from "../../action-creators/cursosInstructor"
import Topics from "../../components/instructor/Topics";

class SingleCursoInstructorContainer extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
      this.props.getTopics(this.props.secId)
  }

  render() {
    return (
      <Topics
      topics={this.props.topics}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  getTopics:(id)=>dispatch(fetchTopicsDeUnaSeccion(id))
})

const mapStateToProps = (state)=>({
    topics: state.instructorCursos.topics
})

export default 
  connect(mapStateToProps
, mapDispatchToProps)(SingleCursoInstructorContainer);