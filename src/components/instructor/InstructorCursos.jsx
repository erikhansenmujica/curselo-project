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
  center: {
    textAlign: "center", 
    marginTop:"35px",
    fontSize:"46px"
  }
};
export default ({ cursos,deleteButton }) => (
  <div>
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
              <h5 className="card-title">{curso.name}</h5>
              <p className="card-text">
                {curso.description.length > 120
                  ? curso.description.slice(0, 120) + "..."
                  : curso.description}
              </p>

              <Link to={`/instructor/cursos/${curso.id}`}>
                <div className="btn btn-primary">Go somewhere</div>
              </Link>
              <button onClick={()=>deleteButton(curso.id)}
              type="button"
              className="btn btn-danger"
              style={{ float: "right" }}
            >
              <i className="fas fa-trash-alt" />
            </button>
            </div>
          </div>
        ))
      ) : (
        <div className="container" style={style.center}>
          <p>Ups!...Todavia no tiene ningun curso creado</p>
          <Link to="/instructor/crear">
            <button className="btn btn-primary" type="button">
              Crear Curso
            </button>
          </Link>
        </div>
      )}
    </div>
  </div>
);
