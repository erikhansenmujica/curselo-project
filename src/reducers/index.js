import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import cursosAlumnoReducer from "../reducers/cursosAlumnoReducer";
import cursosInstructorReducer from "../reducers/cursosInstructorReducer";
import createUserReducer from "../reducers/createUserReducer";
<<<<<<< HEAD
import searchReducer from "../reducers/searchReducer"
//import updateCourseReducer from "../reducers/updateCourseReducer"
=======
import searchReducer from "../reducers/searchReducer";
import purchaseReducer from "../reducers/purchaseReducer"
>>>>>>> 1e8dfbf79ca990dbfc115c20fca630c44fd7a5f1

// Add firebase to reducers
export const rootReducer = combineReducers({
  alumnoCursos: cursosAlumnoReducer,
  instructorCursos: cursosInstructorReducer,
  creteUser: createUserReducer,
  purchasedCourses: purchaseReducer,
  searchCourses: searchReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
