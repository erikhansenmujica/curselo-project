import {ADD_CURSOS} from '../action-creators/constants'

const initialState ={
    todos: []
}

export default (state=initialState, action) =>{
    switch (action.type) {
        case ADD_CURSOS: {
            return Object.assign({}, state, {
                todos : action.cursos
            })
        }
       
        default:
            return state;
    }
}