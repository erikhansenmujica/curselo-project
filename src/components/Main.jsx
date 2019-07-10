import React from "react";
import HomeContainer from "../containers/HomeContainer";
import { Route, Switch } from "react-router-dom";
import CrearContainer from "../containers/instructor/CrearContainer";
import InstructorCursos from "../containers/instructor/InstructorCursos";
import InstructorContainer from "../containers/instructor/InstructorContainer";
import NavBar from "./NavBar";
import SingleCursoInstructorContainer from "../containers/instructor/SingleCursoInstructorContainer";
import SingleCursoAlumnoContainer from "../containers/SingleCursoAlumnoContainer"

export default () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/crear" component={CrearContainer} />
      <Route
        exact
        path="/cursos/instructor/:cursoId"
        component={SingleCursoInstructorContainer}
      />
      <Route
        exact
        path="/cursos/alumno/:cursoId"
        component={SingleCursoAlumnoContainer}
      />
      <Route path="/cursos" component={InstructorCursos} />
      <Route path="/instructor" component={InstructorContainer} />
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </div>
);
