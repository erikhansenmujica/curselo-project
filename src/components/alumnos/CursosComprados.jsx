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

export default ({cursos}) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My purchased courses!</h1>
      <div style={style.container}>
        {cursos ? (
          cursos.map(curso => (
            <div key={curso.id} className="card" style={style.childs}>
              <Link to={`/alumnos/cursos/comprados/${curso.id}`}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUyfcgnFWzf2GBPS8kpRhpa01uVuyuN40ZxOWNz-WcMXvUBgtkg"
                  className="card-img-top"
                  alt=""
                />
              </Link>
              <div className="card-body">
                <Link to={`/alumnos/cursos/comprados/${curso.id}`}>
                  <h5 style={style.linksColor} className="card-title">
                    {curso.name}
                  </h5>
                </Link>
                <Link to={`/alumnos/cursos/comprados/${curso.id}`}>
                  <p style={style.linksColor} className="card-text">
                    {curso.description.length > 120
                      ? curso.description.slice(0, 120) + "..."
                      : curso.description}
                  </p>
                </Link>

                <Link to={`/alumnos/cursos/comprados/${curso.id}`}>
                  <div className="btn btn-primary">View Content</div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Buscando...</p>
        )}
      </div>
    </div>
  );
};
