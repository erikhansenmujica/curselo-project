import React from "react";
import { Link } from "react-router-dom";

const styles = {
  img: {
    size: "100px",
    marginTop: "5%"
    // width:"45%"
  }
};
export default ({
  curso,
  purchaseCourse,
  handleClick,
  isLoggedIn,
  handlePurchase,
  studentCourse
}) => (
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
        borderColor: "#E4E9F4"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div
          style={{
            float: "left"
          }}
        >
          {curso.images ? (
            <img
              alt=""
              style={styles.img}
              className="rounded float-left"
              src={curso.images.imagen1 && curso.images.imagen1.url}
            />
          ) : (
            <img
              alt=""
              style={styles.img}
              className="rounded float-left"
              src="https://www.grupomisol.com/wp-content/uploads/2014/11/no-imagen.jpg"
            />
          )}
        </div>
        <div
          style={{
            marginTop: "5%",
            float: "left"
          }}
        >
          {curso && <h3>{curso.name}</h3>}
          {curso && <p>{curso.description}</p>}
        </div>
      </div>
    </div>

    {isLoggedIn.uid && (studentCourse[0] && studentCourse[0].id) ? (
      <div className="container">
        <h3>Comprado!</h3>
      </div>
    ) : (
      <Link to={`/alumnos/cursos/${curso.id}/comprar`}>
        <div style={{ marginLeft: "40%", marginTop: "3%" }}>
          <button
            type="button"
            className="btn btn-outline-primary btn-lg"
            onClick={handleClick}
          >
            Comprar: USD {curso.price}
          </button>
        </div>
      </Link>
    )}
  </div>
);
