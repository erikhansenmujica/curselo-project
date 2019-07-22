import React from "react";
import { Link } from "react-router-dom";

export default ({ curso, purchaseCourse, handleClick, isLoggedIn, handlePurchase }) => (
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
        </div>
      </div>
    </div>

    {purchaseCourse.course.data && isLoggedIn ? (
      <div className="container">
        <h3>Comprado!</h3>
      </div>
    ) : (
      <Link to={`/alumnos/cursos/${curso.id}/comprar`}>
        <div style={{ marginLeft: "40%", marginTop: "3%" }}>
          <button type="button" className="btn btn-outline-primary btn-lg" onClick={handleClick}>
            Comprar: USD {curso.price}
          </button>
        </div>
      </Link>
    )}
  </div>
);
