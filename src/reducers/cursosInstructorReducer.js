import {GET_CURSOS_INSTRUCTOR, GET_CURSO_INSTRUCTOR, GET_SECCIONES, GET_TOPICS, FORGET_COURSE} from "../action-creators/constants"

const initialState = {
    all:[],
    course:{},
    secciones:[],
    topics:[]
}

export default (state=initialState, action)=>{
    switch (action.type) {
        case GET_CURSOS_INSTRUCTOR: 
        return Object.assign({}, state, {all:action.cursos});
        case GET_CURSO_INSTRUCTOR: 
        return Object.assign({}, state, {course:action.curso});
        case GET_SECCIONES: 
        return Object.assign({}, state, {secciones:action.secciones});
        case GET_TOPICS: 
        return Object.assign({}, state, {topics:action.topics});
        case FORGET_COURSE: 
        return Object.assign({}, state, {course:{}, secciones:[], topics:[]});
    
        default:
           return state;
    }

}