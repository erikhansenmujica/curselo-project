import React from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
export default ({ curso, createChat }) => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      backgroundColor: "#F3F6FC"
    }}
  >
    <div
      style={{
        borderRadius: "4px",
        backgroundColor: "white",
        height: "60vh",
        width: "80vw",
        marginLeft: "10%",
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#E4E9F4",      
      }}
    >
    <div style={{
        display: "flex",
        flexDirection: "row"
    }}>
      <div
        style={{
          float: "left"
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFiS3k5Xqg9CFuoghOVJPtpO8Wgz4QpaVbx0Ei5dOJoBWKoMY"
          alt=""
          height="300vh"
        />
      </div>
      <div
        style={{
          marginTop: "5%",
          float: "left"
        }}
      >
        {curso && <h3>{curso.name}</h3>}
        {curso && <p>{curso.description}</p>}
=======
const styles = {
  img: {
    marginTop: "15%"
  },
  img2:{
    marginTop:"15%",
    width:"80%"
  },
  budget: {
    fontSize: "28px",
    textAlign: "center"
  },
  button:{
    display:"block",
    margin:"auto"
  },
  button2: {
    marginLeft:"2%"
  },
  title:{
    fontSize:"28px",
    textAlign:"center",
    fontWeight: "bold"
  }
};
export default ({ curso, handleClick, isLoggedIn, studentCourse }) => (
  <div>
    <div className="card mb-3 container">
      <div className="row no-gutters">
        <div className="col-md-4">
          {curso.images ? (
            <img
              style={styles.img}
              src={curso.images.imagen1 && curso.images.imagen1.url}
              className="card-img"
              alt="..."
            />
          ) : (
            <img
              style={styles.img2}
              src="https://www.grupomisol.com/wp-content/uploads/2014/11/no-imagen.jpg"
              className="card-img"
              alt="..."
            />
          )}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title" style={styles.title}>{curso.name}</h5>
            <p className="card-text">{curso.description}</p>
          </div>
        </div>
>>>>>>> 8cae383ac1b976d6fb15d9e43defb8a9b24dba45
      </div>
      {isLoggedIn.uid && (studentCourse[0] && studentCourse[0].id) ? (
        <div className="alert alert-success" role="alert" style={styles.budget}>
          Comprado!
        </div>
      ) : (
        <Link to={`/alumnos/cursos/${curso.id}/comprar`}>
          <div>
            <button
              type="button"
              className="btn btn-outline-primary btn-lg"
              onClick={handleClick}
              style={styles.button}
            >
              Comprar: USD {curso.price}
            </button>
          </div>
        </Link>
      )}
    </div>
<<<<<<< HEAD
   <div style={{marginLeft: "10%"}}>
      <button type="button" className="btn btn-outline-secondary btn-lg">Comprar: U$D{curso.price}</button>
   </div>

   <div style={{
     float: "right", 
     marginRight: "10%"}}>
      <button onClick={createChat} type="button" className="btn btn-outline-secondary btn-lg">Iniciar Chat con Instructor</button>
   </div>


=======
    <Link to="/alumnos/cursos">
      <div style={styles.button2}>
        <button type="button" class="btn btn-outline-dark">
          Volver Atras
        </button>
      </div>
    </Link>
>>>>>>> 8cae383ac1b976d6fb15d9e43defb8a9b24dba45
  </div>
);
