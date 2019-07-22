import Axios from "axios";


export const getMyPurchaseCourse = studentId => dispatch =>
  Axios.get(
    `https://curselo-dev.appspot.com/_ah/api/lms/v2/getMyPurchasedCourses?studentId=${studentId}`
  ).then((id)=>id);
