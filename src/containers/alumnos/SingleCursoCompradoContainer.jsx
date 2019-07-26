import React from "react"
import {connect} from "react-redux"
import SingleCursoComprado from "../../components/alumnos/SingleCursoComprado";

class SingleCursoCompradoContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <SingleCursoComprado cursoId={this.props.match.params.cursoId} history={this.props.history}/>
    }
}

export default connect()(SingleCursoCompradoContainer)