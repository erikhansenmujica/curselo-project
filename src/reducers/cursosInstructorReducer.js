import {GET_CURSOS_INSTRUCTOR, GET_CURSO_INSTRUCTOR} from "../action-creators/constants"

const initialState = {
    all:[],
    course:{}
}

export default (state=initialState, action)=>{
    switch (action.type) {
        case GET_CURSOS_INSTRUCTOR: 
        return Object.assign({}, state, {all:action.cursos});
        case GET_CURSO_INSTRUCTOR: 
        return Object.assign({}, state, {course:action.curso});
    
        default:
           return state;
    }

}