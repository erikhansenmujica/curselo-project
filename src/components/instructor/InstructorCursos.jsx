import React from "react";
//import { Link } from "react-router-dom"

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
  }
};
export default ({ cursos }) => (
  
  <div>
    {console.log("cursos", cursos)}
    <h1>ENTRO?</h1>
    <div style={style.container}>
      {cursos ? (
        cursos.map(curso => (
          <div key={curso.id} className="card" style={style.childs}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUyfcgnFWzf2GBPS8kpRhpa01uVuyuN40ZxOWNz-WcMXvUBgtkg"
              className="card-img-top"
              alt=""
            />
            <div className="card-body">
              <h5 className="card-title">{curso.titulo}</h5>
              <p className="card-text">
                {curso.descripcion.length > 120
                  ? curso.descripcion.slice(0, 120) + "..."
                  : curso.descripcion}
              </p>

              {/* <Link to={`/cursos/alumno/${curso.id}`} > */}
              <div className="btn btn-primary">Go somewhere</div>
              {/* </Link> */}
            </div>
          </div>
        ))
      ) : (
        <p>Buscando...</p>
      )}
    </div>
  </div>
);
