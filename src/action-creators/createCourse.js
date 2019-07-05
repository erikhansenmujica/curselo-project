import CREATE_COURSE from '../constants'
import db from '../../public/app'


export default createCourse = (course)=>{
    return{
        type:CREATE_COURSE,
        course,
    }
}

export default createCourse = ()=>{
    const myCourses = db.collection('cursos')
}
