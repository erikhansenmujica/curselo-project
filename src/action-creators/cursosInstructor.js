import {GET_CURSOS_INSTRUCTOR, GET_CURSO_INSTRUCTOR} from "./constants"
import axios from "axios"

const ADD_CURSOS = (cursos)=>({
    type:GET_CURSOS_INSTRUCTOR,
    cursos
})
const ADD_CURSO = (curso)=>({
    type:GET_CURSO_INSTRUCTOR,
    curso
})


export const fetchCursosInstructor=(id)=>
(dispatch)=>
    axios.get(`https://curselo-dev.appspot.com/_ah/api/lms/v2/getMyCourses?ownerId=${id}`)
    .then((res)=> res.data)
    .then(cursos=>dispatch(ADD_CURSOS(cursos)))

export const fetchCursoInstructor=(id)=>
(dispatch)=>
    axios.get(`https://curselo-dev.appspot.com/_ah/api/lms/v2/getCourse?courseId=${id}`)
    .then((res)=>res.data)
    .then(curso=>dispatch(ADD_CURSO(curso)))


export const createCourse = (curso)=>dispatch=>axios.post("https://curselo-dev.appspot.com/_ah/api/lms/v2/saveCourse", curso)
.then((res)=> res.data)
    .then(curso=>{
        console.log(curso)
       dispatch(ADD_CURSO(curso))
        return curso
    })
