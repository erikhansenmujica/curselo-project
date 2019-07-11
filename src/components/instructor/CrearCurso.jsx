import React from "react";

const styles = {
  button: {
    display: "flex",
    justifyContent: "space-around"
  },
  inputDescription: {
    height: "200px"
  },
  title: {
    textAlign: "center"
  },
  cards: {
    borderStyle: "solid",
    borderColor: "#7CE2EF"
  },
  colorTitle: {
    backgroundColor: "#8BE3EF"
  },
  position: {
    marginLeft: "25%",
    marginTop:"2%",
    width:"70%"
  }
};

export default ({
  handleChange,
  handleSubmit,
  handleUpload,
  handleSetFile
}) => (
  <div className="container" style={styles.position}>
  
    <form
      onSubmit={e => {
        handleSubmit(e);
        document
          .querySelectorAll(".form-control")
          .forEach(input => (input.value = ""));
      }}
    >
      <div className="card bg mb-3" style={styles.cards}>
        <div className="card-header">Titulo</div>
        <div className="card-body">
          <input
            type="text"
            name="titulo"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card bg mb-3" style={styles.cards}>
        <div className="card-header">Precio</div>
        <div className="card-body">
          <input
            name="precio"
            type="number"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card bg mb-3" style={styles.cards}>
        <div className="card-header">Anexos</div>
        <div className="card-body">
          <input
            type="text"
            name="anexos"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card bg mb-3" style={styles.cards}>
        <div className="card-header">Duracion</div>
        <div className="card-body">
          <input
            name="duracion"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card bg-light mb-3" style={styles.cards}>
        <div className="card-header">Descripcion</div>
        <div className="card-body">
          <textarea
            style={styles.inputDescription}
            name="descripcion"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="card bg-light mb-3" style={styles.cards}>
        <div className="card-header">Contenido</div>
        <div className="card-body">
          <textarea
            style={styles.inputDescription}
            name="contenido"
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </div>
      <div style={styles.button}>
        <button type="submit" className="btn btn-primary">
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          Crear Curso
        </button>
      </div>
      <br />
      <br />
    </form>
    <br />
    <br />
    <br />
    <br />
  </div>
);
