import { combineReducers } from "redux";
import cursosReducer from "./cursos"

export default combineReducers( {
        cursos:cursosReducer
})