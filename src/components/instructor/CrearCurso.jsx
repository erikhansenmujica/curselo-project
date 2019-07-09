import React from "react";

const styles = {
  button: {
    marginLeft: "1%",
  },
  inputDescription: {
    height: "200px"
  },
  title: {
    textAlign: "center"
  }
};

export default ({ handleChange, handleSubmit, handleUpload, handleSetFile }) => (
  <div className="container">
    <h2 style={styles.title}>Carga tus conocimientos </h2>
    <br />
    <br />
    <form
      onSubmit={e => {
        handleSubmit(e);
        document
          .querySelectorAll(".form-control")
          .forEach(input => (input.value = ""));
      }}
    >
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          name="titulo"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <textarea
          style={styles.inputDescription}
          name="descripcion"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Contenido</label>
        <textarea
          style={styles.inputDescription}
          name="contenido"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Precio</label>
        <input
          name="precio"
          type="number"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Anexos</label>
        <input
          type="text"
          name="anexos"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Duración</label>
        <input
          name="duracion"
          type="text"
          className="form-control"
          onChange={handleChange}
        />

      </div>



      <button type="submit" className="btn btn-primary">
        Crear Curso
      </button>
      <button type="submit" className="btn btn-primary">
        Cancelar
      </button>
    </form>
      <form action="" onSubmit={handleUpload}>

        <label htmlFor='icon'>PDF File</label>
        <input type='file' name='pdf' accept='.pdf' onChange={handleSetFile}/>
        <button type='submit'>Upload PDF!</button>

      </form>
    <br />
    <br />
    <br />
    <br />
  </div>
);
