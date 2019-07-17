import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import cursosAlumnoReducer from "../reducers/cursosAlumnoReducer";
import cursosInstructorReducer from "../reducers/cursosInstructorReducer";
import createUserReducer from "../reducers/createUserReducer";

// Add firebase to reducers
export const rootReducer = combineReducers({
  alumnoCursos: cursosAlumnoReducer,
  instructorCursos: cursosInstructorReducer,
  creteUser: createUserReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
