import React, { Component } from "react";
import Cursos from "../../components/instructor/VerCursos"
import {connect} from "react-redux"
import {fetchCursos} from "../../action-creators/cursos"
class MainConTainer extends Component {

    constructor(props) {
        super(props);
      }
      componentDidMount(){
        this.props.fetchCursos()
      }
      render() {
        return(
          <Cursos />
        )
    }
}

const mapStateToProps =(state)=>({
    //cursos:state.instructor.cursos
})

const mapDispatchToProps=()=>({
    fetchCursos:fetchCursos
})

export default connect(mapStateToProps, mapDispatchToProps)(MainConTainer)