import React, {Component} from 'react'
import SingleCursoInstructor from "../../components/instructor/SingleCursoInstructor"
import {firebase} from "../../config/app"

export default class SingleCursoInstructorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            cursoId : ""
        }
    }


render() {
    return( 
    <SingleCursoInstructor />)
}
}