import {GET_CURSOS_INSTRUCTOR} from "./constants"
import axios from "axios"

const ADD_CURSOS = (cursos)=>({
    type:GET_CURSOS_INSTRUCTOR,
    cursos
})


export const fetchCursosInstructor=(id)=>
(dispatch)=>
    axios.get(`https://curselo-dev.appspot.com/_ah/api/lms/v2/getMyCourses?ownerId=${id}`)
    .then((res)=> res.data)
    .then(cursos=>dispatch(ADD_CURSOS(cursos)))
