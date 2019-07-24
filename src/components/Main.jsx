import React from "react";
import HomeContainer from "../containers/HomeContainer";
import { Route, Switch } from "react-router-dom";
import CrearContainer from "../containers/instructor/CrearContainer";
import Cursos from "../containers/alumnos/Cursos";
import InstructorContainer from "../containers/instructor/InstructorContainer";
import NavbarContainer from "../containers/NavbarContainer";
import SingleCursoInstructorContainer from "../containers/instructor/SingleCursoInstructorContainer";
import SingleCursoAlumnoContainer from "../containers/alumnos/SingleCursoAlumnoContainer";
import SideBar from "../components/instructor/SideBar";
import InstructorCursosContainer from "../containers/instructor/InstructorCursosContainer";
import CrearTemaContainer from "../containers/instructor/CrearTemaContainer";
import SignUpContainer from "../containers/SignUpContainer";
import SubirVideoContainer from "../containers/instructor/SubirVideoContainer";
import ComprarContainer from "../containers/alumnos/ComprarContainer";
import SearchContainer from "../containers/alumnos/SearchContainer";
import Log from "./Log";
import PerfilAlumno from "./instructor/PerfilAlumno";
import EditarTemaContainer from "../containers/instructor/EditarTemaContainer"
import Alumnos from "./instructor/VistaAlumnos";

export default props => (
  <div>
    <Switch>
      {window.location.href.includes("instructor") &&
        (props.loading ? (
          <Route path="/instructor" component={instructor} />
        ) : (
          <Route
            render={() => <Log logear={props.logear} history={props.history} />}
          />
        ))}
        
      <Route
        path="/alumnos"
        render={() => <Alumnos history={props.history} />}
      />

      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </div>
);

const Alumnos = props => (
  <div>
    <NavbarContainer history={props.history} />
    <Switch>
      <Route
        exact
        path="/alumnos/cursos/:cursoId/comprar"
        component={ComprarContainer}
      />
      <Route exact path="/alumnos/signUp" component={SignUpContainer} />
      <Route exact path="/alumnos/cursos" component={Cursos} />
      <Route exact path="/alumnos/cursos/search" component={SearchContainer} />
      <Route
        exact
        path="/alumnos/cursos/:cursoId"
        component={SingleCursoAlumnoContainer}
      />
    </Switch>
  </div>
);

const instructor = () => (
  <div>
    <SideBar />

    <div
      style={{
        marginLeft: "200px",
        marginRight: "2%",
        marginTop: "2%"
      }}
    >
      <Switch>
        <Route exact path="/instructor" component={InstructorContainer} />
        <Route
          exact
          path="/instructor/cursos"
          component={InstructorCursosContainer}
        />
        <Route path="/instructor/crear" component={CrearContainer} />
        <Route
          exact
          path="/instructor/cursos/:cursoId/section/:sectionId"
          component={CrearTemaContainer}
        />

        <Route
          exact
          path="/instructor/cursos/:courseId/section/:secId/topic/:topicId"
          component={EditarTemaContainer}
        />

        <Route
          exact
          path="/instructor/cursos/:cursoId/section/:sectionId/subirvideo"
          component={SubirVideoContainer}
        />

        <Route
          exact
          path="/instructor/cursos/:cursoId"
          component={SingleCursoInstructorContainer}
        />

        <Route path="/instructor/listaalumnos" component={Alumnos} />
        <Route exact path="/instructor/listaalumnos" component={Alumnos} />
        <Route path="/instructor/alumno" component={PerfilAlumno} />
        <Route exact path="/instructor/alumno" component={PerfilAlumno} />
      </Switch>
    </div>
  </div>
);
