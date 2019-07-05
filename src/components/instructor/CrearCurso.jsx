import React from "react";


const styles={
  button:{
    marginLeft: "1%"
  }
}


export default ({handleChange, handleSubmit}) => (
  
  <div className="container">
  <br/>
  <br/>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          name="titulo"
          className="form-control"
          placeholder="Aprendiendo Javascript"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <input
          name="descripcion"
          type="text"
          className="form-control"
          placeholder="descripcion"
          onChange={handleChange}

        />
      </div>
      <div className="form-group">
        <label>Precio</label>
        <input
          name="precio"
          type="number"
          className="form-control"
          placeholder="numbers"
          onChange={handleChange}

        />
      </div>
      <div className="form-group">
        <label>Duración</label>
        <input
          name="duracion"
          type="text"
          className="form-control"
          placeholder="00:00"
          onChange={handleChange}

        />
      </div>
      <button type="submit" className="btn btn-primary">
        Crear Curso
      </button>
      <button style={styles.button} type="submit" className="btn btn-primary">
        Cancelar
      </button>
    </form>
  </div>
);
