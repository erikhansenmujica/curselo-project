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
          console.log(this.props.cursos)
        return(
          <Cursos cursos={this.props.cursos}/>
        )
    }
}

const mapStateToProps =(state)=>({
    cursos:state.cursos.todos
})

const mapDispatchToProps=(dispatch)=>({
    fetchCursos:()=>dispatch(fetchCursos())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainConTainer)