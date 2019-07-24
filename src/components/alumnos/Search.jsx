import React from "react";
import { Link } from "react-router-dom";
const style = {
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly"
  },
  childs: {
    width: "18rem",
    marginTop: "1%",
    marginBottom: "1%"
  },
  linksColor: {
    color: "black",
    textDecoration: "none"
  }
};

export default ({ searchCourses }) => {
  return (
    <div style={style.container}>
      {searchCourses ? (
        searchCourses.map(curso => (
          <div key={curso.id} className="card" style={style.childs}>
            <Link to={`/alumnos/cursos/${curso.id}`}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUyfcgnFWzf2GBPS8kpRhpa01uVuyuN40ZxOWNz-WcMXvUBgtkg"
                className="card-img-top"
                alt=""
              />
            </Link>
            <div className="card-body">
              <Link to={`/alumnos/cursos/${curso.id}`}>
                <h5 style={style.linksColor} className="card-title">
                  {curso.name}
                </h5>
              </Link>
              <Link to={`/alumnos/cursos/${curso.id}`}>
                <p style={style.linksColor} className="card-text">
                  {curso.description.length > 120
                    ? curso.description.slice(0, 120) + "..."
                    : curso.description}
                </p>
              </Link>
              <Link to={`/alumnos/cursos/${curso.id}`}>
                <div className="btn btn-primary">View Details</div>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No hay cursos relacionados con ese nombre...</p>
      )}
    </div>
  );
};