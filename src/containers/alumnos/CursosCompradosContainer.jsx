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
        if(!this.props.user) this.props.history.push("/alumnos/cursos")
        if(this.props.user)this.props.fetchCourses(auth.currentUser.uid)
    }

    componentDidUpdate(){
        if(!this.props.user) this.props.history.push("/alumnos/cursos")
    }

    render(){
        console.log(this.props.user)
        return(
            <CursosComprados cursos={this.props.cursos}/>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    fetchCourses:(id)=>dispatch(getMyPurchaseCourse(id))
})

const mapStateToProps = (state) => ({
    cursos:state.purchasedCourses.courses,
    user:state.creteUser.user.uid
})


export default connect(mapStateToProps, mapDispatchToProps)(CursosCompradosContainer)