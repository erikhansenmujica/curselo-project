import React from "react";
import HomeContainer from "../containers/HomeContainer";
import { Route, Switch } from "react-router-dom";
import CrearContainer from "../containers/instructor/CrearContainer";
import Cursos from "../containers/alumnos/Cursos";
import InstructorContainer from "../containers/instructor/InstructorContainer";
import NavBar from "./NavBar";
import SingleCursoInstructorContainer from "../containers/instructor/SingleCursoInstructorContainer";
import SingleCursoAlumnoContainer from "../containers/alumnos/SingleCursoAlumnoContainer";
import SideBar from "../components/instructor/SideBar";

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomeContainer} />

      <Route extact path="/instructor" component={instructor} />
      <Route path="/alumnos" component={alumnos} />
    </Switch>
  </div>
);

const alumnos = () => (
  <div>
    <NavBar />
    <Route exact path="/alumnos/cursos" component={Cursos} />
    <Route
      exact
      path="/cursos/alumno/:cursoId"
      component={SingleCursoAlumnoContainer}
    />
  </div>
);

const instructor = () => (
  <div>
    <SideBar />
    <Route path="/instructor/" component={InstructorContainer} />
    <Route path="/crear" component={CrearContainer} />
    <Route
      exact
      path="/cursos/instructor/:cursoId"
      component={SingleCursoInstructorContainer}
    />
  </div>
);
