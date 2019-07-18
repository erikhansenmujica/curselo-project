import React from "react";
import { Link } from "react-router-dom"

const style = {
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly"
  },
  childs: {
    width: "18rem",
    marginTop:"1%",
    marginBottom:"1%"
  },
  linksColor:{
    color:"black",
    textDecoration:"none"
  }
};
export default ({ cursos }) => (
  <div style={style.container}>
    {cursos?
      cursos.map(curso => (
        <div key={curso.id}className="card" style={style.childs}>
          <Link to={`/alumnos/cursos/${curso.id}`}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLodVxcURCD_Z5FZqaBZtsKY9D6FKTt8Zp2Rurl1y7PC2TAeUGA"
            className="card-img-top"
            alt=""
          />
          </Link>
          <div className="card-body">
          <Link to={`/alumnos/cursos/${curso.id}`}>
            <h5 style={style.linksColor} className="card-title">{curso.name}</h5>
          </Link>
          <Link to={`/alumnos/cursos/${curso.id}`} >
            <p style={style.linksColor} className="card-text">
              {curso.description.length>120?curso.description.slice(0,120)+"...":curso.description} 
            </p>
          </Link>
            
            <Link to={`/alumnos/cursos/${curso.id}`} >
            <div className="btn btn-primary">
                View Details
            </div>
            </Link>
          </div>
        </div>
      )):<p>Buscando...</p>  }
  </div>
);
