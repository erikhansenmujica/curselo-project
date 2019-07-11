import React from "react";
import HomeContainer from "../containers/HomeContainer";
import { Route, Switch } from "react-router-dom";
import CrearContainer from "../containers/instructor/CrearContainer";
import Cursos from "../containers/alumnos/Cursos";
import InstructorContainer from "../containers/instructor/InstructorContainer";
import NavBar from "./NavBar";
import SingleCursoInstructorContainer from "../containers/instructor/SingleCursoInstructorContainer";
import SingleCursoAlumnoContainer from "../containers/alumnos/SingleCursoAlumnoContainer";
import InstructorCursosContainer from "../containers/instructor/InstructorCursosContainer";

export default () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/crear" component={CrearContainer} />
      <Route path="/cursos/instructor" component={InstructorCursosContainer} />
      <Route
        path="/cursos/alumno/:cursoId"
        component={SingleCursoAlumnoContainer}
      />
      <Route
        exact
        path="/cursos/instructor/:cursoId"
        component={SingleCursoInstructorContainer}
      />
      <Route path="/cursos" component={Cursos} />
      <Route path="/instructor" component={InstructorContainer} />
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </div>
);