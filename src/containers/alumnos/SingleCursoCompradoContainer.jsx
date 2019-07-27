import React from "react"
import {connect} from "react-redux"
import SingleCursoComprado from "../../components/alumnos/SingleCursoComprado";

class SingleCursoCompradoContainer extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        if(!this.props.user) this.props.history.push("/alumnos/cursos")
      }
      componentDidUpdate(){
          if(!this.props.user) this.props.history.push("/alumnos/cursos")
          
      }

    render(){
        return <SingleCursoComprado cursoId={this.props.match.params.cursoId} history={this.props.history}/>
    }
}
const mapStateToProps = (state) => ({
    user:state.creteUser.user.uid
})
export default connect(mapStateToProps)(SingleCursoCompradoContainer)