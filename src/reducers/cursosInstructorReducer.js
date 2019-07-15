import {GET_CURSOS_INSTRUCTOR} from "../action-creators/constants"

const initialState = {
    all:[],
    course:{}
}

export default (state=initialState, action)=>{
    switch (action.type) {
        case GET_CURSOS_INSTRUCTOR: 
        return Object.assign({}, state, {all:action.cursos});
    
        default:
           return state;
    }

}