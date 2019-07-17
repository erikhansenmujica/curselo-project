import {CREATE_COURSE} from './constants'

export default createCourse = (course)=>{
    return{
        type:CREATE_COURSE,
        course,
    }
}

// export default createCourse = (state)=>{
//     db.collection('cursos').add({
//         titulo:state.titulo,
//         descripcion:state.descripcion,


//     })
// }
