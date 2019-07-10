import React from "react";
import HomeContainer from "../containers/HomeContainer";
import { Route } from "react-router-dom";
import CrearContainer from "../containers/instructor/CrearContainer";
import Cursos from "../containers/alumnos/Cursos";
import InstructorContainer from "../containers/instructor/InstructorContainer"
import NavBar from "./NavBar";

export default () => (
  <div>
    <NavBar />
    <Route path="/crear" component={CrearContainer} />
    <Route path="/cursos" component={Cursos} />
    <Route path= "/instructor" component={InstructorContainer} />
    <Route exact path="/" component={HomeContainer} />
  </div>
);
