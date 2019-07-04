import React from "react";
import Home from "../components/Home";
import { Route } from "react-router-dom";
import CrearContainer from "../containers/CrearContainer";

export default () => (
  <div>
    <Route path="/crear" component={CrearContainer} />
    <Route exact path="/" component={Home} />
  </div>
);
