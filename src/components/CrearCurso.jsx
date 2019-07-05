import React from "react";


const styles={
  button:{
    marginLeft: "1%"
  }
}


export default () => (
  
  <div className="container">
  <br/>
  <br/>
    <form>
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          name="titulo"
          className="form-control"
          placeholder="Aprendiendo Javascript"
        />
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <input
          name="descripcion"
          type="text"
          className="form-control"
          placeholder="descripcion"
        />
      </div>
      <div className="form-group">
        <label>Precio</label>
        <input
          name="precio"
          type="number"
          className="form-control"
          placeholder="numbers"
        />
      </div>
      <div className="form-group">
        <label>Duración</label>
        <input
          name="duracion"
          type="text"
          className="form-control"
          placeholder="00:00"
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
