import React from "react";
import Home from "../components/Home";
import { Route } from "react-router-dom";
import CrearContainer from "../containers/instructor/CrearContainer";
import InstructorCursos from "../containers/instructor/InstructorCursos";
import NavBar from './NavBar'

export default () => (
  <div>
    <NavBar />
  <div>
    <Route path="/crear" component={CrearContainer} />
    <Route path="/cursos" component={InstructorCursos} />
    <Route exact path="/" component={Home} />
  </div>
  </div>
);
