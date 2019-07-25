import React from "react";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

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
export default ({ cursos, handleChangePage }) => (
  <div style={style.container}>
    {cursos ? (
      cursos.map(curso => (
        <div key={curso.id} className="card" style={style.childs}>
          <Link to={`/alumnos/cursos/${curso.id}`}>
            {curso.images ? <img alt="" className="card-img-top" src={curso.images.imagen1&&curso.images.imagen1.url}/> : <img alt="" className="card-img-top" src='https://www.grupomisol.com/wp-content/uploads/2014/11/no-imagen.jpg' />}
              {/* //la imagen posta entra por {curso.images.imagen1.url} */}
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
      <p>Buscando...</p>
    )}
        
  </div>
);
