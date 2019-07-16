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
import InstructorCursosContainer from "../containers/instructor/InstructorCursosContainer";
import CrearTemaContainer from "../containers/instructor/CrearTemaContainer";
import SubirArchivosContainer from "../containers/instructor/SubirArchivosContainer";
import SubirVideoContainer from "../containers/instructor/SubirVideoContainer";
import SubirTextoContainer from "../containers/instructor/SubirTextoContainer";

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
      path="/alumnos/cursos/:cursoId"
      component={SingleCursoAlumnoContainer}
    />
  </div>
);

const instructor = () => (
  <div>
    <SideBar />
  
    <Switch>
    <Route exact path="/instructor/" component={InstructorContainer} />
    <Route exact path="/instructor/cursos" component={InstructorCursosContainer}/>
    <Route path="/instructor/crear" component={CrearContainer} />
    <Route exact path="/instructor/cursos/tema" component={CrearTemaContainer} />
    <Route exact path="/instructor/cursos/tema/subirarchivos" component={SubirArchivosContainer} />
    <Route exact path="/instructor/cursos/tema/subirvideo" component={SubirVideoContainer} />
    <Route exact path="/instructor/cursos/tema/subirtexto" component={SubirTextoContainer} />
    <Route
      exact
      path="/instructor/cursos/:cursoId"
      component={SingleCursoInstructorContainer}
    />
    </Switch>
  </div>
);
