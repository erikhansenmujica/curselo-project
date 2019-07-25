import React from "react"
import CursosComprados from "../../components/alumnos/CursosComprados"
import  {connect} from "react-redux";
import {auth} from "../../config/app"
import {getMyPurchaseCourse} from "../../action-creators/getMyPurchaseCourse"
class CursosCompradosContainer extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCourses(auth.currentUser.uid)
    }

    render(){
        return(
            <CursosComprados cursos={this.props.cursos}/>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    fetchCourses:(id)=>dispatch(getMyPurchaseCourse(id))
})

const mapStateToProps = (state) => ({
    cursos:state.purchasedCourses.courses
})


export default connect(mapStateToProps, mapDispatchToProps)(CursosCompradosContainer)