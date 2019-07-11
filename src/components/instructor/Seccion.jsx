import React from "react";

const styles = {
  colores: {
    backgroundColor: "#BCD4DB",
    borderRadius: "10px"
  },
  content1: {
    display: "flex",
    justifyContent: "flex-end"
  },
  content2: {
    display: "flex",
    justifyContent: "center"
  }
};
export default ({ handleCrear, handleSubmit, handleSection }) => (
  <div>
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar-sticky" style={styles.colores}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <span data-feather="home" />
                Temas de Clase <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <form action="" onSubmit={handleSubmit}>
      <div className="container" style={styles.content}>
     
        <input
          className="form-control form-control-lg"
          type="text"
          name="texto"
          placeholder=".form-control-md"
          onChange={handleSection}
        />
        {/* <input
          className="form-control form-control-lg"
          type="file"
          name="archivo"
          placeholder=".form-control-md"
          onChange={handleCrear}

        />
        <input
          className="form-control form-control-lg"
          type="file"
          name="video"
          placeholder=".form-control-md"
          onChange={handleCrear}

        /> */}
      </div>
      <button type="submit">
        Agregar
      </button>
    </form>
  </div>
);
